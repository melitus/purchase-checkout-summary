import React, { Component } from "react";
import { Row, Col } from 'reactstrap';

class Subtotal extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col xs="6" style={{ fontSize: "15px" }}>Subtotal</Col>
                <Col xs="6" style={{ fontSize: "15px" }}>{`$${this.props.price}`}</Col>
            </Row>
        )
    }
}

export default Subtotal;