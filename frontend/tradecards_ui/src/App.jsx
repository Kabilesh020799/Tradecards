import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './routes';
import './containers/index.scss';

function App () {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
}

export default App;
