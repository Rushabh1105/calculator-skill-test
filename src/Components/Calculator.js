import React from 'react';
// importing the styles
import '../Styles/Calculator.css'
// importing the screen component
import CalcScreen from './CalcScreen';
// importing the button box component
import ButtonBox from './ButtonBox';

// calculator component
function Calculator() {
  
  // Button values for each button
    const buttonValues = [
        ["c", "+/-", "%", "÷"],
        [7, 8, 9, 'x'],
        [4, 5, 6, "-"],
        [1, 2, 3, '+'],
        [0, '.', '=']
    ]

  // return the JSX for the calculator
  return (
    <div className='calculator'>
        <CalcScreen />
        <ButtonBox buttonValues={buttonValues}/>
    </div>
  )
}

export default Calculator