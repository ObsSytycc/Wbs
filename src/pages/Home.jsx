import React from 'react';
import { PageLayout } from '../layout'
import { Projects, Teams } from '../components/ui'
import Membersay from '../components/Memebersay';
import Blog from '../components/Blog';
function Home() {
  return (
    <PageLayout>
      <main>
        <Teams />
        <Projects />
        <Membersay/>
        <Blog/>
      </main>
    </PageLayout>
  )
}

export default Home
