import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Header from './component/layout/Header';
import Footer from './component/layout/Footer';

import About from './component/pages/About';
import Template from './component/pages/Template';

function App() {
  let home = (
    <header className="App-header">
      <p>
        Portal Pariwisata
      </p>
    </header>
  );

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Route exact path="/" render={props => ( 
          <React.Fragment>
            {home}
          </React.Fragment>
        )}/>
        <header className="bali">
          <a
            className="App-link"
            href="localhost:3000/bali"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bali
          </a>
        </header>
        <Route exact path="/about" component={About} />
        <Route exact path="/bali" component={Template} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
