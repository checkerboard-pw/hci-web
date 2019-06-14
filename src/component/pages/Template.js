import React, { Component } from 'react'
import Picture from '../ui/Picture';
import DestinationBox from '../ui/DestinationBox';
import styles from './style.module.css';

import Bali from '../../assets/article/Bali.js';

export class Template extends Component {

  parseCulinary(culinary){
    let result = '';
    if(culinary) {
      let items = (
        <div>
          <h2>Culinary</h2>
          {culinary.map(place => {
            return (
              <div>
                <h3>{place.name}</h3>
              </div>
            );
          })}
        </div>
      );
      result = items;
    }
    return result;
  }

  render() {
    let { name, mainImage, culinary } = Bali;
    let culinarySection = this.parseCulinary(culinary);
    let article = (
      <article>
        <Picture content={mainImage}/>
        <section>{culinarySection}</section>
      </article>
    );


    return (
      <React.Fragment>
        <header>
          <h1>{name}</h1>
        </header>
        <div class={styles.flexContainer}>
          <div class={styles.overview}>
            <h2>overview</h2>
          </div>
          <main class={styles.content}>
            {article}
          </main>
          <div class={styles.highlight}>
            <h2>highlight</h2>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Template
