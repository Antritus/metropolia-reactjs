import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [result, setResult] = useState(0);
    const [values, setValues] = useState({firstValue: "", secondValue: ""})

    const inputChanged = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    const sum = () => {
        const firstVal = Number(values.firstValue);
        const secondVal = Number(values.secondValue);
        const val = firstVal+secondVal;

        setResult(val)
    }
    const subtract = () => {
        const firstVal = Number(values.firstValue);
        const secondVal = Number(values.secondValue);
        const val = firstVal-secondVal;

        setResult(val)
    }

    return (
        <>
            <p>Result = {result}</p>
            <input placeholder="First number" name="firstValue" value={values.firstValue} onChange={inputChanged}/>
            <input placeholder="Second number" name="secondValue" value={values.secondValue} onChange={inputChanged}/>
            <button onClick={sum}>+</button>
            <button onClick={subtract}>-</button>
        </>
    )
}

export default App
