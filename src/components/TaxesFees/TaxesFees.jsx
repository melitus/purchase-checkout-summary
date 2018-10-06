import React, { Component } from "react";
import {  Row, Col } from 'reactstrap';

class TaxesFees extends Component{
    render(){
        return(
            <Row className="show-grid">
              <Col xs="6" style={{fontSize: "15px"}}>Est. taxes & fees (base on 94085)</Col>
              <Col xs="6" style={{fontSize: "15px"}}>{`$${ this.props.taxes}`}</Col>
            </Row>       
        )
    }
}

export default TaxesFees;