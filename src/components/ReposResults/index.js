// == Import npm
import React from 'react';

// == Import

import './reposresults.scss';

const ReposResults = ({
  title, category, description,
}) => (
  <article>
    <h2>
      {title}
    </h2>
    <h3>{category}</h3>

    <p>
      {description}
    </p>
  </article>
);

// == Export
export default ReposResults;

// NE PAS OUBLIER LES PROPTYPES APRES