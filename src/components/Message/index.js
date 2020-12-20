// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import Semantic UI
import { Message as SemanticMessage } from 'semantic-ui-react';
// == Import

import './message.scss';

// == Composant
const Message = ({ resultNumber }) => (
  <div className="result">
    <SemanticMessage>
      La recherche a donné <span className="strong">{resultNumber}</span> résultats
    </SemanticMessage>
  </div>
);

Message.propTypes = {
  resultNumber: PropTypes.number.isRequired,

};

// == Export
export default Message;
