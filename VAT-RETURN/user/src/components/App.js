import React from 'react';

// config

// components
import NavBar from "./Home/NavBar";
import Forms from "./Home/Forms";

import Footer from "./Home/Footer";

// images

// styles
import '../styles/App.css';
import Credential from './Home/Credential';


class App extends React.Component {
  render() {
    return (
    <div >
    <NavBar  />
    
        <Credential/>
        <div className="form-bg">
        <Forms />
        </div> 
        
        <Footer />
        </div>
      

    );
  }
}

export default App;
