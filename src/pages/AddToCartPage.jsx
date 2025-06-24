// // // // // // // // // src/pages/AddToCartPage.jsx
// // // // // // import React, { useEffect } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import AppHeader from '../components/homepagecomponent/AppHeaders';

// // // // // // const AddToCart = () => {
// // // // // //   useEffect(() => {
// // // // // //     const fetchCart = async () => {
// // // // // //       try {
// // // // // //         const token = localStorage.getItem('token'); // should include only the JWT, no "Bearer"
// // // // // //         console.log("Fetched Token:", token); // ensure this prints the correct token

// // // // // //         const response = await axios.get('http://localhost:8000/api/v1/cart', {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${token}` // <-- this is important
// // // // // //           }
// // // // // //         });

// // // // // //         console.log('Cart data:', response.data);
// // // // // //       } catch (error) {
// // // // // //         console.error('Fetch cart failed:', error.response?.data || error.message);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchCart();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
// // // // // //       <AppHeader />
// // // // // //       <div className="container mx-auto p-4">
// // // // // //         <h1 className="text-2xl font-bold mb-4">Your Add to Cart</h1>
// // // // // //         <p className="text-gray-700">This is your Add to Cart page.</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AddToCart;














// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import AppHeader from '../components/homepagecomponent/AppHeaders';

// // // // // const AddToCart = () => {
// // // // //   const [cart, setCart] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchCart = async () => {
// // // // //       try {
// // // // //         const token = localStorage.getItem('token');
// // // // //         console.log("Fetched Token:", token);

// // // // //         const response = await axios.get('http://localhost:8000/api/v1/cart', {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${token}`
// // // // //           }
// // // // //         });

// // // // //         console.log('Cart data:', response.data);
// // // // //         setCart(response.data);
// // // // //       } catch (error) {
// // // // //         console.error('Fetch cart failed:', error.response?.data || error.message);
// // // // //       }
// // // // //     };

// // // // //     fetchCart();
// // // // //   }, []);
// // // // //   return (
// // // // //     <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
// // // // //       <AppHeader />
// // // // //       <div className="container mx-auto p-4">
// // // // //         <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

// // // // //         {cart ? (
// // // // //           <>
// // // // //             <div className="grid gap-4">
// // // // //               {cart.items.map((item) => (
// // // // //                 <div
// // // // //                   key={item.cart_item_id}
// // // // //                   className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4"
// // // // //                 >
// // // // //                   <img
// // // // //                     src={item.product.primary_image_url}
// // // // //                     alt={item.product.name}
// // // // //                     className="w-24 h-24 object-cover rounded-md"
// // // // //                   />
// // // // //                   <div>
// // // // //                     <h2 className="text-lg font-semibold">{item.product.name}</h2>
// // // // //                     <p className="text-sm text-gray-600">{item.product.description}</p>
// // // // //                     <p className="text-md text-gray-800 mt-2">
// // // // //                       ₹{item.price_at_time} × {item.quantity} = <strong>₹{item.subtotal}</strong>
// // // // //                     </p>
// // // // //                     <p className="text-sm text-gray-500">Category: {item.product.category_name}</p>
// // // // //                     <p className="text-sm text-gray-500">Stock: {item.product.stock_quantity}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             <div className="mt-6 p-4 bg-gray-100 rounded-lg">
// // // // //               <p className="text-xl font-bold">
// // // // //                 Total: ₹{cart.total_amount}
// // // // //               </p>
// // // // //               <p>Total Items: {cart.total_items}</p>
// // // // //               <p>Total Quantity: {cart.total_quantity}</p>
// // // // //             </div>
// // // // //           </>
// // // // //         ) : (
// // // // //           <p>Loading cart...</p>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AddToCart;


// // // // import React, { useEffect, useState } from 'react';
// // // // import {
// // // //   Box,
// // // //   Container,
// // // //   Typography,
// // // //   Card,
// // // //   CardContent,
// // // //   CardMedia,
// // // //   Grid,
// // // //   Button,
// // // //   IconButton,
// // // //   Chip,
// // // //   Divider,
// // // //   Paper,
// // // //   CircularProgress,
// // // //   Alert,
// // // //   Badge,
// // // //   TextField,
// // // //   Stack,
// // // //   Avatar
// // // // } from '@mui/material';
// // // // import {
// // // //   Delete as DeleteIcon,
// // // //   Add as AddIcon,
// // // //   Remove as RemoveIcon,
// // // //   ShoppingCart as ShoppingCartIcon,
// // // //   LocalShipping as ShippingIcon,
// // // //   Security as SecurityIcon,
// // // //   Favorite as FavoriteIcon,
// // // //   ArrowBack as ArrowBackIcon
// // // // } from '@mui/icons-material';
// // // // import axios from 'axios';
// // // // import AppHeader from '../components/homepagecomponent/AppHeaders';

// // // // const AddToCart = () => {
// // // //   const [cart, setCart] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [updating, setUpdating] = useState({});

// // // //   useEffect(() => {
// // // //     fetchCart();
// // // //   }, []);

// // // //   const fetchCart = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError(null);
// // // //       const token = localStorage.getItem('token');
      
// // // //       const response = await axios.get('http://localhost:8000/api/v1/cart', {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`
// // // //         }
// // // //       });

// // // //       setCart(response.data);
// // // //     } catch (error) {
// // // //       console.error('Fetch cart failed:', error);
// // // //       setError('Failed to load cart. Please try again.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const updateQuantity = async (cartItemId, newQuantity) => {
// // // //     if (newQuantity < 1) return;
    
// // // //     setUpdating(prev => ({ ...prev, [cartItemId]: true }));
    
// // // //     try {
// // // //       const token = localStorage.getItem('token');
// // // //       await axios.put(`http://localhost:8000/api/v1/cart/items/${cartItemId}`, 
// // // //         { quantity: newQuantity },
// // // //         {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`
// // // //           }
// // // //         }
// // // //       );
      
// // // //       // Refresh cart data
// // // //       await fetchCart();
// // // //     } catch (error) {
// // // //       console.error('Update quantity failed:', error);
// // // //       setError('Failed to update quantity. Please try again.');
// // // //     } finally {
// // // //       setUpdating(prev => ({ ...prev, [cartItemId]: false }));
// // // //     }
// // // //   };

// // // //   const removeItem = async (cartItemId) => {
// // // //     setUpdating(prev => ({ ...prev, [cartItemId]: true }));
    
// // // //     try {
// // // //       const token = localStorage.getItem('token');
// // // //       await axios.delete(`http://localhost:8000/api/v1/cart/items/${cartItemId}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`
// // // //         }
// // // //       });
      
