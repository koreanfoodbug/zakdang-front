import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Normalize  } from 'styled-normalize'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Head>
        <title>사유</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Normalize />
      <Component {...pageProps} />
    </>
  )
}
