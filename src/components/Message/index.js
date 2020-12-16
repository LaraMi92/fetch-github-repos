// == Import npm
import React from 'react';

// == Import

import './message.scss';

// == Composant
const Message = ({ resultNumber }) => (

  // Si la recherche contient un résultat, alors qqchose comme resultNumber&&
  <div>La recherche a donné {resultNumber} résultats</div>
  // et sinon, envoyer "aucun résultat trouvé"

);

// == Export
export default Message;

// NE PAS OUBLIER LES PROPTYPES APRES
