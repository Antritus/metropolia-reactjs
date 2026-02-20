import {useEffect, useState} from "react";
import {AgGridReact} from "ag-grid-react";

import {ModuleRegistry, AllCommunityModule} from 'ag-grid-community';

import "./App.css"

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import AddTodo from "./components/AddTodo.jsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
    const [todos, setTodos] = useState([]);

    const columnDefs = [
        {field: "title", sortable: true, filter: true},
        {field: "author", sortable: true, filter: true},
        {field: "year", sortable: true, filter: true},
        {field: "isbn", sortable: true, filter: true},
        {field: "price", sortable: true, filter: true},
        {
            headerName: '',
            field: 'id',
            width: 90,
            cellRenderer: params =>
                <IconButton onClick={() => deleteVal(params)} size="small" color="error">
                    <DeleteIcon />
                </IconButton>,
            sortable: true
        }
    ];
    const fetchItems = async () => {
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
                title: doc.fields?.title?.stringValue || "",
                author: doc.fields?.author?.stringValue || "",
                year: doc.fields?.year?.stringValue || "",
                isbn: doc.fields?.isbn?.stringValue || "",
                price: doc.fields?.price?.stringValue || "",
                id: fixId(doc.name || "")
            }));

            setTodos(actualData);
        } catch (err) {
            console.error(err);
        }
    };

    const addTodo = (newItem) => {
        let fields = {
            "title": {
                "stringValue": newItem.title,
            },
            "author": {
                "stringValue": newItem.author,
            },
            "year": {
                "stringValue": newItem.year,
            },
            "isbn": {
                "stringValue": newItem.isbn,
            },
            "price": {
                "stringValue": newItem.price,
            }
        };

        const json = {
            "fields": fields
        };

        fetch(import.meta.env.VITE_API_URL,
            {
                method: "POST",
                body: JSON.stringify(json)
            }).then(response=>fetchItems())
            .catch(err=> console.error(err));
    }

    const fixId = (name) => {
        return name.substring(name.lastIndexOf("/")+1, name.length);
    }

    const deleteVal = (data) => {
        const id = data.data.id;
        const url = `${import.meta.env.VITE_API_URL}/${id}`
        fetch(url,
            {
                method: 'DELETE',
            })
            .then(response => fetchItems())
            .catch(err => console.error(err))
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
                            Bookstore
                        </Typography>
                    </Toolbar>
                </AppBar>
                <AddTodo addTodo={addTodo}/>
                <div className="ag-theme-alpine" style={{height: 500, width: 1100, justifyContent: "center"}}>
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
