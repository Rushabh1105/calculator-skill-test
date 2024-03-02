import { createContext, useState } from "react"

export const calculatorContext = createContext();

const CalculatorProvider = ({children}) => {

    const [calc, setCalc] = useState({
        sign: '',
        num: 0,
        res: 0,
    })

    return (
        <calculatorContext.Provider value={{calc, setCalc}}>
            {children}
        </calculatorContext.Provider>
    )
}


export default CalculatorProvider;