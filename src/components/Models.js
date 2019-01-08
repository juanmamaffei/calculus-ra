import React, {Component} from 'react';
import YouTube from './Youtube';
import { modelos } from '../mockup';

class Models extends Component {
    constructor(){
        super();
        // this.modelos = this.state.modelos.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.state = { title: '', qr: ''};
        
    }
    changeTitle(t, qr){
        this.setState({title: t, qr: qr});
        console.log(this.state.qr)
    }

    render(){
        const models = modelos.map((mod,i)=>{
            var qr = "/api/v1/show?qr=" + mod.qr;
            return (
                
                <div className="card col-sm-3 mt-4 ml-1 mr-1" key={i}>
                <div className="card-body">
                
                    <h5 className="card-title">{mod.title}</h5>
                    <p className="card-text"><strong>Código QR:</strong>{mod.qr}</p>
                    <YouTube video={mod.destination} autoplay="0" rel="0" modest="1" />
                    <button onClick={()=>{ this.changeTitle(mod.title, mod.qr) }} className="btn btn-primary">Abrir</button>
                    
                </div>
                </div>
            )
            });
        return (<div className="row mx-auto">{ models }</div>);
    }
}
export default Models;