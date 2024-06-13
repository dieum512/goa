import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Gallery01 from '../../assets/gallery01.jpg';
import Gallery02 from '../../assets/gallery02.jpg';
import Gallery03 from '../../assets/gallery03.jpg';
import Gallery04 from '../../assets/gallery04.jpg';
import SubHeading from '../SubHeading/SubHeading';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Inspirations" />
        <h1 className="headtext__cormorant">L&apos;Art de Construire</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Découvrez nos réalisations, un aperçu de notre expertise et de la qualité de nos constructions.</p>
        <a href="#services" className="custom__button">Services</a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[Gallery01, Gallery02, Gallery03, Gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
