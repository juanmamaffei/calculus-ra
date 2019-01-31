import React from 'react';
import store from '../store';

class History extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            historial: [],
        };

        store.subscribe(()=>{
            this.setState({
                historial: store.getState().historial,
            })
        })
        
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