import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuSection = () => {
  const [toggle, setToggle] = useState(0)
  const menu = () => {
    if (toggle === 0) {
      document
        .getElementById('menu-burguer')
        .setAttribute('id', 'menu-burguer-active')
      setToggle(1)
    } else {
      document
        .getElementById('menu-burguer-active')
        .setAttribute('id', 'menu-burguer')
      setToggle(0)
    }
  }

  return (
    <div id='menu-burguer' onClick={menu}>
      <div className='menu-icon'>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </div>
      <section id='menu'>
        <nav>
          <Link to={'./'}>
            <span>Home</span>
          </Link>
          <Link to={'./portfolio'}>
            <span>Portfolio</span>
          </Link>
          <Link to={'./contact'}>
            <span>Contact</span>t
          </Link>
        </nav>
      </section>
    </div>
  )
}

export default MenuSection
