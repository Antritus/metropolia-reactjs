import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css'
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import Todo from "./components/Todo.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>{' '}
                <Link to="/todolist">Todolist</Link>{' '}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todolist" element={<Todo />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