// // // //       // Refresh cart data
// // // //       await fetchCart();
// // // //     } catch (error) {
// // // //       console.error('Remove item failed:', error);
// // // //       setError('Failed to remove item. Please try again.');
// // // //     } finally {
// // // //       setUpdating(prev => ({ ...prev, [cartItemId]: false }));
// // // //     }
// // // //   };

// // // //   const calculateDiscount = (original, current) => {
// // // //     if (original > current) {
// // // //       return Math.round((1 - current / original) * 100);
// // // //     }
// // // //     return 0;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
// // // //         <AppHeader />
// // // //         <Container maxWidth="lg" sx={{ py: 4 }}>
// // // //           <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
// // // //             <CircularProgress size={60} />
// // // //           </Box>
// // // //         </Container>
// // // //       </Box>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
// // // //         <AppHeader />
// // // //         <Container maxWidth="lg" sx={{ py: 4 }}>
// // // //           <Alert severity="error" sx={{ mb: 2 }}>
// // // //             {error}
// // // //           </Alert>
// // // //           <Button variant="contained" onClick={fetchCart}>
// // // //             Retry
// // // //           </Button>
// // // //         </Container>
// // // //       </Box>
// // // //     );
// // // //   }

// // // //   if (!cart || !cart.items || cart.items.length === 0) {
// // // //     return (
// // // //       <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
// // // //         <AppHeader />
// // // //         <Container maxWidth="lg" sx={{ py: 4 }}>
// // // //           <Paper 
// // // //             elevation={0} 
// // // //             sx={{ 
// // // //               p: 6, 
// // // //               textAlign: 'center', 
// // // //               bgcolor: 'white',
// // // //               borderRadius: 2
// // // //             }}
// // // //           >
// // // //             <ShoppingCartIcon sx={{ fontSize: 80, color: 'grey.400', mb: 2 }} />
// // // //             <Typography variant="h4" gutterBottom color="text.primary">
// // // //               Your Cart is Empty
// // // //             </Typography>
// // // //             <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
// // // //               Add items you want to shop for
// // // //             </Typography>
// // // //             <Button 
// // // //               variant="contained" 
// // // //               size="large"
// // // //               sx={{ 
// // // //                 bgcolor: '#ff6b35',
// // // //                 '&:hover': { bgcolor: '#e55a2b' },
// // // //                 px: 4,
// // // //                 py: 1.5
// // // //               }}
// // // //             >
// // // //               Continue Shopping
// // // //             </Button>
// // // //           </Paper>
// // // //         </Container>
// // // //       </Box>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
// // // //       <AppHeader />
      
// // // //       <Container maxWidth="lg" sx={{ py: 4 }}>
// // // //         {/* Header */}
// // // //         <Box sx={{ mb: 4 }}>
// // // //           <Button
// // // //             startIcon={<ArrowBackIcon />}
// // // //             sx={{ mb: 2, color: 'text.secondary' }}
// // // //           >
// // // //             Continue Shopping
// // // //           </Button>
// // // //           <Typography variant="h4" fontWeight="bold" gutterBottom>
// // // //             Shopping Cart
// // // //           </Typography>
// // // //           <Typography variant="body2" color="text.secondary">
// // // //             {cart.total_items} {cart.total_items === 1 ? 'item' : 'items'} in your cart
// // // //           </Typography>
// // // //         </Box>

// // // //         <Grid container spacing={3}>
// // // //           {/* Cart Items */}
// // // //           <Grid item xs={12} md={8}>
// // // //             <Stack spacing={2}>
// // // //               {cart.items.map((item) => (
// // // //                 <Card key={item.cart_item_id} elevation={1} sx={{ borderRadius: 2 }}>
// // // //                   <CardContent sx={{ p: 3 }}>
// // // //                     <Grid container spacing={3}>
// // // //                       {/* Product Image */}
// // // //                       <Grid item xs={12} sm={4} md={3}>
// // // //                         <CardMedia
// // // //                           component="img"
// // // //                           image={item.product.primary_image_url}
// // // //                           alt={item.product.name}
// // // //                           sx={{
// // // //                             width: '100%',
// // // //                             height: 150,
// // // //                             objectFit: 'cover',
// // // //                             borderRadius: 1,
// // // //                             border: '1px solid #e0e0e0'
// // // //                           }}
// // // //                         />
// // // //                       </Grid>

// // // //                       {/* Product Details */}
// // // //                       <Grid item xs={12} sm={8} md={9}>
// // // //                         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
// // // //                           <Typography variant="h6" fontWeight="medium" sx={{ flex: 1, pr: 2 }}>
// // // //                             {item.product.name}
// // // //                           </Typography>
// // // //                           <IconButton
// // // //                             onClick={() => removeItem(item.cart_item_id)}
// // // //                             disabled={updating[item.cart_item_id]}
// // // //                             size="small"
// // // //                             sx={{ color: 'text.secondary' }}
// // // //                           >
// // // //                             <DeleteIcon />
// // // //                           </IconButton>
// // // //                         </Box>

// // // //                         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// // // //                           {item.product.description}
// // // //                         </Typography>

// // // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
// // // //                           <Chip 
// // // //                             label={item.product.category_name} 
// // // //                             size="small" 
// // // //                             variant="outlined"
// // // //                             sx={{ bgcolor: '#f0f8ff', borderColor: '#1976d2', color: '#1976d2' }}
// // // //                           />
// // // //                           <Chip
// // // //                             label={item.product.stock_quantity > 10 ? 'In Stock' : 
// // // //                                    item.product.stock_quantity > 0 ? `${item.product.stock_quantity} left` : 'Out of Stock'}
// // // //                             size="small"
// // // //                             color={item.product.stock_quantity > 10 ? 'success' : 
// // // //                                    item.product.stock_quantity > 0 ? 'warning' : 'error'}
// // // //                             variant="outlined"
// // // //                           />
// // // //                         </Box>

// // // //                         {/* Price */}
// // // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
// // // //                           <Typography variant="h5" fontWeight="bold" color="primary">
// // // //                             ₹{item.price_at_time.toLocaleString()}
// // // //                           </Typography>
// // // //                           {item.product.original_price && item.product.original_price > item.price_at_time && (
// // // //                             <>
// // // //                               <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
// // // //                                 ₹{item.product.original_price.toLocaleString()}
// // // //                               </Typography>
// // // //                               <Chip
// // // //                                 label={`${calculateDiscount(item.product.original_price, item.price_at_time)}% OFF`}
// // // //                                 size="small"
// // // //                                 color="success"
// // // //                               />
// // // //                             </>
// // // //                           )}
// // // //                         </Box>

