// Importing react modules and dependencies
import React, { useContext, useEffect, useState } from 'react';
// Importing the styles
import '../Styles/CalcScreen.css';
// Importing the context
import { calculatorContext } from '../Context/CalcContext';
// Importing the textfit component
import { Textfit } from 'react-textfit';

// Calculator screen component
function CalcScreen() {
  // get value from context 
  const { calc } = useContext(calculatorContext)
  // State to handle the calculator display
  const [num, setNum] = useState(calc.num? calc.num:calc.res);
  // to handle the state change
  useEffect(() => {
    setNum(calc.num? calc.num:calc.res)
  }, [calc.num, calc.res, calc.sign])

  // return the JSX for the component
  return (
    <Textfit className='screen' max={50} mode='single'>
        {num}
    </Textfit>
  )
}

export default CalcScreen