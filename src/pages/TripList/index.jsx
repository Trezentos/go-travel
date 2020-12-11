import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';

function TripList() {
  return (
    <div id="page-trip-list">
      <PageHeader description="Aqui estão as suas viagens registradas!" />
      <main>
        <div className="card">
          <div className="description">
            <h3>Cabeçudas</h3>
            <p>
              A Praia de Cabeçudas é a mais urbanizada e mais movimentada
              de todo o município de Itajaí, além de oferecer uma boa
              infra-estrutura turística, contando com hotéis, pousadas e
              restaurantes.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="description">
            <h3>Cabeçudas</h3>
            <p>
              A Praia de Cabeçudas é a mais urbanizada e mais movimentada
              de todo o município de Itajaí, além de oferecer uma boa
              infra-estrutura turística, contando com hotéis, pousadas e
              restaurantes.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="description">
            <h3>Cabeçudas</h3>
            <p>
              A Praia de Cabeçudas é a mais urbanizada e mais movimentada
              de todo o município de Itajaí, além de oferecer uma boa
              infra-estrutura turística, contando com hotéis, pousadas e
              restaurantes.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="description">
            <h3>Cabeçudas</h3>
            <p>
              A Praia de Cabeçudas é a mais urbanizada e mais movimentada
              de todo o município de Itajaí, além de oferecer uma boa
              infra-estrutura turística, contando com hotéis, pousadas e
              restaurantes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TripList;
