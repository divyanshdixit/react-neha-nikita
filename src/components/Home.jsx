import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Home = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setUser('divyansh');
        }, 5000);
    },[]);

  return (
    <div>
        <h1> Home page  </h1>
        {user && 
        <Navigate to='/vision'/>
        }

        {/* <a href='/about'> About Us </a> */}
        <Link to='about'> About us </Link>
        <Link to='contact'> Contact us </Link>
        <Link to='about/vision'> Vision </Link>
        <Link to='contact/career'> Career  </Link>
    </div>
  )
}

export default Home