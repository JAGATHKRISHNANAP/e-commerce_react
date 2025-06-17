// // // // // // src/pages/AddToCartPage.jsx
// // // import React, { useEffect } from 'react';
// // // import axios from 'axios';
// // // import AppHeader from '../components/homepagecomponent/AppHeaders';

// // // const AddToCart = () => {
// // //   useEffect(() => {
// // //     const fetchCart = async () => {
// // //       try {
// // //         const token = localStorage.getItem('token'); // should include only the JWT, no "Bearer"
// // //         console.log("Fetched Token:", token); // ensure this prints the correct token

// // //         const response = await axios.get('http://localhost:8000/api/v1/cart', {
// // //           headers: {
// // //             Authorization: `Bearer ${token}` // <-- this is important
// // //           }
// // //         });

// // //         console.log('Cart data:', response.data);
// // //       } catch (error) {
// // //         console.error('Fetch cart failed:', error.response?.data || error.message);
// // //       }
// // //     };

// // //     fetchCart();
// // //   }, []);

// // //   return (
// // //     <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
// // //       <AppHeader />
// // //       <div className="container mx-auto p-4">
// // //         <h1 className="text-2xl font-bold mb-4">Your Add to Cart</h1>
// // //         <p className="text-gray-700">This is your Add to Cart page.</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddToCart;














// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import AppHeader from '../components/homepagecomponent/AppHeaders';

// // const AddToCart = () => {
// //   const [cart, setCart] = useState(null);

// //   useEffect(() => {
// //     const fetchCart = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         console.log("Fetched Token:", token);

// //         const response = await axios.get('http://localhost:8000/api/v1/cart', {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });

// //         console.log('Cart data:', response.data);
// //         setCart(response.data);
// //       } catch (error) {
// //         console.error('Fetch cart failed:', error.response?.data || error.message);
// //       }
// //     };

// //     fetchCart();
// //   }, []);
// //   return (
// //     <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
// //       <AppHeader />
// //       <div className="container mx-auto p-4">
// //         <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

// //         {cart ? (
// //           <>
// //             <div className="grid gap-4">
// //               {cart.items.map((item) => (
// //                 <div
// //                   key={item.cart_item_id}
// //                   className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4"
// //                 >
// //                   <img
// //                     src={item.product.primary_image_url}
// //                     alt={item.product.name}
// //                     className="w-24 h-24 object-cover rounded-md"
// //                   />
// //                   <div>
// //                     <h2 className="text-lg font-semibold">{item.product.name}</h2>
// //                     <p className="text-sm text-gray-600">{item.product.description}</p>
// //                     <p className="text-md text-gray-800 mt-2">
// //                       ₹{item.price_at_time} × {item.quantity} = <strong>₹{item.subtotal}</strong>
// //                     </p>
// //                     <p className="text-sm text-gray-500">Category: {item.product.category_name}</p>
// //                     <p className="text-sm text-gray-500">Stock: {item.product.stock_quantity}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="mt-6 p-4 bg-gray-100 rounded-lg">
// //               <p className="text-xl font-bold">
// //                 Total: ₹{cart.total_amount}
// //               </p>
// //               <p>Total Items: {cart.total_items}</p>
// //               <p>Total Quantity: {cart.total_quantity}</p>
// //             </div>
// //           </>
// //         ) : (
// //           <p>Loading cart...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddToCart;


// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Button,
//   IconButton,
//   Chip,
//   Divider,
//   Paper,
//   CircularProgress,
//   Alert,
//   Badge,
//   TextField,
//   Stack,
//   Avatar
// } from '@mui/material';
// import {
//   Delete as DeleteIcon,
//   Add as AddIcon,
//   Remove as RemoveIcon,
//   ShoppingCart as ShoppingCartIcon,
//   LocalShipping as ShippingIcon,
//   Security as SecurityIcon,
//   Favorite as FavoriteIcon,
//   ArrowBack as ArrowBackIcon
// } from '@mui/icons-material';
// import axios from 'axios';
// import AppHeader from '../components/homepagecomponent/AppHeaders';

// const AddToCart = () => {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [updating, setUpdating] = useState({});

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const token = localStorage.getItem('token');
      
//       const response = await axios.get('http://localhost:8000/api/v1/cart', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       setCart(response.data);
//     } catch (error) {
//       console.error('Fetch cart failed:', error);
//       setError('Failed to load cart. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateQuantity = async (cartItemId, newQuantity) => {
//     if (newQuantity < 1) return;
    
