import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../../common'

const TeamCard = ({ name = '', description = '', path = '', logo = () => null }) => {
  const navigate = useNavigate();

  return (
    <article className="sytycc-team-card">
      {
        logo() && <div className='team-logo'>{logo()}</div>
      }
      <h3>{name}</h3>
      <p>{description}</p>
      <Button 
        value='Learn more'
        color='secondary'
        onclick={() => navigate(path, { replace: true })}
      />
    </article>
  )
}

export default TeamCard