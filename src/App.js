import React, { Component } from 'react';
import Header from './Header'
import Main from "./Main";
import {Footer} from "./Footer";

class App extends Component {
  render() {
    return (
      <div style={{flex: 1, padding: 20}}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