//     setUpdating(prev => ({ ...prev, [cartItemId]: true }));
    
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`http://localhost:8000/api/v1/cart/items/${cartItemId}`, 
//         { quantity: newQuantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       // Refresh cart data
//       await fetchCart();
//     } catch (error) {
//       console.error('Update quantity failed:', error);
//       setError('Failed to update quantity. Please try again.');
//     } finally {
//       setUpdating(prev => ({ ...prev, [cartItemId]: false }));
//     }
//   };

//   const removeItem = async (cartItemId) => {
//     setUpdating(prev => ({ ...prev, [cartItemId]: true }));
    
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:8000/api/v1/cart/items/${cartItemId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
      
//       // Refresh cart data
//       await fetchCart();
//     } catch (error) {
//       console.error('Remove item failed:', error);
//       setError('Failed to remove item. Please try again.');
//     } finally {
//       setUpdating(prev => ({ ...prev, [cartItemId]: false }));
//     }
//   };

//   const calculateDiscount = (original, current) => {
//     if (original > current) {
//       return Math.round((1 - current / original) * 100);
//     }
//     return 0;
//   };

//   if (loading) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
//         <AppHeader />
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//           <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
//             <CircularProgress size={60} />
//           </Box>
//         </Container>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
//         <AppHeader />
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {error}
//           </Alert>
//           <Button variant="contained" onClick={fetchCart}>
//             Retry
//           </Button>
//         </Container>
//       </Box>
//     );
//   }

//   if (!cart || !cart.items || cart.items.length === 0) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
//         <AppHeader />
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//           <Paper 
//             elevation={0} 
//             sx={{ 
//               p: 6, 
//               textAlign: 'center', 
//               bgcolor: 'white',
//               borderRadius: 2
//             }}
//           >
//             <ShoppingCartIcon sx={{ fontSize: 80, color: 'grey.400', mb: 2 }} />
//             <Typography variant="h4" gutterBottom color="text.primary">
//               Your Cart is Empty
//             </Typography>
//             <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
//               Add items you want to shop for
//             </Typography>
//             <Button 
//               variant="contained" 
//               size="large"
//               sx={{ 
//                 bgcolor: '#ff6b35',
//                 '&:hover': { bgcolor: '#e55a2b' },
//                 px: 4,
//                 py: 1.5
//               }}
//             >
//               Continue Shopping
//             </Button>
//           </Paper>
//         </Container>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
//       <AppHeader />
      
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         {/* Header */}
//         <Box sx={{ mb: 4 }}>
//           <Button
//             startIcon={<ArrowBackIcon />}
//             sx={{ mb: 2, color: 'text.secondary' }}
//           >
//             Continue Shopping
//           </Button>
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             Shopping Cart
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {cart.total_items} {cart.total_items === 1 ? 'item' : 'items'} in your cart
//           </Typography>
//         </Box>

//         <Grid container spacing={3}>
//           {/* Cart Items */}
//           <Grid item xs={12} md={8}>
//             <Stack spacing={2}>
//               {cart.items.map((item) => (
//                 <Card key={item.cart_item_id} elevation={1} sx={{ borderRadius: 2 }}>
//                   <CardContent sx={{ p: 3 }}>
//                     <Grid container spacing={3}>
//                       {/* Product Image */}
//                       <Grid item xs={12} sm={4} md={3}>
//                         <CardMedia
//                           component="img"
//                           image={item.product.primary_image_url}
//                           alt={item.product.name}
//                           sx={{
//                             width: '100%',
//                             height: 150,
//                             objectFit: 'cover',
//                             borderRadius: 1,
//                             border: '1px solid #e0e0e0'
//                           }}
//                         />
//                       </Grid>

//                       {/* Product Details */}
//                       <Grid item xs={12} sm={8} md={9}>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                           <Typography variant="h6" fontWeight="medium" sx={{ flex: 1, pr: 2 }}>
//                             {item.product.name}
//                           </Typography>
//                           <IconButton
//                             onClick={() => removeItem(item.cart_item_id)}
//                             disabled={updating[item.cart_item_id]}
//                             size="small"
//                             sx={{ color: 'text.secondary' }}
//                           >
//                             <DeleteIcon />
//                           </IconButton>
//                         </Box>

//                         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                           {item.product.description}
//                         </Typography>

//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
//                           <Chip 
//                             label={item.product.category_name} 
//                             size="small" 
//                             variant="outlined"
//                             sx={{ bgcolor: '#f0f8ff', borderColor: '#1976d2', color: '#1976d2' }}
//                           />
//                           <Chip
//                             label={item.product.stock_quantity > 10 ? 'In Stock' : 
//                                    item.product.stock_quantity > 0 ? `${item.product.stock_quantity} left` : 'Out of Stock'}
//                             size="small"
//                             color={item.product.stock_quantity > 10 ? 'success' : 
//                                    item.product.stock_quantity > 0 ? 'warning' : 'error'}
//                             variant="outlined"
//                           />
//                         </Box>

//                         {/* Price */}
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                           <Typography variant="h5" fontWeight="bold" color="primary">
//                             ₹{item.price_at_time.toLocaleString()}
//                           </Typography>
//                           {item.product.original_price && item.product.original_price > item.price_at_time && (
//                             <>
//                               <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
//                                 ₹{item.product.original_price.toLocaleString()}
//                               </Typography>
//                               <Chip
//                                 label={`${calculateDiscount(item.product.original_price, item.price_at_time)}% OFF`}
//                                 size="small"
//                                 color="success"
//                               />
//                             </>
//                           )}
//                         </Box>

//                         {/* Quantity Controls and Actions */}
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <IconButton
//                               onClick={() => updateQuantity(item.cart_item_id, item.quantity - 1)}
//                               disabled={item.quantity === 1 || updating[item.cart_item_id]}
//                               size="small"
//                               sx={{ border: '1px solid #e0e0e0' }}
//                             >
//                               <RemoveIcon fontSize="small" />
//                             </IconButton>
//                             <TextField
//                               value={item.quantity}
//                               size="small"
//                               sx={{ 
//                                 width: 60,
//                                 '& .MuiOutlinedInput-root': {
//                                   textAlign: 'center'
//                                 }
//                               }}
//                               inputProps={{ 
//                                 style: { textAlign: 'center', padding: '8px' },
//                                 readOnly: true
//                               }}
//                             />
//                             <IconButton
//                               onClick={() => updateQuantity(item.cart_item_id, item.quantity + 1)}
//                               disabled={updating[item.cart_item_id]}
//                               size="small"
//                               sx={{ border: '1px solid #e0e0e0' }}
//                             >
//                               <AddIcon fontSize="small" />
//                             </IconButton>
//                           </Box>

//                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                             <Button
//                               startIcon={<FavoriteIcon />}
//                               size="small"
//                               variant="text"
//                               sx={{ color: 'text.secondary' }}
//                             >
//                               Save for Later
//                             </Button>
//                             <Typography variant="body2" color="text.secondary">
//                               Subtotal: <strong>₹{item.subtotal.toLocaleString()}</strong>
//                             </Typography>
//                           </Box>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               ))}
//             </Stack>

//             {/* Delivery Info */}
//             <Paper elevation={1} sx={{ p: 3, mt: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom>
//                 Delivery Information
//               </Typography>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Avatar sx={{ bgcolor: '#e8f5e8' }}>
//                       <ShippingIcon sx={{ color: '#4caf50' }} />
//                     </Avatar>
//                     <Box>
//                       <Typography variant="body2" fontWeight="medium">
//                         Free Delivery
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         On orders above ₹499
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Avatar sx={{ bgcolor: '#e3f2fd' }}>
//                       <SecurityIcon sx={{ color: '#2196f3' }} />
//                     </Avatar>
//                     <Box>
//                       <Typography variant="body2" fontWeight="medium">
//                         Secure Payment
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         100% secure checkout
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Avatar sx={{ bgcolor: '#fff3e0' }}>
//                       <ShoppingCartIcon sx={{ color: '#ff9800' }} />
//                     </Avatar>
//                     <Box>
//                       <Typography variant="body2" fontWeight="medium">
//                         Easy Returns
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         7-day return policy
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>

//           {/* Order Summary */}
//           <Grid item xs={12} md={4}>
//             <Paper elevation={1} sx={{ p: 3, borderRadius: 2, position: 'sticky', top: 20 }}>
//               <Typography variant="h6" gutterBottom fontWeight="bold">
//                 Order Summary
//               </Typography>
              
//               <Box sx={{ py: 2 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                   <Typography variant="body2" color="text.secondary">
//                     Items ({cart.total_quantity})
//                   </Typography>
//                   <Typography variant="body2" fontWeight="medium">
//                     ₹{cart.total_amount.toLocaleString()}
//                   </Typography>
//                 </Box>
                
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                   <Typography variant="body2" color="text.secondary">
//                     Delivery
//                   </Typography>
//                   <Typography variant="body2" fontWeight="medium" color="success.main">
//                     FREE
//                   </Typography>
//                 </Box>
                
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                   <Typography variant="body2" color="text.secondary">
//                     Tax (18%)
//                   </Typography>
//                   <Typography variant="body2" fontWeight="medium">
//                     ₹{Math.round(cart.total_amount * 0.18).toLocaleString()}
//                   </Typography>
//                 </Box>
                
//                 <Divider sx={{ my: 2 }} />
                
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//                   <Typography variant="h6" fontWeight="bold">
//                     Total Amount
//                   </Typography>
//                   <Typography variant="h6" fontWeight="bold" color="primary">
//                     ₹{(cart.total_amount + Math.round(cart.total_amount * 0.18)).toLocaleString()}
//                   </Typography>
//                 </Box>
                
//                 <Stack spacing={2}>
//                   <Button
//                     variant="contained"
//                     size="large"
//                     fullWidth
//                     sx={{
//                       bgcolor: '#ff6b35',
//                       '&:hover': { bgcolor: '#e55a2b' },
//                       py: 1.5,
//                       fontWeight: 'bold',
//                       textTransform: 'none'
//                     }}
//                   >
//                     Proceed to Checkout
//                   </Button>
                  
//                   <Button
//                     variant="outlined"
//                     size="large"
//                     fullWidth
//                     sx={{
//                       py: 1.5,
//                       fontWeight: 'medium',
//                       textTransform: 'none'
//                     }}
//                   >
//                     Continue Shopping
//                   </Button>
//                 </Stack>
                
//                 <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 2 }}>
//                   🔒 Secure checkout powered by SSL encryption
//                 </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AddToCart
















// // src/pages/CartPage.jsx - Main Cart Page Component
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Stack,
//   Breadcrumbs,
//   Link
// } from '@mui/material';
// import { Home, NavigateNext, ShoppingCart } from '@mui/icons-material';

// import Header from '../components/homepagecomponent/AppHeaders';
// import CartItem from '../components/cart/CartItem';
// import CartSummary from '../components/cart/CartSummary';
// import EmptyCart from '../components/cart/EmptyCart';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import ErrorMessage from '../components/ui/ErrorMessage';
// import { useCart } from '../hooks/useCart';
// import { showToast } from '../components/ui/Toast';

// const CartPage = () => {
//   const navigate = useNavigate();
//   const { cartData, loading, error, refetch } = useCart();

//   const handleProceedToCheckout = () => {
//     // TODO: Implement checkout flow
//     showToast('Proceeding to checkout...', 'info');
//     console.log('Proceeding to checkout with cart:', cartData);
//     // navigate('/checkout');
//   };

//   const handleContinueShopping = () => {
//     navigate('/dashboard');
//   };

//   const handleClearCart = () => {
//     // TODO: Implement clear cart functionality
//     showToast('Clear cart functionality to be implemented', 'info');
//     console.log('Clearing cart...');
//   };

//   const handleGoHome = () => {
//     navigate('/dashboard');
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
//         <Header />
//         <LoadingSpinner message="Loading your cart..." />
//       </Box>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
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

//   // Check if cart is empty
//   const isEmpty = !cartData?.items || cartData.items.length === 0;

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
//       <Header />
      
//       <Container maxWidth="sx" sx={{ py: 1}}>  
        
//         {/* Breadcrumb */}
//         <Breadcrumbs 
//           separator={<NavigateNext fontSize="small" />} 
//           sx={{ mb: 1 }}
//         >
//           <Link
//             component="button"
//             variant="body2"
//             onClick={handleGoHome}
//             sx={{ 
//               textDecoration: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5
//             }}
//           >
//             <Home sx={{ fontSize: 16 }} />
//             Home
//           </Link>
//           <Typography 
//             color="text.primary" 
//             variant="body2"
//             sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
//           >
//             <ShoppingCart sx={{ fontSize: 16 }} />
//             Shopping Cart
//           </Typography>
//         </Breadcrumbs>
//                 {/* Page Header */}
//         {/* <Box sx={{ mb: 4 }}> */}
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 700,
//               color: 'text.primary',
//               mb: 1,
//               display: 'flex',
//               alignItems: 'center',
//               gap: 1
//             }}
//           >
//             {/* <ShoppingCart /> */}
//             {/* Shopping Cart */}
          
          
//           {!isEmpty && (
//             <Typography variant="body1" color="text.secondary">
//               {cartData.items.length} {cartData.items.length === 1 ? 'item' : 'items'} in your cart
//             </Typography>
//           )}
//           </Typography>
//         {/* </Box> */}

//               <Container 
//   maxWidth="sx" 
//   sx={{ py: 1, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
// >



//         {/* Main Content */}
//         {isEmpty ? (
//           <EmptyCart onContinueShopping={handleContinueShopping} />
//         ) : (
//           <Grid container spacing={5}>
//             {/* Cart Items */}
//             <Grid item xs={12} lg={8} xl={8}>
//               <Stack spacing={0}>
//                 {cartData.items.map((item, index) => (
//                   <CartItem key={`${item.product.product_id}-${index}`} item={item} />
//                 ))}
//               </Stack>
//             </Grid>

//             {/* Cart Summary */}
//             <Grid item xs={12} lg={4} xl={4}>
//               <CartSummary
//                 cartData={cartData}
//                 onProceedToCheckout={handleProceedToCheckout}
//                 onContinueShopping={handleContinueShopping}
//                 onClearCart={handleClearCart}
//               />
//             </Grid>
//           </Grid>
//         )}
//         </Container>
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
  Grid,
  Stack,
  Breadcrumbs,
  Link
} from '@mui/material';
import { Home, NavigateNext, ShoppingCart } from '@mui/icons-material';

