import React, { Component } from 'react';
import {  Button, Card, CardBody, Collapse, Media, Row, Col } from 'reactstrap';

class ItemDetails extends Component{
    constructor(props){
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state ={
            open: false
        }
    }
    toggle() {
        this.setState({open: !this.state.open});
      }

    render(){
        return(
          <div>
             <Button
              className="item-details-button"
              color="link"
              onClick={this.toggle}
             >
             {this.state.open ===false ? 'See' : 'Hide'} item Details
             {this.state.open === false ? `+` : `-`}
             </Button>
             <Collapse isOpen={this.state.open}>
               <div>
               <Card>
                 <CardBody>
                     <Media left href="#">
                     <Media object data-src="holder.js/64x64" alt="thumb" />

                     </Media>
                 </CardBody>
               </Card>
               </div>
            </Collapse>
          </div>
        )
    }
}

export default ItemDetails;