import React from 'react';
import '../Styles/ButtonBox.css';
import Button from './Button';

function ButtonBox(props) {
    const { buttonValues } = props
  return (
    <div className='button-box'>
        {
            buttonValues.flat().map((btn, idx) => (
                <Button value={btn} key={idx}/>
            ))
        }
    </div>
  )
}

export default ButtonBox