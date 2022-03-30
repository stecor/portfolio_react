import React from 'react'
import InfoSection from './component/info-section'
import MenuSection from './component/menu-section'
import { Link } from 'react-router-dom'
import './css/App.css'

const App = () => {
  return (
    <div className='home'>
      <MenuSection />
      <InfoSection />
      <section className='content-area'>
        <div className='img-container'>
          <div className='user-img'></div>
        </div>
        <div className='profile-section'>
          <div className='profile'>
            <h1>
              Stefano <span>Corra</span>
            </h1>
            <h5>Web Developer</h5>
            <p>
              Donec interdum, odio a iaculis dapibus, neque diam egestas tortor,
              a pellentesque enim lectus sed nisi. Nam ut nisl ligula. Nulla eu
              sapien sed dolor tincidunt dictum.{' '}
            </p>

            <Link
              to={process.env.PUBLIC_URL + '/portfolio'}
              className='primary-btn'
            >
              Portfolio
            </Link>
            <Link
              to={process.env.PUBLIC_URL + '/contact'}
              className='ghost-btn'
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
