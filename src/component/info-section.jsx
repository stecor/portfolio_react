import React from 'react'
import '../css/infoSection.css'

const InfoSection = () => {
  return (
    <section className='info-section'>
      <div className='logo'>STE</div>
      <div className='info-box'>
        <div className='icon-section'>
          <a
            href='https://stackoverflow.com/users/7989029/stefano-corra'
            target='_blank'
          >
            <i className='fa-brands fa-stack-overflow' aria-hidden='true'></i>
          </a>
          <a href='https://twitter.com/ste_corra' target='_blank'>
            <i className='fa-brands fa-twitter' aria-hidden='true'></i>
          </a>
          <a href='https://github.com/stecor' target='_blank'>
            <i className='fa-brands fa-github' aria-hidden='true'></i>
          </a>
          <a href='https://www.linkedin.com/in/stefanocorra/' target='_blank'>
            <i className='fa-brands fa-linkedin' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
