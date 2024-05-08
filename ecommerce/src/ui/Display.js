import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from './navbar';

export default function Product() {
  const [data, setData] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({
    ProductName: '',
    Price: '',
    Brand: '',
    Specifications: '',
    StockQuantity: '',
    category: '',
  });
  const uri = 'http://localhost:7000/api/item';

  useEffect(() => {
    Axios.get(uri).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDelete = async (_id) => {
    try {
      await Axios.delete(`http://localhost:7000/api/item/${_id}`);
      const updateData = data.filter((item) => item._id !== _id);
      setData(updateData);
    } catch (error) {
      console.error({ 'error deleting ': error });
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setUpdatedProductData({
      ProductName: product.ProductName,
      Price: product.Price,
      Brand: product.Brand,
      Specifications: product.Specifications,
      StockQuantity: product.StockQuantity,
      category: product.category,
    });
  };

  const handleUpdate = async () => {
    try {
      await Axios.put(
        `http://localhost:7000/api/item/${editingProduct._id}`,
        updatedProductData
      );
      // Update the local data with the updated product data
      const updatedData = data.map((item) =>
        item._id === editingProduct._id
          ? { ...item, ...updatedProductData }
          : item
      );
      setData(updatedData);
      setEditingProduct(null);
      setUpdatedProductData({
        ProductName: '',
        Price: '',
        Brand: '',
        Specifications: '',
        StockQuantity: '',
        category: '',
      });
    } catch (error) {
      console.error({ 'error updating ': error });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductData({
      ...updatedProductData,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        style={{ marginLeft: 95, marginTop: 90, marginRight: 35 }}
      >
        <Paper elevation={6} style={{ marginRight: 15, width: '100%', backgroundColor: '#9EDDFF', padding: '20px' }}>
          <Typography variant="h4" align="center" style={{ marginBottom: '20px', color: '#007BFF' }}>
            Products in the website
          </Typography>
          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ backgroundColor: '#E4F1FF', height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div" style={{ marginBottom: '10px' }}>
                      Product Name: {item.ProductName}
                    </Typography>
                    <Typography color="primary" style={{ marginBottom: '10px' }}>
                      Price: {item.Price}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Brand: {item.Brand}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Specifications: {item.Specifications}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Stock Quantity: {item.StockQuantity}
                    </Typography>
                    <Typography color="textSecondary" style={{ marginBottom: '10px' }}>
                      Category: {item.category}
                    </Typography>
                    <Stack direction="row" spacing={1} style={{ marginTop: '10px' }}>
                      <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(item._id)} sx={{ backgroundColor: 'red', color: 'white' }}>
                        Delete
                      </Button>
                      <Button variant="contained" startIcon={<EditIcon />} onClick={() => handleEdit(item)} sx={{ backgroundColor: 'green', color: 'white' }}>
                        Edit
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>

      {/* Update form */}
      {editingProduct && (
        <Paper elevation={6} style={{ marginLeft: 95, marginTop: 20, marginRight: 35, padding: '20px', backgroundColor: '#E4F1FF' }}>
          <Typography variant="h5" align="center" style={{ marginBottom: '20px', color: '#007BFF' }}>
            Update Product Information
          </Typography>
          <TextField
            fullWidth
            label="Product Name"
            variant="outlined"
            name="ProductName"
            value={updatedProductData.ProductName}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            fullWidth
            label="Price"
            variant="outlined"
            name="Price"
            value={updatedProductData.Price}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            fullWidth
            label="Brand"
            variant="outlined"
            name="Brand"
            value={updatedProductData.Brand}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            fullWidth
            label="Specifications"
            variant="outlined"
            name="Specifications"
            value={updatedProductData.Specifications}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            fullWidth
            label="Stock Quantity"
            variant="outlined"
            name="StockQuantity"
            value={updatedProductData.StockQuantity}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            fullWidth
            label="Category"
            variant="outlined"
            name="category"
            value={updatedProductData.category}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Paper>
      )}
    </div>
  );
  
}
