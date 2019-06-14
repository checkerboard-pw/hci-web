import React, { Component } from 'react';

import imagePlaceholder from '../../../assets/picture/img.png';

export class Picture extends Component {
  constructor(props) {
    super(props);
    let {content} = props;
    this.state = {
      image: content.image,
      caption: content.caption
    };
  }

  componentWillReceiveProps(nextProps) {
    let { content } = nextProps;
    this.setState({
      image: content.image,
      caption: content.caption
    });
  }


  render() {
    return (
      <figure>
        <img src={this.state.image.src || imagePlaceholder} alt={this.state.image.alt}/>
        <figcaption>{this.state.caption}</figcaption>
      </figure>
    );
  }
}

export default Picture;
