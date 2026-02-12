import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState("");

    const fetchData = () => {
        fetch("/api/api/users/" + userId,
            {
                method: "GET",
                headers: {
                    "x-api-key": "reqres_252dc3b339b641659a17411dde03afe7"
                }
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error("Response not ok");
                }
                return response.json()
            })
            .then(resData => setUser(resData.data))
            .catch(err => console.error(err))
    }

    const inputChanged = (event) => {
        setUserId(event.target.value);
    }

    return (
        <>
            <input placeholder="User ID" value={userId} onChange={inputChanged}/>
            <button onClick={fetchData}>Fetch</button>
            <p>{user.first_name} {user.last_name} {user.email}</p>
        </>
    )
}

export default App
