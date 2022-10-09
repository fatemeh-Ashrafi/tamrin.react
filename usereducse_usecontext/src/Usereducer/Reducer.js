import React, { useReducer, useState } from 'react';

const initialState = 0 ; 
const types={
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
    TEST:"TEST",
    DECRE:"DECRE"
}
const reducer = (state,action)=>{
    switch (action.type) {
        case types.INCREMENT:
            return state + action.payload;
        case types.DECREMENT:
            return state - action.payload;
        case types.TEST:
            return state + action.payload;
        case types.DECRE:
            return state - action.payload;    
        default:
            return state;
    }
}  
function Reducer() {

    const [state,dispatch] = useReducer(reducer,initialState);

    const [value,setValue] = useState();
    const [fname,setFname] = useState();

    const[decrement , setDecrement] = useState()

    function handelValue(e) {
        setValue(parseInt(e.target.value) )
    }

    function onClickHandel(e) {
        setFname(e.target.value)
        dispatch({type:types.TEST , payload:value})
    }

    const handleDecrement = (e)=>{
        setDecrement(e.target.value)
        dispatch({type:types.DECRE , payload:value})
    }

  return (
    <div>
        <p>{state}</p>
        <button onClick={()=> dispatch({type :types.INCREMENT , payload:value})}>+ increment</button>
        <button onClick={()=> dispatch({type :types.DECREMENT , payload:value})}>- decrement</button>
        
        <input type='text' onChange={handelValue}/>
        <button onClick={onClickHandel }>increment</button>
        <button  onClick={handleDecrement}>decrement</button>


        {/* <input type='text' placeholder='name:'></input>
        <input type='text' placeholder='lastname'></input> */}
    </div>
  )
}

export default Reducer
