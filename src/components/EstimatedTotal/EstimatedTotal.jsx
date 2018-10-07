import React, { Component } from "react";
import { Row, Col } from 'reactstrap';

class EstimatedTotal extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col xs="6" style={{ fontSize: "15px" }}><h2>Est, Total</h2></Col>
                <Col xs="6" style={{ fontSize: "15px" }}><h2>{`$${this.props.price}`}</h2></Col>
            </Row>
        )
    }
}

export default EstimatedTotal;