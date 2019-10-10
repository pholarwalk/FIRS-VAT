import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';

class Credential extends Component {
  constructor(props){
    super(props);

    this.state = {
        fields: {},
        errors: {}
    }
 }

 handleValidation(){
     let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

     //Name
     if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
     }

     if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
           formIsValid = false;
           errors["name"] = "Only letters";
        }        
     }

     //Email
     if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
     }

     if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
           formIsValid = false;
           errors["email"] = "Email is not valid";
         }
    }  

    this.setState({errors: errors});
    return formIsValid;
}

contactSubmit(e){
     e.preventDefault();

     if(this.handleValidation()){
        alert("Form submitted");
     }else{
        alert("Form has errors.")
     }

 }

 handleChange(field, e){         
     let fields = this.state.fields;
     fields[field] = e.target.value;        
     this.setState({fields});
 }

    render() {
        return (
            <div className="credential-container">
             <h1>VALUE ADDED TAX RETURN FORM 002 </h1>
             <h4>Type in Your Information</h4>
                <Form  name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                <Row form>
          <Col md={6}>
            <FormGroup row>
            <Label for="exampleDate" sm={6}>Beginning Date</Label>
              <Col sm={6}>
              <Input
            type="date"
            name="date"
            id="exampleDate"
            
          />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
            <Label className="right-contactform" for="exampleDate" sm={5}>Ending Date</Label>
              <Col sm={6}>
              <Input
            type="date"
            name="date"
            id="exampleDate"
          
          />
              </Col>
            </FormGroup>
          </Col>
        </Row>
      <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label  sm={6}>Company Name </Label>
              <Col sm={6}>
              <Input type="text" id="companyname"onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
              <span style={{color: "red"}}>{this.state.errors["name"]}</span>
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label className="right-contactform" sm={5}>TIN</Label>
              <Col sm={6}>
              <Input type="number"  id="tin" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label for="exampleEmail" sm={6}>Company Physical Address</Label>
              <Col sm={6}>
              <Input type="text" id="address" />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label className="right-contactform" sm={5}>Doc No.</Label>
              <Col sm={6}>
              <Input type="number"  id="docnumber" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label  sm={6}>Postal Address (Including Postal Code)</Label>
              <Col sm={6}>
              <Input type="text"  id="postaladdress" />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label className="right-contactform" sm={5}>Tel. No </Label>
              <Col sm={6}>
              <Input type="number" name="tel" id="tel" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label for="exampleEmail" sm={6}>E-Mail Address</Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
              <span style={{color: "red"}}>{this.state.errors["email"]}</span>
            </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label className="right-contactform" sm={5}>Corporate Website</Label>
              <Col sm={6}>
              <Input type="text" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
       <h1> <Button center >SUBMIT</Button></h1>
        </Form>
            </div>
        )
    }
}
export default Credential;