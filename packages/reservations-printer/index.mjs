import fetch from 'cross-fetch'
import open from 'open'
import pdf from 'html-pdf'
import puppeteer from 'puppeteer'

import { file } from 'tmp-promise'
import { parse } from 'csv-parse'
import { writeFile } from 'fs/promises'

const getCsvUrl = (documentId, sheetId) =>
  `https://docs.google.com/spreadsheets/d/${documentId}/export?format=csv&gid=${sheetId}`

const getCsvStream = async url => {
  const res = await fetch(url)
  if (res.ok && res.status >= 200 && res.status < 300) {
    return res.body
  }

  throw new Error(`Failed to initiate CSV stream ${res.status}`)
}

const parseDocumentId = absUrl => {
  const url = new URL(absUrl)
  const documentId = url.pathname.split('/')[3]
  const [, sheetId] = url.hash
    .substring(1)
    .split('&')
    .map(item => item.split('='))
    .find(([key]) => key === 'gid')
  return { documentId, sheetId }
}

const readSheet = async src =>
  await new Promise((resolve, reject) => {
    const records = []
    const parser = parse()
    parser.on('readable', () => {
      let record
      do {
        record = parser.read()
        if (record) {
          records.push(record)
        }
      } while (record)
    })
    parser.on('error', reject)
    parser.on('end', () => resolve(records))
    src.pipe(parser)
  })

const name = 'Vaše jméno'
const count = 'Počet rezervací'
const locationSpec = 'Kde chcete sedět?'
const noteHeader = 'Poznámka'

const parseValue = (header, value) => {
  if (header === count) {
    return parseInt(value, 10)
  }
  return value
}

const parseRecords = records => {
  const headers = records.shift()
  return records.map(record =>
    record.reduce(
      (aggr, value, column) =>
        Object.assign(aggr, {
          [headers[column]]: parseValue(headers[column], value)
        }),
      {}
    )
  )
}

const duplicateReservation = reservation =>
  reservation[count]
    ? Array(reservation[count]).fill(reservation, 0, reservation[count])
    : []

const addIndexes = (res, index, src) => ({
  ...res,
  ordinal: index + 1,
  total: src.length
})

const mapDataToDoc = data =>
  data
    .reduce(
      (aggr, reservation) => [
        ...aggr,
        ...duplicateReservation(reservation).map(addIndexes)
      ],
      []
    )
    .map(
      reservation => `
    <div class="person">
      <div class="text">
        <div><div>${reservation[name]}</div>${
        reservation.total > 1
          ? ` <span class="numbers">(${reservation.ordinal}/${reservation.total})</span>`
          : ''
      }</div>
        <div class="info">
          <span class="locationSpec">"${reservation[locationSpec]}
          ${
            reservation[noteHeader] ? `, ${reservation[noteHeader]}` : ''
          }"</span>
        </div>
      </div>
    </div>`
    )
    .join('\n')

const style = `
  html, body {
    font-family: 'HK Blocker';
    font-size: 1.75rem;
    height: 100%;
    margin: 0 auto;
    text-transform: uppercase;
    width: 98%;
  }
  .person {
    display: table;
    height: 50%;
    width: 100%;
  }
  .text {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .locationSpec, .numbers, .note, .info {
    color: #999;
    font-size: 0.75rem;
    line-height: 100%;
  }
`

const createDocument = data => {
  return `<!DOCTYPE html><html><head><style>${style}</style></head><body>${mapDataToDoc(
    data
  )}</body></html>`
}

const createPdf = async (browser, doc, dest) => {
  const page = await browser.newPage();
  await page.setContent(doc)
  const pdf = await page.pdf({ format: 'A4' });
  await writeFile(dest, pdf)
}

const main = async documentUrl => {
  const { documentId, sheetId } = parseDocumentId(documentUrl)
  const url = getCsvUrl(documentId, sheetId)
  const src = await getCsvStream(url)
  const records = await readSheet(src)
  const data = parseRecords(records)
  const dest = await file({ postfix: 'print.pdf' })
  const html = createDocument(data)
  const browser = await puppeteer.launch({ headless: true })
  await createPdf(browser, html, dest.path)
  await open(dest.path, { wait: true })
  console.log(dest.path)
  //await dest.cleanup()
}

await main(process.argv[2])
