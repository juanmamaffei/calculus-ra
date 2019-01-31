import {createStore} from 'redux';

const reducer= (state, action) => {
    if(action === "CAMBIAR_MODULO"){
        return{
            ...state,
            historial: state.historial.concat(action.modulo),
        }
    }
    return state;
}

export default createStore(reducer, {moduloactual: "", historial: []});