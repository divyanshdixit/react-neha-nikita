import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      About page
      <ul>
        <li> 
          <Link to='vision'> Vison </Link>
          <Link to='career'> Career </Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default About