// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import gitLogo from 'src/assets/images/logo-github.png';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// == Composant
const App = () => (
  <div className="app">
    <img src={gitLogo} alt="github logo" />
    <SearchBar />
    <Message />
    <ReposResults />
  </div>
);

// == Export
export default App;
