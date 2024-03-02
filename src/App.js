import Calculator from "./Components/Calculator";
import CalculatorProvider from "./Context/CalcContext";
import React from 'react'

function App() {
  return (
    <CalculatorProvider>
      <div className="App">
        <Calculator />
      </div>
    </CalculatorProvider>
  );
}

export default App;
