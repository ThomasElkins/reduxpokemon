import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import HeaderContainer from './containers/Header';
import BodyContainer from './containers/Body';
import FooterContainer from './containers/Footer';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <HeaderContainer />
        <BodyContainer/>
        <FooterContainer />
      </div>
    );
  }
}

export default App;
