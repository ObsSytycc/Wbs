import React from 'react'

import { PageLayout } from '../layout'
import { Projects, Teams } from '../components/ui'

function Home() {
  return (
    <PageLayout>
      <main>
        <Teams />
        <Projects />
      </main>
    </PageLayout>
  )
}

export default Home