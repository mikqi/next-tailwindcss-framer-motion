import { AppContext } from 'next/app'
import * as React from 'react'

import '../styles/index.css'

export interface Context extends AppContext {
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Context) => (
  <Component {...pageProps} />
)

export default MyApp
