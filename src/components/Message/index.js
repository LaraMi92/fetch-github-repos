// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import

import './message.scss';

// == Composant
const Message = ({ resultNumber }) => (

  // Si la recherche contient un résultat, alors qqchose comme resultNumber&&
  <div className="result">La recherche a donné {resultNumber} résultats</div>
  // et sinon, envoyer "aucun résultat trouvé"

);

Message.propTypes = {
  resultNumber: PropTypes.number.isRequired,

};

// == Export
export default Message;
