import React from 'react';

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      if(time.openTime != time.closeTime){
        businessHour = (
          <p>Business Hour: businessHour.openTime + " - " + businessHour.closeTime</p>
        );
      }
    }
    return (
      <div>
        <h3>destination</h3>
        {businessHour}
      </div>
    );
  }
}

export default Destination;
