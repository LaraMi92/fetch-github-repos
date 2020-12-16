// == Import npm
import React from 'react';

// == Import

import './searchbar.scss';

// == Composant
const SearchBar = ({ onFormSubmit, inputValue, onInputChange }) => (

  // événement submit
  <form onSubmit={(event) => {
    event.preventDefault();
    onFormSubmit();
  }}
  >
    <input
      value={inputValue}
      // événement onChange pour màj l'état avec la saisie utilisateur
      onChange={(event) => {
        const newValue = event.target.value;

        onInputChange(newValue);
      }}
      type="text"
      placeholder="Chercher un repo"
    />
  </form>
);

// == Export
export default SearchBar;

// NE PAS OUBLIER LES PROPTYPES APRES
