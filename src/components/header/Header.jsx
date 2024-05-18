import React from 'react';
import './Header.css'
import SubHeading from '../SubHeading/SubHeading';
import header from '../../assets/welcome.png';

const Header = () => (
    <div className="app_header_2">
    <div className="app__header app__wrapper section__padding" id="home">
       
      <div className="app__wrapper_info">
        <SubHeading title="Bâtir l'avenir ensemble"/>
        <h1 className="app__header-h1">Transformer les visions en réalité</h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}> Nous sommes une entreprise de construction spécialisée dans la concrétisation de vos projets, quels qu'ils soient.</p>
        <button className="custom__button">Nous contacter</button>
      </div>
  
      <div className="app__wrapper_img">
        <img src={header} alt="header_img" />
      </div>
    </div>
    </div>
)
export default Header
