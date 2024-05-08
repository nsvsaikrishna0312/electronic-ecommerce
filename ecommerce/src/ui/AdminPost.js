import React, { useState, useEffect } from 'react';
import {
  Button,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './navbar';

export default function Admin() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [productname, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [stockquantity, setStockQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleNameChange = (e) => setProductName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);
  const handleSpecificationsChange = (e) => setSpecifications(e.target.value);
  const handleStockChange = (e) => setStockQuantity(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Axios.post('http://localhost:7000/api/item', {
        ProductName: productname,
        Price: price,
        Brand: brand,
        Specifications: specifications,
        StockQuantity: stockquantity,
        category: category,
      });
      setStatus(true);
      toast.success('Data posted successfully');
  
      // Reset the state variables to empty strings
      setProductName('');
      setPrice('');
      setBrand('');
      setSpecifications('');
      setStockQuantity('');
      setCategory('');
    } catch (error) {
      console.error('Error sending data', error);
      toast.error('Error sending data');
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:7000/api/item');
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976D2',
      },
      secondary: {
        main: '#F57C00',
      },
    },
  });

  return (
    <div>
      <Navbar/>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Stack direction="row" spacing={1} style={{ marginLeft: 500, marginTop: 40 }}>
          <Stack direction="column">
            <Paper sx={{ m: 10, backgroundColor: '#E4F1FF' }}>
              <Stack direction="column" spacing={3} sx={{ m: 7 }}>
                <Typography variant="h4" sx={{ marginBottom: 2 }}>
                  Product Details
                </Typography>
                <TextField label="Product Name" onChange={handleNameChange} sx={{ width: '350px', marginBottom: '10px' }} />
                <TextField label="Price" onChange={handlePriceChange} sx={{ width: '350px', marginBottom: '10px' }} />
                <TextField label="Brand" onChange={handleBrandChange} sx={{ width: '350px', marginBottom: '10px' }} />
                <TextField label="Specifications" onChange={handleSpecificationsChange} sx={{ width: '350px', marginBottom: '10px' }} />
                <TextField label="Stock Quantity" onChange={handleStockChange} sx={{ width: '350px', marginBottom: '10px' }} />
                <InputLabel>Category</InputLabel>
                <Select value={category} onChange={handleCategoryChange} sx={{ width: '200px', marginBottom: '10px' }}>
                  <MenuItem value="Television">Television</MenuItem>
                  <MenuItem value="Air Conditioner">Air Conditioner</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="Printer">Printer</MenuItem>
                  <MenuItem value="Fan">Fan</MenuItem>
                  <MenuItem value="Rice Cooker">Rice Cooker</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleSubmit} color="primary" sx={{ backgroundColor: 'green', color: 'white' }}>
                  Submit
                </Button>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Need support? <a href="/contact">Contact us</a>
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </ThemeProvider>
    </div>
  );
}
