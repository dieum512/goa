import React from 'react'
import G from '../../assets/G.png'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={G} alt="G letter" />
      </div>
    </div>
  )
}

export default AboutUs
