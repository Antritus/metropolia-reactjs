import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as querystring from "node:querystring";

function App() {
    const [question, setQuestion] = useState("");
    const [wait, setWait] = useState("");
    const fetchQuestion = () => {
        setWait("");
        fetch("https://opentdb.com/api.php?amount=1")
            .then(response => {
                if (!response.ok){
                    setWait("Please wait a moment before fetching a new question!");
                    throw new Error("Error fetching a new questionare");
                }
                return response.json();
            })
            .then(resData => {
                setQuestion(resData.results[0].question)
            })
            .catch(err=>console.log(err))
    }

  return (
    <>
        <p>{wait}</p>
        <p>{question}</p>
        <button onClick={fetchQuestion}>New question</button>
    </>
  )
}

export default App
