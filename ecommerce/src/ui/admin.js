import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Admin = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    
  
  };

  const buttonStyle = {
    margin: '10px',
    padding: '15px 30px',
    fontSize: '18px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Admin Page
      </Typography>
      <Box>
        <Button variant="contained" color="primary" style={buttonStyle}>
          <Link to="/admin/adminpost" style={linkStyle}>
            Add Products to Website
          </Link>
        </Button>
        <Button variant="contained" color="primary" style={buttonStyle}>
          <Link to="/admin/display" style={linkStyle}>
            View Products on the Website
          </Link>
        </Button>
      </Box>
    </div>
  );
};

export default Admin;
