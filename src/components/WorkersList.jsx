import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useContext } from 'react';
import { workersContext } from '../WorkersContext';

export default function WorkersList() {

  const {workers, getWorkers} = useContext(workersContext);

  useEffect(() => {
    getWorkers()
  }, [])

  return (
    <TableContainer component={Paper} sx={{width:'80%', margin: '5vmin auto'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Work Days</TableCell>
            <TableCell align="right">Salary per day</TableCell>
            <TableCell align="right">Salary Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((row, ind) => (
            <TableRow
              key={ind}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.workdays}</TableCell>
              <TableCell align="right">{row.wage}</TableCell>
              <TableCell align="right">{row.workdays * row.wage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
