import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';

class Credential extends Component {
    render() {
        return (
            <div className="credential-container">
             <h1>VALUE ADDED TAX RETURN FORM 002 </h1>
             <h2>Type in Your Information</h2>
                <Form >
                <Row form>
          <Col md={6}>
            <FormGroup row>
            <Label for="exampleDate" sm={6}>Beginning Date</Label>
              <Col sm={6}>
              <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
            <Label for="exampleDate" sm={6}>Ending Date</Label>
              <Col sm={6}>
              <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
              </Col>
            </FormGroup>
          </Col>
        </Row>
      <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label for="exampleEmail" sm={6}>Company Name </Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label for="examplePassword" sm={6}>TIN</Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label for="exampleEmail" sm={6}>Company Physical Address</Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label for="examplePassword" sm={6}>Doc No.</Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label for="exampleEmail" sm={6}>Postal Address (Including Postal Code)</Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label for="examplePassword" sm={6}>Tel. No </Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup row>
              <Label for="exampleEmail" sm={6}>E-Mail Address</Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label for="examplePassword" sm={6}>Corporate Website</Label>
              <Col sm={6}>
              <Input type="email" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Button center >SUMBIT</Button>
        </Form>
            </div>
        )
    }
}
export default Credential;