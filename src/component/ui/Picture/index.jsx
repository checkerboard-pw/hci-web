import React, { Component } from 'react';

export class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      caption: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    let { content } = nextProps;
    this.setState({});
  }

  render() {
    // let { props } = this.props;
    return (
      <div>
        <h3>picture</h3>
      </div>
    );
  }
}

export default Picture;
