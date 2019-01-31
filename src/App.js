import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Models from './components/Models';
import History from './components/History';

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
        <div className="container">
          <div className= "row mx auto">
            <History />
            <Models />
          </div>
        </div>
      </div>

      
    );
  }
}

export default App;
