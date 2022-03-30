import React from 'react'
import '../css/infoSection.css'

const InfoSection = () => {
  return (
    <section className='info-section'>
      <div className='logo'>STE</div>
      <div className='info-box'>
        <div className='icon-section'>
          <a href='#1'>
            <i className='fa fa-youtube-play' aria-hidden='true'></i>
          </a>
          <a href='#1'>
            <i className='fa fa-twitter' aria-hidden='true'></i>
          </a>
          <a href='#1'>
            <i className='fa fa-instagram' aria-hidden='true'></i>
          </a>
          <a href='#1'>
            <i className='fa fa-dribbble' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
