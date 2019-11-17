import React from 'react'
import Head from 'next/head';

import Header from '~/components/header'

import "~/styles/styles.scss"

const MainLayout = props => (
  <>
    <Head>
      <link rel="shortcut icon" href="/static/favicon.png" />
    </Head>
    <div className="overflow-hidden" style={{ maxHeight: '100vh' }}>
      <Header/>
      <div className="overflow-auto" style={{ maxHeight: '100vh' }}>
        {props.children}
      </div>
    </div>
  </>
)

export default MainLayout
