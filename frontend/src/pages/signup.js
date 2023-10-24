import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Link from '@mui/material/Link';
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useSnackbar} from 'notistack';




const Signup= ()=> {
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

const handleSignup = () =>{
      if(password != confirmpassword){
        enqueueSnackbar(`Please Enter valid password`, { variant:"info"});
        return;
      }
     axios
      .post(`http://localhost:3030/api/signup`,{"email" : email, "password" : password, "username" : username})
      .then((res) => {
          if(res.data.success){
               setTimeout(()=>{
                    enqueueSnackbar(`Account created successfully!!`, { variant:"info"});
                    navigate("/");
                  },1000) ;
          }else{
               enqueueSnackbar(`Please enter calid credentials`, { variant:"error"});
          }
        
          setLoading(false);
        
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        enqueueSnackbar(`Error`, { variant:"error"});
        //enqueueSnackbar('Error', { variant: 'error' });
      });
}

const directLoginPage = () =>{
     navigate("/");
}

  return (
     <div >
     <Grid
       container
       
       justifyContent="center"
       alignItems="center"
       style={{ height: "100vh" }}
     >
       <form autoComplete="off" Validate>
         <h1 >Create an account</h1>

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
           label="Username"
           variant="outlined"
           value={username}
           required
            fullWidth
            
            
            autoFocus
           type="text"
           onChange={(e) => setUsername(e.target.value)}
           fullWidth
           required
           margin="normal"
         />
         <TextField
           value = {password}
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
         <TextField
           value = {confirmpassword}
           variant="outlined"
           required
           fullWidth
           onChange={(e) => setConfirmpassword(e.target.value)}
           label="Confirm Password"
           type="password"
           autoComplete="current-password"
           fullWidth
           margin="normal"
         />
        <FormControlLabel
            control={
              <Checkbox
                
                color="primary"
              />
            }
            label="I agree to the Terms and Conditions"
          />
           <Link 
      component="button"
      variant="body1"
      onClick={directLoginPage}
    >
      Already have an account ?
    </Link>
         <Button
           variant="contained"
           onClick={handleSignup}
           fullWidth
           color="primary"
         >
           Create Account
         </Button>
       </form>
     </Grid>
   </div>
  );
}

export default Signup;