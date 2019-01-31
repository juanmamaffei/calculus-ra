import {createStore} from 'redux';

const reducer= (state, action) => {
    
    //Si la acción es CAMBIAR_MODULO
    if(action.type === "CAMBIAR_MODULO"){
        return{
            ...state,
            historial: state.historial.concat(action.modulo),
            moduloActual: action.modulo
        }
    }

    // si nunca se entró al if (porque no se ejecutó la acción CAMBIAR_MODULO), se retornará el state como estaba (sin cambios)
    return state;
}

export default createStore(reducer, {moduloactual: "", historial: []});