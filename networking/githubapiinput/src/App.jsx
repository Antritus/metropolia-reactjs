import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [foundRepositories, setFoundRepositories] = useState([])
    const [search, setSearch] = useState("React");

    const fetchGithub = () => {
        fetch("https://api.github.com/search/repositories?q=" + search)
            .then(response => {
                if (!response.ok) {
                    throw Error("Network error accorded " + response.status);
                }
                return response.json();
            })
            .then(resData => {
                setFoundRepositories(resData.items);
            })
    }

    useEffect(fetchGithub, []);

    const onChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <h1>Repositories</h1>
            <input value={search} onChange={onChange}/>
            <button onClick={fetchGithub}>Search</button>
            <table>
                <thead>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>URL</b></td>
                </tr>
                </thead>
                <tbody>
                {
                    foundRepositories.map(repo =>
                        <tr>
                            <td>{repo.name}</td>
                            <td><a href={repo.html_url}>{repo.html_url}</a></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default App
