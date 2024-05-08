import React from 'react';
import Navbar from './navbar';
import { Stack, Grid, Typography, Card, CardContent, Divider, Paper } from '@mui/material';

const contacts = [
  {
    
    name: 'M Venkata Sai Vamshi',
    number: '8639243604',
    email: 'vsv8639243604@gmail.com'
    
  },
  {
    
    name: 'N Sri Venkata Sai Krishna',
    number: '8121406397',
    email: 's2200030730@gmail.com'
  }
];

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Paper elevation={3} style={{ marginLeft: 95, marginTop: 90, marginRight: 35, padding: '20px' }}>
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {contacts.map((contact, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={6}>
                <CardContent>
                 
                 
                  <Typography variant="h6" color="textSecondary" style={{ marginTop: '10px' }}>
                    <strong>Name:</strong> {contact.name}
                  </Typography>
                  <Divider />
                  <Typography variant="h6" color="textSecondary">
                    <strong>Contact Number:</strong> {contact.number}
                  </Typography>
                  <Divider />
                  {contact.email && (
                    <>
                      <Typography variant="h6" color="textSecondary">
                        <strong>Email:</strong> {contact.email}
                      </Typography>
                      <Divider />
                    </>
                  )}
                  {contact.position && (
                    <>
                      <Typography variant="h6" color="textSecondary">
                        <strong>Position:</strong> {contact.position}
                      </Typography>
                      <Divider />
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
