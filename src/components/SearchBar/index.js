// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import Semantic UI
import { Input } from 'semantic-ui-react';
// == Import

import './searchbar.scss';

// == Composant
// il va falloir
// -d'abord s'occuper du onChange pour changer l'état de l'inputValue
// -ensuite le submit: va renvoyer une fonction de App qui va appeler l'API en passant la recherche comme query
// Ne pas oublier de remettre la value à 0 une fois le submit envoyé

const SearchBar = ({ onFormSubmit, inputValue, onInputChange }) => (

  // événement submit
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();
      onFormSubmit();
    }}
  >
    <Input
      icon="search"
      className="input"
      value={inputValue}
      // événement onChange pour màj l'état avec la saisie utilisateur
      onChange={(event) => {
        onInputChange(event.target.value);
      }}
      type="text"
      placeholder="Chercher un repo"
    />
  </form>
);

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
// == Export
export default SearchBar;
