import React from 'react'
import Router from 'next/router'
import 'src/styles/iosevka.css'
import 'src/styles/global.css'
import { AppProps } from 'next/app'
import reloadTwitterScript from 'src/lib/reloadTwitterScript'

Router.events.on('routeChangeStart', () => {
  reloadTwitterScript()
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
