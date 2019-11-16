import React from 'react'
import MainLayout from '~/layouts/main'

import { Button } from 'reactstrap'
import Link from 'next/link'

const Index = () => (
  <MainLayout>
    <h1 className="text-center">Welcome to sadbang</h1>
    <div className="text-center">
      <Link href="/about/index">
        <Button color="link">Visit our about page</Button>
      </Link>
    </div>
  </MainLayout>
)

export default Index
