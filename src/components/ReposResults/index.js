// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import Semantic UI
import { Card } from 'semantic-ui-react';
// == Import

import './reposresults.scss';

// Ici il faudra récupérer le résultat de la fonction gérant l'appel à l'API
// pour le passer en props au composant

const ReposResults = ({ results }) => (
  <div className="results">
    {/** mapper ici sur le tableau de résultats */}
    {results.map((result) => (
      <Card
        key={result.id}
        image={result.owner.avatar_url}
        header={result.name}
        meta={result.full_name}
        description={result.description}
      />
    ))}
  </div>

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
