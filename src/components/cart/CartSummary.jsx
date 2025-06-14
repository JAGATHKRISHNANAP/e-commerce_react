// // // src/components/cart/CartSummary.jsx
// // import React from 'react';
// // import {
// //   Card,
// //   CardContent,
// //   Typography,
// //   Box,
// //   Divider,
// //   Button,
// //   Stack,
// //   Chip
// // } from '@mui/material';
// // import {
// //   ShoppingCart,
// //   CreditCard,
// //   ArrowForward,
// //   ShoppingBag,
// //   Delete
// // } from '@mui/icons-material';

// // const CartSummary = ({ cartData, onProceedToCheckout, onContinueShopping, onClearCart }) => {
// //   const calculateTotals = () => {
// //     if (!cartData?.items || cartData.items.length === 0) {
// //       return { itemCount: 0, totalQuantity: 0, totalAmount: 0 };
// //     }

// //     const itemCount = cartData.items.length;
// //     const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
// //     const totalAmount = cartData.items.reduce((sum, item) => {
// //       return sum + (parseFloat(item.product.price) * item.quantity);
// //     }, 0);

// //     return { itemCount, totalQuantity, totalAmount };
// //   };

// //   const { itemCount, totalQuantity, totalAmount } = calculateTotals();

// //   const formatPrice = (price) => {
// //     return `₹${price.toLocaleString('en-IN', {
// //       minimumFractionDigits: 2,
// //       maximumFractionDigits: 2
// //     })}`;
// //   };

// //   const isEmpty = !cartData?.items || cartData.items.length === 0;

// //   return (
// //     <Card
// //       sx={{
// //         borderRadius: 3,
// //         boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// //         border: '1px solid',
// //         borderColor: 'grey.200',
// //         position: { md: 'sticky' },
// //         top: { md: 24 },
// //         height: 'fit-content'
// //       }}
// //     >
// //       <CardContent sx={{ p: 3 }}>
// //         <Typography
// //           variant="h6"
// //           sx={{
// //             fontWeight: 700,
// //             mb: 3,
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: 1,
// //             color: 'text.primary'
// //           }}
// //         >
// //           <ShoppingCart />
// //           Order Summary
// //         </Typography>

// //         {!isEmpty ? (
// //           <>
// //             {/* Summary Details */}
// //             <Stack spacing={2.5}>
// //               {/* Item Stats */}
// //               <Box>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Items ({itemCount})
// //                   </Typography>
// //                   <Chip
// //                     label={`${totalQuantity} qty`}
// //                     size="small"
// //                     color="primary"
// //                     variant="outlined"
// //                   />
// //                 </Box>
                
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Subtotal
// //                   </Typography>
// //                   <Typography variant="body2" fontWeight={500}>
// //                     {formatPrice(totalAmount)}
// //                   </Typography>
// //                 </Box>
// //               </Box>

// //               <Divider />

// //               {/* Delivery & Other Charges (Placeholder) */}
// //               <Box>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Delivery
// //                   </Typography>
// //                   <Typography variant="body2" color="success.main" fontWeight={500}>
// //                     FREE
// //                   </Typography>
// //                 </Box>
                
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Taxes & Fees
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Calculated at checkout
// //                   </Typography>
// //                 </Box>
// //               </Box>

// //               <Divider sx={{ borderStyle: 'dashed' }} />

// //               {/* Total Amount */}
// //               <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 2 }}>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //                   <Typography variant="h6" fontWeight={700}>
// //                     Total Amount
// //                   </Typography>
// //                   <Typography
// //                     variant="h5"
// //                     sx={{
// //                       fontWeight: 700,
// //                       color: 'error.main'
// //                     }}
// //                   >
// //                     {formatPrice(totalAmount)}
// //                   </Typography>
// //                 </Box>
// //                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
// //                   Inclusive of all taxes
// //                 </Typography>
// //               </Box>

// //               {/* Action Buttons */}
// //               <Stack spacing={2}>
// //                 <Button
// //                   variant="contained"
// //                   size="large"
// //                   fullWidth
// //                   onClick={onProceedToCheckout}
// //                   endIcon={<CreditCard />}
// //                   sx={{
// //                     py: 1.5,
// //                     borderRadius: 2,
// //                     textTransform: 'none',
// //                     fontSize: '1rem',
// //                     fontWeight: 600,
// //                     background: 'linear-gradient(45deg, #FF6B35 30%, #FF8E53 90%)',
// //                     '&:hover': {
// //                       background: 'linear-gradient(45deg, #E55A2B 30%, #FF7043 90%)',
// //                       transform: 'translateY(-2px)',
// //                       boxShadow: '0 8px 25px rgba(255,107,53,0.4)'
// //                     }
// //                   }}
// //                 >
// //                   Proceed to Checkout
// //                 </Button>

// //                 <Button
// //                   variant="outlined"
// //                   size="large"
// //                   fullWidth
// //                   onClick={onContinueShopping}
// //                   startIcon={<ShoppingBag />}
// //                   sx={{
// //                     py: 1.5,
// //                     borderRadius: 2,
// //                     textTransform: 'none',
// //                     fontSize: '0.95rem',
// //                     fontWeight: 500,
// //                     borderColor: 'primary.main',
// //                     color: 'primary.main',
// //                     '&:hover': {
// //                       borderColor: 'primary.dark',
// //                       bgcolor: 'primary.50'
// //                     }
// //                   }}
// //                 >
// //                   Continue Shopping
// //                 </Button>

