import React from 'react'
import InfoSection from './component/info-section'
import MenuSection from './component/menu-section'
import WorkData from './data/workData'
import './css/portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const works = WorkData.map((work, index) => (
    <div key={index}>
      <Link to={{ pathname: work.link }} target='_blank'>
        <div
          className='project-box'
          style={{
            background: `url("${
              process.env.PUBLIC_URL + work.image
            }") no-repeat center center`,
          }}
        >
          <div className='grey-bg'>
            <div className='project-info'>
              <div className='project-details'>
                <div className='project-title'>{work.title}</div>
                <br />
                <br />
                <br />
                Client: {work.client}
                <br />
                <br />
                Year: {work.year}
                <br />
                <br />
                Type: {work.type}
              </div>

              <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))

  return (
    <div className='portfolio'>
      <InfoSection />
      <section className='content-area'>
        <div className='title' style={{ display: 'flex' }}>
          <h1 style={{ flex: 1 }}>LATEST WORKS</h1>
          <Link
            style={{ alignItems: 'center' }}
            to={process.env.PUBLIC_URL + '/'}
            className='ghost-btn'
          >
            Home
          </Link>
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
