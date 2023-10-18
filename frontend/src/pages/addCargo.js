import * as React from "react";
import { useState} from "react";
import BackButton from "../components/backButton";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {useSnackbar} from 'notistack';
import axios from "axios";
import Alert from '@mui/material/Alert';

function NewCargo(name, description, storedBy, storeID, status, amount) {
  return { name, description, storedBy, storeID, status, amount };
}

const AddCargo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [storedBy, setStoredBy] = useState("");
  const [storeID, setStoreID] = useState("");
  const [status, setStatus] = useState("In store");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleSaveVoter = () => {
    const data = NewCargo(name, description, storedBy, storeID, status, amount);

    setLoading(true);
    axios
      .post(`http://localhost:3030/api/cargoes/new`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Record added successfully', {variant: 'success'});
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("An error happened. Please Chack console");
        enqueueSnackbar('Error', { variant: 'error' });
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      {loading ? <Spinner /> : ""}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <form autoComplete="off" Validate>
          <h1 className="text-3xl my-4 ">Add New Cargo</h1>

          <TextField
            label="Name"
            variant="outlined"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Discription"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Store ID"
            variant="outlined"
            type="text"
            value={storeID}
            onChange={(e) => setStoreID(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Store By"
            variant="outlined"
            type="text"
            value={storedBy}
            onChange={(e) => setStoredBy(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Handling fee ($)"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            
            onClick={handleSaveVoter}
            color="primary"
          >
            Save
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default AddCargo;
