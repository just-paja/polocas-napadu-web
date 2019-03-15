import { createMuiTheme } from '@material-ui/core/styles'

export const siteTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'times' // @TODO: Use font from identity manual
    ]
  }
})
