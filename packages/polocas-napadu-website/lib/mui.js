import { createMuiTheme } from '@material-ui/core/styles'
import { darken } from '@material-ui/core/styles/colorManipulator'

const baseFontSize = 14
const baseLineHeight = 1.2
const baseLine = baseFontSize * baseLineHeight

const funGreen = '#007120'
const coconutCream = '#fcfaed'
const blackOlive = '#253017'
const riptide = '#87e1d1'

const heading = {
  fontFamily: 'HK Blocker Heavy',
  textTransform: 'uppercase'
}

const tonalOffset = 0.2

function calculateGrey (base) {
  const color = {
    50: base
  }
  let prevColor = base
  for (let i = 1; i <= 9; i++) {
    color[i * 100] = darken(prevColor, tonalOffset)
    prevColor = color[i * 100]
  }
  return color
}

export const siteTheme = createMuiTheme({
  palette: {
    background: {
      default: coconutCream,
      inverse: riptide,
      secondary: blackOlive
    },
    primary: {
      500: funGreen
    },
    secondary: {
      main: riptide
    },
    grey: calculateGrey(coconutCream),
    text: {
      primary: blackOlive,
      inverse: coconutCream
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Roboto' // @TODO: Use font from identity manual
    ],
    fontSize: baseFontSize,
    h1: {
      ...heading,
      fontSize: baseFontSize * 4,
      marginTop: baseLine * 2
    },
    h2: {
      ...heading,
      fontSize: baseFontSize * 3,
      marginTop: baseLine * 1.5
    },
    h3: {
      ...heading,
      fontSize: baseFontSize * 2,
      marginTop: baseLine
    }
  }
})
