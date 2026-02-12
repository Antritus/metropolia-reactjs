import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [person, setPerson] = useState({name: "", age: 0})

    const inputChanged = (event) => {
        setPerson({...person, [event.target.name]: event.target.value})
    }

  return (
    <>
        <input placeholder="Name" name="name" value={person.name} onChange={inputChanged}/>
        <input placeholder="Age" name="age" value={person.age} onChange={inputChanged}/>
        <button onClick={() => {
            if (person.age < 18) {
                alert("You are too young");
            } else {
                alert(`Hello ${person.name}`)
            }
        }}>Submit</button>
    </>
  )
}

export default App
