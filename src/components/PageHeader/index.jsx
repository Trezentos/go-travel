import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

function PageHeader({ description }) {
  return (
    <div id="page-header" className="container">
      <div id="description">
        <h3>{description}</h3>
      </div>
    </div>
  );
}

PageHeader.propTypes = propTypes;

export default PageHeader;
