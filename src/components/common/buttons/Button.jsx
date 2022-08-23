import React from 'react'
import './style/button.css'

const Button = ({ value = '', color = 'primary', onclick= () => null, icon = () => null }) => {
  return (
    <button
      className={`sytycc-btn ${color === 'primary' ? 'primary-btn' : 'secondary-btn'}`}
      onClick={ () => onclick()}
    >
      {value}
      {
        icon && <span>{icon}</span>
      }
    </button>
  )
}

export default Button