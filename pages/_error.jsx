import React from 'react'
import MainLayout from '~/layouts/main'

import { Button } from 'reactstrap'
import Link from 'next/link'

function Error({ statusCode }) {
  return (
    <MainLayout>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
        <Link href="/index">
          <Button color="link">Go home</Button>
        </Link>
    </MainLayout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
