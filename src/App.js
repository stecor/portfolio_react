import React from 'react'
import InfoSection from './component/info-section'
import MenuSection from './component/menu-section'

import Profile from './component/Profile'
import './css/App.css'

const App = () => {
  return (
    <div className='home'>
      <InfoSection />
      <section className='content-area'>
        <div className='img-container'>
          <div className='user-img'></div>
        </div>
        <Profile />
      </section>
    </div>
  )
}

export default App
