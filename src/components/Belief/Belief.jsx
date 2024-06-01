import React from 'react'
import SubHeading from '../SubHeading/SubHeading';
import BeliefImage from "../../assets/belief.png"
import Quotes from "../../assets/quote.png"
import Signature from "../../assets/siganture.png"
import './Belief.css'

const Belief = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={BeliefImage} alt="Goa stuff in the meeting" />
        </div>
    <div className="app__wrapper_info">
      <SubHeading title="Le message de l'équipe" />
      <h1 className="headtext__cormorant">Nos convictions</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={Quotes} alt="quote" />
          <p className="p__opensans">Nous croyons que le succès est le fruit d&apos;un travail d&apos;équipe, </p>
        </div>
        <p className="p__opensans">
             du courage et de l&apos;engagement envers l&apos;excellence. Nous sommes convaincus que nos clients 
             méritent le meilleur, et nous nous efforççons de dépasser leurs attentes à chaque fois.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>GOA</p>
        <p className="p__opensans">Building company</p>
        <img src={Signature} alt="GOA team siganture" />
      </div>
    </div>
    </div>
  )
}

export default Belief
