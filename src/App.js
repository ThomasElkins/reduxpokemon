import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import HeaderContainer from './components/containers/HeaderContainer';
import BodyContainer from './components/containers/BodyContainer';
import FooterContainer from './components/containers/FooterContainer';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <HeaderContainer />
        <BodyContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
