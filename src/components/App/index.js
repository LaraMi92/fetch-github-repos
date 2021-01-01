// == Import npm
import React, { useState } from 'react';

// == Imports maison
import './styles.scss';
import gitLogo from 'src/assets/images/logo-github.png';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import MyLoader from 'src/components/Loader';
import ErrorMessage from 'src/components/ErrorMessage';

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
  const [nbResult, setNbResult] = useState(null);
  // booléen pour le loader
  const [isLoading, setIsLoading] = useState(false);
  // pour conserver la requête de l'input envoyé
  const [sentRequest, setSentRequest] = useState('');
  // pour màj la requête selon la page
  const [page, setPage] = useState(1);
  // en cas d'erreur
  const [error, hasError] = useState(false);

  // gérer la soumission d'envoi du form
  const submitForm = () => {
    // loader
    setIsLoading(true);

    const formSubmitted = inputChange;

    // garder en mémoire la requête envoyée pour la fonction loadMoreResults
    setSentRequest(formSubmitted);

    // une requête pour récupérer  le contenu des repos
    const repoResultRequest = axios.get(`https://api.github.com/search/repositories?q=${formSubmitted}`)
      .then((response) => setResults(response.data.items))
      .catch(() => hasError(true))
      .finally(() => setInputChange(''));

    // une requête pour récupérer le nombre de résultats trouvés
    const nbResultRequest = axios.get(`https://api.github.com/search/repositories?q=${formSubmitted}`)
      .then((response) => setNbResult(response.data.total_count))
      .catch(() => hasError(true))
      .finally(() => setIsLoading(false));
  };

  const loadMoreresults = () => {
    // incrémentation page
    const newPage = page + 1;
    // nouvelle requête lancée au onClick
    const params = {
      q: sentRequest,
      sort: 'stars',
      order: 'desc',
      page: newPage,
      per_page: 9,
    };

    const multipleParamsQuery = axios.get('https://api.github.com/search/repositories?', { params }).then((response) => {
      // copie et incrémentation des résultats
      const newResults = [...results, ...response.data.items];
      setResults(newResults);
    })
      .catch(() => hasError(true))
      .finally(() => setPage(newPage));
  };

  // render du component
  return (
    <div className="app">
      <a href="https://github.com">
        <img src={gitLogo} alt="github logo" />
      </a>
      <SearchBar
        onInputChange={setInputChange}
        inputValue={inputChange}
        onFormSubmit={submitForm}
      />
      {/** N'afficher le composant que si nbResult contient qqchose */}
      {nbResult && !error && <Message resultNumber={nbResult} /> }
      {error && <ErrorMessage text="Nous n'avons pas pu trouver de repos" />}
      {/** si la requête est en cours, affichage du loader */}
      {isLoading && <MyLoader />}
      {/** si le loader est à false et que le tableau de la réponse n'est pas vide, on affiche les résultats */}
      {!isLoading && results.length !== 0
      && <ReposResults results={results} loadMoreBtn={loadMoreresults} />}

    </div>
  );
};

// == Export
export default App;
