import React, { Component } from 'react'
import Picture from '../ui/Picture';
import Destination from '../ui/Destination';

export class Template extends Component {
  render() {
    return (
      <div>
        <h1>Template</h1>
        <div id="overview">
          <h2>overview</h2>
        </div>
        <div id="content">
          <h2>content</h2>
          <Picture />
          <Destination />
        </div>
        <div id="highlight">
          <h2>highlight</h2>
        </div>
      </div>
    )
  }
}

export default Template
