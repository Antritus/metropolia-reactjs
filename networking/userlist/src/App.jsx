import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [users, setUsers] = useState([])
    const [avatars, setAvatars] = useState([])

    useEffect(() => {
        fetch('/api/api/users',
            {
                method: "GET",
                headers: {
                    "x-api-key": "reqres_252dc3b339b641659a17411dde03afe7"
                }
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error : " + response.status);
                }
                return response.json();
            })
            .then(resData => setUsers(resData.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <table>
                <tbody>
                {
                    users.map(
                        (user) =>
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><img alt="Nasa APOD" src={user.avatar}/></td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default App
