import React from 'react'
import InfoSection from './component/info-section'
import MenuSection from './component/menu-section'
import Profile from './component/Profile'
import './css/contact.css'

const email = process.env.REACT_APP_KEY

const Contact = () => {
  return (
    <div className='contact'>
      <MenuSection />
      <InfoSection />

      <section className='content-area'>
        <div className='img-container'>
          <div className='form-section'>
            <form action='/' method='POST'>
              <h4>Send a Message</h4>
              <input type='text' name='name' placeholder='Your Name' required />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
              />
              <textarea
                name='message'
                id=''
                cols='30'
                rows='12'
                placeholder='Your Message'
                required
              ></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>

        <div className='home'>
          <Profile />
        </div>
      </section>
    </div>
  )
}

export default Contact
