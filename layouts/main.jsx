import React from 'react'
import Head from 'next/head';

import Header from '../components/header'

import { Container } from 'reactstrap'

import "~/styles/styles.scss"

const MainLayout = props => (
  <>
    <Head>
      <link rel="shortcut icon" href="/static/favicon.png" />
    </Head>
    <Header/>
    <Container className="pt-3">
      {props.children}
    </Container>
  </>
)

export default MainLayout
