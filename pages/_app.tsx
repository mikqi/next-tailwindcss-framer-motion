import '../styles/index.css'

export interface Props {
  Component: React.ElementType;
  pageProps: unknown;
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