import Header from '../components/homepagecomponent/AppHeaders';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyCart from '../components/cart/EmptyCart';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useCart } from '../hooks/useCart';
import { showToast } from '../components/ui/Toast';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartData, loading, error, refetch, removeItem,onUpdateItem } = useCart();
  const [removingProductId, setRemovingProductId] = useState(null);

  const handleProceedToCheckout = () => {
    showToast('Proceeding to checkout...', 'info');
    console.log('Proceeding to checkout with cart:', cartData);
    // navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/dashboard');
  };

  const handleClearCart = () => {
    showToast('Clear cart functionality to be implemented', 'info');
    console.log('Clearing cart...');
  };

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const handleRemoveItem = async (productId) => {
    try {
      setRemovingProductId(productId);
      await removeItem(productId);
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      setRemovingProductId(null);
    }
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
        <Header />
        <LoadingSpinner message="Loading your cart..." />
      </Box>
    );
  }


  const handleUpdateQuantity = async (productId, newQuantity) => {
  try {
    await onUpdateItem(productId, newQuantity);
  } catch (error) {
    showToast('Failed to update quantity', 'error');
  }
};

  if (error) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
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
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      <Header />

      <Container maxWidth="sx" sx={{ py: 1 }}>
        <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 1 }}>
          <Link
            component="button"
            variant="body2"
            onClick={handleGoHome}
            sx={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            <Home sx={{ fontSize: 16 }} />
            Home
          </Link>
          <Typography
            color="text.primary"
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <ShoppingCart sx={{ fontSize: 16 }} />
            Shopping Cart
          </Typography>
        </Breadcrumbs>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          {!isEmpty && (
            <Typography variant="body1" color="text.secondary">
              {cartData.items.length} {cartData.items.length === 1 ? 'item' : 'items'} in your cart
            </Typography>
          )}
        </Typography>

        <Container
          maxWidth="sx"
          sx={{ py: 1, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {isEmpty ? (
            <EmptyCart onContinueShopping={handleContinueShopping} />
          ) : (
            <Grid container spacing={5}>
              {/* Cart Items */}
              <Grid item xs={12} lg={8} xl={8}>
                <Stack spacing={0}>
                  {cartData.items.map((item, index) => (
                    <CartItem
                      key={`${item.product.product_id}-${index}`}
                      item={item}
                      onRemove={handleRemoveItem}
                      onUpdateItem={handleUpdateQuantity}
                      isRemoving={removingProductId === item.product.product_id}
                    />
                  ))}
                </Stack>
              </Grid>

              {/* Cart Summary */}
              <Grid item xs={12} lg={4} xl={4}>
                <CartSummary
                  cartData={cartData}
                  onProceedToCheckout={handleProceedToCheckout}
                  onContinueShopping={handleContinueShopping}
                  onClearCart={handleClearCart}
                />
              </Grid>
            </Grid>
          )}
        </Container>
      </Container>
    </Box>
  );
};

export default CartPage;
