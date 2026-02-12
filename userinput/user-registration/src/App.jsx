import {useState} from 'react'
import './App.css'

function App() {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    })
    const inputChanged = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }
    const submit = () => {
        if (user.firstname.length === 0) {
            alert("All fields are required");
        } else if (user.lastname.length === 0) {
            alert("All fields are required");
        } else if (user.email.length === 0) {
            alert("All fields are required");
        } else if (user.phone.length === 0) {
            alert("All fields are required");
        } else {
            alert(`Welcome ${user.firstname} ${user.lastname}`)
        }
    }
    return (
        <>
            <input placeholder="First Name" name="firstname" value={user.firstname} onChange={inputChanged}/>
            <input placeholder="Last Name" name="lastname" value={user.lastname} onChange={inputChanged}/>
            <input placeholder="Email" name="email" value={user.email} onChange={inputChanged}/>
            <input placeholder="Phone" name="phone" value={user.phone} onChange={inputChanged}/>
            <button onClick={submit}>Submit</button>
        </>
    )
}

export default App
