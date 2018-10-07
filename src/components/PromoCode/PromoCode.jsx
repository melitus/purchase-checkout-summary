import React, {Component} from 'react';
import {
    Row,
    Col,
    Form, 
    FormGroup,
    Label,
    Button,
    Collapse,
    Input
} from 'reactstrap';

class PromoCode extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state ={
            collapse: false,
            value: ''
        };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    promoChangeHandler = (event) => {
        this.setState({promoCode: event.target.value});
    }
    render(){
        return(
            <div>
            <Button
                className="promo-code-button"
                color="link"
                onClick={this.toggle}
            >
                {this.state.collapse === false ? "Apply" : "Hide"} Promo Code
                 {this.state.collapse === false ? `+` : `-`}
            </Button>
                <Collapse isOpen={this.state.collapse}>
                    <div className="div">
                        <Row className="show-grid">
                            <Col xs={6}>
                                <Form inline>
                                <FormGroup>
                                <Label>Promo Code</Label>
                                <Input 
                                  type="text" 
                                  name="promocode" 
                                  value={this.props.promocode}
                                  placeholder="Enter promo code" 
                                  onChange={this.promoChangeHandler}/>

                                </FormGroup>
                                <Button
                                 block
                                 className="btn-round"
                                 color="success"
                                 disabled={this.props.isDisable}
                                 onClick={this.props.giveDiscount}
                                >
                                Apply
                                </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>


                </Collapse>
            </div>
        );
    }
}

export default PromoCode;