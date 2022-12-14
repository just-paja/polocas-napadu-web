import React from 'react'
import styles from './ShowList.module.scss'

import { gql } from '@apollo/client'
import { Heading, Main, Section } from '@polocas-napadu/ui/content.mjs'
import { Link } from 'react-router-dom'
import { withQuery } from '@polocas-napadu/ui/apollo.mjs'
import { useTranslation } from 'react-i18next'
import {
  ShowStart,
  ShowLocation,
  ShowFormat,
} from '@polocas-napadu/ui/shows.mjs'

const GET_SHOWS = gql`
  query ShowList {
    showList(future: true, useInspirations: true) {
      id
      name
      start
      end
      showType {
        name
        slug
      }
      location {
        name
      }
    }
  }
`

export const ShowList = withQuery(({ data: { showList } }) => {
  const { t } = useTranslation()
  return (
    <Main>
      <div>
        <Heading>{t('inspireShow')}</Heading>
        <ul className={styles.showList}>
          {showList.map(show => (
            <Section key={show.id} component="li">
              <Heading>
                <Link to={`/${show.id}`}>{show.name}</Link>
              </Heading>
              <div>
                <ShowStart show={show} />
              </div>
              <div>
                <ShowLocation show={show} />
              </div>
              <div>
                <ShowFormat show={show} />
              </div>
            </Section>
          ))}
        </ul>
      </div>
    </Main>
  )
}, GET_SHOWS)
