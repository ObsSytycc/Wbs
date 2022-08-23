import React from 'react'
import TeamCard from './TeamCard';

const TeamList = ({ list = [] }) => {
  return (
    <section className="team-list">
      {
        list.map((item, indx) => {
          const { name, desc, logo, url } = item;

          return (
            <TeamCard 
              key={indx + 1}
              name={name}
              description={desc}
              logo={logo}
              path={url}
            />
          )
        })
      }
    </section>
  )
}

export default TeamList