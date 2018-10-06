import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';
import Subtotal from './components/Subtotal/Subtotal';
class App extends Component {
  constructor(props){
    super(props);
 
    this.state = {
      total: 100
    }
  }
  render() {
    return (
      <div className="container">
        <Container className="container-purchase_summary">
           <Subtotal price={this.state.total.toFixed(2)} />
        </Container>
      </div>
    );
  }
}

export default App;
