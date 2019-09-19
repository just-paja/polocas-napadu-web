import Document, { Html, Head, Main, NextScript } from 'next/document'

import { lngFromReq } from 'next-i18next/dist/commonjs/utils'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const lng = lngFromReq(ctx.req)
    return { ...initialProps, lng }
  }

  render () {
    const { lng } = this.props
    return (
      <Html lang={lng}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
