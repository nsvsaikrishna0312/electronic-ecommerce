import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Axios from 'axios';
import { Grid, Select, MenuItem, Button, Typography, Card, CardContent, Stack, Paper } from '@mui/material';
import Cart from './Cart';  // Import the Cart component

function Homepage() {
  const [category, setCategory] = useState('');
  const [searchStatus, setSearchStatus] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [cartItems, setCartItems] = useState([]);
 
  const [searchClicked, setSearchClicked] = useState(false);
 



    const deleteItem = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1); // Remove the item at the specified index
      setCartItems(updatedCartItems);
    };
  
  // State to track if the search button is clicked
  const uri = "http://localhost:7000/api/item";

  useEffect(() => {
    if (searchClicked && category && category.trim() !== '') {
      // Fetch data by category only when the search button is clicked and category is not empty
      Axios.get(`${uri}/item/${category}`)
        .then((res) => {
          setData2(res.data);
          setSearchStatus(true);
        })
        .catch((error) => {
          console.error('Error fetching data by category: ', error);
          setData2([]);
          setSearchStatus(true);
        });
    } else {
      // Fetch all data when the search button is clicked and category is empty
      Axios.get(uri)
        .then((res) => {
          setData(res.data);
          setSearchStatus(true);
        })
        .catch((error) => {
          console.error('Error fetching all data: ', error);
          setData([]);
          setSearchStatus(true);
        });
    }
    // Reset the search button click state after fetching data
    setSearchClicked(false);
  }, [searchClicked, category]);

  const handleSearchChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleData = () => {
    // Set search button click state to true when the search button is clicked
    setSearchClicked(true);
  };

  return (
    <div>
      <Navbar />
      
      <Stack sx={{ m: 10 }}>
        <h1 align="center">Welcome to our Electronics Store</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Select
  variant="outlined"
  value={category}
  onChange={handleSearchChange}
  fullWidth
  size="large"
  displayEmpty
  inputProps={{ 'aria-label': 'Select search term' }}
  sx={{ backgroundColor: 'white' }}
>
  <MenuItem value="">
    <em>No Selection</em>
  </MenuItem>
  <MenuItem value="Television">Television</MenuItem>
  <MenuItem value="Air Conditioner">Air Conditioner</MenuItem>
  <MenuItem value="Mobile">Mobile</MenuItem>
  <MenuItem value="Printer">Printer</MenuItem>
  <MenuItem value="Fan">Fan</MenuItem>
  <MenuItem value="Rice Cooker">Rice Cooker</MenuItem>
</Select>

          <Button variant="contained" color="primary" onClick={handleData}>
            Search
          </Button>
        </div>
        <p>Explore our wide range of electronic products at the best prices!</p>
        </Stack>
        <Stack direction ="row" spacing="3" sx={{width:1500,m:4}}>
        <Stack sx={{marginLeft:6,width:1050}}>
        {/* Render the retrieved data using Grid and Card components */}
        {searchStatus && ((category && category.trim() !== '') ? data2 : data).length > 0 && (
          <Grid container spacing={40}>
            {((category && category.trim() !== '') ? data2 : data).map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                <Card sx={{ minWidth: 275, backgroundColor: '#EBE76C' }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.ProductName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Price: {item.Price} | Stock Quantity: {item.StockQuantity}
                    </Typography>
                    <Typography variant="body2">
                      Brand: {item.Brand}
                      <br />
                      Specifications: {item.Specifications}
                      <br />
                      Category: {item.category}
                    </Typography>
                    {/* Add to Cart button */}
                    <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}</Stack>
     
   
      {/* Render the cart component */}
      <Stack sx={{width:'flex',height:'flex',m:5,marginLeft:10}}>
      <Cart cartItems={cartItems} onDeleteItem={deleteItem} />
      </Stack></Stack>
    </div>
  );
}

export default Homepage;