// // // //                         {/* Quantity Controls and Actions */}
// // // //                         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                             <IconButton
// // // //                               onClick={() => updateQuantity(item.cart_item_id, item.quantity - 1)}
// // // //                               disabled={item.quantity === 1 || updating[item.cart_item_id]}
// // // //                               size="small"
// // // //                               sx={{ border: '1px solid #e0e0e0' }}
// // // //                             >
// // // //                               <RemoveIcon fontSize="small" />
// // // //                             </IconButton>
// // // //                             <TextField
// // // //                               value={item.quantity}
// // // //                               size="small"
// // // //                               sx={{ 
// // // //                                 width: 60,
// // // //                                 '& .MuiOutlinedInput-root': {
// // // //                                   textAlign: 'center'
// // // //                                 }
// // // //                               }}
// // // //                               inputProps={{ 
// // // //                                 style: { textAlign: 'center', padding: '8px' },
// // // //                                 readOnly: true
// // // //                               }}
// // // //                             />
// // // //                             <IconButton
// // // //                               onClick={() => updateQuantity(item.cart_item_id, item.quantity + 1)}
// // // //                               disabled={updating[item.cart_item_id]}
// // // //                               size="small"
// // // //                               sx={{ border: '1px solid #e0e0e0' }}
// // // //                             >
// // // //                               <AddIcon fontSize="small" />
// // // //                             </IconButton>
// // // //                           </Box>

// // // //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                             <Button
// // // //                               startIcon={<FavoriteIcon />}
// // // //                               size="small"
// // // //                               variant="text"
// // // //                               sx={{ color: 'text.secondary' }}
// // // //                             >
// // // //                               Save for Later
// // // //                             </Button>
// // // //                             <Typography variant="body2" color="text.secondary">
// // // //                               Subtotal: <strong>₹{item.subtotal.toLocaleString()}</strong>
// // // //                             </Typography>
// // // //                           </Box>
// // // //                         </Box>
// // // //                       </Grid>
// // // //                     </Grid>
// // // //                   </CardContent>
// // // //                 </Card>
// // // //               ))}
// // // //             </Stack>

// // // //             {/* Delivery Info */}
// // // //             <Paper elevation={1} sx={{ p: 3, mt: 3, borderRadius: 2 }}>
// // // //               <Typography variant="h6" gutterBottom>
// // // //                 Delivery Information
// // // //               </Typography>
// // // //               <Grid container spacing={3}>
// // // //                 <Grid item xs={12} md={4}>
// // // //                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                     <Avatar sx={{ bgcolor: '#e8f5e8' }}>
// // // //                       <ShippingIcon sx={{ color: '#4caf50' }} />
// // // //                     </Avatar>
// // // //                     <Box>
// // // //                       <Typography variant="body2" fontWeight="medium">
// // // //                         Free Delivery
// // // //                       </Typography>
// // // //                       <Typography variant="caption" color="text.secondary">
// // // //                         On orders above ₹499
// // // //                       </Typography>
// // // //                     </Box>
// // // //                   </Box>
// // // //                 </Grid>
// // // //                 <Grid item xs={12} md={4}>
// // // //                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                     <Avatar sx={{ bgcolor: '#e3f2fd' }}>
// // // //                       <SecurityIcon sx={{ color: '#2196f3' }} />
// // // //                     </Avatar>
// // // //                     <Box>
// // // //                       <Typography variant="body2" fontWeight="medium">
// // // //                         Secure Payment
// // // //                       </Typography>
// // // //                       <Typography variant="caption" color="text.secondary">
// // // //                         100% secure checkout
// // // //                       </Typography>
// // // //                     </Box>
// // // //                   </Box>
// // // //                 </Grid>
// // // //                 <Grid item xs={12} md={4}>
// // // //                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                     <Avatar sx={{ bgcolor: '#fff3e0' }}>
// // // //                       <ShoppingCartIcon sx={{ color: '#ff9800' }} />
// // // //                     </Avatar>
// // // //                     <Box>
// // // //                       <Typography variant="body2" fontWeight="medium">
// // // //                         Easy Returns
// // // //                       </Typography>
// // // //                       <Typography variant="caption" color="text.secondary">
// // // //                         7-day return policy
// // // //                       </Typography>
// // // //                     </Box>
// // // //                   </Box>
// // // //                 </Grid>
// // // //               </Grid>
// // // //             </Paper>
// // // //           </Grid>

// // // //           {/* Order Summary */}
// // // //           <Grid item xs={12} md={4}>
// // // //             <Paper elevation={1} sx={{ p: 3, borderRadius: 2, position: 'sticky', top: 20 }}>
// // // //               <Typography variant="h6" gutterBottom fontWeight="bold">
// // // //                 Order Summary
// // // //               </Typography>
              
// // // //               <Box sx={{ py: 2 }}>
// // // //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
// // // //                   <Typography variant="body2" color="text.secondary">
// // // //                     Items ({cart.total_quantity})
// // // //                   </Typography>
// // // //                   <Typography variant="body2" fontWeight="medium">
// // // //                     ₹{cart.total_amount.toLocaleString()}
// // // //                   </Typography>
// // // //                 </Box>
                
// // // //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
// // // //                   <Typography variant="body2" color="text.secondary">
// // // //                     Delivery
// // // //                   </Typography>
// // // //                   <Typography variant="body2" fontWeight="medium" color="success.main">
// // // //                     FREE
// // // //                   </Typography>
// // // //                 </Box>
                
// // // //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
// // // //                   <Typography variant="body2" color="text.secondary">
// // // //                     Tax (18%)
// // // //                   </Typography>
// // // //                   <Typography variant="body2" fontWeight="medium">
// // // //                     ₹{Math.round(cart.total_amount * 0.18).toLocaleString()}
// // // //                   </Typography>
// // // //                 </Box>
                
// // // //                 <Divider sx={{ my: 2 }} />
                
// // // //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
// // // //                   <Typography variant="h6" fontWeight="bold">
// // // //                     Total Amount
// // // //                   </Typography>
// // // //                   <Typography variant="h6" fontWeight="bold" color="primary">
// // // //                     ₹{(cart.total_amount + Math.round(cart.total_amount * 0.18)).toLocaleString()}
// // // //                   </Typography>
// // // //                 </Box>
                
// // // //                 <Stack spacing={2}>
// // // //                   <Button
// // // //                     variant="contained"
// // // //                     size="large"
// // // //                     fullWidth
// // // //                     sx={{
// // // //                       bgcolor: '#ff6b35',
// // // //                       '&:hover': { bgcolor: '#e55a2b' },
// // // //                       py: 1.5,
// // // //                       fontWeight: 'bold',
// // // //                       textTransform: 'none'
// // // //                     }}
// // // //                   >
// // // //                     Proceed to Checkout
// // // //                   </Button>
                  
