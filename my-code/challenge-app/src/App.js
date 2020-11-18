import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchPage from './Components/SearchPage.js';
import TopBar from './Components/TopBar.js';

function App() {
  return (
    <div className="App">
      <TopBar />
      <SearchPage />
    </div>
  );
}

export default App;
