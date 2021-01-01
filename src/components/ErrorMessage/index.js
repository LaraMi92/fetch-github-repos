import React from 'react';
import PropTypes from 'prop-types';

import { Message } from 'semantic-ui-react';

const ErrorMessage = ({ text }) => (
  <Message negative>{text}</Message>
);

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorMessage;