// // // //                   <Button
// // // //                     variant="outlined"
// // // //                     size="large"
// // // //                     fullWidth
// // // //                     sx={{
// // // //                       py: 1.5,
// // // //                       fontWeight: 'medium',
// // // //                       textTransform: 'none'
// // // //                     }}
// // // //                   >
// // // //                     Continue Shopping
// // // //                   </Button>
// // // //                 </Stack>
                
// // // //                 <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 2 }}>
// // // //                   🔒 Secure checkout powered by SSL encryption
// // // //                 </Typography>
// // // //               </Box>
// // // //             </Paper>
// // // //           </Grid>
// // // //         </Grid>
// // // //       </Container>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default AddToCart
















// // // // // src/pages/CartPage.jsx - Main Cart Page Component
// // // // import React from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import {
// // // //   Box,
// // // //   Container,
// // // //   Typography,
// // // //   Grid,
// // // //   Stack,
// // // //   Breadcrumbs,
// // // //   Link
// // // // } from '@mui/material';
// // // // import { Home, NavigateNext, ShoppingCart } from '@mui/icons-material';

// // // // import Header from '../components/homepagecomponent/AppHeaders';
// // // // import CartItem from '../components/cart/CartItem';
// // // // import CartSummary from '../components/cart/CartSummary';
// // // // import EmptyCart from '../components/cart/EmptyCart';
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // // import ErrorMessage from '../components/ui/ErrorMessage';
// // // // import { useCart } from '../hooks/useCart';
// // // // import { showToast } from '../components/ui/Toast';

// // // // const CartPage = () => {
// // // //   const navigate = useNavigate();
// // // //   const { cartData, loading, error, refetch } = useCart();

// // // //   const handleProceedToCheckout = () => {
// // // //     // TODO: Implement checkout flow
// // // //     showToast('Proceeding to checkout...', 'info');
// // // //     console.log('Proceeding to checkout with cart:', cartData);
// // // //     // navigate('/checkout');
// // // //   };

// // // //   const handleContinueShopping = () => {
// // // //     navigate('/dashboard');
// // // //   };

// // // //   const handleClearCart = () => {
// // // //     // TODO: Implement clear cart functionality
// // // //     showToast('Clear cart functionality to be implemented', 'info');
// // // //     console.log('Clearing cart...');
// // // //   };

// // // //   const handleGoHome = () => {
// // // //     navigate('/dashboard');
// // // //   };

// // // //   // Loading state
// // // //   if (loading) {
// // // //     return (
// // // //       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
// // // //         <Header />
// // // //         <LoadingSpinner message="Loading your cart..." />
// // // //       </Box>
// // // //     );
// // // //   }

// // // //   // Error state
// // // //   if (error) {
// // // //     return (
// // // //       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
// // // //         <Header />
// // // //         <ErrorMessage
// // // //           error={error}
// // // //           title="Failed to load cart"
// // // //           onRetry={refetch}
// // // //           onGoHome={handleGoHome}
// // // //         />
// // // //       </Box>
// // // //     );
// // // //   }

// // // //   // Check if cart is empty
// // // //   const isEmpty = !cartData?.items || cartData.items.length === 0;

// // // //   return (
// // // //     <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
// // // //       <Header />
      
// // // //       <Container maxWidth="sx" sx={{ py: 1}}>  
        
// // // //         {/* Breadcrumb */}
// // // //         <Breadcrumbs 
// // // //           separator={<NavigateNext fontSize="small" />} 
// // // //           sx={{ mb: 1 }}
// // // //         >
// // // //           <Link
// // // //             component="button"
// // // //             variant="body2"
// // // //             onClick={handleGoHome}
// // // //             sx={{ 
// // // //               textDecoration: 'none',
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               gap: 0.5
// // // //             }}
// // // //           >
// // // //             <Home sx={{ fontSize: 16 }} />
// // // //             Home
// // // //           </Link>
// // // //           <Typography 
// // // //             color="text.primary" 
// // // //             variant="body2"
// // // //             sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
// // // //           >
// // // //             <ShoppingCart sx={{ fontSize: 16 }} />
// // // //             Shopping Cart
// // // //           </Typography>
// // // //         </Breadcrumbs>
// // // //                 {/* Page Header */}
// // // //         {/* <Box sx={{ mb: 4 }}> */}
// // // //           <Typography
// // // //             variant="h4"
// // // //             sx={{
// // // //               fontWeight: 700,
// // // //               color: 'text.primary',
// // // //               mb: 1,
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               gap: 1
// // // //             }}
// // // //           >
// // // //             {/* <ShoppingCart /> */}
// // // //             {/* Shopping Cart */}
          
          
// // // //           {!isEmpty && (
// // // //             <Typography variant="body1" color="text.secondary">
// // // //               {cartData.items.length} {cartData.items.length === 1 ? 'item' : 'items'} in your cart
// // // //             </Typography>
// // // //           )}
// // // //           </Typography>
// // // //         {/* </Box> */}

// // // //               <Container 
// // // //   maxWidth="sx" 
// // // //   sx={{ py: 1, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
// // // // >



// // // //         {/* Main Content */}
// // // //         {isEmpty ? (
// // // //           <EmptyCart onContinueShopping={handleContinueShopping} />
// // // //         ) : (
// // // //           <Grid container spacing={5}>
// // // //             {/* Cart Items */}
// // // //             <Grid item xs={12} lg={8} xl={8}>
// // // //               <Stack spacing={0}>
// // // //                 {cartData.items.map((item, index) => (
// // // //                   <CartItem key={`${item.product.product_id}-${index}`} item={item} />
// // // //                 ))}
// // // //               </Stack>
// // // //             </Grid>

// // // //             {/* Cart Summary */}
// // // //             <Grid item xs={12} lg={4} xl={4}>
// // // //               <CartSummary
// // // //                 cartData={cartData}
// // // //                 onProceedToCheckout={handleProceedToCheckout}
// // // //                 onContinueShopping={handleContinueShopping}
// // // //                 onClearCart={handleClearCart}
// // // //               />
// // // //             </Grid>
// // // //           </Grid>
// // // //         )}
// // // //         </Container>
// // // //       </Container>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default CartPage;


// // // // src/pages/CartPage.jsx - Main Cart Page Component
// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import {
// // //   Box,
// // //   Container,
// // //   Typography,
// // //   Grid,
// // //   Stack,
// // //   Breadcrumbs,
// // //   Link
// // // } from '@mui/material';
// // // import { Home, NavigateNext, ShoppingCart } from '@mui/icons-material';

