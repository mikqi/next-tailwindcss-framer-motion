import * as React from 'react'
import { AppContext } from 'next/app'
import '../styles/index.css'

export interface Context extends AppContext {
  pageProps: any
}

const MyApp: React.FC<Context> = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
