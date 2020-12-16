// == Import npm
import React, { useState, useEffect } from 'react';

// == Imports maison
import './styles.scss';
import gitLogo from 'src/assets/images/logo-github.png';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// API
import axios from 'axios';

// == Composant
const App = () => {
  // state hooks

  // pour le onChange de la SearchBar
  const [inputChange, setInputChange] = useState('');
  // pour la réception des données du formulaire : les repos
  const [results, setResults] = useState([]);
  // pour la réception des données du form : le nombre de résultats
  const [nbResult, setNbResult] = useState('');

  // gérer la soumission d'envoi du form
  const submitForm = () => {
    const formSubmitted = inputChange;

    console.log(formSubmitted);

    const repoResultRequest = axios.get(`https://api.github.com/search/repositories?q=${formSubmitted}`).then((response) => setResults(response.data.items)/* console.log(response.data.items) */).catch((error) => console.error(error)).finally(() => setInputChange(''));

    const NbResultRequest = axios.get(`https://api.github.com/search/repositories?q=${formSubmitted}`).then((response) => setNbResult(response.data.total_count));
  };

  // render du component
  return (
    <div className="app">
      <img src={gitLogo} alt="github logo" />
      <SearchBar
        onInputChange={setInputChange}
        inputValue={inputChange}
        onFormSubmit={submitForm}
      />
      {/** N'afficher le composant que si nbResult contient qqchose */}
      {nbResult && <Message resultNumber={nbResult} />}
      <ReposResults results={results} />
    </div>
  );
};

// == Export
export default App;
