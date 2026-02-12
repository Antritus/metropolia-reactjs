import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoGrid = ({ todos, deleteTodo }) => {

  const columns = [
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Tooltip title="Delete Todo">
          <IconButton
            size="small"
            color="error"
            onClick={() => deleteTodo(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const rows = todos.map((todo, index) => ({
    id: index,
    description: todo.description,
    date: todo.date,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 15]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default TodoGrid;
