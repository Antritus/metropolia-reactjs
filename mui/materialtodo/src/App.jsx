import {useState} from 'react';
import './App.css';
import {AppBar, Button, Stack, TextField, Toolbar, Tooltip, Typography} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import TodoGrid from "./components/TodoGrid.jsx";

function App() {
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => index !== row));
    }

    return (
        <>

            <AppBar position="static">
                <Toolbar>
                    <Typography varient="h6">
                        Todolist
                    </Typography>
                </Toolbar>
            </AppBar>

            <Stack
                direction="row"
                spacing={2}
                mt={2}
                justifyContent="center"
                alignItems="center"
            >
                <TextField
                    variant="standard"
                    label="Description"
                    name="description"
                    value={todo.description}
                    onChange={inputChanged}
                />
                <TextField
                    variant="standard"
                    label="Date"
                    name="date"
                    value={todo.date}
                    onChange={inputChanged}
                />
                <Button
                    variant="outlined"
                    onClick={addTodo}
                    startIcon={<SaveIcon/>}
                >Add</Button>
            </Stack>
            <TodoGrid todos={todos} deleteTodo={deleteTodo}></TodoGrid>
        </>
    );
}

export default App;