// // // import Header from '../components/homepagecomponent/AppHeaders';
// // // import CartItem from '../components/cart/CartItem';
// // // import CartSummary from '../components/cart/CartSummary';
// // // import EmptyCart from '../components/cart/EmptyCart';
// // // import LoadingSpinner from '../components/ui/LoadingSpinner';
// // // import ErrorMessage from '../components/ui/ErrorMessage';
// // // import { useCart } from '../hooks/useCart';
// // // import { showToast } from '../components/ui/Toast';

// // // const CartPage = () => {
// // //   const navigate = useNavigate();
// // //   const { cartData, loading, error, refetch, removeItem,onUpdateItem } = useCart();
// // //   const [removingProductId, setRemovingProductId] = useState(null);

// // //   // const handleProceedToCheckout = () => {
// // //   //   showToast('Proceeding to checkout...', 'info');
// // //   //   console.log('Proceeding to checkout with cart:', cartData);
// // //   //   // navigate('/checkout');
// // //   // };
// // //   const handleProceedToCheckout = () => {
// // //   showToast('Proceeding to checkout...', 'info');
// // //   console.log('Proceeding to checkout with cart:', cartData);
// // //   navigate('/checkout', { state: { cart: cartData } });
// // // };


// // //   const handleContinueShopping = () => {
// // //     navigate('/dashboard');
// // //   };

// // //   const handleClearCart = () => {
// // //     showToast('Clear cart functionality to be implemented', 'info');
// // //     console.log('Clearing cart...');
// // //   };

// // //   const handleGoHome = () => {
// // //     navigate('/dashboard');
// // //   };

// // //   const handleRemoveItem = async (productId) => {
// // //     try {
// // //       setRemovingProductId(productId);
// // //       await removeItem(productId);
// // //     } catch (error) {
// // //       showToast(error.message, 'error');
// // //     } finally {
// // //       setRemovingProductId(null);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
// // //         <Header />
// // //         <LoadingSpinner message="Loading your cart..." />
// // //       </Box>
// // //     );
// // //   }


// // //   const handleUpdateQuantity = async (productId, newQuantity) => {
// // //   try {
// // //     await onUpdateItem(productId, newQuantity);
// // //   } catch (error) {
// // //     showToast('Failed to update quantity', 'error');
// // //   }
// // // };

// // //   if (error) {
// // //     return (
// // //       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
// // //         <Header />
// // //         <ErrorMessage
// // //           error={error}
// // //           title="Failed to load cart"
// // //           onRetry={refetch}
// // //           onGoHome={handleGoHome}
// // //         />
// // //       </Box>
// // //     );
// // //   }

// // //   const isEmpty = !cartData?.items || cartData.items.length === 0;

// // //   return (
// // //     <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
// // //       <Header />

// // //       <Container maxWidth="sx" sx={{ py: 1 }}>
// // //         <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 1 }}>
// // //           <Link
// // //             component="button"
// // //             variant="body2"
// // //             onClick={handleGoHome}
// // //             sx={{
// // //               textDecoration: 'none',
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               gap: 0.5
// // //             }}
// // //           >
// // //             <Home sx={{ fontSize: 16 }} />
// // //             Home
// // //           </Link>
// // //           <Typography
// // //             color="text.primary"
// // //             variant="body2"
// // //             sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
// // //           >
// // //             <ShoppingCart sx={{ fontSize: 16 }} />
// // //             Shopping Cart
// // //           </Typography>
// // //         </Breadcrumbs>

// // //         <Typography
// // //           variant="h4"
// // //           sx={{
// // //             fontWeight: 700,
// // //             color: 'text.primary',
// // //             mb: 1,
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             gap: 1
// // //           }}
// // //         >
// // //           {!isEmpty && (
// // //             <Typography variant="body1" color="text.secondary">
// // //               {cartData.items.length} {cartData.items.length === 1 ? 'item' : 'items'} in your cart
// // //             </Typography>
// // //           )}
// // //         </Typography>

// // //         <Container
// // //           maxWidth="sx"
// // //           sx={{ py: 1, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
// // //         >
// // //           {isEmpty ? (
// // //             <EmptyCart onContinueShopping={handleContinueShopping} />
// // //           ) : (
// // //             <Grid container spacing={5}>
// // //               {/* Cart Items */}
// // //               <Grid item xs={12} lg={8} xl={8}>
// // //                 <Stack spacing={0}>
// // //                   {cartData.items.map((item, index) => (
// // //                     <CartItem
// // //                       key={`${item.product.product_id}-${index}`}
// // //                       item={item}
// // //                       onRemove={handleRemoveItem}
// // //                       onUpdateItem={handleUpdateQuantity}
// // //                       isRemoving={removingProductId === item.product.product_id}
// // //                     />
// // //                   ))}
// // //                 </Stack>
// // //               </Grid>

// // //               {/* Cart Summary */}
// // //               <Grid item xs={12} lg={4} xl={4}>
// // //                 <CartSummary
// // //                   cartData={cartData}
// // //                   onProceedToCheckout={handleProceedToCheckout}
// // //                   onContinueShopping={handleContinueShopping}
// // //                   onClearCart={handleClearCart}
// // //                 />
// // //               </Grid>
// // //             </Grid>
// // //           )}
// // //         </Container>
// // //       </Container>
// // //     </Box>
// // //   );
// // // };

// // // export default CartPage;



// // // src/pages/CartPage.jsx
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardContent,
// //   Button,
// //   IconButton,
// //   Stack,
// //   Divider,
// //   Chip,
// //   Paper,
// //   Badge,
// //   Breadcrumbs,
// //   Link,
// //   Fade
// // } from '@mui/material';
// // import {
// //   Home,
// //   NavigateNext,
// //   ShoppingCart,
// //   Delete,
// //   Add,
// //   Remove,
// //   CreditCard,
// //   ShoppingBag,
// //   Shield,
// //   LocalOffer,
// //   Verified,
// //   Security
// // } from '@mui/icons-material';

// // import Header from '../components/homepagecomponent/AppHeaders';

// // const CartPage = () => {
// //   const navigate = useNavigate();
  
// //   // Sample cart data - replace with your actual state management
// //   const [cartItems, setCartItems] = useState([
// //     {
// //       id: 1,
// //       name: "Premium Wireless Headphones with Noise Cancellation",
// //       price: 2999,
// //       quantity: 2,
// //       image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=center",
// //       originalPrice: 3499
// //     },
// //     {
// //       id: 2,
// //       name: "Smart Fitness Watch with Heart Rate Monitor",
// //       price: 1899,
// //       quantity: 1,
// //       image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&crop=center",
// //       originalPrice: 2299
// //     },
// //     {
// //       id: 3,
// //       name: "Portable Bluetooth Speaker - Waterproof",
// //       price: 1299,
// //       quantity: 1,
// //       image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop&crop=center",
// //       originalPrice: 1599
// //     }
// //   ]);

