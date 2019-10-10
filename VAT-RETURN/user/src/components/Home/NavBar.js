import React from 'react';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // Spinner
} from 'reactstrap';
// import LineNo from './LineNo';

// images

// styles

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div  >
        <Navbar expand="md" id="home" className="B-jumbotron1 " >
          <NavbarBrand className="brandlogo" href="#"><img src={require("../../images/logo.png")} alt="FIRS" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {/* <NavLink className="line" href="#"> <LineNo/></NavLink> */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              
              <NavItem>
                
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Go Back To Homepage</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
