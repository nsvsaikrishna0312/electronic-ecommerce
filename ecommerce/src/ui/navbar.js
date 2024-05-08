import { AppBar,Button,Toolbar,Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <AppBar>
          <Toolbar>
            <Button color="inherit" to="/home" component={Link}>
              Home
            </Button>
          
          
            <Button color="inherit" to="/aboutus" component={Link}>
              About Us
            </Button>
            <Button color="inherit" to="/Contact" component={Link}>
            Contact Us
            </Button>

            <h1 style={{ marginLeft:'250px',textAlign: 'center' }}>Electronics E-Commerce</h1>
            <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" component={Link} to="/">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
          </Toolbar>
          
        </AppBar>
 );
}

