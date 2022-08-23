import React from 'react'

import ProjectsCard from './ProjectsCard'

const ProjectList = ({ list = [] }) => {
  return (
    <section className="project-list">
      {
        list.map((project, indx) => {
          const { name, details, path } = project;

          return (
            <ProjectsCard 
              name={name}
              details={details}
              path={path}
            />
          )
        })
      }
    </section>
  )
}

export default ProjectList