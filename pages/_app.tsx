import { AppContext } from 'next/app'
import * as React from 'react'

import '../styles/index.css'

export interface Context extends AppContext {
  pageProps: never
}

const MyApp: React.FC<Context> = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
