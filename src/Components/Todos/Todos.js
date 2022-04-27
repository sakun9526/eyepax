import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const columns = [
    { id: 'id', label: 'ID', minWidth: 80, align: 'left' },
    { id: 'title', label: 'Title', minWidth: 170, align: 'left' },
  ];


function Todos() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [todos, setTodos] = useState([]);
  
 const handleChangePage = (event, newPage) => {
    setPage(newPage);
 };
  
 const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
 };


 useEffect(() => {
     const fetchTodos = async () => {
         const response = await axios('https://jsonplaceholder.typicode.com/todos')
         setTodos(response.data);
     }
     fetchTodos();
 }, [])
  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 500, mt: 8 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {todos
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((todo) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={todo.id}>
                  <TableCell align="left">{todo.id}</TableCell>
                  <TableCell align="left">{todo.title}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination 
        rowsPerPageOptions={[10, 25, 100]} 
        component="div" 
        count={todos.length} 
        rowsPerPage={rowsPerPage} 
        page={page} 
        onPageChange={handleChangePage} 
        onRowsPerPageChange={handleChangeRowsPerPage}/>
  </Paper>
  )
}

export default Todos