import React, { Component } from 'react';
import NavBar from './components/nav-bar';
import DropDown from './components/drop-down';
import StarBar from './components/starbar';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <DropDown />
          <StarBar />
          
              </div>
    );
  }
}

export default App;
