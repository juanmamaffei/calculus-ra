import React, { Component } from 'react';
import store from '../store';

class Navigation extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           title: '<Seleccione un módulo>'
        }
        store.subscribe(()=>{
            this.setState({
                title: store.getState().moduloActual
            });
        })
      }

    render(){
        
        
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="./" className="navbar-brand">CalculusRA</a>
                <span className="navItem">{ this.state.title }</span>
                <a href="./" >{this.props.time }</a>
            </nav>
        );
    }
}
export default Navigation;