import {useState} from 'react'
import './App.css'

function App() {
    const [person, setPerson] = useState({firstname: "", lastname: "", email: ""});

    const inputChanged = (event) => {
        setPerson({...person, [event.target.name]: event.target.value});
    }

    const showAlert = () => {
        alert(`Hello ${person.firstname} ${person.lastname}`)
    }

    const formSubmitted = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <p>Name: {person.firstname} {person.lastname} Email: {person.email}</p>

            <form onSubmit={formSubmitted}>
                <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged}/>
                <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged}/>
                <input placeholder="Email" name="email" value={person.email} onChange={inputChanged}/>
                <button onClick={showAlert}>Submit</button>
            </form>
        </>
    )
}

export default App
