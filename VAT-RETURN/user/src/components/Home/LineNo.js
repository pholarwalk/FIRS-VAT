import React from "react";

// config

// components
import { Modal, ModalHeader, ModalBody, Button, Table } from "reactstrap";

// images

// styles

class LineNo extends React.Component {
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
                  <th scope="row">10</th>
                  <td>
                    Total Sales/Income: Enter on line 10 Total Sales/Income from
                    all sources (excluding VAT) for the reporting period.
                  </td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>
                    Goods and Services exempted: Enter on line 15 the total
                    goods and services exempted included in line 10
                  </td>
                </tr>
                <tr>
                  <th scope="row">20</th>
                  <td>
                    Zero Rated Supplies: Enter on line 20 the total amount of
                    zero rated goods and services included in line 10
                  </td>
                </tr>
                <tr>
                  <th scope="row">22</th>
                  <td>
                    Sales Adjustments: Enter on line 22 the total adjustment
                    made for gross sales whose output tax was withheld by Agents
                    or not available for off-setting input tax and those of
                    one-of nature by Agent who have no sales which the taxpayer
                    should have filed using withholding VAT form. FIRS would
                    require completion of schedule B for details. This can be
                    attached as pdf file when filing. Note that this line can be
                    positive for omitted sales/Income fom previou peiods and
                    where adjustments are done on this line, taxpayer cannot
                    report anything again on line 105 of this form as it will
                    amounts to double charging
                  </td>
                </tr>
                <tr>
                  <th scope="row">25</th>
                  <td>
                    Sales/Income Subject to VAT: Enter on line 25 the result of
                    subtracting the addition of lines 15, 20 and 22 from line
                    10. Line 22 can be for claim(-) or remittance(+) for
                    previously omitted Sales/Income
                  </td>
                </tr>
                <tr>
                  <th scope="row">35</th>
                  <td>
                    Total Output Tax: Enter on line 35, the result of
                    multiplying line 25 by 0.05 (i.e VAT rate of 5%)
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

export default LineNo;
