import React from 'react';
import PropTypes from 'prop-types';
import spoon from '../../assets/spoon.svg';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={spoon} alt="spon" className="spoon__img" />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeading;