// //   const formatPrice = (price) => {
// //     return `₹${price.toLocaleString('en-IN')}`;
// //   };

// //   const updateQuantity = (id, change) => {
// //     setCartItems(items =>
// //       items.map(item =>
// //         item.id === id
// //           ? { ...item, quantity: Math.max(1, item.quantity + change) }
// //           : item
// //       )
// //     );
// //   };

// //   const removeItem = (id) => {
// //     setCartItems(items => items.filter(item => item.id !== id));
// //   };

// //   const calculateTotals = () => {
// //     if (cartItems.length === 0) {
// //       return {
// //         itemCount: 0,
// //         totalQuantity: 0,
// //         subtotal: 0,
// //         originalTotal: 0,
// //         discount: 0,
// //         platformFee: 0,
// //         deliveryFee: 0,
// //         totalAmount: 0,
// //         savings: 0
// //       };
// //     }

// //     const itemCount = cartItems.length;
// //     const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
// //     const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
// //     const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    
// //     const discount = originalTotal - subtotal;
// //     const platformFee = 29;
// //     const deliveryFee = subtotal > 499 ? 0 : 40;
// //     const savings = discount + (deliveryFee === 0 ? 40 : 0);
// //     const totalAmount = subtotal + platformFee + deliveryFee;

// //     return {
// //       itemCount,
// //       totalQuantity,
// //       subtotal,
// //       originalTotal,
// //       discount,
// //       platformFee,
// //       deliveryFee,
// //       totalAmount,
// //       savings
// //     };
// //   };

// //   const {
// //     itemCount,
// //     totalQuantity,
// //     subtotal,
// //     originalTotal,
// //     discount,
// //     platformFee,
// //     deliveryFee,
// //     totalAmount,
// //     savings
// //   } = calculateTotals();

// //   // Price row component for order summary
// //   const PriceRow = ({ label, amount, isDiscount = false, isBold = false, icon = null }) => (
// //     <Box sx={{ 
// //       display: 'flex', 
// //       justifyContent: 'space-between', 
// //       alignItems: 'center',
// //       py: 1.5
// //     }}>
// //       <Typography 
// //         variant="body2" 
// //         sx={{ 
// //           color: '#6B7280',
// //           fontWeight: isBold ? 600 : 400,
// //           fontSize: isBold ? '1rem' : '0.9rem',
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: 0.5
// //         }}
// //       >
// //         {icon && icon}
// //         {label}
// //       </Typography>
// //       <Typography 
// //         variant="body2" 
// //         sx={{ 
// //           color: isDiscount ? '#16A34A' : (isBold ? '#111827' : '#374151'),
// //           fontWeight: isBold ? 700 : 500,
// //           fontSize: isBold ? '1rem' : '0.9rem'
// //         }}
// //       >
// //         {isDiscount && amount > 0 ? '−' : ''}{formatPrice(amount)}
// //       </Typography>
// //     </Box>
// //   );

// //   const EmptyCart = () => (
// //     <Fade in timeout={600}>
// //       <Paper
// //         elevation={0}
// //         sx={{
// //           textAlign: 'center',
// //           py: 8,
// //           px: 4,
// //           borderRadius: 2,
// //           border: '1px solid #E5E7EB'
// //         }}
// //       >
// //         <ShoppingCart sx={{ fontSize: 80, color: '#D1D5DB', mb: 3 }} />
// //         <Typography 
// //           variant="h5" 
// //           gutterBottom 
// //           sx={{ fontWeight: 600, color: '#111827' }}
// //         >
// //           Your cart is empty
// //         </Typography>
// //         <Typography 
// //           variant="body1" 
// //           sx={{ color: '#6B7280', mb: 4, fontSize: '1.1rem' }}
// //         >
// //           Looks like you haven't added any items to your cart yet.
// //         </Typography>
// //         <Button
// //           variant="contained"
// //           size="large"
// //           onClick={() => navigate('/dashboard')}
// //           startIcon={<ShoppingBag />}
// //           sx={{
// //             py: 1.5,
// //             px: 4,
// //             borderRadius: 2,
// //             textTransform: 'none',
// //             fontSize: '1rem',
// //             fontWeight: 600,
// //             backgroundColor: '#111827',
// //             '&:hover': { backgroundColor: '#374151' }
// //           }}
// //         >
// //           Continue Shopping
// //         </Button>
// //       </Paper>
// //     </Fade>
// //   );

// //   return (
// //     <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
// //       <Header />
      
// //       <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
// //         {/* Breadcrumb Navigation */}
// //         <Box sx={{ mb: { xs: 3, md: 4 } }}>
// //           <Breadcrumbs 
// //             separator={<NavigateNext fontSize="small" />} 
// //             sx={{ mb: 2 }}
// //           >
// //             <Link
// //               component="button"
// //               variant="body2"
// //               onClick={() => navigate('/dashboard')}
// //               sx={{ 
// //                 textDecoration: 'none',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 gap: 0.5,
// //                 color: '#6B7280',
// //                 fontWeight: 500,
// //                 fontSize: '0.9rem',
// //                 '&:hover': { color: '#111827' }
// //               }}
// //             >
// //               <Home sx={{ fontSize: 16 }} />
// //               Home
// //             </Link>
// //             <Typography 
// //               color="#111827" 
// //               variant="body2"
// //               sx={{ fontWeight: 600, fontSize: '0.9rem' }}
// //             >
// //               Shopping Cart
// //             </Typography>
// //           </Breadcrumbs>

// //           {/* Page Title */}
// //           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
// //             <Typography 
// //               variant="h4" 
// //               sx={{ 
// //                 fontWeight: 700, 
// //                 color: '#111827',
// //                 fontSize: { xs: '1.75rem', md: '2.25rem' }
// //               }}
// //             >
// //               Shopping Cart
// //             </Typography>
// //             {itemCount > 0 && (
// //               <Badge
// //                 badgeContent={totalQuantity}
// //                 sx={{
// //                   '& .MuiBadge-badge': {
// //                     backgroundColor: '#16A34A',
// //                     color: 'white',
// //                     fontWeight: 600
// //                   }
// //                 }}
// //               >
// //                 <ShoppingCart sx={{ fontSize: 32, color: '#6B7280' }} />
// //               </Badge>
// //             )}
// //           </Box>
// //           <Typography 
// //             variant="body1" 
// //             sx={{ color: '#6B7280', fontSize: '1.1rem' }}
// //           >
// //             {itemCount === 0 
// //               ? 'Your cart is currently empty' 
// //               : `${itemCount} ${itemCount === 1 ? 'item' : 'items'} in your cart`
// //             }
// //           </Typography>
// //         </Box>

