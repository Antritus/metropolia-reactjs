import {useEffect, useState} from "react";
import {AgGridReact} from "ag-grid-react";

import {ModuleRegistry, AllCommunityModule} from 'ag-grid-community';

import "./App.css"

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import AddTodo from "./components/AddTodo.jsx";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
    const [todos, setTodos] = useState([]);

    const columnDefs = [
        {field: "description", sortable: true, filter: true},
        {field: "date", sortable: true, filter: true},
        {field: "priority", sortable: true, filter: true}
    ];
    const fetchItems = async () => {
        console.log(import.meta.env.VITE_API_URL)
        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL
            );
            const data = await response.json();

            if (!data.documents) {
                setTodos([]);
                return;
            }

            const actualData = data.documents.map(doc => ({
                description: doc.fields?.description?.stringValue || "",
                date: doc.fields?.date?.stringValue || "",
                priority: doc.fields?.priority?.stringValue || ""
            }));

            setTodos(actualData);
        } catch (err) {
            console.error(err);
        }
    };

    const addTodo = (newTodo) => {
        fetch(import.meta.env.VITE_API_URL,
            {
                method: "POST",
                body: JSON.stringify(newTodo)
            }).then(response=>fetchItems())
            .catch(err=> console.error(err));
    }


    useEffect(() => {
        fetchItems();
    }, []);
    return (
        <>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5">
                            TodoList
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Button onClick={fetchItems}>Fetch</Button>
                <AddTodo addTodo={addTodo}/>
                <div className="ag-theme-alpine" style={{height: 500, width: "100%", justifyContent: "center"}}>
                    <AgGridReact
                        theme="legacy"
                        rowData={todos}
                        columnDefs={columnDefs}
                        pagination={true}
                        paginationPageSize={10}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
