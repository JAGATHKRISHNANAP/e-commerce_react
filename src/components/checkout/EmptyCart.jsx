
// src/components/checkout/EmptyCart.jsx (same as before)
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ShoppingCart, ArrowForward } from '@mui/icons-material';

const EmptyCart = ({ onContinueShopping }) => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 4,
            boxShadow: '0 8px 32px rgba(25,118,210,0.2)'
          }}
        >
          <ShoppingCart sx={{ fontSize: 80, color: 'primary.main' }} />
        </Box>

        <Typography
          variant="h3"
          gutterBottom
          sx={{ 
            fontWeight: 700, 
            color: 'text.primary', 
            mb: 2,
            background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Your cart is empty
        </Typography>
        
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 400, mx: 'auto', lineHeight: 1.6, fontWeight: 400 }}
        >
          Looks like you haven't added any items to your cart yet. 
          Start exploring our amazing products and find something you love!
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={onContinueShopping}
          endIcon={<ArrowForward />}
          sx={{
            py: 2,
            px: 5,
            borderRadius: 4,
            textTransform: 'none',
            fontSize: '1.2rem',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            boxShadow: '0 6px 25px rgba(25,118,210,0.4)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)',
              transform: 'translateY(-3px)',
              boxShadow: '0 10px 35px rgba(25,118,210,0.5)'
            }
          }}
        >
          Start Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default EmptyCart;