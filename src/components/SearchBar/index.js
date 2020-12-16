// == Import npm
import React from 'react';

// == Import

import './searchbar.scss';

// == Composant
// il va falloir
// -d'abord s'occuper du onChange pour changer l'état de l'inputValue
// -ensuite le submit: va renvoyer une fonction de App qui va appeler l'API en passant la recherche comme query
// Ne pas oublier de remettre la value à 0 une fois le submit envoyé

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
        onInputChange(event.target.value);
      }}
      type="text"
      placeholder="Chercher un repo"
    />
  </form>
);

// == Export
export default SearchBar;

// NE PAS OUBLIER LES PROPTYPES APRES
