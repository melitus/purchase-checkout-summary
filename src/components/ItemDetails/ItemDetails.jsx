import React, { Component } from 'react';
import { Button, Card, CardBody, Collapse, Media, Row, Col } from 'reactstrap';

class ItemDetails extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false
        }
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <Button 
                 className="item-details-button" 
                 color="link" 
                 onClick={this.toggle}
                 >
                 {this.state.collapse === false ? "See" : "Hide"} item Details
                 {this.state.collapse === false ? `+` : `-`}
                </Button>

                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <Media>
                                <Media left href="#">
                                    <Media object src="holder.js/64x64" alt="Generic placeholder image" style={{width:100, height:100}}/>
                                </Media>
                                <Media body>
                                    <p>
                                    Cras sit amet nibh libero, in gravida nulla
                                    </p>
                                    <Row className="show-grid">
                                        <Col xs={6}>
                                            <strong>{`$${this.props.price}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col xs={6}>Qty : 1 </Col>
                                    </Row>
                                </Media>
                            </Media>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default ItemDetails;