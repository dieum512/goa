import React from 'react'
import G from '../../assets/G.png'
import Spoon from '../../assets/spoon.svg'
import Trowel from '../../assets/trowel.png'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={G} alt="G letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">À propos de nous</h1>
        <img src={Spoon} alt="Spoon" className='spoon__img'/>
        <p className="p__opensans">Nous sommes passionnés par notre métier et nous nous engageons à fournir à nos clients des services de qualité supérieure. Nous mettons notre expertise et notre savoir-faire à votre service pour donner vie à vos rêves. </p>
        <a href="#home" className="custom__button">En savoir plus</a>
        </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={Trowel} alt="Trowel" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre parcours</h1>
        <img src={Spoon} alt="Spoon" className='spoon__img'/>
        <p className="p__opensans">Notre entreprise a été fondée il y a plus de 5 ans par une équipe de professionnels passionnés par le bâtiment. Depuis, nous avons travaillé sur plus de 12 projets, de toutes tailles et de tous types. </p>
        <a href="#home" className="custom__button">En savoir plus</a>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
