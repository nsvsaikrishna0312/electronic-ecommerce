import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Button, Card, Paper, Stack, TextField, Alert, IconButton } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  async function onHandleClick() {
    try {
      const response = await axios.post('http://localhost:7000/api/login', {
        username: username,
        password: password
      });

      if (response.status === 200) {
        navigate('/home');
        setSuccessMessage('Successfully Logged in. Thank you...');
        setUsername('');
        setPassword('');
        toast.success('Login successful'); // Show success toast message
      } else {
        setAlert(false);
        toast.error('Invalid credentials'); // Show error toast message
      }
    } catch (error) {
      setAlert(false);
      toast.error('Authentication Failed'); // Show error toast message
    }
  }

  function closeErrorAlert() {
    setAlert(true);
  }

  return (
    <div>
      <ToastContainer />

      <Card
        elevation={12}
        style={{
          marginLeft: '550px',
          backgroundColor: '#80B3FF'
        }}
        sx={{
          m: 15,
          p: 5,
          backgroundColor: '#000000',
          width: '25%',
          height: '500px'
        }}
      >
        <Paper elevation={12} sx={{ width: '95%', height: '500px' }}>
          <Stack spacing={5}>
            <Avatar
              style={{
                align: 'center',
                marginLeft: '145px',
                marginTop: '55px',
                height: '75px',
                width: '75px'
              }}
            ></Avatar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField label="User name" value={username} onChange={(e) => setUsername(e.target.value)} sx={{ width: '90%' }} />
              <br />
              <br />
              <TextField
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: '90%' }}
              />
              <br />
              <br />
              <Button variant="contained" onClick={onHandleClick}>
                LOGIN
              </Button>
             
              <p>
                No Account? <Link to="/signup">Register Here</Link>
              </p>
              <p>If Admin?<Link to ="/admin">Admin</Link></p>
            </div>

            {!alert && (
              <Alert severity="error" color="warning" sx={{ width: '100%', textAlign: 'center', position: 'relative' }}>
                Invalid credentials
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  style={{ position: 'absolute', top: 5, right: 5 }}
                  onClick={closeErrorAlert}
                >
                  <span aria-hidden="true"></span>
                </IconButton>
              </Alert>
            )}

            {successMessage && (
              <Alert severity="success" sx={{ width: '100%', textAlign: 'center', marginTop: 2 }}>
                {successMessage}
              </Alert>
            )}
          </Stack>
        </Paper>
      </Card>
    </div>
  );
};

export default Login;
