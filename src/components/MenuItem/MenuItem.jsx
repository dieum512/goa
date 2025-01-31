import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = ({ title, galery, description }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <a href="#home" className="custom__button">{galery}</a>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{description}</p>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  galery: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MenuItem;
