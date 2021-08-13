// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Navbar from './Component/Navbar/Navbar';
import DropFile from './Component/Dropfile/Dropfile';
import Features from './Component/Features/Features';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar src="img/logo-HD-01.png"></Navbar>
          <DropFile src="img/tnw-logo.svg"></DropFile>
          <Features src="img/demo-screen.mp4"></Features>
          <Contact/>
          <Footer/>
      </div>
    );
  }
}

export default App;
