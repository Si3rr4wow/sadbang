import React from 'react'
import MainLayout from '~/layouts/main'

import { Button } from 'reactstrap'
import Link from 'next/link'

const About = () => (
  <MainLayout>
    <p>
      I bought this domain name one day because I thought it was funny.
    </p>
    <p>
      This app uses React and server-side rendering (powered by Next.js) to to deliver a smooth, single page application experience.
    </p>
    <p>I hope you enjoyed your visit, please come back soon 🙋‍♂️</p>
    <Link href="/index">
      <Button color="link">Go home</Button>
    </Link>
  </MainLayout>
)

export default About
