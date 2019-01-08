import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';

import Models from './components/Models';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      title: "<Seleccione un módulo>",
      modmax: 10,
      time: 0
    }
    setInterval(() => {
      this.setState({time: this.state.time + 1});
    }, 1000);
  }

 
  render() {


    return (
      <div className="App"> 
      
        <Navigation title={ this.state.title } time={ this.state.time } />


        <Models />

        
      
      </div>

      
    );
  }
}

export default App;
