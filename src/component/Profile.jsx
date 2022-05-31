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
        <h5>Developer</h5>
        <p>
          A proactive and organized individual with an Associate degree in
          Computer Software and a background in web applications. As an
          enthusiastic and creative technologist with hands-on skills in a wide
          range of software, tools, and programming languages, positioned to
          leverage my abilities and qualifications. Over the past 4 years, as a
          Developer, I have designed, developed, and launched customized, highly
          responsive websites and e-commerce solutions using advanced
          technologies. In addition, I have consistently met client expectations
          and project milestones while working effectively in deadline-driven
          environments. Please consider the following highlights: Designed and
          developed webpages using jQuery, JavaScript, HTML5, and CSS/Bootstrap,
          Built components in ReactJS using asynchronous methods. Created
          e-commerce sites for small business owners.
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
