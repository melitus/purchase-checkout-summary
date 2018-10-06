import React, { Component }from 'react';
import { Tooltip, Row, Col } from 'reactstrap';

 class PickupSavings extends Component {
    constructor(props) {
        super(props); 

        this.toggle = this.toggle.bind(this);
        this.state = {
             tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {

    
    return (
      
      <Row className="show-grid">
        <Col xs={6} >
           <p><span style={{textDecoration: "underline",fontSize: "15px"}} href="#" id="TooltipExample">Pick up Savings</span>.</p>
        </Col>
             
        <Col 
           xs="6" 
           style={{color:'red',fontWeight: '800',fontSize:"15px"}}>
           {`$${ this.props.price}`}     
        </Col>

        <Tooltip 
          placement="right" 
          isOpen={this.state.tooltipOpen} 
          target="TooltipExample" 
          style={{fontSize: "15px"}} 
          toggle={this.toggle}>
              Pickup Savings in the order to cut cost, and we save your discount
         </Tooltip>

            
          </Row>
        
        
    
    );
  }
}
 

  export default PickupSavings;