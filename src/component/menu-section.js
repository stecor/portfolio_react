import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuSection extends Component {
  constructor(props) {
    super(props)
    this.toggle = 0
  }

  menu = () => {
    if (this.toggle === 0) {
      document
        .getElementById('menu-burguer')
        .setAttribute('id', 'menu-burguer-active')
      this.toggle = 1
    } else {
      document
        .getElementById('menu-burguer-active')
        .setAttribute('id', 'menu-burguer')
      this.toggle = 0
    }
  }

  render() {
    return (
      <div id='menu-burguer' onClick={this.menu}>
        <div className='menu-icon'>
          <i className='fa fa-bars' aria-hidden='true'></i>
        </div>
        <section id='menu'>
          <nav>
            <Link to={'./'}>
              <span>Home</span>
            </Link>
            <Link to={'./'}>
              <span>About</span>
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
}

export default MenuSection
