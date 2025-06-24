// // src/components/cart/CartSummary.jsx
// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Divider,
//   Button,
//   Stack,
//   Chip,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   CircularProgress
// } from '@mui/material';
// import {
//   ShoppingCart,
//   CreditCard,
//   ShoppingBag,
//   Delete,
//   Receipt
// } from '@mui/icons-material';

// const CartSummary = ({ 
//   cartData, 
//   onProceedToCheckout, 
//   onContinueShopping, 
//   onClearCart,
//   isClearing
// }) => {
//   const [showClearDialog, setShowClearDialog] = useState(false);

//   const calculateTotals = () => {
//     if (!cartData?.items || cartData.items.length === 0) {
//       return { 
//         itemCount: 0, 
//         totalQuantity: 0, 
//         subtotal: 0,
//         taxExclusive: 0,
//         taxInclusive: 0,
//         grandTotal: 0
//       };
//     }

//     const itemCount = cartData.items.length;
//     const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
//     const subtotal = cartData.items.reduce((sum, item) => {
//       return sum + (parseFloat(item.product.price) * item.quantity);
//     }, 0);

//     // Tax calculations (example: 18% GST)
//     const taxRate = 0.18;
//     const taxExclusive = subtotal / (1 + taxRate);
//     const taxInclusive = subtotal - taxExclusive;
//     const grandTotal = subtotal; // Since tax is already included

//     return { 
//       itemCount, 
//       totalQuantity, 
//       subtotal,
//       taxExclusive,
//       taxInclusive,
//       grandTotal
//     };
//   };

//   const { 
//     itemCount, 
//     totalQuantity, 
//     subtotal,
//     taxExclusive,
//     taxInclusive,
//     grandTotal
//   } = calculateTotals();

//   const formatPrice = (price) => {
//     return `₹${price.toLocaleString('en-IN', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     })}`;
//   };

//   const isEmpty = !cartData?.items || cartData.items.length === 0;

//   const handleClearCartClick = () => {
//     setShowClearDialog(true);
//   };

//   const handleClearCartConfirm = async () => {
//     setShowClearDialog(false);
//     if (onClearCart) {
//       await onClearCart();
//     }
//   };

//   return (
//     <>
//       <Card
//         sx={{
//           borderRadius: 4,
//           boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
//           border: '1px solid',
//           borderColor: 'grey.200',
//           position: { md: 'sticky' },
//           top: { md: 24 },
//           height: 'fit-content',
//           background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
//         }}
//       >
//         <CardContent sx={{ p: 4 }}>
//           <Typography
//             variant="h5"
//             sx={{
//               fontWeight: 700,
//               mb: 3,
//               display: 'flex',
//               alignItems: 'center',
//               gap: 1.5,
//               color: 'text.primary'
//             }}
//           >
//             <Receipt sx={{ color: 'primary.main' }} />
//             Order Summary
//           </Typography>

//           {!isEmpty ? (
//             <>
//               {/* Product List */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
//                   Items ({itemCount})
//                 </Typography>
//                 <Stack spacing={1.5}>
//                   {cartData.items.map((item, index) => {
//                     const itemTotal = parseFloat(item.product.price) * item.quantity;
//                     return (
//                       <Box
//                         key={`${item.product.product_id}-${index}`}
//                         sx={{
//                           p: 2,
//                           bgcolor: 'white',
//                           borderRadius: 2,
//                           border: '1px solid',
//                           borderColor: 'grey.200'
//                         }}
//                       >
//                         <Typography
//                           variant="body2"
//                           sx={{
//                             fontWeight: 600,
//                             color: 'text.primary',
//                             mb: 0.5,
//                             display: '-webkit-box',
//                             WebkitLineClamp: 2,
//                             WebkitBoxOrient: 'vertical',
//                             overflow: 'hidden'
//                           }}
//                         >
//                           {item.product.name}
//                         </Typography>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                           <Typography variant="body2" color="text.secondary">
//                             {formatPrice(parseFloat(item.product.price))} × {item.quantity}
//                           </Typography>
//                           <Typography variant="body2" fontWeight={600} color="error.main">
//                             {formatPrice(itemTotal)}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     );
//                   })}
//                 </Stack>
//               </Box>

//               <Divider sx={{ mb: 3, borderStyle: 'dashed' }} />

//               {/* Calculation Details */}
//               <Stack spacing={2.5}>
//                 {/* Subtotal */}
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <Typography variant="body1" color="text.secondary">
//                     Subtotal ({totalQuantity} items)
//                   </Typography>
//                   <Typography variant="body1" fontWeight={600}>
//                     {formatPrice(subtotal)}
//                   </Typography>
//                 </Box>

//                 {/* Tax Breakdown */}
//                 <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 2 }}>
//                   <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
//                     Tax Breakdown
//                   </Typography>
                  
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                     <Typography variant="body2" color="text.secondary">
//                       Amount (Tax Exclusive)
//                     </Typography>
//                     <Typography variant="body2" fontWeight={500}>
//                       {formatPrice(taxExclusive)}
//                     </Typography>
//                   </Box>
                  
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                     <Typography variant="body2" color="text.secondary">
//                       GST (18%)
//                     </Typography>
//                     <Typography variant="body2" fontWeight={500} color="warning.main">
//                       {formatPrice(taxInclusive)}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* Delivery */}
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                   <Typography variant="body1" color="text.secondary">
//                     Delivery Charges
//                   </Typography>
//                   <Chip
//                     label="FREE"
//                     size="small"
//                     color="success"
//                     variant="filled"
//                     sx={{ fontWeight: 600 }}
//                   />
//                 </Box>

//                 <Divider sx={{ borderStyle: 'dashed', borderColor: 'primary.main' }} />

//                 {/* Grand Total */}
//                 <Box 
//                   sx={{ 
//                     bgcolor: 'primary.50', 
//                     p: 3, 
//                     borderRadius: 3,
//                     border: '2px solid',
//                     borderColor: 'primary.main'
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <Typography variant="h6" fontWeight={700} color="primary.main">
//                       Grand Total
//                     </Typography>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontWeight: 800,
//                         color: 'error.main'
//                       }}
//                     >
//                       {formatPrice(grandTotal)}
//                     </Typography>
//                   </Box>
//                   <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
//                     Inclusive of all taxes & charges
//                   </Typography>
//                 </Box>

//                 {/* Action Buttons */}
//                 <Stack spacing={2} sx={{ mt: 3 }}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     fullWidth
//                     onClick={onProceedToCheckout}
//                     endIcon={<CreditCard />}
//                     sx={{
//                       py: 2,
//                       borderRadius: 3,
//                       textTransform: 'none',
//                       fontSize: '1.1rem',
//                       fontWeight: 700,
//                       background: 'linear-gradient(45deg, #FF6B35 30%, #FF8E53 90%)',
//                       boxShadow: '0 4px 20px rgba(255,107,53,0.3)',
//                       '&:hover': {
//                         background: 'linear-gradient(45deg, #E55A2B 30%, #FF7043 90%)',
//                         transform: 'translateY(-2px)',
//                         boxShadow: '0 8px 30px rgba(255,107,53,0.4)'
//                       }
//                     }}
//                   >
//                     Proceed to Checkout
//                   </Button>

//                   <Button
//                     variant="outlined"
//                     size="large"
//                     fullWidth
//                     onClick={onContinueShopping}
//                     startIcon={<ShoppingBag />}
//                     sx={{
//                       py: 1.5,
//                       borderRadius: 3,
//                       textTransform: 'none',
//                       fontSize: '1rem',
//                       fontWeight: 600,
//                       borderColor: 'primary.main',
//                       borderWidth: 2,
//                       color: 'primary.main',
//                       '&:hover': {
//                         borderColor: 'primary.dark',
//                         borderWidth: 2,
//                         bgcolor: 'primary.50',
//                         transform: 'translateY(-1px)'
//                       }
//                     }}
//                   >
//                     Continue Shopping
//                   </Button>

//                   <Button
//                     variant="text"
//                     size="medium"
//                     fullWidth
//                     onClick={handleClearCartClick}
//                     startIcon={isClearing ? <CircularProgress size={16} /> : <Delete />}
//                     disabled={isClearing}
//                     sx={{
//                       py: 1.5,
//                       borderRadius: 3,
//                       textTransform: 'none',
//                       fontSize: '0.95rem',
//                       fontWeight: 500,
//                       color: 'error.main',
//                       '&:hover': {
//                         bgcolor: 'error.50'
//                       }
//                     }}
//                   >
//                     {isClearing ? 'Clearing Cart...' : 'Clear Cart'}
//                   </Button>
//                 </Stack>
//               </Stack>
//             </>
//           ) : (
//             /* Empty Cart Summary */
//             <Box sx={{ textAlign: 'center', py: 4 }}>
//               <Typography variant="body1" color="text.secondary" gutterBottom>
//                 Your cart is empty
//               </Typography>
//               <Button
//                 variant="contained"
//                 onClick={onContinueShopping}
//                 startIcon={<ShoppingBag />}
//                 sx={{
//                   mt: 2,
//                   borderRadius: 3,
//                   textTransform: 'none',
//                   px: 3
//                 }}
//               >
//                 Start Shopping
//               </Button>
//             </Box>
//           )}
//         </CardContent>
//       </Card>

//       {/* Clear Cart Confirmation Dialog */}
//       <Dialog
//         open={showClearDialog}
//         onClose={() => setShowClearDialog(false)}
//         PaperProps={{
//           sx: {
//             borderRadius: 3,
//             minWidth: { xs: '90%', sm: 400 }
//           }
//         }}
//       >
//         <DialogTitle sx={{ fontWeight: 600 }}>
//           Clear Cart
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
//             Are you sure you want to remove all items from your cart? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ p: 3, pt: 1 }}>
//           <Button 
//             onClick={() => setShowClearDialog(false)}
//             sx={{ textTransform: 'none', borderRadius: 2 }}
//           >
//             Cancel
//           </Button>
//           <Button 
//             onClick={handleClearCartConfirm}
//             variant="contained"
//             color="error"
//             sx={{ textTransform: 'none', borderRadius: 2 }}
//           >
//             Clear Cart
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default CartSummary;

















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