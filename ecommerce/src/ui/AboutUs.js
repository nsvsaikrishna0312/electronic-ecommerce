import React from 'react';
import { Typography, Box, Container, Paper ,Stack} from '@mui/material';
import Navbar from './navbar';

export default function AboutUs() {
  return (<div>
    <Navbar/>
    <Stack sx={{width:800,m:48,marginTop:10}}>
    <Paper>
    <Container maxWidth="md">
      <Box mt={6} mb={12}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Welcome to Electronics E-commerce
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Where innovation meets excellence. At Electronics E-commerce, we are passionate about delivering high-quality products/services and ensuring an exceptional customer experience.
        </Typography>

        <Typography variant="h5" color="primary" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At Electronics E-commerce, our mission is to provide goods online. We are dedicated to providing top-notch services and innovative solutions. Through our commitment to excellence, we aim to improve lives and support communities.
        </Typography>

        <Typography variant="h5" color="primary" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Quality:</strong> We believe in delivering products/services that meet the highest standards of quality and reliability.
          <br />
          <strong>Innovation:</strong> We continuously seek innovative solutions to address the evolving needs of our customers.
          <br />
          <strong>Integrity:</strong> Honesty and integrity are the foundations of our business. We are transparent, ethical, and trustworthy in all our interactions.
          <br />
          <strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We are dedicated to ensuring their satisfaction and building long-lasting relationships.
        </Typography>

        <Typography variant="h5" color="primary" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="body1" paragraph>
          Meet the dedicated individuals who make Electronics E-commerce a success. Our team is composed of skilled professionals who are passionate about their work and are committed to delivering exceptional results. With diverse backgrounds and expertise, we collaborate to bring creative solutions to the table.
        </Typography>

        <Typography variant="h5" color="primary" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Expertise:</strong> Benefit from our years of industry experience and expertise.
          <br />
          <strong>Customer-Centric Approach:</strong> Our focus is on understanding and fulfilling our customers' needs.
          <br />
          <strong>Innovation:</strong> We stay ahead of the curve by embracing the latest technologies and trends.
          <br />
          <strong>Reliability:</strong> Count on us for reliable, timely, and cost-effective solutions.
        </Typography>

        <Typography variant="h5" color="primary" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          We would love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to <a href="/contact">contact us</a> or visit our <a href="/contact">contact page</a>.
        </Typography>

        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Thank you for considering Electronics E-commerce. We look forward to the opportunity of serving you.
        </Typography>
      </Box>
    </Container></Paper></Stack></div>
  );
}
