import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Email" />
      <h1 className="headtext__cormorant">Envoyez-nous un email</h1>
      <p className="p__opensans">et nous vous répondrons dans les meilleurs délais.!</p>
    </div>
    <form action="">
    <div className="app__newsletter-input flex__center">
      
        <input type="email" placeholder="Indiquez votre adresse email" />
        <textarea name="message" rows="7" placeholder="Écrivez votre message ici" required />
        <button type="submit" className="custom__button">Envoyer</button>
    </div>
      </form>
  </div>
);

export default Newsletter;
