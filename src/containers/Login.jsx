import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import Paper from '@mui/material/Paper';
import {  useNavigate } from "react-router-dom";
import { textAlign } from '@mui/system';




export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const handleSubmit = (event) => {

        event.preventDefault();
        
        if (email === "admin@gmail.com" && password === "Abcd@1234") {
            navigate("/dashboard" )
            
        }
        else {
            alert("Password or Email is Incorrect")
        }
    }

    return (



        <div>
             <Paper variant="outlined"  >
            <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
<Grid item xs={3}>
             <Box  sx={{ alignItems: 'center'}}>
      
           

            <form onSubmit={handleSubmit} >
                <h1 style={{ textAlign:'center' }}>
                    Login Page</h1>
                <Box width={350}>
                <TextField
                    label="Enter Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    fullWidth
                    required>
                </TextField>
                </Box>
                <br/>
                <Box width={350}>
                <TextField
                    label="Enter Your Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    fullWidth
                    required>


                </TextField>
                </Box>
                <br/>
                <Box textAlign='center'>
                <Button type='submit' variant='contained' color="primary" fullWidth>
                    Login
                </Button>
                </Box>
            </form>
           
            </Box>
            </Grid>
            </Grid>
            </Paper>
            
            
           
        </div>
        
    )
}
