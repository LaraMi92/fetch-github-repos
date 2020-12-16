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

  // pour conserver la requête de l'input envoyé
  const [sentForm, setSentForm] = useState('');

  // gérer la soumission d'envoi du form
  const submitForm = () => {
    const formSubmitted = inputChange;

    console.log(formSubmitted);

    // garder en mémoire la requête envoyée pour la fonction loadMoreResults
    setSentForm(formSubmitted);
    // une requête pour récupérer  le contenu des repos
    const repoResultRequest = axios.get(`https://api.github.com/search/repositories?q=${formSubmitted}`).then((response) => setResults(response.data.items)).catch((error) => console.error(error)).finally(() => setInputChange(''));
    // une requête pour récupérer le nombre de résultats trouvés
    const NbResultRequest = axios.get(`https://api.github.com/search/repositories?q=${formSubmitted}`).then((response) => setNbResult(response.data.total_count)).catch((error) => console.error(error));
  };

  const loadMoreresults = () => {
    // essai bonus avec rajout paramètres supplémentaires dans la query
    const params = {
      q: sentForm,
      sort: 'stars',
      order: 'desc',
      page: 1,
      per_page: 9,
    };

    const multipleParamsQuery = axios.get('https://api.github.com/search/repositories?', { params }).then((response) => setResults([...results, response.data.items]));
    // Il faudrait dans App rajouter un bouton à la condition que la longueur des résultats de la requête soit de 9minimum
    // puis gérer un événement onClick sur le bouton qui rappelle la fonction relançant la requête
    // Au moment où l'on récupère les résultats de la nouvelle requête, il faudrait que l'on copie (...) l'état de notre state results
    // Afin d'y incorporer la nouvelle requête et qu'elle vienne s'ajouter à la suite

    // pb : je vide mon input à chaque fois requête
    // à faire: créer un nouveau state qui contiendrait l'input de la requête et la garderait ainsi en mémoire
    // il faudrait maintenant appeler useEffect pour ne changer l'état du rendu que sur le onClick
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
      {/** Penser à rajouter condition pour l'affichage du btn */}
      <button type="button" onClick={loadMoreresults}>Plus de résultats</button>

    </div>
  );
};

// == Export
export default App;
