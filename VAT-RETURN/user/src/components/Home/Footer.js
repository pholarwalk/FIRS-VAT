import React from 'react';

// config

// components
import {
  Nav,
  // NavLink,
  CardDeck
} from 'reactstrap';

// images

// styles

class Footer extends React.Component {
  render() {
    return (
      <div className="whole-footer" >
        <CardDeck >
          <div className="col-lg-7 col-md-7 col-sm-7">
            <Nav vertical >
            <div>
             
              <img src={require("../../images/logo.png")}  alt="josla" />
              
              </div>
              
            </Nav>
          </div>
          <div className="txt col-lg-5 col-md-5 col-sm-5">
            <div className="icons">
                <a className="hov" href='/'><i className="fab fa-facebook-f"></i></a>
                <a className="hov" href='/'><i className="fab fa-twitter"></i></a>
                <a className="hov" href='/'><i className="fab fa-instagram" ></i></a>
              </div>
            
            
          </div>
        </CardDeck>

        <h6 className="txt2 row-lg-12 row-md-12 row-sm-12" >© 2019 Federal Inland Revenue Service, All Rights Reserved. </h6>
      </div>

    );
  }
}

export default Footer;
