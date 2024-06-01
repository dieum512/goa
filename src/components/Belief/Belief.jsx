import React from 'react'
import SubHeading from '../SubHeading/SubHeading';
import BeliefImage from "../../assets/belief.png"

const Belief = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={BeliefImage} alt="Goa stuff in the meeting" />
        </div>
      
    </div>
  )
}

export default Belief
