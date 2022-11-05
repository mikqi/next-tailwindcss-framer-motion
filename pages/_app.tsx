import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
// import nextI18NextConfig from '../next-i18next.config.js'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default appWithTranslation(App)
