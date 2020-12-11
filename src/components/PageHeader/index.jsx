import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

function PageHeader({ description }) {
  return (
    <div id="page-header">
      <div className="content">
        <h3>{description}</h3>
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

PageHeader.propTypes = propTypes;

export default PageHeader;
