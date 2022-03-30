import React from 'react'
import InfoSection from './component/info-section'
import MenuSection from './component/menu-section'
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
        <div className='contact-section'>
          <div className='contact-info'>
            <h1>Contact Us</h1>
            <div className='contact-box'>
              <h5>Phone</h5>
              <p>(453) 456 4536</p>
            </div>

            <div className='contact-box'>
              <h5>Email</h5>
              <p>JaneJohnson@gmail.com</p>
            </div>

            <div className='contact-box'>
              <h5>Address</h5>
              <p>456 Grant ave, Hamilton ON L8C 4K5</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
