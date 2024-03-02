// Importing the react modules and dependencies
import React, { useContext } from 'react';
// Importing the stylesheets
import '../Styles/Button.css';
// importing the context
import { calculatorContext } from '../Context/CalcContext';

// Button component
function Button(props) {
  // Get value for each button from props
  const { value } = props;
  // Get context value from context 
  const { calc, setCalc } = useContext(calculatorContext);

  // Function to handle the decimal click
  // If user wants to add the decimal then it handles it
  // If the number is already decimal the it wont do anything
  const decimalClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.')?calc.num+value : calc.num
    })
  }

  // This function handles the clear functionality
  // It clears the user input and sign
  const clearClick = () => {
    setCalc({
      sign: '',
      num: 0,
      res: 0,
    })
  }

  // This function handles the sign selected by the user
  // For the aithmatic operation
  const operationClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  // This function handles the arithmatic operation
  // It calculates the result and display it to user
  const equalClick = () => {

    if(calc.num && calc.res){
      // this function calculates and returns the result
      // Depending upon the user sign
      const HandleArithmatic = (num1, num2, sign) => {
        const result = {
          '+': (num1, num2) => num1+num2,
          '-': (num1, num2) => num1-num2,
          'x': (num1, num2) => num1*num2,
          '÷':(num1, num2) => num1/num2,
        }
    
        return result[sign](num1, num2)
      }
      setCalc({
        res: HandleArithmatic(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0,
      })
    }
    
  }

  // This function handles the percentage click function
  const percentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: '',
    })
  }

  // This function is used to invert the sign of number
  const changeSignClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    })
  }

  // This function handles the button click when user
  // Click on any number from 0 to 9
  const handleNumberClick = () => {
    const numString = value.toString();
    let numValue;
    // If number is zero then it do nothing
    if(numString === '0' && calc.num === 0){
      numValue = '0';
    }else{
      // If its not zero the then it appends the number
      numValue = Number(calc.num + numString)
    }

    setCalc({
      ...calc,
      num: numValue
    })
  }

  // This is main function responsible for the press of
  // any button in button box
  const handleClick = (value) => {
    const result = {
      '.': decimalClick,
      'c': clearClick,
      '÷': operationClick,
      'x': operationClick,
      '-': operationClick,
      '+': operationClick,
      '=': equalClick,
      '%': percentClick,
      '+/-': changeSignClick,
    }

    // if user click any button except the number
    if(result[value]){
      return result[value]();
    }else{
      // If user click on number button
      return handleNumberClick();
    }
  }

  // Return JSX for button
  return (
    <button className={`button ${getStyle(value)}`} onClick={() => handleClick(value)}>
      {value}
    </button>
  )
}

// Function to handle style of button
function getStyle(name){
  const className = {
    "0": 'zero',
    "÷": 'side',
    "x": 'side',
    "-": 'side',
    "+": 'side',
    "=": 'side',
  }

  return className[name]
}

export default Button