import React from 'react'
import InfoSection from './component/info-section'
import MenuSection from './component/menu-section'
import WorkData from './data/workData'
import './css/portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const works = WorkData.map((work, index) => (
    <div key={index}>
      <div
        className='project-box'
        style={{
          background: `url("${
            process.env.PUBLIC_URL + work.image
          }") no-repeat center center`,
        }}
      >
        <Link to={{ pathname: work.link }} target='_blank'>
          <div className='grey-bg'>
            <div className='project-info'>
              <div className='project-details'>
                Client: {work.client} Year: {work.year} Type: {work.type}
              </div>

              <div className='project-title'>{work.title}</div>
              <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  ))

  return (
    <div className='portfolio'>
      <MenuSection />

      <InfoSection />

      <section className='content-area'>
        <div className='title'>
          <h1>LATEST WORKS</h1>
        </div>
        <div className='scroll-section'>
          {/* works start */}
          <div className='work-section'>
            <div className='project-section'>{works}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
