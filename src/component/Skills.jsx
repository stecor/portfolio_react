import React from 'react'

const Skills = () => {
  return (
    <div className='info-box'>
      <div className='icon-section'>
        <a href='https://reactjs.org/' target='_blank'>
          <i
            className='fa-brands fa-react'
            aria-hidden='true'
            style={{ color: '#000' }}
          ></i>
        </a>
        <a href='https://www.javascript.com/' target='_blank'>
          <i
            className='fa-brands fa-js-square'
            aria-hidden='true'
            style={{ color: '#000' }}
          ></i>
        </a>
        <a href='https://www.w3.org/TR/2011/WD-html5-20110525/' target='_blank'>
          <i
            className='fa-brands fa-html5'
            aria-hidden='true'
            style={{ color: '#000' }}
          ></i>
        </a>
        <a href='https://www.w3.org/TR/CSS/#css' target='_blank'>
          <i
            className='fa-brands fa-css3-alt'
            aria-hidden='true'
            style={{ color: '#000' }}
          ></i>
        </a>
      </div>
    </div>
  )
}

export default Skills
