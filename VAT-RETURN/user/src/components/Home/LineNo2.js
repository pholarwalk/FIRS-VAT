import React from "react";

// config

// components
import { Modal, ModalHeader, ModalBody, Button, Table } from "reactstrap";

// images

// styles

class LineNo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    console.log(this.state.email);
    return (
      <div>
        <Button  onClick={this.toggle} >{this.props.buttonLabel} Line No </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            <div>
              <h1>GUIDE FOR VALUE ADDED TAX FILING</h1>
              <p>
                This guide shows how the VAT Return Form 002 is to be completed
                and filed either online or at tax office. The tax offices have
                mandate to demmand for any additional The return is due not
                later than 21st day of the month following the month of
                reporting
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            <Table hover dark>
              <thead>
                <tr>
                  <th>Line No</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
               
                <tr>
                  <th scope="row">40</th>
                  <td>
                    Domestic supplies/purchases other than zero rated and
                    exempted goods and services: Enter on line 40 the amount of
                    Domestic supplies/purchases other than zero rated and
                    exempted goods and services
                  </td>
                </tr>
                <tr>
                  <th scope="row">45</th>
                  <td>
                    Purchases Not Wholly Used in Making VATable Supplies: Enter
                    on line 45 total purchaeses not wholly used in making
                    VATable goods and Service.
                  </td>
                </tr>
                <tr>
                  <th scope="row">55</th>
                  <td>
                    VAT Suffered on Domestic Supplies; Enter on line 55 the
                    result of adding lines 40 and 45 and multiplying by 0.05
                    (i.e VAT rate of 5%)
                  </td>
                </tr>
                <tr>
                  <th scope="row">60</th>
                  <td>
                    Domestic Supplies/Purchases for Zero Rated Goods and
                    Services: Enter on line 60 the Domestic supplies/purchases
                    for zero rated goods and services.
                  </td>
                </tr>

                <tr>
                  <th scope="row">65</th>
                  <td>
                    Purchases Not Wholly Used in Making Zero Rated Supplies:
                    Enter on line 65 the purchases not wholly used in making
                    Zero rated supplies .
                  </td>
                </tr>
                <tr>
                  <th scope="row">75</th>
                  <td>
                    VAT Suffered on Zero Rated Supplies: Enter on line 75 the
                    result of adding lines 60 and 65 and multiplying it by 0.05
                    (i.e VAT rate of 5%)
                  </td>
                </tr>
                <tr>
                  <th scope="row">85</th>
                  <td>
                    Purchased Imports: Enter on line 85 the import VAT paid on
                    importation of chargeable goods. Chargeable goods are goods
                    whose input tax are not to be expensed or capitalised.
                  </td>
                </tr>
                <tr>
                  <th scope="row">90</th>
                  <td>
                    Total Purchases Subject to VAT Incurred: Enter on line 90
                    the result of subtracting lines 45 from 40 and adding line
                    85. However, the claim on zero rated input will only form
                    part of calculation after FIRS audit.
                  </td>
                </tr>
                <tr>
                  <th scope="row">95</th>
                  <td>
                    Total Input Tax: Enter on line 95 the result of multiplying
                    line 90 by 0.05 (i.e VAT rate of 5%)
                  </td>
                </tr>
                <tr>
                  <th scope="row">100</th>
                  <td>
                    Enter on line 100 of the main form, the result of
                    subtracting line 95 (Input Tax) from line 35 (Output Tax)
                  </td>
                </tr>
                
              </tbody>
            </Table>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LineNo2;
