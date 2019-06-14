import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Header</h1>
        <Router>
          <Link to='/about'>About</Link> | <Link to='/bali'>Template</Link>
        </Router>
      </React.Fragment>
    );
  }
}

export default Header;
