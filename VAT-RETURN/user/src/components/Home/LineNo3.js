import React from "react";

// config

// components
import { Modal, ModalHeader, ModalBody, Button, Table } from "reactstrap";

// images

// styles

class LineNo3 extends React.Component {
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
        <Button  onClick={this.toggle} >{this.props.buttonLabel} Line No</Button>

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
                  <th scope="row">105</th>
                  <td>
                    Input Tax on VAT Withheld by MDAs and Oil & Gas Companies:
                    Enter on line 105 the output tax withheld by MDAs which are
                    not already treated in line 22 sales adjustment. Note that
                    construction and service industries cannot make any claim on
                    this line. FIRS would require the completion of schedule E
                    for details. This can be attached as pdf file to the returns
                  </td>
                </tr>
                <tr>
                  <th scope="row">110</th>
                  <td>
                    Automatic VAT Payment in Current Period: Enter on line 110
                    the total input tax claimable on internet purchases for
                    resale or production
                  </td>
                </tr>
                <tr>
                  <th scope="row">115</th>
                  <td>
                    Net VAT Balance for Current Period: Enter on line 115 the
                    result of subtracting lines 105 and line 110 from line 100.
                    Note this line is non-negative
                  </td>
                </tr>
                <tr>
                  <th scope="row">120</th>
                  <td>
                    VAT Credit Brought Forward: Enter on line 120 the previous
                    month's VAT credit brought forward (if any). The first year
                    MUST be approved before it is entered in SIGTAS
                  </td>
                </tr>
                <tr>
                  <th scope="row">130</th>
                  <td>
                    VAT credit for the current period: Enter on line 130 any
                    negative balance obtained in line 115
                  </td>
                </tr>
                <tr>
                  <th scope="row">135</th>
                  <td>
                    Total VAT Credit: Enter on line 135 the total VAT Credit for
                    the reporting month (i.e Any negative value in line 115 +
                    Any balance brought forward in line 120). This line is
                    automatically calculated by the system
                  </td>
                </tr>
                <tr>
                  <th scope="row">140</th>
                  <td>
                    Relieved VAT Credit: Enter on line 140 the lower of line 115
                    and line 135 where line 115 is negative, otherwise enter
                    zero. Note all cash refund made by FIRS should be adjusted
                    also on this line
                  </td>
                </tr>
                <tr>
                  <th scope="row">145</th>
                  <td>
                    VAT Credit Carry Forward: Enter on line 145 the result of
                    substracting line 140 from line 135. Note the system will
                    automatically carry forward any unrelieved balance on this
                    line.
                  </td>
                </tr>
                <tr>
                  <th scope="row">150</th>
                  <td>
                    VAT Payable: Enter on line 150 the VAT balance due from
                    Taxpayer to FIRS which is the result of subtracting Lines
                    140 from 115
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

export default LineNo3;
