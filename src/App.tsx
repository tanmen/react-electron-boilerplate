import React from 'react';
import {HashRouter, Link, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HashRouter>
          <Route strict path="/">
            INDEX
            <Link to="/test">test</Link>
          </Route>
          <Route strict path="/test">
            INDEX
          </Route>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
