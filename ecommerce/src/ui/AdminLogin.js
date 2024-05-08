import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Avatar, Button, Card, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Navbar from './navbar';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  function onHandleClick() {
    if (username !== '' && password !== '') {
      navigate('/admin/dashboard');
    } else {
      setShowAlert(false);
    }
  }

  return (
    <Stack >
      <Navbar/>
      <Stack sx={{m:60,marginTop:20}}>
    <Card elevation={12} style={{ m:10, maxWidth: '400px', padding: '2rem' }}>
      <Paper elevation={12} style={{ backgroundColor: '#E4F1FF', padding: '2rem', borderRadius: '15px' }}>
        <Stack spacing={3}>
          <Avatar
            style={{
              margin: '0 auto',
              height: '75px',
              width: '75px',
              backgroundColor: '#007BFF',
            }}
          >
            <LoginIcon />
          </Avatar>
          <TextField
            label="Username"
            required
            fullWidth
            color="primary"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            type="password"
            label="Password"
            required
            fullWidth
            color="primary"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button endIcon={<LoginIcon />} type="submit" variant="contained" onClick={onHandleClick} fullWidth sx={{backgroundColor: 'green',color:'white'}}>
            Login
          </Button>
          <Typography variant="body2" align="center">
            Forget Password? <a href="/forgetpassword">Click Here</a>
          </Typography>

          {!showAlert && (
            <Alert severity="error" color="error" onClose={() => setShowAlert(true)}>
              Invalid username or password
            </Alert>
          )}
        </Stack>
      </Paper>
  </Card></Stack></Stack>
);
}
