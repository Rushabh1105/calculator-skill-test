import React from 'react';
// Importing the styles for button box
import '../Styles/ButtonBox.css';
// import button component
import Button from './Button';

// Return button box component
function ButtonBox(props) {
  // get button values fron props from parent 
  const { buttonValues } = props

  // return JSX for button box 
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