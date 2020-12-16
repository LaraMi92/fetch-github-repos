// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import

import './reposresults.scss';

// Ici il faudra récupérer le résultat de la fonction gérant l'appel à l'API
// pour le passer en props au composant

const ReposResults = ({ results }) => (
  <article>
    {/** mapper ici sur le tableau de résultats */}
    {results.map((result) => (
      <section key={result.id}>
        <h2>
          {result.name}
        </h2>
        <h3>{result.full_name}</h3>

        <p>
          {result.description}
        </p>
      </section>
    ))}
  </article>

);

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default ReposResults;