// //         {cartItems.length === 0 ? (
// //           <EmptyCart />
// //         ) : (
// //           /* Main 2-Column Layout */
// //           <Grid container spacing={{ xs: 3, md: 4 }}>
// //             {/* Left Column - Cart Items (md=8) */}
// //             <Grid item xs={12} md={8}>
// //               <Fade in timeout={600}>
// //                 <Stack spacing={2}>
// //                   {cartItems.map((item, index) => (
// //                     <Card
// //                       key={item.id}
// //                       elevation={0}
// //                       sx={{
// //                         border: '1px solid #E5E7EB',
// //                         borderRadius: 2,
// //                         transition: 'all 0.2s ease',
// //                         '&:hover': {
// //                           borderColor: '#D1D5DB',
// //                           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
// //                         }
// //                       }}
// //                     >
// //                       <CardContent sx={{ p: { xs: 2, md: 3 } }}>
// //                         <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, alignItems: 'center' }}>
// //                           {/* Product Image */}
// //                           <Box
// //                             sx={{
// //                               width: { xs: 80, md: 100 },
// //                               height: { xs: 80, md: 100 },
// //                               borderRadius: 2,
// //                               overflow: 'hidden',
// //                               flexShrink: 0,
// //                               border: '1px solid #F3F4F6'
// //                             }}
// //                           >
// //                             <img
// //                               src={item.image}
// //                               alt={item.name}
// //                               style={{
// //                                 width: '100%',
// //                                 height: '100%',
// //                                 objectFit: 'cover'
// //                               }}
// //                             />
// //                           </Box>

// //                           {/* Product Details */}
// //                           <Box sx={{ flex: 1, minWidth: 0 }}>
// //                             <Typography
// //                               variant="h6"
// //                               sx={{
// //                                 fontWeight: 600,
// //                                 color: '#111827',
// //                                 mb: 1,
// //                                 fontSize: { xs: '1rem', md: '1.125rem' },
// //                                 display: '-webkit-box',
// //                                 WebkitLineClamp: 2,
// //                                 WebkitBoxOrient: 'vertical',
// //                                 overflow: 'hidden',
// //                                 lineHeight: 1.4
// //                               }}
// //                             >
// //                               {item.name}
// //                             </Typography>

// //                             {/* Price Row */}
// //                             <Box sx={{ mb: 2 }}>
// //                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
// //                                 <Typography
// //                                   variant="h6"
// //                                   sx={{
// //                                     fontWeight: 700,
// //                                     color: '#111827',
// //                                     fontSize: { xs: '1.1rem', md: '1.25rem' }
// //                                   }}
// //                                 >
// //                                   {formatPrice(item.price)}
// //                                 </Typography>
// //                                 {item.originalPrice > item.price && (
// //                                   <Typography
// //                                     variant="body2"
// //                                     sx={{
// //                                       color: '#9CA3AF',
// //                                       textDecoration: 'line-through',
// //                                       fontSize: '0.9rem'
// //                                     }}
// //                                   >
// //                                     {formatPrice(item.originalPrice)}
// //                                   </Typography>
// //                                 )}
// //                                 {item.originalPrice > item.price && (
// //                                   <Chip
// //                                     label={`${Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF`}
// //                                     size="small"
// //                                     sx={{
// //                                       backgroundColor: '#DCFCE7',
// //                                       color: '#16A34A',
// //                                       fontWeight: 600,
// //                                       fontSize: '0.75rem'
// //                                     }}
// //                                   />
// //                                 )}
// //                               </Box>
// //                               <Typography variant="body2" sx={{ color: '#6B7280' }}>
// //                                 Total: {formatPrice(item.price * item.quantity)}
// //                               </Typography>
// //                             </Box>

// //                             {/* Quantity and Actions */}
// //                             <Box sx={{ 
// //                               display: 'flex', 
// //                               justifyContent: 'space-between', 
// //                               alignItems: 'center',
// //                               flexWrap: 'wrap',
// //                               gap: 2
// //                             }}>
// //                               {/* Quantity Selector */}
// //                               <Box sx={{ 
// //                                 display: 'flex', 
// //                                 alignItems: 'center',
// //                                 border: '1px solid #E5E7EB',
// //                                 borderRadius: 1.5,
// //                                 backgroundColor: '#FAFBFC'
// //                               }}>
// //                                 <IconButton
// //                                   onClick={() => updateQuantity(item.id, -1)}
// //                                   disabled={item.quantity <= 1}
// //                                   size="small"
// //                                   sx={{ 
// //                                     color: '#6B7280',
// //                                     '&:hover': { backgroundColor: '#F3F4F6' },
// //                                     '&:disabled': { color: '#D1D5DB' }
// //                                   }}
// //                                 >
// //                                   <Remove fontSize="small" />
// //                                 </IconButton>
// //                                 <Typography
// //                                   sx={{
// //                                     minWidth: 40,
// //                                     textAlign: 'center',
// //                                     fontWeight: 600,
// //                                     color: '#111827',
// //                                     fontSize: '1rem'
// //                                   }}
// //                                 >
// //                                   {item.quantity}
// //                                 </Typography>
// //                                 <IconButton
// //                                   onClick={() => updateQuantity(item.id, 1)}
// //                                   size="small"
// //                                   sx={{ 
// //                                     color: '#6B7280',
// //                                     '&:hover': { backgroundColor: '#F3F4F6' }
// //                                   }}
// //                                 >
// //                                   <Add fontSize="small" />
// //                                 </IconButton>
// //                               </Box>

// //                               {/* Remove Button */}
// //                               <Button
// //                                 onClick={() => removeItem(item.id)}
// //                                 startIcon={<Delete />}
// //                                 size="small"
// //                                 sx={{
// //                                   color: '#6B7280',
// //                                   textTransform: 'none',
// //                                   fontWeight: 500,
// //                                   '&:hover': {
// //                                     backgroundColor: '#FEF2F2',
// //                                     color: '#DC2626'
// //                                   }
// //                                 }}
// //                               >
// //                                 Remove
// //                               </Button>
// //                             </Box>
// //                           </Box>
// //                         </Box>
// //                       </CardContent>
// //                     </Card>
// //                   ))}
// //                 </Stack>
// //               </Fade>
// //             </Grid>

