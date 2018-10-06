import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PIckupSavings';
class App extends Component {
  constructor(props){
    super(props);
 
    this.state = {
      total: 100,
      pickupSavings: -3.85
    }
  }
  render() {
    return (
      <div className="container">
        <Container className="container-purchase_summary">
           <Subtotal price={this.state.total.toFixed(2)} />
           <PickupSavings price={this.state.pickupSavings} />
        </Container>
      </div>
    );
  }
}

export default App;
