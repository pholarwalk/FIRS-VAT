import React from "react";

// config

// components
import { Modal, ModalHeader, ModalBody, Button, Table, Spinner } from "reactstrap";

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
        <Button  onClick={this.toggle} >{this.props.buttonLabel} Line No <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" /> </Button>

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

export default LineNo;
