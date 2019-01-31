import React from 'react';

class History extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            historial: [],
        };
    }
    
    render(){
        return(
        <div className="col-sm-3">
            <h2>Historial</h2>
            <ul className="list-group">
                {this.state.historial.map(ev=><li className="list-group-item">{ev}</li>)}
            </ul>
        </div>);
    }
}
export default History;