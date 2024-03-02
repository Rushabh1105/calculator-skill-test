// importing the react modules and dependencies
import { createContext, useState } from "react"

// create a calculator context
export const calculatorContext = createContext();

// context provider function
const CalculatorProvider = ({children}) => {
    // state to handle the calculator operations
    const [calc, setCalc] = useState({
        sign: '',
        num: 0,
        res: 0,
    })

    // provide the values to children component
    return (
        <calculatorContext.Provider value={{calc, setCalc}}>
            {children}
        </calculatorContext.Provider>
    )
}


export default CalculatorProvider;