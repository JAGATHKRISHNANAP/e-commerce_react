// // src/pages/CartPage.jsx - Main Cart Page Component
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   IconButton,
//   Stack,
//   Divider,
//   Chip,
//   Paper,
//   Badge,
//   Breadcrumbs,
//   Link,
//   Fade
// } from '@mui/material';
// import {
//   Home,
//   NavigateNext,
//   ShoppingCart,
//   Delete,
//   Add,
//   Remove,
//   CreditCard,
//   ShoppingBag,
//   Shield,
//   LocalOffer,
//   Verified
// } from '@mui/icons-material';

// import Header from '../components/homepagecomponent/AppHeaders';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import ErrorMessage from '../components/ui/ErrorMessage';
// import { useCart } from '../hooks/useCart';
// import { showToast } from '../components/ui/Toast';

// const CartPage = () => {
//   const navigate = useNavigate();
//   const { cartData, loading, error, refetch, removeItem, onUpdateItem } = useCart();
//   const [removingProductId, setRemovingProductId] = useState(null);
//   const [updatingProductId, setUpdatingProductId] = useState(null);

//   const formatPrice = (price) => {
//     return `₹${Math.abs(price).toLocaleString('en-IN', {
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     })}`;
//   };

//   const calculateTotals = () => {
//     if (!cartData?.items || cartData.items.length === 0) {
//       return {
//         itemCount: 0,
//         totalQuantity: 0,
//         subtotal: 0,
//         discount: 0,
//         platformFee: 0,
//         deliveryFee: 0,
//         totalAmount: 0,
//         savings: 0
//       };
//     }

//     const itemCount = cartData.items.length;
//     const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
//     const subtotal = cartData.items.reduce((sum, item) => {
//       return sum + (parseFloat(item.price_at_time || item.product.price) * item.quantity);
//     }, 0);

//     // Calculate discounts and fees
//     const discount = subtotal * 0.15; // 15% discount example
//     const platformFee = 29;
//     const deliveryFee = subtotal > 499 ? 0 : 40;
//     const savings = discount + (deliveryFee === 0 ? 40 : 0);
//     const totalAmount = subtotal - discount + platformFee + deliveryFee;

//     return {
//       itemCount,
//       totalQuantity,
//       subtotal,
//       discount,
//       platformFee,
//       deliveryFee,
//       totalAmount,
//       savings
//     };
//   };

//   const {
//     itemCount,
//     totalQuantity,
//     subtotal,
//     discount,
//     platformFee,
//     deliveryFee,
//     totalAmount,
//     savings
//   } = calculateTotals();

//   const handleProceedToCheckout = () => {
//     showToast('Proceeding to checkout...', 'info');
//     console.log('Proceeding to checkout with cart:', cartData);
//     navigate('/checkout', { state: { cart: cartData } });
//   };

//   const handleContinueShopping = () => {
//     navigate('/dashboard');
//   };

//   const handleClearCart = () => {
//     showToast('Clear cart functionality to be implemented', 'info');
//     console.log('Clearing cart...');
//   };

//   const handleGoHome = () => {
//     navigate('/dashboard');
//   };

//   const handleRemoveItem = async (productId) => {
//     try {
//       setRemovingProductId(productId);
//       await removeItem(productId);
//       showToast('Item removed from cart', 'success');
//     } catch (error) {
//       showToast(error.message || 'Failed to remove item', 'error');
//     } finally {
//       setRemovingProductId(null);
//     }
//   };

//   const handleUpdateQuantity = async (productId, change) => {
//     try {
//       setUpdatingProductId(productId);
//       const currentItem = cartData.items.find(item => item.product.product_id === productId);
//       if (!currentItem) return;

//       const newQuantity = currentItem.quantity + change;
//       if (newQuantity < 1) return;

//       await onUpdateItem(productId, newQuantity);
//       showToast('Quantity updated', 'success');
//     } catch (error) {
//       showToast('Failed to update quantity', 'error');
//     } finally {
//       setUpdatingProductId(null);
//     }
//   };

//   // Price row component for order summary
//   const PriceRow = ({ label, amount, isDiscount = false, isBold = false, icon = null }) => (
//     <Box sx={{ 
//       display: 'flex', 
//       justifyContent: 'space-between', 
//       alignItems: 'center',
//       py: 1.5
//     }}>
//       <Typography 
//         variant="body2" 
//         sx={{ 
//           color: '#6B7280',
//           fontWeight: isBold ? 600 : 400,
//           fontSize: isBold ? '1rem' : '0.9rem',
//           display: 'flex',
//           alignItems: 'center',
//           gap: 0.5
//         }}
//       >
//         {icon && icon}
//         {label}
//       </Typography>
//       <Typography 
//         variant="body2" 
//         sx={{ 
//           color: isDiscount ? '#16A34A' : (isBold ? '#111827' : '#374151'),
//           fontWeight: isBold ? 700 : 500,
//           fontSize: isBold ? '1rem' : '0.9rem'
//         }}
//       >
//         {isDiscount && amount > 0 ? '−' : ''}{formatPrice(amount)}
//       </Typography>
//     </Box>
//   );

//   const EmptyCart = () => (
//     <Fade in timeout={600}>
//       <Paper
//         elevation={0}
//         sx={{
//           textAlign: 'center',
//           py: 8,
//           px: 4,
//           borderRadius: 2,
//           border: '1px solid #E5E7EB'
//         }}
//       >
//         <ShoppingCart sx={{ fontSize: 80, color: '#D1D5DB', mb: 3 }} />
//         <Typography 
//           variant="h5" 
//           gutterBottom 
//           sx={{ fontWeight: 600, color: '#111827' }}
//         >
//           Your cart is empty
//         </Typography>
//         <Typography 
//           variant="body1" 
//           sx={{ color: '#6B7280', mb: 4, fontSize: '1.1rem' }}
//         >
//           Looks like you haven't added any items to your cart yet.
//         </Typography>
//         <Button
//           variant="contained"
//           size="large"
//           onClick={handleContinueShopping}
//           startIcon={<ShoppingBag />}
//           sx={{
//             py: 1.5,
//             px: 4,
//             borderRadius: 2,
//             textTransform: 'none',
//             fontSize: '1rem',
//             fontWeight: 600,
//             backgroundColor: '#111827',
//             '&:hover': { backgroundColor: '#374151' }
//           }}
//         >
//           Continue Shopping
//         </Button>
//       </Paper>
//     </Fade>
//   );

//   // Loading state
//   if (loading) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
//         <Header />
//         <LoadingSpinner message="Loading your cart..." />
//       </Box>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
//         <Header />
//         <ErrorMessage
//           error={error}
//           title="Failed to load cart"
//           onRetry={refetch}
//           onGoHome={handleGoHome}
//         />
//       </Box>
//     );
//   }

//   const isEmpty = !cartData?.items || cartData.items.length === 0;

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
//       <Header />

//       <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } ,backgroundColor: '#1b84ec' }}>
//         {/* Breadcrumb Navigation */}
//         <Box sx={{ mb: { xs: 3, md: 4 } }}>
//           <Breadcrumbs 
//             separator={<NavigateNext fontSize="small" />} 
//             sx={{ mb: 2 }}
//           >
//             <Link
//               component="button"
//               variant="body2"
//               onClick={handleGoHome}
//               sx={{ 
//                 textDecoration: 'none',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 0.5,
//                 color: '#6B7280',
//                 fontWeight: 500,
//                 fontSize: '0.9rem',
//                 '&:hover': { color: '#111827' }
//               }}
//             >
//               <Home sx={{ fontSize: 16 }} />
//               Home
//             </Link>
//             <Typography 
//               color="#111827" 
//               variant="body2"
//               sx={{ fontWeight: 600, fontSize: '0.9rem' }}
//             >
//               Shopping Cart
//             </Typography>
//           </Breadcrumbs>

//           {/* Page Title */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
//             <Typography 
//               variant="h4" 
//               sx={{ 
//                 fontWeight: 700, 
//                 color: '#111827',
//                 fontSize: { xs: '1.75rem', md: '2.25rem' }
//               }}
//             >
//               Shopping Cart
//             </Typography>
//             {!isEmpty && (
//               <Badge
//                 badgeContent={totalQuantity}
//                 sx={{
//                   '& .MuiBadge-badge': {
//                     backgroundColor: '#16A34A',
//                     color: 'white',
//                     fontWeight: 600
//                   }
//                 }}
//               >
//                 <ShoppingCart sx={{ fontSize: 32, color: '#6B7280' }} />
//               </Badge>
//             )}
//           </Box>
//           <Typography 
//             variant="body1" 
//             sx={{ color: '#6B7280', fontSize: '1.1rem' }}
//           >
//             {isEmpty 
//               ? 'Your cart is currently empty' 
//               : `${itemCount} ${itemCount === 1 ? 'item' : 'items'} in your cart`
//             }
//           </Typography>
//         </Box>

//         {isEmpty ? (
//           <EmptyCart />
//         ) : (
//           /* Main 2-Column Layout: 75% / 25% split */
//           <Grid container spacing={{ xs: 3, md: 4 }}>
//             {/* Left Column - Cart Items (md=8) */}
//             <Grid item xs={12} md={8}>
//               <Fade in timeout={600}>
//                 <Stack spacing={2}>
//                   {cartData.items.map((item, index) => (
//                     <Card
//                       key={`${item.product.product_id}-${index}`}
//                       elevation={0}
//                       sx={{
//                         border: '1px solid #E5E7EB',
//                         borderRadius: 2,
//                         transition: 'all 0.2s ease',
//                         '&:hover': {
//                           borderColor: '#D1D5DB',
//                           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
//                         }
//                       }}
//                     >
//                       <CardContent sx={{ p: { xs: 2, md: 3 } }}>
//                         <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, alignItems: 'center' }}>
//                           {/* Product Image */}
//                           <Box
//                             sx={{
//                               width: { xs: 80, md: 100 },
//                               height: { xs: 80, md: 100 },
//                               borderRadius: 2,
//                               overflow: 'hidden',
//                               flexShrink: 0,
//                               border: '1px solid #F3F4F6',
//                               backgroundColor: '#F9FAFB',
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center'
//                             }}
//                           >
//                             {item.product.primary_image_url ? (
//                               <img
//                                 src={item.product.primary_image_url}
//                                 alt={item.product.name}
//                                 style={{
//                                   width: '100%',
//                                   height: '100%',
//                                   objectFit: 'cover'
//                                 }}
//                               />
//                             ) : (
//                               <ShoppingBag sx={{ fontSize: 40, color: '#D1D5DB' }} />
//                             )}
//                           </Box>

//                           {/* Product Details */}
//                           <Box sx={{ flex: 1, minWidth: 0 }}>
//                             <Typography
//                               variant="h6"
//                               sx={{
//                                 fontWeight: 600,
//                                 color: '#111827',
//                                 mb: 1,
//                                 fontSize: { xs: '1rem', md: '1.125rem' },
//                                 display: '-webkit-box',
//                                 WebkitLineClamp: 2,
//                                 WebkitBoxOrient: 'vertical',
//                                 overflow: 'hidden',
//                                 lineHeight: 1.4
//                               }}
//                             >
//                               {item.product.name}
//                             </Typography>

//                             {/* Category and Stock */}
//                             {(item.product.category_name || item.product.stock_quantity) && (
//                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                                 {item.product.category_name && (
//                                   <Chip
//                                     label={item.product.category_name}
//                                     size="small"
//                                     sx={{
//                                       backgroundColor: '#F0F8FF',
//                                       color: '#1976D2',
//                                       fontSize: '0.75rem'
//                                     }}
//                                   />
//                                 )}
//                                 {item.product.stock_quantity !== undefined && (
//                                   <Chip
//                                     label={item.product.stock_quantity > 10 ? 'In Stock' : 
//                                            item.product.stock_quantity > 0 ? `${item.product.stock_quantity} left` : 'Out of Stock'}
//                                     size="small"
//                                     color={item.product.stock_quantity > 10 ? 'success' : 
//                                            item.product.stock_quantity > 0 ? 'warning' : 'error'}
//                                     variant="outlined"
//                                     sx={{ fontSize: '0.75rem' }}
//                                   />
//                                 )}
//                               </Box>
//                             )}

//                             {/* Price Row */}
//                             <Box sx={{ mb: 2 }}>
//                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
//                                 <Typography
//                                   variant="h6"
//                                   sx={{
//                                     fontWeight: 700,
//                                     color: '#111827',
//                                     fontSize: { xs: '1.1rem', md: '1.25rem' }
//                                   }}
//                                 >
//                                   {formatPrice(parseFloat(item.price_at_time || item.product.price))}
//                                 </Typography>
//                                 {item.product.original_price && item.product.original_price > (item.price_at_time || item.product.price) && (
//                                   <>
//                                     <Typography
//                                       variant="body2"
//                                       sx={{
//                                         color: '#9CA3AF',
//                                         textDecoration: 'line-through',
//                                         fontSize: '0.9rem'
//                                       }}
//                                     >
//                                       {formatPrice(item.product.original_price)}
//                                     </Typography>
//                                     <Chip
//                                       label={`${Math.round(((item.product.original_price - (item.price_at_time || item.product.price)) / item.product.original_price) * 100)}% OFF`}
//                                       size="small"
//                                       sx={{
//                                         backgroundColor: '#DCFCE7',
//                                         color: '#16A34A',
//                                         fontWeight: 600,
//                                         fontSize: '0.75rem'
//                                       }}
//                                     />
//                                   </>
//                                 )}
//                               </Box>
//                               <Typography variant="body2" sx={{ color: '#6B7280' }}>
//                                 Total: {formatPrice(parseFloat(item.price_at_time || item.product.price) * item.quantity)}
//                               </Typography>
//                             </Box>

//                             {/* Quantity and Actions */}
//                             <Box sx={{ 
//                               display: 'flex', 
//                               justifyContent: 'space-between', 
//                               alignItems: 'center',
//                               flexWrap: 'wrap',
//                               gap: 2
//                             }}>
//                               {/* Quantity Selector */}
//                               <Box sx={{ 
//                                 display: 'flex', 
//                                 alignItems: 'center',
//                                 border: '1px solid #E5E7EB',
//                                 borderRadius: 1.5,
//                                 backgroundColor: '#FAFBFC'
//                               }}>
//                                 <IconButton
//                                   onClick={() => handleUpdateQuantity(item.product.product_id, -1)}
//                                   disabled={item.quantity <= 1 || updatingProductId === item.product.product_id}
//                                   size="small"
//                                   sx={{ 
//                                     color: '#6B7280',
//                                     '&:hover': { backgroundColor: '#F3F4F6' },
//                                     '&:disabled': { color: '#D1D5DB' }
//                                   }}
//                                 >
//                                   <Remove fontSize="small" />
//                                 </IconButton>
//                                 <Typography
//                                   sx={{
//                                     minWidth: 40,
//                                     textAlign: 'center',
//                                     fontWeight: 600,
//                                     color: '#111827',
//                                     fontSize: '1rem'
//                                   }}
//                                 >
//                                   {item.quantity}
//                                 </Typography>
//                                 <IconButton
//                                   onClick={() => handleUpdateQuantity(item.product.product_id, 1)}
//                                   disabled={updatingProductId === item.product.product_id}
//                                   size="small"
//                                   sx={{ 
//                                     color: '#6B7280',
//                                     '&:hover': { backgroundColor: '#F3F4F6' }
//                                   }}
//                                 >
//                                   <Add fontSize="small" />
//                                 </IconButton>
//                               </Box>

//                               {/* Remove Button */}
//                               <Button
//                                 onClick={() => handleRemoveItem(item.product.product_id)}
//                                 startIcon={<Delete />}
//                                 disabled={removingProductId === item.product.product_id}
//                                 size="small"
//                                 sx={{
//                                   color: '#6B7280',
//                                   textTransform: 'none',
//                                   fontWeight: 500,
//                                   '&:hover': {
//                                     backgroundColor: '#FEF2F2',
//                                     color: '#DC2626'
//                                   }
//                                 }}
//                               >
//                                 {removingProductId === item.product.product_id ? 'Removing...' : 'Remove'}
//                               </Button>
//                             </Box>
//                           </Box>
//                         </Box>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </Stack>
//               </Fade>
//             </Grid>

//             {/* Right Column - Order Summary (md=4) */}
//             <Grid item xs={12} md={4}>
//               <Fade in timeout={600} style={{ transitionDelay: '200ms' }}>
//                 <Box sx={{ position: { md: 'sticky' }, top: { md: 24 } }}>
//                   <Card
//                     elevation={0}
//                     sx={{
//                       borderRadius: 2,
//                       border: '1px solid #E5E7EB',
//                       backgroundColor: '#FFFFFF',
//                       boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
//                     }}
//                   >
//                     {/* Header */}
//                     <Box sx={{ p: 3, pb: 2 }}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 600,
//                           color: '#111827',
//                           fontSize: '1.125rem',
//                           mb: 0.5
//                         }}
//                       >
//                         ORDER SUMMARY
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: '#6B7280' }}>
//                         {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
//                       </Typography>
//                     </Box>

//                     <Divider sx={{ borderColor: '#F3F4F6' }} />

//                     {/* Price Breakdown */}
//                     <Box sx={{ px: 3, py: 2 }}>
//                       <Stack spacing={0}>
//                         <PriceRow 
//                           label={`Total MRP (${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'})`}
//                           amount={subtotal}
//                         />

//                         {discount > 0 && (
//                           <PriceRow 
//                             label="Discount on MRP"
//                             amount={discount}
//                             isDiscount={true}
//                             icon={<LocalOffer sx={{ fontSize: 16, color: '#16A34A' }} />}
//                           />
//                         )}

//                         <PriceRow 
//                           label="Platform Fee"
//                           amount={platformFee}
//                         />

//                         <Box sx={{ 
//                           display: 'flex', 
//                           justifyContent: 'space-between', 
//                           alignItems: 'center',
//                           py: 1.5
//                         }}>
//                           <Typography 
//                             variant="body2" 
//                             sx={{ 
//                               color: '#6B7280',
//                               fontSize: '0.9rem'
//                             }}
//                           >
//                             Delivery Charges
//                           </Typography>
//                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                             {subtotal > 499 && deliveryFee === 0 && (
//                               <Typography 
//                                 variant="body2" 
//                                 sx={{ 
//                                   color: '#6B7280',
//                                   textDecoration: 'line-through',
//                                   fontSize: '0.85rem'
//                                 }}
//                               >
//                                 ₹40
//                               </Typography>
//                             )}
//                             {deliveryFee === 0 ? (
//                               <Chip
//                                 label="FREE"
//                                 size="small"
//                                 sx={{
//                                   backgroundColor: '#16A34A',
//                                   color: 'white',
//                                   fontWeight: 600,
//                                   fontSize: '0.75rem',
//                                   height: 24
//                                 }}
//                               />
//                             ) : (
//                               <Typography 
//                                 variant="body2" 
//                                 sx={{ 
//                                   color: '#374151',
//                                   fontWeight: 500,
//                                   fontSize: '0.9rem'
//                                 }}
//                               >
//                                 {formatPrice(deliveryFee)}
//                               </Typography>
//                             )}
//                           </Box>
//                         </Box>
//                       </Stack>
//                     </Box>

//                     <Divider sx={{ borderColor: '#E5E7EB', mx: 3 }} />

//                     {/* Total Amount */}
//                     <Box sx={{ px: 3, py: 2.5 }}>
//                       <Box sx={{ 
//                         display: 'flex', 
//                         justifyContent: 'space-between', 
//                         alignItems: 'center',
//                         mb: 2
//                       }}>
//                         <Typography 
//                           variant="h6" 
//                           sx={{ 
//                             color: '#111827',
//                             fontWeight: 700,
//                             fontSize: '1.125rem'
//                           }}
//                         >
//                           Total Amount
//                         </Typography>
//                         <Typography
//                           variant="h6"
//                           sx={{
//                             fontWeight: 700,
//                             color: '#111827',
//                             fontSize: '1.25rem'
//                           }}
//                         >
//                           {formatPrice(totalAmount)}
//                         </Typography>
//                       </Box>

//                       {/* Savings Message */}
//                       {savings > 0 && (
//                         <Box sx={{
//                           backgroundColor: '#F0FDF4',
//                           border: '1px solid #BBF7D0',
//                           borderRadius: 1,
//                           p: 2,
//                           mb: 2
//                         }}>
//                           <Typography 
//                             variant="body2" 
//                             sx={{ 
//                               color: '#16A34A',
//                               fontWeight: 600,
//                               fontSize: '0.9rem',
//                               display: 'flex',
//                               alignItems: 'center',
//                               gap: 0.5
//                             }}
//                           >
//                             <Verified sx={{ fontSize: 16 }} />
//                             You will save {formatPrice(savings)} on this order
//                           </Typography>
//                         </Box>
//                       )}

//                       {/* Security Message */}
//                       <Box sx={{ 
//                         display: 'flex', 
//                         alignItems: 'flex-start', 
//                         gap: 1,
//                         backgroundColor: '#F9FAFB',
//                         p: 2,
//                         borderRadius: 1,
//                         border: '1px solid #F3F4F6',
//                         mb: 3
//                       }}>
//                         <Shield sx={{ fontSize: 18, color: '#6B7280', mt: 0.1 }} />
//                         <Typography 
//                           variant="caption" 
//                           sx={{ 
//                             color: '#6B7280',
//                             lineHeight: 1.4,
//                             fontSize: '0.8rem'
//                           }}
//                         >
//                           Safe and Secure Payments. Easy returns. 100% Authentic products.
//                         </Typography>
//                       </Box>

//                       {/* Checkout Button */}
//                       <Button
//                         variant="contained"
//                         size="large"
//                         fullWidth
//                         onClick={handleProceedToCheckout}
//                         endIcon={<CreditCard />}
//                         sx={{
//                           py: 2,
//                           borderRadius: 2,
//                           textTransform: 'none',
//                           fontSize: '1.1rem',
//                           fontWeight: 700,
//                           backgroundColor: '#111827',
//                           boxShadow: '0 4px 14px rgba(17, 24, 39, 0.25)',
//                           '&:hover': {
//                             backgroundColor: '#374151',
//                             transform: 'translateY(-1px)',
//                             boxShadow: '0 6px 20px rgba(17, 24, 39, 0.35)'
//                           },
//                           transition: 'all 0.3s ease'
//                         }}
//                       >
//                         Proceed to Checkout
//                       </Button>
//                     </Box>
//                   </Card>
//                 </Box>
//               </Fade>
//             </Grid>
//           </Grid>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default CartPage;





// src/pages/CartPage.jsx - Main Cart Page Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Stack,
  Divider,
  Chip,
  Paper,
  Badge,
  Breadcrumbs,
  Link,
  Fade,
  CircularProgress
} from '@mui/material';
import {
  Home,
  NavigateNext,
  ShoppingCart,
  Delete,
  Add,
  Remove,
  CreditCard,
  ShoppingBag,
  Shield,
  LocalOffer,
  Verified
} from '@mui/icons-material';

import Header from '../components/homepagecomponent/AppHeaders';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useCart } from '../hooks/useCart';
import { showToast } from '../components/ui/Toast';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartData, loading, error, refetch, removeItem, onUpdateItem } = useCart();
  const [removingProductId, setRemovingProductId] = useState(null);
  const [updatingProductId, setUpdatingProductId] = useState(null);

  const formatPrice = (price) => {
    return `₹${Math.abs(price).toLocaleString('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })}`;
  };

  const calculateTotals = () => {
    if (!cartData?.items || cartData.items.length === 0) {
      return {
        itemCount: 0,
        totalQuantity: 0,
        subtotal: 0,
        discount: 0,
        platformFee: 0,
        deliveryFee: 0,
        totalAmount: 0,
        savings: 0
      };
    }

    const itemCount = cartData.items.length;
    const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartData.items.reduce((sum, item) => {
      return sum + (parseFloat(item.price_at_time || item.product.price) * item.quantity);
    }, 0);

    // Calculate discounts and fees
    const discount = subtotal * 0.15; // 15% discount example
    const platformFee = 29;
    const deliveryFee = subtotal > 499 ? 0 : 40;
    const savings = discount + (deliveryFee === 0 ? 40 : 0);
    const totalAmount = subtotal - discount + platformFee + deliveryFee;

    return {
      itemCount,
      totalQuantity,
      subtotal,
      discount,
      platformFee,
      deliveryFee,
      totalAmount,
      savings
    };
  };

  const {
    itemCount,
    totalQuantity,
    subtotal,
    discount,
    platformFee,
    deliveryFee,
    totalAmount,
    savings
  } = calculateTotals();

  const handleProceedToCheckout = () => {
    showToast('Proceeding to checkout...', 'info');
    console.log('Proceeding to checkout with cart:', cartData);
    navigate('/checkout', { state: { cart: cartData } });
  };

  const handleContinueShopping = () => {
    navigate('/dashboard');
  };

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const handleRemoveItem = async (productId) => {
    try {
      setRemovingProductId(productId);
      await removeItem(productId);
      showToast('Item removed from cart', 'success');
    } catch (error) {
      showToast(error.message || 'Failed to remove item', 'error');
    } finally {
      setRemovingProductId(null);
    }
  };

  const handleUpdateQuantity = async (productId, change) => {
    try {
      setUpdatingProductId(productId);
      const currentItem = cartData.items.find(item =>
        item.product.product_id === productId
      );
      if (currentItem) {
        const newQuantity = currentItem.quantity + change;
        if (newQuantity >= 1) {
          await onUpdateItem(productId, newQuantity);
        }
      }
    } catch (error) {
      showToast('Failed to update quantity', 'error');
    } finally {
      setUpdatingProductId(null);
    }
  };

  // Price row component for order summary
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

  const EmptyCart = () => (
    <Fade in timeout={600}>
      <Paper
        elevation={0}
        sx={{
          textAlign: 'center',
          py: 8,
          px: 4,
          borderRadius: 2,
          border: '1px solid #E5E7EB'
        }}
      >
        <ShoppingCart sx={{ fontSize: 80, color: '#D1D5DB', mb: 3 }} />
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: '#111827' }}
        >
          Your cart is empty
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#6B7280', mb: 4, fontSize: '1.1rem' }}
        >
          Looks like you haven't added any items to your cart yet.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleContinueShopping}
          startIcon={<ShoppingBag />}
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            backgroundColor: '#111827',
            '&:hover': { backgroundColor: '#374151' }
          }}
        >
          Continue Shopping
        </Button>
      </Paper>
    </Fade>
  );

  // Loading state
  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
        <Header />
        <LoadingSpinner message="Loading your cart..." />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
        <Header />
        <ErrorMessage
          error={error}
          title="Failed to load cart"
          onRetry={refetch}
          onGoHome={handleGoHome}
        />
      </Box>
    );
  }

  const isEmpty = !cartData?.items || cartData.items.length === 0;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
      <Header />

      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 3 } }}>
        {/* Breadcrumb Navigation */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            sx={{ mb: 2 }}
          >
            <Link
              component="button"
              variant="body2"
              onClick={handleGoHome}
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: '#6B7280',
                fontWeight: 500,
                fontSize: '0.9rem',
                '&:hover': { color: '#111827' }
              }}
            >
              <Home sx={{ fontSize: 16 }} />
              Home
            </Link>
            <Typography
              color="#111827"
              variant="body2"
              sx={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              Shopping Cart
            </Typography>
          </Breadcrumbs>

          {/* Page Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#111827',
                fontSize: { xs: '1.75rem', md: '2.25rem' }
              }}
            >
              Shopping Cart
            </Typography>
            {!isEmpty && (
              <Badge
                badgeContent={totalQuantity}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#16A34A',
                    color: 'white',
                    fontWeight: 600
                  }
                }}
              >
                <ShoppingCart sx={{ fontSize: 32, color: '#6B7280' }} />
              </Badge>
            )}
          </Box>
          <Typography
            variant="body1"
            sx={{ color: '#6B7280', fontSize: '1.1rem' }}
          >
            {isEmpty
              ? 'Your cart is currently empty'
              : `${itemCount} ${itemCount === 1 ? 'item' : 'items'} in your cart`
            }
          </Typography>
        </Box>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          /* Main 2-Column Layout with better width distribution */
          <Box sx={{ display: 'flex', gap: { xs: 3, md: 4 }, flexDirection: { xs: 'column', md: 'row' } }}>
            {/* Left Column - Cart Items (70% width) */}
            <Box sx={{ flex: '1 1 70%', minWidth: 0 }}>
              <Fade in timeout={600}>
                <Stack spacing={2}>
                  {cartData.items.map((item, index) => (
                    <Card
                      key={`${item.product.product_id}-${index}`}
                      elevation={0}
                      sx={{
                        border: '1px solid #E5E7EB',
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        width: '100%',
                        '&:hover': {
                          borderColor: '#D1D5DB',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                        }
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', gap: { xs: 3, md: 4 }, alignItems: 'center' }}>
                          {/* Product Image */}
                          <Box
                            sx={{
                              width: { xs: 100, md: 120 },
                              height: { xs: 100, md: 120 },
                              borderRadius: 2,
                              overflow: 'hidden',
                              flexShrink: 0,
                              border: '1px solid #F3F4F6',
                              backgroundColor: '#F9FAFB',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {item.product.primary_image_url ? (
                              <img
                                src={item.product.primary_image_url}
                                alt={item.product.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            ) : (
                              <ShoppingBag sx={{ fontSize: 50, color: '#D1D5DB' }} />
                            )}
                          </Box>

                          {/* Product Details */}
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                              variant="h5"
                              sx={{
                                fontWeight: 600,
                                color: '#111827',
                                mb: 1.5,
                                fontSize: { xs: '1.125rem', md: '1.375rem' },
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                lineHeight: 1.4
                              }}
                            >
                              {item.product.name}
                            </Typography>

                            {/* Category and Stock Info */}
                            {(item.product.category_name || item.product.stock_quantity) && (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                {item.product.category_name && (
                                  <Chip
                                    label={item.product.category_name}
                                    size="medium"
                                    sx={{
                                      backgroundColor: '#F0F8FF',
                                      color: '#1976D2',
                                      fontSize: '0.875rem',
                                      fontWeight: 500
                                    }}
                                  />
                                )}
                                {item.product.stock_quantity && (
                                  <Chip
                                    label={item.product.stock_quantity > 10 ? 'In Stock' :
                                      item.product.stock_quantity > 0 ? `${item.product.stock_quantity} left` : 'Out of Stock'}
                                    size="medium"
                                    color={item.product.stock_quantity > 10 ? 'success' :
                                      item.product.stock_quantity > 0 ? 'warning' : 'error'}
                                    variant="outlined"
                                    sx={{ fontSize: '0.875rem', fontWeight: 500 }}
                                  />
                                )}
                              </Box>
                            )}

                            {/* Price Row */}
                            <Box sx={{ mb: 3 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                <Typography
                                  variant="h4"
                                  sx={{
                                    fontWeight: 700,
                                    color: '#111827',
                                    fontSize: { xs: '1.5rem', md: '1.75rem' }
                                  }}
                                >
                                  {formatPrice(parseFloat(item.price_at_time || item.product.price))}
                                </Typography>
                                {item.product.original_price &&
                                  parseFloat(item.product.original_price) > parseFloat(item.price_at_time || item.product.price) && (
                                    <>
                                      <Typography
                                        variant="h6"
                                        sx={{
                                          color: '#9CA3AF',
                                          textDecoration: 'line-through',
                                          fontSize: '1.125rem'
                                        }}
                                      >
                                        {formatPrice(parseFloat(item.product.original_price))}
                                      </Typography>
                                      <Chip
                                        label={`${Math.round(((parseFloat(item.product.original_price) - parseFloat(item.price_at_time || item.product.price)) / parseFloat(item.product.original_price)) * 100)}% OFF`}
                                        size="medium"
                                        sx={{
                                          backgroundColor: '#DCFCE7',
                                          color: '#16A34A',
                                          fontWeight: 700,
                                          fontSize: '0.875rem'
                                        }}
                                      />
                                    </>
                                  )}
                              </Box>
                              <Typography variant="body1" sx={{ color: '#6B7280', fontSize: '1rem' }}>
                                Total: {formatPrice(parseFloat(item.price_at_time || item.product.price) * item.quantity)}
                              </Typography>
                            </Box>

                            {/* Quantity and Actions */}
                            <Box sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              gap: 3
                            }}>
                              {/* Quantity Selector */}
                              <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                border: '2px solid #E5E7EB',
                                borderRadius: 2,
                                backgroundColor: '#FAFBFC'
                              }}>
                                <IconButton
                                  onClick={() => handleUpdateQuantity(item.product.product_id, -1)}
                                  disabled={item.quantity <= 1 || updatingProductId === item.product.product_id}
                                  size="medium"
                                  sx={{
                                    color: '#6B7280',
                                    p: 1.5,
                                    '&:hover': { backgroundColor: '#F3F4F6' },
                                    '&:disabled': { color: '#D1D5DB' }
                                  }}
                                >
                                  {updatingProductId === item.product.product_id ?
                                    <CircularProgress size={20} /> : <Remove fontSize="medium" />
                                  }
                                </IconButton>
                                <Typography
                                  sx={{
                                    minWidth: 50,
                                    textAlign: 'center',
                                    fontWeight: 700,
                                    color: '#111827',
                                    fontSize: '1.125rem',
                                    mx: 1
                                  }}
                                >
                                  {item.quantity}
                                </Typography>
                                <IconButton
                                  onClick={() => handleUpdateQuantity(item.product.product_id, 1)}
                                  disabled={updatingProductId === item.product.product_id}
                                  size="medium"
                                  sx={{
                                    color: '#6B7280',
                                    p: 1.5,
                                    '&:hover': { backgroundColor: '#F3F4F6' }
                                  }}
                                >
                                  {updatingProductId === item.product.product_id ?
                                    <CircularProgress size={20} /> : <Add fontSize="medium" />
                                  }
                                </IconButton>
                              </Box>

                              {/* Remove Button */}
                              <Button
                                onClick={() => handleRemoveItem(item.product.product_id)}
                                startIcon={removingProductId === item.product.product_id ?
                                  <CircularProgress size={18} /> : <Delete />
                                }
                                disabled={removingProductId === item.product.product_id}
                                size="medium"
                                sx={{
                                  color: '#6B7280',
                                  textTransform: 'none',
                                  fontWeight: 600,
                                  fontSize: '1rem',
                                  px: 3,
                                  py: 1.5,
                                  '&:hover': {
                                    backgroundColor: '#FEF2F2',
                                    color: '#DC2626'
                                  }
                                }}
                              >
                                {removingProductId === item.product.product_id ? 'Removing...' : 'Remove'}
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Fade>
            </Box>

            {/* Right Column - Order Summary (30% width) */}
            <Box sx={{ flex: '0 0 30%', minWidth: { xs: '100%', md: '350px' } }}>
              <Fade in timeout={600} style={{ transitionDelay: '200ms' }}>
                <Box sx={{ position: { md: 'sticky' }, top: { md: 24 } }}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 2,
                      border: '1px solid #E5E7EB',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    }}
                  >
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
                        ORDER SUMMARY
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6B7280' }}>
                        {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
                      </Typography>
                    </Box>

                    <Divider sx={{ borderColor: '#F3F4F6' }} />

                    {/* Price Breakdown */}
                    <Box sx={{ px: 3, py: 2 }}>
                      <Stack spacing={0}>
                        <PriceRow
                          label={`Total MRP (${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'})`}
                          amount={subtotal}
                        />

                        {discount > 0 && (
                          <PriceRow
                            label="Discount on MRP"
                            amount={discount}
                            isDiscount={true}
                            icon={<LocalOffer sx={{ fontSize: 16, color: '#16A34A' }} />}
                          />
                        )}

                        <PriceRow
                          label="Platform Fee"
                          amount={platformFee}
                        />

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
                            {subtotal > 499 && deliveryFee === 0 && (
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
                            {deliveryFee === 0 ? (
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
                            ) : (
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#374151',
                                  fontWeight: 500,
                                  fontSize: '0.9rem'
                                }}
                              >
                                {formatPrice(deliveryFee)}
                              </Typography>
                            )}
                          </Box>
                        </Box>
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
                          {formatPrice(totalAmount)}
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
                              fontSize: '0.9rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5
                            }}
                          >
                            <Verified sx={{ fontSize: 16 }} />
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
                        border: '1px solid #F3F4F6',
                        mb: 3
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

                      {/* Checkout Button */}
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={handleProceedToCheckout}
                        endIcon={<CreditCard />}
                        sx={{
                          py: 2,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          backgroundColor: '#111827',
                          boxShadow: '0 4px 14px rgba(17, 24, 39, 0.25)',
                          '&:hover': {
                            backgroundColor: '#374151',
                            transform: 'translateY(-1px)',
                            boxShadow: '0 6px 20px rgba(17, 24, 39, 0.35)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Proceed to Checkout
                      </Button>
                    </Box>
                  </Card>
                </Box>
              </Fade>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CartPage;