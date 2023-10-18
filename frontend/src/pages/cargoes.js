import * as React from 'react';
import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {Link} from "react-router-dom";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Card } from '@mui/material';
import axios from 'axios';
import {useSnackbar} from 'notistack';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const CustomizedTables = ()=> {

  const[cargoes, setCargoes] = useState([]);
  const[loading, setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar();
  useEffect(()=> {
    setLoading(true);
    axios
    .get('http://localhost:3030/api/cargoes/',{ crossdomain: true })
    .then((res)=> {
      setCargoes(res.data.data);
      enqueueSnackbar('Record added successfully', {variant: 'success'});
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      enqueueSnackbar('Error', {variant: ''});
      setLoading(false);
    })
  },[]);

  return (
    
    <TableContainer component={Paper}>
      <Link to="/add">
        <Button variant="outlined"  startIcon={<AddBoxIcon />}>
          Add New cargo
        </Button>
      </Link>
      <Table sx={{ minWidth: 700 , p:10}}   aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cargo ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="right">Store Id&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Stored By&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Handling fee&nbsp;($)</StyledTableCell>
            <StyledTableCell align="right">Date & Time&nbsp;</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cargoes.map((cargo) => (
            <StyledTableRow key={cargo._id}>
              <StyledTableCell component="th" scope="row">
                {cargo._id}
              </StyledTableCell>
              <StyledTableCell align="left">{cargo.name}</StyledTableCell>
              <StyledTableCell align="left">{cargo.description}</StyledTableCell>
              <StyledTableCell align="right">{cargo.storeID}</StyledTableCell>
              <StyledTableCell align="right">{cargo.storedBy}</StyledTableCell>
              <StyledTableCell align="right">{cargo.amount}</StyledTableCell>
              <StyledTableCell align="right">{cargo.createdAt}</StyledTableCell>
              <StyledTableCell align="right">
                <Link to={`/edit/${cargo._id}`}>
                    <Button variant="text" fontSize="large" startIcon={<EditRoundedIcon />}/>
                </Link>
                <Link to={`/delete/${cargo._id}`}>
                  <Button variant="text" fontSize="large" startIcon={<DeleteRoundedIcon />} />
                </Link>
                  
                
                <Button variant="text" fontSize="large" startIcon={<InfoRoundedIcon />} />
                
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;