// //                 <Button
// //                   variant="text"
// //                   size="medium"
// //                   fullWidth
// //                   onClick={onClearCart}
// //                   startIcon={<Delete />}
// //                   sx={{
// //                     py: 1,
// //                     borderRadius: 2,
// //                     textTransform: 'none',
// //                     fontSize: '0.9rem',
// //                     color: 'error.main',
// //                     '&:hover': {
// //                       bgcolor: 'error.50'
// //                     }
// //                   }}
// //                 >
// //                   Clear Cart
// //                 </Button>
// //               </Stack>
// //             </Stack>
// //           </>
// //         ) : (
// //           /* Empty Cart Summary */
// //           <Box sx={{ textAlign: 'center', py: 3 }}>
// //             <Typography variant="body2" color="text.secondary" gutterBottom>
// //               Your cart is empty
// //             </Typography>
// //             <Button
// //               variant="contained"
// //               onClick={onContinueShopping}
// //               startIcon={<ShoppingBag />}
// //               sx={{
// //                 mt: 2,
// //                 borderRadius: 2,
// //                 textTransform: 'none'
// //               }}
// //             >
// //               Start Shopping
// //             </Button>
// //           </Box>
// //         )}
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default CartSummary;










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














// src/components/cart/CartSummary.jsx
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
  ShoppingCart,
  CreditCard,
  ShoppingBag,
  Delete,
  Receipt
} from '@mui/icons-material';

const CartSummary = ({ 
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
        grandTotal: 0
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
    const grandTotal = subtotal; // Since tax is already included

    return { 
      itemCount, 
      totalQuantity, 
      subtotal,
      taxExclusive,
      taxInclusive,
      grandTotal
    };
  };

  const { 
    itemCount, 
    totalQuantity, 
    subtotal,
    taxExclusive,
    taxInclusive,
    grandTotal
  } = calculateTotals();

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
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

  return (
    <>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          border: '1px solid',
          borderColor: 'grey.200',
          position: { md: 'sticky' },
          top: { md: 24 },
          height: 'fit-content',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: 'text.primary'
            }}
          >
            <Receipt sx={{ color: 'primary.main' }} />
            Order Summary
          </Typography>

          {!isEmpty ? (
            <>
              {/* Product List */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                  Items ({itemCount})
                </Typography>
                <Stack spacing={1.5}>
                  {cartData.items.map((item, index) => {
                    const itemTotal = parseFloat(item.product.price) * item.quantity;
                    return (
                      <Box
                        key={`${item.product.product_id}-${index}`}
                        sx={{
                          p: 2,
                          bgcolor: 'white',
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'grey.200'
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 0.5,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {item.product.name}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            {formatPrice(parseFloat(item.product.price))} × {item.quantity}
                          </Typography>
                          <Typography variant="body2" fontWeight={600} color="error.main">
                            {formatPrice(itemTotal)}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>

              <Divider sx={{ mb: 3, borderStyle: 'dashed' }} />

              {/* Calculation Details */}
              <Stack spacing={2.5}>
                {/* Subtotal */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Subtotal ({totalQuantity} items)
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {formatPrice(subtotal)}
                  </Typography>
                </Box>

                {/* Tax Breakdown */}
                <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                    Tax Breakdown
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Amount (Tax Exclusive)
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {formatPrice(taxExclusive)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">
                      GST (18%)
                    </Typography>
                    <Typography variant="body2" fontWeight={500} color="warning.main">
                      {formatPrice(taxInclusive)}
                    </Typography>
                  </Box>
                </Box>

                {/* Delivery */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Delivery Charges
                  </Typography>
                  <Chip
                    label="FREE"
                    size="small"
                    color="success"
                    variant="filled"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>

                <Divider sx={{ borderStyle: 'dashed', borderColor: 'primary.main' }} />

                {/* Grand Total */}
                <Box 
                  sx={{ 
                    bgcolor: 'primary.50', 
                    p: 3, 
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'primary.main'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" fontWeight={700} color="primary.main">
                      Grand Total
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: 'error.main'
                      }}
                    >
                      {formatPrice(grandTotal)}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    Inclusive of all taxes & charges
                  </Typography>
                </Box>

                {/* Action Buttons */}
                <Stack spacing={2} sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={onProceedToCheckout}
                    endIcon={<CreditCard />}
                    sx={{
                      py: 2,
                      borderRadius: 3,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #FF6B35 30%, #FF8E53 90%)',
                      boxShadow: '0 4px 20px rgba(255,107,53,0.3)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #E55A2B 30%, #FF7043 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 30px rgba(255,107,53,0.4)'
                      }
                    }}
                  >
                    Proceed to Checkout
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    onClick={onContinueShopping}
                    startIcon={<ShoppingBag />}
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderColor: 'primary.main',
                      borderWidth: 2,
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        borderWidth: 2,
                        bgcolor: 'primary.50',
                        transform: 'translateY(-1px)'
                      }
                    }}
                  >
                    Continue Shopping
                  </Button>

                  <Button
                    variant="text"
                    size="medium"
                    fullWidth
                    onClick={handleClearCartClick}
                    startIcon={isClearing ? <CircularProgress size={16} /> : <Delete />}
                    disabled={isClearing}
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'error.main',
                      '&:hover': {
                        bgcolor: 'error.50'
                      }
                    }}
                  >
                    {isClearing ? 'Clearing Cart...' : 'Clear Cart'}
                  </Button>
                </Stack>
              </Stack>
            </>
          ) : (
            /* Empty Cart Summary */
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Your cart is empty
              </Typography>
              <Button
                variant="contained"
                onClick={onContinueShopping}
                startIcon={<ShoppingBag />}
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  textTransform: 'none',
                  px: 3
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
            borderRadius: 3,
            minWidth: { xs: '90%', sm: 400 }
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Clear Cart
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
            Are you sure you want to remove all items from your cart? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button 
            onClick={() => setShowClearDialog(false)}
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleClearCartConfirm}
            variant="contained"
            color="error"
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            Clear Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartSummary;