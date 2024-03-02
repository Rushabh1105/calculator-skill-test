import React, { useContext } from 'react';
import '../Styles/Button.css';
import { calculatorContext } from '../Context/CalcContext';

function Button(props) {
  const { value } = props;
  const { calc, setCalc } = useContext(calculatorContext);

  const decimalClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.')?calc.num+value : calc.num
    })
  }

  const clearClick = () => {
    setCalc({
      sign: '',
      num: 0,
      res: 0,
    })
  }

  const operationClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  const equalClick = () => {

    if(calc.num && calc.res){

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

  const percentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: '',
    })
  }

  const changeSignClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    })
  }

  const handleNumberClick = () => {
    const numString = value.toString();
    let numValue;

    if(numString === '0' && calc.num === 0){
      numValue = '0';
    }else{
      numValue = Number(calc.num + numString)
    }

    setCalc({
      ...calc,
      num: numValue
    })
  }

  

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

    if(result[value]){
      return result[value]();
    }else{
      return handleNumberClick();
    }
  }

  return (
    <button className={`button ${getStyle(value)}`} onClick={() => handleClick(value)}>
      {value}
    </button>
  )
}

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