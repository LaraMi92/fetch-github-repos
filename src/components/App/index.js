// == Import npm
import React, { useState, useEffect } from 'react';

// == Imports maison
import './styles.scss';
import gitLogo from 'src/assets/images/logo-github.png';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// API
/* import axios from 'axios'; */

// == Composant
const App = () => {
// state hooks
  const [inputChange, setInputChange] = useState('');

  // useEffect

  // render du component
  return (
    <div className="app">
      <img src={gitLogo} alt="github logo" />
      <SearchBar onInputChange={setInputChange} inputValue={inputChange} />
      <Message />
      <ReposResults />
    </div>
  );
};

// == Export
export default App;
