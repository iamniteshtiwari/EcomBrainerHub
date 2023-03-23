import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { AddCart } from '../redux/cartSystem';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';

function Products({ product }) {
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: 'center', color: 'blue' }}>
          Please Select your Item
        </h1>
      </Grid>
      {product.map((products) => (
        <Grid item xs={12} sm={7} md={3} key={products.id}>
          <Box
            m={3}
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            maxWidth={400}
            maxHeight={500}
          >
            <Paper sx={{ p: 2 }} elevation={2}>
              <img
                src={products.image}
                alt={products.name}
                width={300}
                height={300}
              />
              <Box mt={2}>
                <div>
                  <b>Product Id:</b> {products.id}
                </div>
                <Paper sx={{ p: 1 }} elevation={2}>
                  <div>
                    <b>Name:</b> {products.name}
                  </div>
                </Paper>
                <Box width={430} color="blue" mt={1}>
                  <div>
                    <b>Price:</b> {products.price}
                  </div>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(AddCart(products))}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
