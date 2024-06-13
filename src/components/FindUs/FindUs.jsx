import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import FindImage from '../../assets/findus.png';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Trouvez-nous</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Goma, Kyeshero, Les enseignants, 180</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horaires d&apos;ouverture</p>
        <p className="p__opensans">Lundi: 9h - 13h</p>
        <p className="p__opensans">Mardi - Vendredi: 9h - 17h</p>
      </div>
      <a href="#footer" className="custom__button" style={{ marginTop: '2rem' }}>Laissez un message</a>
    </div>

    <div className="app__wrapper_img">
      <img src={FindImage} alt="Builders tools" />
    </div>
  </div>
);

export default FindUs;
