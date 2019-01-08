import React, { Component } from 'react';

class Navigation extends Component {

    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="./" className="navbar-brand">CalculusRA</a>
                <span className="navItem">{ this.props.title }</span>
                <a href="./" >{this.props.time }</a>
            </nav>
        );
    }
}
export default Navigation;