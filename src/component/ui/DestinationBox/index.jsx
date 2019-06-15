import React from 'react';
import styles from './style.module.css';
import imagePlaceholder from "../../../assets/picture/img.png";

class DestinationBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.content.name,
      address: props.content.address,
      image: props.content.image,
      businessHour: props.content.businessHour,
      price: props.content.price
    }
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <h3>{this.state.name || 'DestinationBox'}</h3>
        <img className={styles.imageContainer} src={this.state.image.src || imagePlaceholder} alt={this.state.image.alt}/>
        <div>
          {this.state.businessHour ? <p>Business Hour: {this.state.businessHour}</p>: ''}
          {this.state.price ? <p>Price: {this.state.price}</p>: ''}
          {this.state.address ? <p>Address: {this.state.address}</p> : ''}
        </div>
      </div>
    );
  }
}

export default DestinationBox;
