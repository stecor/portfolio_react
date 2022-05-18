import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skills from './Skills'

const Profile = () => {
  const pathname = String(window.location.pathname) //returns the current url minus the domain name
  const [path, setPath] = useState('')
  const [url, setUrl] = useState('/contact')

  useEffect(() => {
    if (pathname === '/contact') {
      setPath('HOME')
      setUrl('/')
    } else {
      setPath('CONTACT')
      setUrl('/contact')
    }
  }, [])

  return (
    <div className='profile-section'>
      <div className='profile'>
        <h1>
          Stefano <span>Corra</span>
        </h1>
        <h5>FrontEnd Developer Developer</h5>
        <p>
          A proactive and organized individual with an Associate’s degree in
          Computer Software and a background in developing applications in
          searching for a Frontend position.
        </p>

        <Link
          to={process.env.PUBLIC_URL + '/portfolio'}
          className='primary-btn'
        >
          Portfolio
        </Link>
        <br />

        <Link to={process.env.PUBLIC_URL + url} className='ghost-btn'>
          {path}
        </Link>
      </div>
      <Skills />
    </div>
  )
}

export default Profile
