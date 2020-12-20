// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import Semantic UI
import { Card, Icon } from 'semantic-ui-react';
// == Import

import './reposresults.scss';

// Récupération du résultat de la fonction gérant l'appel à l'API
// passée en props au composant

const ReposResults = ({ results, loadMoreBtn }) => (
  <div>
    <Card.Group>
      {/** on mappe sur le résultat */}
      {results.map((result) => (
        <Card
          key={result.id}
          image={result.owner.avatar_url}
          header={result.name}
          meta={result.full_name}
          description={result.description.substring(0, 60)}
          extra={(
            <a href={result.html_url}>
              <Icon name="star" />
              {result.stargazers_count}
            </a>
        )}
        />
      ))}
    </Card.Group>
    <button type="button" onClick={loadMoreBtn}>Load more</button>
  </div>

);

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      header: PropTypes.string.isRequired,
      meta: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      loadMoreBtn: PropTypes.func.isRequired,
    }),
  ).isRequired,
  loadMoreBtn: PropTypes.func.isRequired,
};

// == Export
export default ReposResults;
