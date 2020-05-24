import React,{useReducer} from 'react';
// the overall concept is to malke the data available is all our child components
export default (reducer,actions,initialState)=>{
    const Context=React.createContext();

    const Provider=({children})=>{
        const [state,dispatch]=useReducer(reducer,initialState);
//all actions gonna call with dispatch
        const boundActions={};
        for (let key in actions){
            boundActions[key]=actions[key](dispatch);
        }
        //console.log(state);
        // to make the isSigned calue  availbale in all our app we have to define in Provider
        return(
            <Context.Provider value={{state,...boundActions}}>
                {children}
            </Context.Provider>
        );
    };
    return{Context,Provider};

};




