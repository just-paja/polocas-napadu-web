import { createGenerateClassName } from '@material-ui/core/styles'
import { SheetsRegistry } from 'jss'
import { siteTheme } from './mui'

function createPageContext () {
  return {
    generateClassName: createGenerateClassName(),
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    theme: siteTheme
  }
}

let pageContext

export function getPageContext () {
  if (!process.browser) {
    return createPageContext()
  }
  if (!pageContext) {
    pageContext = createPageContext()
  }

  return pageContext
}
