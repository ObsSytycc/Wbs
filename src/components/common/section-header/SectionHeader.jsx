import React from 'react'
import './styles/section-header.css'

const SectionHeader = ({ title = '', text = '' }) => {
  return (
    <hgroup className="section-header">
      <h2>{title}</h2>
      {
        text && <p>{text}</p>
      }
    </hgroup>
  )
}

export default SectionHeader