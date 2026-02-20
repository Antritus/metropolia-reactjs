import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";

function AddTodo(props) {
    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({title: "", author: "", year: "", isbn: "", price: ""})

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleSave = () => {
        props.addTodo(todo)
        handleClose()
    }

    const inputChanged = () => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }
    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Add Todo
            </Button>
            <Dialog open={open}>
                <DialogTitle>New todo</DialogTitle>
                <DialogContent>
                    <TextField
                        name="title"
                        value={todo.title}
                        onChange={inputChanged}
                        margin="dense"
                        label="title"
                        fullWidth
                    />
                    <TextField
                        name="author"
                        value={todo.author}
                        onChange={inputChanged}
                        margin="dense"
                        label="author"
                        fullWidth
                    />
                    <TextField
                        name="year"
                        value={todo.year}
                        onChange={inputChanged}
                        margin="dense"
                        label="year"
                        fullWidth
                    />
                    <TextField
                        name="isbn"
                        value={todo.isbn}
                        onChange={inputChanged}
                        margin="dense"
                        label="isbn"
                        fullWidth
                    />
                    <TextField
                        name="price"
                        value={todo.price}
                        onChange={inputChanged}
                        margin="dense"
                        label="price"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>Cancel</Button>
                    <Button color="primary" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddTodo;