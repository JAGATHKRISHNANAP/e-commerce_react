// src/components/cart/OrderSummary.jsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
  Stack,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress
} from '@mui/material';
import {
  CreditCard,
  ShoppingBag,
  Delete,
  Shield,
  LocalOffer,
  Verified
} from '@mui/icons-material';

const OrderSummary = ({ 
  cartData, 
  onProceedToCheckout, 
  onContinueShopping, 
  onClearCart,
  isClearing
}) => {
  const [showClearDialog, setShowClearDialog] = useState(false);

  const calculateTotals = () => {
    if (!cartData?.items || cartData.items.length === 0) {
      return { 
        itemCount: 0, 
        totalQuantity: 0, 
        subtotal: 0,
        taxExclusive: 0,
        taxInclusive: 0,
        grandTotal: 0,
        discount: 0,
        savings: 0
      };
    }

    const itemCount = cartData.items.length;
    const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartData.items.reduce((sum, item) => {
      return sum + (parseFloat(item.product.price) * item.quantity);
    }, 0);

    // Tax calculations (example: 18% GST)
    const taxRate = 0.18;
    const taxExclusive = subtotal / (1 + taxRate);
    const taxInclusive = subtotal - taxExclusive;
    
    // Example calculations for invoice
    const discount = subtotal * 0.15; // 15% discount example
    const platformFee = 29;
    const deliveryFee = 0; // Free delivery
    const savings = discount + (subtotal > 499 ? 40 : 0); // Free delivery saves ₹40
    const grandTotal = subtotal - discount + platformFee + deliveryFee+taxInclusive;

    return { 
      itemCount, 
      totalQuantity, 
      subtotal,
      taxExclusive,
      taxInclusive,
      grandTotal,
      discount,
      platformFee,
      deliveryFee,
      savings
    };
  };

  const { 
    itemCount, 
    totalQuantity, 
    subtotal,
    taxExclusive,
    taxInclusive,
    grandTotal,
    discount,
    platformFee,
    deliveryFee,
    savings
  } = calculateTotals();

  const formatPrice = (price) => {
    return `₹${Math.abs(price).toLocaleString('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })}`;
  };

  const isEmpty = !cartData?.items || cartData.items.length === 0;

  const handleClearCartClick = () => {
    setShowClearDialog(true);
  };

  const handleClearCartConfirm = async () => {
    setShowClearDialog(false);
    if (onClearCart) {
      await onClearCart();
    }
  };

  // Row component for consistent styling
  const PriceRow = ({ label, amount, isDiscount = false, isBold = false, icon = null }) => (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      py: 1.5
    }}>
      <Typography 
        variant="body2" 
        sx={{ 
          color: '#6B7280',
          fontWeight: isBold ? 600 : 400,
          fontSize: isBold ? '1rem' : '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}
      >
        {icon && icon}
        {label}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          color: isDiscount ? '#16A34A' : (isBold ? '#111827' : '#374151'),
          fontWeight: isBold ? 700 : 500,
          fontSize: isBold ? '1rem' : '0.9rem'
        }}
      >
        {isDiscount && amount > 0 ? '−' : ''}{formatPrice(amount)}
      </Typography>
    </Box>
  );

  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: 2,
          border: '1px solid #E5E7EB',
          position: { md: 'sticky' },
          top: { md: 24 },
          height: 'fit-content',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }}
      >
        <CardContent sx={{ p: 0 }}>
          {!isEmpty ? (
            <>
              {/* Header */}
              <Box sx={{ p: 3, pb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#111827',
                    fontSize: '1.125rem',
                    mb: 0.5
                  }}
                >
                  PRICE DETAILS
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280' }}>
                  {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
                </Typography>
              </Box>

              <Divider sx={{ borderColor: '#F3F4F6' }} />

              {/* Price Breakdown */}
              <Box sx={{ px: 3, py: 2 }}>
                <Stack spacing={0}>
                  {/* Subtotal */}
                  <PriceRow 
                    label={`Total MRP (${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'})`}
                    amount={subtotal}
                  />

                  {/* Discount */}
                  {discount > 0 && (
                    <PriceRow 
                      label="Discount on MRP"
                      amount={discount}
                      isDiscount={true}
                      icon={<LocalOffer sx={{ fontSize: 16, color: '#16A34A' }} />}
                    />
                  )}

                  {/* Platform Fee */}
                  <PriceRow 
                    label="Platform Fee"
                    amount={platformFee}
                  />

                  {/* Delivery Charges */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    py: 1.5
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#6B7280',
                        fontSize: '0.9rem'
                      }}
                    >
                      Delivery Charges
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {subtotal > 499 && (
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#6B7280',
                            textDecoration: 'line-through',
                            fontSize: '0.85rem'
                          }}
                        >
                          ₹40
                        </Typography>
                      )}
                      <Chip
                        label="FREE"
                        size="small"
                        sx={{
                          backgroundColor: '#16A34A',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          height: 24
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Tax */}
                  <PriceRow 
                    label="Total Tax"
                    amount={taxInclusive}
                  />
                </Stack>
              </Box>

              <Divider sx={{ borderColor: '#E5E7EB', mx: 3 }} />

              {/* Total Amount */}
              <Box sx={{ px: 3, py: 2.5 }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mb: 2
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#111827',
                      fontWeight: 700,
                      fontSize: '1.125rem'
                    }}
                  >
                    Total Amount
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#111827',
                      fontSize: '1.25rem'
                    }}
                  >
                    {formatPrice(grandTotal)}
                  </Typography>
                </Box>

                {/* Savings Message */}
                {savings > 0 && (
                  <Box sx={{
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    borderRadius: 1,
                    p: 2,
                    mb: 2
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#16A34A',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}
                    >
                      You will save {formatPrice(savings)} on this order
                    </Typography>
                  </Box>
                )}

                {/* Security Message */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 1,
                  backgroundColor: '#F9FAFB',
                  p: 2,
                  borderRadius: 1,
                  border: '1px solid #F3F4F6'
                }}>
                  <Shield sx={{ fontSize: 18, color: '#6B7280', mt: 0.1 }} />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#6B7280',
                      lineHeight: 1.4,
                      fontSize: '0.8rem'
                    }}
                  >
                    Safe and Secure Payments. Easy returns. 100% Authentic products.
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ borderColor: '#F3F4F6' }} />

              {/* Action Buttons */}
              <Box sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={onProceedToCheckout}
                    endIcon={<CreditCard />}
                    sx={{
                      py: 1.75,
                      borderRadius: 1.5,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      backgroundColor: '#111827',
                      color: 'white',
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: '#374151',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    PLACE ORDER
                  </Button>

                  <Stack direction="row" spacing={1.5}>
                    <Button
                      variant="outlined"
                      size="medium"
                      fullWidth
                      onClick={onContinueShopping}
                      startIcon={<ShoppingBag />}
                      sx={{
                        py: 1.25,
                        borderRadius: 1.5,
                        textTransform: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderColor: '#D1D5DB',
                        color: '#6B7280',
                        '&:hover': {
                          borderColor: '#9CA3AF',
                          backgroundColor: '#F9FAFB'
                        }
                      }}
                    >
                      Continue Shopping
                    </Button>

                    <Button
                      variant="outlined"
                      size="medium"
                      onClick={handleClearCartClick}
                      startIcon={isClearing ? <CircularProgress size={16} /> : <Delete />}
                      disabled={isClearing}
                      sx={{
                        py: 1.25,
                        px: 2,
                        borderRadius: 1.5,
                        textTransform: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderColor: '#D1D5DB',
                        color: '#6B7280',
                        minWidth: 'auto',
                        '&:hover': {
                          borderColor: '#9CA3AF',
                          backgroundColor: '#F9FAFB'
                        }
                      }}
                    >
                      {isClearing ? '' : 'Clear'}
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </>
          ) : (
            /* Empty Cart State */
            <Box sx={{ textAlign: 'center', py: 6, px: 3 }}>
              <ShoppingBag 
                sx={{ 
                  fontSize: 48, 
                  color: '#D1D5DB', 
                  mb: 2
                }} 
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#6B7280',
                  fontWeight: 600,
                  mb: 1,
                  fontSize: '1.125rem'
                }}
              >
                Your cart is empty
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#9CA3AF',
                  mb: 3,
                  fontSize: '0.9rem'
                }}
              >
                Add items to get started
              </Typography>
              <Button
                variant="contained"
                onClick={onContinueShopping}
                startIcon={<ShoppingBag />}
                sx={{
                  borderRadius: 1.5,
                  textTransform: 'none',
                  px: 3,
                  py: 1.5,
                  backgroundColor: '#111827',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#374151'
                  }
                }}
              >
                Start Shopping
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Clear Cart Confirmation Dialog */}
      <Dialog
        open={showClearDialog}
        onClose={() => setShowClearDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 2,
            minWidth: { xs: '90%', sm: 400 }
          }
        }}
      >
        <DialogTitle sx={{ 
          fontWeight: 600, 
          color: '#111827',
          fontSize: '1.125rem'
        }}>
          Clear Cart
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ 
            fontSize: '0.95rem', 
            lineHeight: 1.5,
            color: '#6B7280'
          }}>
            Are you sure you want to remove all items from your cart? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button 
            onClick={() => setShowClearDialog(false)}
            sx={{ 
              textTransform: 'none', 
              borderRadius: 1.5,
              color: '#6B7280',
              fontWeight: 500
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleClearCartConfirm}
            variant="contained"
            sx={{ 
              textTransform: 'none', 
              borderRadius: 1.5,
              backgroundColor: '#DC2626',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#B91C1C'
              }
            }}
          >
            Clear Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderSummary;