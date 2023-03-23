import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/common/Header';
import { Grid} from '@mui/material';
import Box from '@mui/material/Box';

function Cart() {
    
    const {cart}=useSelector(products=>products.cart)
    
        return (
            <Box m={2}>
              
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Header cartLength={cart.length}/>
              </Grid>
              
              {cart.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Box border={3} p={8} borderRadius={4}>
                    <img src={product.image} alt={product.name} style={{ height: 300, width: 350 }} />

                    <Box fontWeight={600} fontSize={18} mt={2} mb={1}>
                      {product.name}
                    </Box>
                    <Box fontSize={14} fontWeight={500}>
                      ID: {product.id}
                    </Box>
                    <Box fontSize={14} fontWeight={500}>
                      Price: {product.price}
                    </Box>
                    <Box fontSize={14} fontWeight={500}>
                      Quantity: {product.quantity}
                    </Box>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Box mt={2}>
                  <h1>Total items in your cart is: {cart.length}</h1>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
}

export default Cart;
