import React from 'react';
import '../Styles/Calculator.css'
import CalcScreen from './CalcScreen';
import ButtonBox from './ButtonBox';

function Calculator() {

    const buttonValues = [
        ["c", "+/-", "%", "÷"],
        [7, 8, 9, 'x'],
        [4, 5, 6, "-"],
        [1, 2, 3, '+'],
        [0, '.', '=']
    ]

  return (
    <div className='calculator'>
        <CalcScreen />
        <ButtonBox buttonValues={buttonValues}/>
    </div>
  )
}

export default Calculator