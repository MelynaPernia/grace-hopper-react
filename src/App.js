import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/components/header';
import Main from './main/components/main';
import Aside from './aside/components/aside';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Main/>
        <Aside/>
      </div>
    );
  }
}

export default App;
