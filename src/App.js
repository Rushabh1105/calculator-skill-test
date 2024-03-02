// importing the calculator component
import Calculator from "./Components/Calculator";
// importing the context provider to the app
import CalculatorProvider from "./Context/CalcContext";
import React from 'react'

// App component
function App() {
  // Return the jsx for the app
  return (
    <CalculatorProvider>
      <div className="App">
        <Calculator />
      </div>
    </CalculatorProvider>
  );
}

export default App;
