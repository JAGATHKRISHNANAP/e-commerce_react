// src/components/cart/EmptyCart.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ShoppingCart, ArrowForward } from '@mui/icons-material';

const EmptyCart = ({ onContinueShopping }) => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        {/* Empty Cart Icon */}
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            bgcolor: 'grey.100',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3
          }}
        >
          <ShoppingCart sx={{ fontSize: 60, color: 'grey.400' }} />
        </Box>

        {/* Empty State Text */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
        >
          Your cart is empty
        </Typography>
        
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 400, mx: 'auto', lineHeight: 1.6 }}
        >
          Looks like you haven't added any items to your cart yet. 
          Start exploring our amazing products and find something you love!
        </Typography>

        {/* Action Button */}
        <Button
          variant="contained"
          size="large"
          onClick={onContinueShopping}
          endIcon={<ArrowForward />}
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 3,
            textTransform: 'none',
            fontSize: '1.1rem',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(25,118,210,0.4)'
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
