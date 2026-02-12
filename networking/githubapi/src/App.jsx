import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [foundRepositories, setFoundRepositories] = useState([])

    const fetchGithub = () => {
      fetch("https://api.github.com/search/repositories?q=react")
          .then(response=> {
              if (!response.ok){
                  throw Error("Network error accorded "+ response.status);
              }
              return response.json();
          })
          .then(resData=> {
              setFoundRepositories(resData.items);
          })
    }

    useEffect(fetchGithub, []);

  return (
    <>
        <h1>Repositories</h1>
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
                        <td><a>{repo.html_url}</a></td>
                    </tr>
                )
            }
            </tbody>
        </table>
    </>
  )
}

export default App
