import React from 'react';
import Newsletter from './Newsletter';
import Spoon from '../../assets/spoon.svg';
import Logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">139 Des enseignants, Goma, Nord-Kivu, RDC</p>
        <p className="p__opensans">+243 996 807 868</p>
        <p className="mail__p">goabuilding@gmail.com</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={Logo} alt="footer_logo" />
        <p className="p__opensans">&quot;L&apos;art de la construction, c&apos;est l&apos;art du détail.&quot;</p>
        <img src={Spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horaires de travail</h1>
        <p className="p__opensans">Lundi:</p>
        <p className="p__opensans">9h - 13h</p>
        <p className="p__opensans">Mardi - Vendredi:</p>
        <p className="p__opensans">9h - 17h</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">&copy;Dieum Akonkwa. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
