import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cartItems, onDeleteItem }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.Price), 0).toFixed(2);

  return (
    <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 5, overflow: 'hidden', marginTop: -1,marginLeft:4}}>
      <Typography variant="h5" align="center" gutterBottom style={{ padding: '16px' }}>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography align="center" style={{ padding: '16px' }}>
          Your cart is empty.
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.ProductName}</TableCell>
                <TableCell align="right">{item.Price} Rs</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => onDeleteItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {cartItems.length > 0 && (
        <Typography variant="subtitle1" align="right" style={{ padding: '16px' }}>
          Total Price: {totalPrice} Rs
        </Typography>
      )}
    </TableContainer>
  );
};

export default Cart;
