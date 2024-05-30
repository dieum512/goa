import React from 'react'

import SubHeading from '../SubHeading/SubHeading'
import {leftDetails, rightDetails} from '../../constants/data'
import MenuItem from '../MenuItem/MenuItem'
import servicesImage from '../../assets/services.png'
import './Services.css'

const Services = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id='services'>
      <div className="app__specialMenu-title">
        <SubHeading title='Services that fit your need'/>
        <h1 className="headtext__cormorant">Nos services</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <h4 className='app__specialMenu-menu_heading'>Nos services</h4>
          <div className="app__specialMenu-menu_items">
            {leftDetails.map((service, index) => (
              <MenuItem key={service.title + index} title={service.title} galery={service.galery} description={service.description}/>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={servicesImage} alt="House for services" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <h4 className='app__specialMenu-menu_heading'>Nos champs d'action</h4>
          <div className="app__specialMenu-menu_items">
            {rightDetails.map((service, index) => (
              <MenuItem key={service.title + index} title={service.title} galery={service.galery} description={service.description}/>
            ))}
          </div>
        </div>

      </div>
        <div style={{marginTop: '15px'}}>
          <a href="#home" className='custom__button'>Let's talk</a>
        </div>
    </div>
  )
}

export default Services
