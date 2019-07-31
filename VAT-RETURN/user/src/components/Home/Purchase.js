import React from 'react';

import {  Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';


class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      num4: 0,
      num5: 0,
      num6: 0,
      num7: 0,
      num8: 0,
      num9: 0,
      num10: 0,
      output: 0,
      input: 0
    };
this.handlenum4Change = this.handlenum4Change.bind(this);
    this.handlenum5Change = this.handlenum5Change.bind(this);
    this.handlenum6Change = this.handlenum6Change.bind(this);
    this.handlenum7Change = this.handlenum7Change.bind(this);
    this.handlenum8Change = this.handlenum8Change.bind(this);
  }
handlenum4Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num4: Number(evt.target.value) });
  }
  handlenum5Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num5: Number(evt.target.value) });
  }
  handlenum6Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num6: Number(evt.target.value) });
  }
  handlenum7Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num7: Number(evt.target.value) });
  }
  handlenum8Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num8: Number(evt.target.value) });
  }

addAction1 =(event)=> {
  let z = (this.state.num4 + this.state.num5) * 0.05
  this.setState({result45: z })
}
addAction2 =(event)=> {
  let a = (this.state.num6 + this.state.num7) * 0.05
  this.setState({result67: a })
}
addAction3 =(event)=> {
  let b = this.state.num8 - (this.state.num4 + this.state.num5 )
  this.setState({result80: b })
}
addAction4 =(event)=> {
  let c = this.state.result80 * 0.05
  this.setState({input: c })
}
addAction5 =(event)=> {
  let d = this.state.output - this.state.input 
  this.setState({result100: d })
}

render() {
  return (
  <div>
  <h2>B </h2>
      <Row>
      <Col sm={2}><h4>LINE No</h4> </Col>
      <Col sm={5}><h4>PURCHASES EXPENSES </h4> </Col>
      <Col sm={5}><h4>AMOUNT </h4> </Col>
      
      </Row>
      <Form >
      
      <FormGroup row>
      <Label for="exampleEmail" sm={1}>40</Label>
          <Label for="exampleEmail" sm={6}>Domestic Purchases used for Sales other than Zero Rated and Exempted Goods and services</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum4Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>45</Label>
          <Label for="exampleEmail" sm={6}>Purchases not wholly used in making VATable Supplies</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum5Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>55</Label>
        <Col sm={6}>
          <Button outline color="secondary" onClick={this.addAction1}
            type="button"
            value="VAT Suffered on VATable Domestic Supplies">VAT Suffered on VATable Domestic Supplies</Button>
          </Col>
          <Col sm={5}>
          <Input value={this.state.result45} readOnly
            type="text"
            name="number"
            id="exampleNumber"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>60</Label>
          <Label for="exampleEmail" sm={6}>Domestic Purchases for Zero Rated Sales</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum6Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>65</Label>
          <Label for="exampleEmail" sm={6}>Purchases not Wholly used in making Zero-Rated Supplies</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum7Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>75</Label>
        <Col sm={6}>
          <Button outline color="secondary" onClick={this.addAction2}
            type="button"
            value="VAT Suffered on Zero-Rated Supplies">VAT Suffered on Zero-Rated Supplies</Button> 
        
          </Col>
          
          <Col sm={5}>
          <Input value={this.state.result67} readOnly
            type="text"
            name="number"
            id="exampleNumber"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>85</Label>
          <Label for="exampleEmail" sm={6}>Purchased Imports</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum8Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>90</Label>
        <Col sm={6}>
          <Button outline color="secondary" onClick={this.addAction3}
            type="button"
            value="Total Purchases Subject to VAT Incurred">Total Purchases Subject to VAT Incurred</Button> 
          
          </Col>
          
          <Col sm={5}>
          <Input value={this.state.result80} readOnly
            type="text"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>95</Label>
        <Col sm={6}>
          <Button onClick={this.addAction4}
          
            type="button"
            value="Total Purchases Subject to VAT Incurred">TOTAL INPUT TAX </Button> 
          
          </Col>
          
          <Col sm={5}>
          <Input value= {this.state.input} readOnly
            type="text"
            name="number"
            id="exampleNumber"
          />
          </Col>
        </FormGroup>
      
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>100</Label>
        <Col sm={6}>
          <Button onClick={this.addAction5}
            type="button"
            value="VAT Balance for Current Period">VAT Balance for Current Period</Button> 
          
          </Col>
          
          <Col sm={5}>
          <Input value={this.state.result100} readOnly
            type="text"
            name="number"
            id="exampleNumber"
          />
          </Col>
        </FormGroup>
        </Form>
        
      <Row>
      <Col sm={2}><h4>LINE No</h4> </Col>
      <Col sm={5}><h4> 100VAT Balance for Current Period = </h4> </Col>
      <Col sm={5}><h4>AMOUNT </h4> </Col> 
      
      </Row>
      <Form >
      
      <FormGroup row>
      <Label for="exampleEmail" sm={1}>105</Label>
          <Label for="exampleEmail" sm={6}>Input Tax on VAT Withheld by MDAs & Oil and Gas</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum9Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>110</Label>
          <Label for="exampleEmail" sm={6}>Automatic VAT Payment in Current Period</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum10Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>115</Label>
          <Label for="exampleEmail" sm={6}>Net VAT Balance for Current Period</Label>
          <Col sm={5}>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>120</Label>
          <Label for="exampleEmail" sm={6}>VAT Credit Brought Forward</Label>
          <Col sm={5}>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>130</Label>
          <Label for="exampleEmail" sm={6}>VAT Credit for the Current Period</Label>
          <Col sm={5}>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>135</Label>
          <Label for="exampleEmail" sm={6}>Total VAT Credit</Label>
          <Col sm={5}>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>140</Label>
          <Label for="exampleEmail" sm={6}>Relieved VAT Credit</Label>
          <Col sm={5}>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>145</Label>
          <Label for="exampleEmail" sm={6}>VAT Credit Carry Forward</Label>
          <Col sm={5}>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
       <Label >150 <Button>VAT Payable = </Button> </Label> 
      
      </Form>
  
        </div>
     
    );
  }
}

export default Purchase;