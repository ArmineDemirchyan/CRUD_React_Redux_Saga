import  React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { setUserSlice } from '../redux/slice/user';
import { DELETE_USER, GET_USERS } from '../redux/sagas/types';

export default function MyTable() {
  const rows = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {dispatch({ type: GET_USERS })}, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right"><Button onClick={() => dispatch(setUserSlice(row))} variant="contained">Edit</Button></TableCell>
              <TableCell align="right"><Button onClick={() => dispatch({type:DELETE_USER, id:row.id})} variant="outlined" color="error">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
