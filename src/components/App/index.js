// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// == Composant
const App = () => (
  <div className="app">
    <SearchBar />
    <Message />
    <ReposResults />
  </div>
);

// == Export
export default App;
