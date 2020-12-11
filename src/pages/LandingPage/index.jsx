import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function LandingPage() {
  return (
    <div id="landing-page" className="container">
      <div id="landing-page-content">
        <div className="title">
          <h1>Bem </h1>
          <h1>Vindo</h1>
          <h1>Ao</h1>
          <h1>GoTravel</h1>
        </div>
        <div className="buttons-container">
          <Link to="/register"><button type="button">Registrar Viagem</button></Link>
          <Link to="/trip-list"><button type="button">Conferir Viagens</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
