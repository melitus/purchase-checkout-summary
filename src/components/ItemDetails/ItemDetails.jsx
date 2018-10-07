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
                                    <Media object src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                        alt="Generic placeholder image"
                                        width={100}
                                        height={100} />
                                </Media>
                                <Media body>
                                    <p>
                                      Essentials by OFM Ess 3085 Racing style leather Gaming chare, Red.
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