import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Header from './component/layout/Header';
import Footer from './component/layout/Footer';

import About from './component/pages/About';
import Template from './component/pages/Template';

function App() {
  let home = (
    <h1>Home Page</h1>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            {home}
          </React.Fragment>
        )}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/template" component={Template} />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
