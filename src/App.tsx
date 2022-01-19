import React from 'react';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HashRouter>
          <Routes>
            <Route path="/" element={<>
              INDEX
              <Link to="/test">test</Link></>}/>
            <Route path="/test" element={<>INDEX</>}/>
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
