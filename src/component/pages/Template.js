import React, { Component } from 'react'
// import Picture from '../ui/Picture';
import DestinationBox from '../ui/DestinationBox';
import styles from './style.module.css';

import Bali from '../../assets/article/Bali.js';

export class Template extends Component {

  parseEntertainment(entertainment){
    let result = '';
    if (entertainment) {
      result = (
        <div>
          <h2>Entertainment</h2>
          <div className={styles.contentFlexContainer}>
            {entertainment.map(place => {
              return (
                <div className={styles.entertainment}>
                  <DestinationBox content={place} />
                </div>
              );
            })}
          </div>
          
        </div>
      );
    }
    return result;
  }

  parseCulinary(culinary){
    let result = '';
    if(culinary) {
      console.log(culinary)
      result = (
        <React.Fragment>
          <h2>Culinary</h2>
          {culinary.map(place => {
            return (
              <div>
                {/* <h3>{place.name}</h3> */}
                <div className={styles.contentFlexContainer}>
                  <DestinationBox content={place} />
                  <div className={styles.content}>
                    {place.description.map(desc => <p>{desc.text}</p>)}
                  </div>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      );
    }
    return result;
  }

  parseAccomodation(accomodation){
    let result = '';
    if(accomodation){
      result = (
        <React.Fragment>
          <h2>Accomodation</h2>
          {accomodation.map(acc => {
            return (
              <React.Fragment>
                {/* <h3>{acc.name}</h3> */}
                <div className={styles.contentFlexContainer}>
                  <DestinationBox content={acc}/>
                  <div className={styles.content}>
                    {acc.description.map(desc => <p>{desc}</p>)}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    }
    return result;
  }

  parseCulture(culture){
    let result = '';
    if(culture){
      result = (
        <React.Fragment>
          <h2>Culture</h2>
          <h3>Events</h3>
          {culture.events.map(event => {
            return (
              <React.Fragment>
                <p>{event.date} - {event.name}</p>
              </React.Fragment>
            );
          })}
          <h3>Norms</h3>
          <div className={styles.normFlexContainer}>
            {culture.norms.map(norm => {
              return (
                <div className={styles.norm}>
                  <h4>{norm.name}</h4>
                  {norm.description.map(desc => <p>{desc}</p>)}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      );
    }
    return result;
  }

  render() {
    let { entertainment, culinary, accomodation, culture } = Bali;
    let article = (
      <React.Fragment>
        <section>{this.parseEntertainment(entertainment)}</section>
        <section>{this.parseCulinary(culinary)}</section>
        <section>{this.parseAccomodation(accomodation)}</section>
        <section>{this.parseCulture(culture)}</section>
      </React.Fragment>
    );


    return (
      <React.Fragment>
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
        <div className={styles.flexContainer}>
          <div className={styles.overview}>
            {/* <h2>overview</h2> */}
          </div>
          <main className={styles.contentContainer}>
            {article}
          </main>
          <div className={styles.highlight}>
            {/* <h2>highlight</h2> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Template
