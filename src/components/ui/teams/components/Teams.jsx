import React, { useState } from 'react'

import TeamList from './TeamList'
import { SectionHeader } from '../../../common'
import { teamList } from '../../../../data'

import '../styles/teams.css'

const Teams = () => {
  const [teams, setTeams] = useState(teamList);
  return (
    <section className="sytycc-teams">
      <div className="container">
        <SectionHeader 
          title="Our Team"
          text="Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, "
        />
        <TeamList list={teams} />
      </div>
    </section>
  )
}

export default Teams