// //             {/* Right Column - Order Summary (md=4) */}
// //             <Grid item xs={12} md={4}>
// //               <Fade in timeout={600} style={{ transitionDelay: '200ms' }}>
// //                 <Box sx={{ position: { md: 'sticky' }, top: { md: 24 } }}>
// //                   <Card
// //                     elevation={0}
// //                     sx={{
// //                       borderRadius: 2,
// //                       border: '1px solid #E5E7EB',
// //                       backgroundColor: '#FFFFFF',
// //                       boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
// //                     }}
// //                   >
// //                     {/* Header */}
// //                     <Box sx={{ p: 3, pb: 2 }}>
// //                       <Typography
// //                         variant="h6"
// //                         sx={{
// //                           fontWeight: 600,
// //                           color: '#111827',
// //                           fontSize: '1.125rem',
// //                           mb: 0.5
// //                         }}
// //                       >
// //                         ORDER SUMMARY
// //                       </Typography>
// //                       <Typography variant="body2" sx={{ color: '#6B7280' }}>
// //                         {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
// //                       </Typography>
// //                     </Box>

// //                     <Divider sx={{ borderColor: '#F3F4F6' }} />

// //                     {/* Price Breakdown */}
// //                     <Box sx={{ px: 3, py: 2 }}>
// //                       <Stack spacing={0}>
// //                         <PriceRow 
// //                           label={`Total MRP (${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'})`}
// //                           amount={originalTotal}
// //                         />

// //                         {discount > 0 && (
// //                           <PriceRow 
// //                             label="Discount on MRP"
// //                             amount={discount}
// //                             isDiscount={true}
// //                             icon={<LocalOffer sx={{ fontSize: 16, color: '#16A34A' }} />}
// //                           />
// //                         )}

// //                         <PriceRow 
// //                           label="Platform Fee"
// //                           amount={platformFee}
// //                         />

// //                         <Box sx={{ 
// //                           display: 'flex', 
// //                           justifyContent: 'space-between', 
// //                           alignItems: 'center',
// //                           py: 1.5
// //                         }}>
// //                           <Typography 
// //                             variant="body2" 
// //                             sx={{ 
// //                               color: '#6B7280',
// //                               fontSize: '0.9rem'
// //                             }}
// //                           >
// //                             Delivery Charges
// //                           </Typography>
// //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                             {subtotal > 499 && deliveryFee === 0 && (
// //                               <Typography 
// //                                 variant="body2" 
// //                                 sx={{ 
// //                                   color: '#6B7280',
// //                                   textDecoration: 'line-through',
// //                                   fontSize: '0.85rem'
// //                                 }}
// //                               >
// //                                 ₹40
// //                               </Typography>
// //                             )}
// //                             {deliveryFee === 0 ? (
// //                               <Chip
// //                                 label="FREE"
// //                                 size="small"
// //                                 sx={{
// //                                   backgroundColor: '#16A34A',
// //                                   color: 'white',
// //                                   fontWeight: 600,
// //                                   fontSize: '0.75rem',
// //                                   height: 24
// //                                 }}
// //                               />
// //                             ) : (
// //                               <Typography 
// //                                 variant="body2" 
// //                                 sx={{ 
// //                                   color: '#374151',
// //                                   fontWeight: 500,
// //                                   fontSize: '0.9rem'
// //                                 }}
// //                               >
// //                                 {formatPrice(deliveryFee)}
// //                               </Typography>
// //                             )}
// //                           </Box>
// //                         </Box>
// //                       </Stack>
// //                     </Box>

// //                     <Divider sx={{ borderColor: '#E5E7EB', mx: 3 }} />

// //                     {/* Total Amount */}
// //                     <Box sx={{ px: 3, py: 2.5 }}>
// //                       <Box sx={{ 
// //                         display: 'flex', 
// //                         justifyContent: 'space-between', 
// //                         alignItems: 'center',
// //                         mb: 2
// //                       }}>
// //                         <Typography 
// //                           variant="h6" 
// //                           sx={{ 
// //                             color: '#111827',
// //                             fontWeight: 700,
// //                             fontSize: '1.125rem'
// //                           }}
// //                         >
// //                           Total Amount
// //                         </Typography>
// //                         <Typography
// //                           variant="h6"
// //                           sx={{
// //                             fontWeight: 700,
// //                             color: '#111827',
// //                             fontSize: '1.25rem'
// //                           }}
// //                         >
// //                           {formatPrice(totalAmount)}
// //                         </Typography>
// //                       </Box>

// //                       {/* Savings Message */}
// //                       {savings > 0 && (
// //                         <Box sx={{
// //                           backgroundColor: '#F0FDF4',
// //                           border: '1px solid #BBF7D0',
// //                           borderRadius: 1,
// //                           p: 2,
// //                           mb: 2
// //                         }}>
// //                           <Typography 
// //                             variant="body2" 
// //                             sx={{ 
// //                               color: '#16A34A',
// //                               fontWeight: 600,
// //                               fontSize: '0.9rem',
// //                               display: 'flex',
// //                               alignItems: 'center',
// //                               gap: 0.5
// //                             }}
// //                           >
// //                             <Verified sx={{ fontSize: 16 }} />
// //                             You will save {formatPrice(savings)} on this order
// //                           </Typography>
// //                         </Box>
// //                       )}

// //                       {/* Security Message */}
// //                       <Box sx={{ 
// //                         display: 'flex', 
// //                         alignItems: 'flex-start', 
// //                         gap: 1,
// //                         backgroundColor: '#F9FAFB',
// //                         p: 2,
// //                         borderRadius: 1,
// //                         border: '1px solid #F3F4F6',
// //                         mb: 3
// //                       }}>
// //                         <Shield sx={{ fontSize: 18, color: '#6B7280', mt: 0.1 }} />
// //                         <Typography 
// //                           variant="caption" 
// //                           sx={{ 
// //                             color: '#6B7280',
// //                             lineHeight: 1.4,
// //                             fontSize: '0.8rem'
// //                           }}
// //                         >
// //                           Safe and Secure Payments. Easy returns. 100% Authentic products.
// //                         </Typography>
// //                       </Box>

// //                       {/* Checkout Button */}
// //                       <Button
// //                         variant="contained"
// //                         size="large"
// //                         fullWidth
// //                         onClick={() => navigate('/checkout')}
// //                         endIcon={<CreditCard />}
// //                         sx={{
// //                           py: 2,
// //                           borderRadius: 2,
// //                           textTransform: 'none',
// //                           fontSize: '1.1rem',
// //                           fontWeight: 700,
// //                           backgroundColor: '#111827',
// //                           boxShadow: '0 4px 14px rgba(17, 24, 39, 0.25)',
// //                           '&:hover': {
// //                             backgroundColor: '#374151',
// //                             transform: 'translateY(-1px)',
// //                             boxShadow: '0 6px 20px rgba(17, 24, 39, 0.35)'
// //                           },
// //                           transition: 'all 0.3s ease'
// //                         }}
// //                       >
// //                         Proceed to Checkout
// //                       </Button>
// //                     </Box>
// //                   </Card>
// //                 </Box>
// //               </Fade>
// //             </Grid>
// //           </Grid>
// //         )}
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default CartPage;


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