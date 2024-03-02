import React, { useContext, useEffect, useState } from 'react';
import '../Styles/CalcScreen.css';
import { calculatorContext } from '../Context/CalcContext';
import { Textfit } from 'react-textfit';

function CalcScreen() {
    const { calc } = useContext(calculatorContext)
    const [num, setNum] = useState(calc.num? calc.num:calc.res);

    useEffect(() => {
        setNum(calc.num? calc.num:calc.res)
    }, [calc.num, calc.res, calc.sign])
  return (
    <Textfit className='screen' max={50} mode='single'>
        {num}
    </Textfit>
  )
}

export default CalcScreen