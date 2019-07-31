import React from 'react';

import {  Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';


class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num: 0,
      num1: 0,
      num2: 0,
      num3: 0,
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
    this.handlenumChange = this.handlenumChange.bind(this);
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
    this.handlenum3Change = this.handlenum3Change.bind(this);
    this.handlenum4Change = this.handlenum4Change.bind(this);
    this.handlenum5Change = this.handlenum5Change.bind(this);
    this.handlenum6Change = this.handlenum6Change.bind(this);
    this.handlenum7Change = this.handlenum7Change.bind(this);
    this.handlenum8Change = this.handlenum8Change.bind(this);
    this.handlenum9Change = this.handlenum9Change.bind(this);
    this.handlenum10Change = this.handlenum10Change.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  handlenumChange (evt) {
    console.log(evt.target.value);
    this.setState({ num: Number(evt.target.value) });
  }
  handlenum1Change (evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
  }
  handlenum2Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num2: Number(evt.target.value) });
  }
  handlenum3Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num3: Number(evt.target.value) });
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
  handlenum9Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num9: Number(evt.target.value) });
  }
  handlenum10Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num10: Number(evt.target.value) });
  }
  addAction =(event)=> {
    let x = this.state.num - (this.state.num1 + this.state.num2 + this.state.num3)
    this.setState({result: x })
  }
  addActions =(event)=> {
    let y = this.state.result * 0.05
    this.setState({output: y })
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
  addAction6 =(event)=> {
    let e = this.state.result100 - (this.state.num9 + this.state.num10)
    this.setState({result115: e })
  }
  

  render() {
    return (
      <div className="full-form">
      <h1> Calculate Your VAT Return </h1>
      <h2>A</h2>
      <Row>
      <Col sm={2}><h4>LINE No</h4> </Col>
      <Col sm={5}><h4> SALES/ INCOME </h4> </Col>
      <Col sm={5}><h4>AMOUNT </h4> </Col>
      </Row>
      <Form >
      
      <FormGroup row>
      <Label for="exampleEmail" sm={1}>10</Label>
          <Label for="exampleEmail" sm={6}>Total Sales/Income Exclusive of VAT</Label>
          <Col sm={5}>
          <Input onChange={this.handlenumChange}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>15</Label>
          <Label for="exampleEmail" sm={6}>Less: Goods and Services Exempted Included in Line 10</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum1Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>20</Label>
          <Label for="exampleEmail" sm={6}>Less: Zero Rated Goods & Services Included in line 10</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum2Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>22</Label>
          <Label for="exampleEmail" sm={6}>Sales Adjustments</Label>
          <Col sm={5}>
          <Input onChange={this.handlenum3Change}
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="NAIRA"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>25</Label>
          <Col sm={6}>
          <Button outline color="secondary" onClick={this.addAction}
            type="button"
            value="Sales/Income Subject to VAT">Sales/Income Subject to VAT</Button>
            
          </Col>
          <Col sm={5}>
          <Input value={this.state.result} readOnly
            type="text"
            name="number"
            id="exampleNumber"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleEmail" sm={1}>35</Label>
          <Col sm={6}>
          <Button onClick={this.addActions}>TOTAL OUTPUT TAX</Button>
            
          </Col>
          <Col sm={5}>
          <Input value= {this.state.output} readOnly
            type="text"
            name="number"
            id="exampleNumber"
          />
          </Col>
        </FormGroup>
        </Form>
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
          <Col sm={6}>
          <Button  outline color="secondary" onClick={this.addAction6}
            type="number"
            name="number"
            id="exampleNumber">Net VAT Balance for Current Period</Button>
          </Col>
          
          <Col sm={5}>
          <Input value={this.state.result115} readOnly
            type="text"
            name="number"
            id="exampleNumber"
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

export default Forms;
