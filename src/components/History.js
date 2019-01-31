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
        this.borrarHistorial=this.borrarHistorial.bind(this);
        
    }
    borrarHistorial(e){
        e.preventDefault();
        store.dispatch({
            type: "BORRAR_HISTORIAL",
        });
    }
    render(){
        return(
        <div className="col-sm-7">
            <h2>Historial</h2>
            
            <ul className="list-group">
                {this.state.historial.map((ev)=>
                <li className="list-group-item d-flex justify-content-between align-items-center">{ev} 
                </li>)}
            </ul>
            <a href="" onClick={(e)=>this.borrarHistorial(e)}>Limpiar</a>
        </div>);
    }
}
export default History;