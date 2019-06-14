import React from 'react';
import styles from './style.module.css';
import imagePlaceholder from "../../../assets/picture/img.png";

class DestinationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: {
        src: '',
        alt: ''
      },
      businessHour:{
        openTime: '',
        closeTime: ''
      },
      price: 0
    }
  }

  render() {
    let businessHour = '';
    if(this.state.businessHour) {
      let time = this.state.businessHour;
      if(time.openTime !== time.closeTime){
        businessHour = (
          <p>Business Hour: businessHour.openTime + " - " + businessHour.closeTime</p>
        );
      }
    }
    return (
      <div className={styles.mainContainer}>
        <h3>{this.state.name || 'DestinationBox'}</h3>
        <img className={styles.imageContainer} src={this.state.image.src || imagePlaceholder} alt={this.state.image.alt}/>
        <div>
          {businessHour}
          <p>Price: {this.state.price}</p>
        </div>
      </div>
    );
  }
}

export default DestinationBox;
