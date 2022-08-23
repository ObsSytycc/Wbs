import React, { useState } from 'react'
import { SectionHeader } from '../../../common'

import '../styles/projects.css'
import { projectList } from '../../../../data'
import ProjectList from './ProjectList'

const Projects = () => {
  const [projects, setProjects] = useState(projectList)

  return (
    <section className="projects">
      <div className="container">
        <SectionHeader 
          title="Our Projects"
          text="Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"
        />
        <section className="project-content">
          <ProjectList list={projects} />
        </section>
      </div>
    </section>
  )
}

export default Projects