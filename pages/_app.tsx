import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Normalize  } from 'styled-normalize'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   ChannelIO('boot', {
  //     "pluginKey": "314bd9cb-b5a4-47e6-93c4-e627b208e95f" // fill your plugin key
  //   });
  // }, []);
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