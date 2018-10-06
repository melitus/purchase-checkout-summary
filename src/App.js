import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PIckupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';

class App extends Component {
  constructor(props){
    super(props);
 
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    }
  }
  render() {
    return (
      <div className="container">
        <Container className="container-purchase_summary">
           <Subtotal price={this.state.total.toFixed(2)} />
           <PickupSavings price={this.state.pickupSavings} />
           <TaxesFees taxes={this.state.taxes} />
           <hr />
           <EstimatedTotal price={this.state.estimatedTotal} />
        </Container>
      </div>
    );
  }
}

export default App;
