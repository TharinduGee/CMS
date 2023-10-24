import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { useSnackbar } from "notistack";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = () => {
const data = {
     "email" : email,
     "password" : password
}
    axios
      .post(
        'http://localhost:3030/api/login',
        data
      )
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res.data.success) {
          setTimeout(() => {
            navigate("/cargo");
            enqueueSnackbar(`Welcome !`, { variant: "info" });
          }, 1000);
        } else {
            enqueueSnackbar("Please enter valid credentials", {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("An error happened. Please Chack console");
        enqueueSnackbar("Error", { variant: "error" });
      });
  };

  const directSignupPage = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <form autoComplete="off" Validate>
          <h1>Login</h1>

          <TextField
            label="Email"
            variant="outlined"
            value={email}
            required
            fullWidth
            autoComplete="email"
            autoFocus
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            value={password}
            variant="outlined"
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            margin="normal"
          />
          <Link
            component="button"
            variant="body1"
            align="center"
            onClick={directSignupPage}
          >
            Create an account
          </Link>
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            color="primary"
          >
            Log In
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default Login;
