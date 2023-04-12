import React, { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

import './App.css';
function reducer(state , {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT :
      return{
        ...state,
        currentOperand :`${currentOperand || ""}  ${payload.digit}`,
      }
  }
   
}
export const ACTIONS ={
  ADD_DIGIT : 'ad-digit',
  CHOOSE_OPERATION :'choose-op',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUATE : 'evaluate'


}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch]= useReducer(reducer,{})
  //dispatch({type :ACTIONS.ADD_DIGIT,payload : {digit :1}})
  return (
    <div className="App">
      <div className="calculator-app">
        <div className ="output">
          <div className ="previous-operand">{previousOperand}{operation}</div>
          <div className ="current-operand">{currentOperand}</div>

        </div>
        <button className ="span-two">AC</button>
        <button>DEL</button>
        <OperationButton operation digit="÷" dispatch={dispatch}/>
        <DigitButton digit="1" dispatch={dispatch}/>
        <DigitButton digit="2" dispatch={dispatch}/>
        <DigitButton digit="3" dispatch={dispatch}/>
        <OperationButton operation digit="*" dispatch={dispatch}/>
        <DigitButton digit="4" dispatch={dispatch}/>
        <DigitButton digit="5" dispatch={dispatch}/>
        <DigitButton digit="6" dispatch={dispatch}/>
        <OperationButton operation digit="+" dispatch={dispatch}/>
        <DigitButton digit="7" dispatch={dispatch}/>
        <DigitButton digit="8" dispatch={dispatch}/>
        <DigitButton digit="9" dispatch={dispatch}/>
        <OperationButton operation digit="-" dispatch={dispatch}/>
        <DigitButton digit="0" dispatch={dispatch}/>
        <DigitButton digit="." dispatch={dispatch}/>
        
        <button className="span-two">=</button>
      </div>


      
      
    </div>
  );
}

export default App;
