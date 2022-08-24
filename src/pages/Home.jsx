import React from 'react';
import { PageLayout } from '../layout'
import { Projects, Teams } from '../components/ui'
import Membersay from '../components/Memebersay';
import Blog from '../components/Blog';
import Aboutus from '../components/Aboutus';
import Newsletter from '../components/Newsletter';
function Home() {
  return (
    <PageLayout>
      <main>
        <Aboutus/>
        <Teams />
        <Projects />
        <Membersay/>
        <Blog/>
        <Newsletter/>
      </main>
    </PageLayout>
  )
}

export default Home
