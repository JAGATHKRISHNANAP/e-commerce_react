// // src/pages/OrderConfirmationPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Stack,
//   Button,
//   Divider,
//   Grid,
//   Card,
//   CardContent,
//   Breadcrumbs,
//   Link,
//   Chip,
//   Avatar,
//   Alert,
//   IconButton,
//   Fade,
//   Zoom
// } from '@mui/material';
// import {
//   CheckCircleOutline,
//   LocalShipping,
//   Receipt,
//   Home,
//   NavigateNext,
//   ShoppingBag,
//   LocationOn,
//   Payment,
//   CalendarToday,
//   Print,
//   Download,
//   Share,
//   TrackChanges,
//   Email,
//   Phone,
//   ContentCopy
// } from '@mui/icons-material';

// import Header from '../components/homepagecomponent/AppHeaders';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import ErrorMessage from '../components/ui/ErrorMessage';
// import { showToast } from '../components/ui/Toast';
// // import { api } from '../services/api';

// const OrderConfirmationPage = () => {
//     const API_BASE_URL = 'http://localhost:8000'
//     const { orderId } = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
    
//     const [orderDetails, setOrderDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     // Get order details from navigation state if available
//     const navigationOrderDetails = location.state?.orderDetails;
//     const navigationOrderNumber = location.state?.orderNumber;

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // If we have order details from navigation, use them initially
//         if (navigationOrderDetails) {
//           setOrderDetails(navigationOrderDetails);
//           setLoading(false);
//           return;
//         }
        
//         // Otherwise fetch from API
//         const response = await API_BASE_URL.get(`/api/v1/orders/${orderId}`);
//         setOrderDetails(response.data);
//       } catch (err) {
//         console.error('Error fetching order details:', err);
//         setError(err.response?.data?.detail || 'Failed to load order details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (orderId) {
//       fetchOrderDetails();
//     }
//   }, [orderId, navigationOrderDetails]);

//   const handleCopyOrderNumber = () => {
//     if (orderDetails?.order_number || navigationOrderNumber) {
//       navigator.clipboard.writeText(orderDetails?.order_number || navigationOrderNumber);
//       showToast('Order number copied to clipboard', 'success');
//     }
//   };

//   const handlePrintOrder = () => {
//     window.print();
//   };

//   const handleTrackOrder = () => {
//     navigate(`/orders/${orderId}/track`);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR'
//     }).format(amount);
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
//         <Header />
//         <LoadingSpinner message="Loading order confirmation..." />
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
//           title="Failed to load order details"
//           onRetry={() => window.location.reload()}
//           onGoHome={() => navigate('/dashboard')}
//         />
//       </Box>
//     );
//   }

//   const order = orderDetails;
//   const orderNumber = order?.order_number || navigationOrderNumber;

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
//       <Header />
      
//       <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
//         {/* Breadcrumb Navigation */}
//         <Box sx={{ mb: { xs: 3, md: 4 } }}>
//           <Breadcrumbs 
//             separator={<NavigateNext fontSize="small" />} 
//             sx={{ mb: 2 }}
//           >
//             <Link
//               component="button"
//               variant="body2"
//               onClick={() => navigate('/dashboard')}
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
//             <Link
//               component="button"
//               variant="body2"
//               onClick={() => navigate('/orders')}
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
//               <ShoppingBag sx={{ fontSize: 16 }} />
//               Orders
//             </Link>
//             <Typography 
//               color="#111827" 
//               variant="body2"
//               sx={{ fontWeight: 600, fontSize: '0.9rem' }}
//             >
//               Order Confirmation
//             </Typography>
//           </Breadcrumbs>
//         </Box>

//         {/* Success Header */}
//         <Fade in timeout={800}>
//           <Paper
//             elevation={0}
//             sx={{
//               borderRadius: 3,
//               border: '1px solid #E5E7EB',
//               mb: { xs: 3, md: 4 },
//               overflow: 'hidden',
//               background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
//               color: 'white'
//             }}
//           >
//             <Box sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
//               <Zoom in timeout={1000} style={{ transitionDelay: '300ms' }}>
//                 <CheckCircleOutline sx={{ 
//                   fontSize: { xs: 64, md: 80 }, 
//                   mb: 3,
//                   filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
//                 }} />
//               </Zoom>
              
//               <Typography 
//                 variant="h3" 
//                 gutterBottom 
//                 sx={{ 
//                   fontWeight: 800,
//                   fontSize: { xs: '2rem', md: '2.5rem' },
//                   mb: 2
//                 }}
//               >
//                 Order Confirmed!
//               </Typography>
              
//               <Typography 
//                 variant="h6" 
//                 sx={{ 
//                   opacity: 0.9,
//                   fontSize: { xs: '1.1rem', md: '1.25rem' },
//                   fontWeight: 400,
//                   mb: 3
//                 }}
//               >
//                 Thank you for your order. We've received your order and will start processing it soon.
//               </Typography>

//               {/* Order Number Display */}
//               <Box sx={{ 
//                 display: 'inline-flex', 
//                 alignItems: 'center', 
//                 gap: 2,
//                 bgcolor: 'rgba(255,255,255,0.15)',
//                 borderRadius: 2,
//                 px: 3,
//                 py: 1.5,
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <Typography variant="body1" sx={{ fontWeight: 600 }}>
//                   Order Number:
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: 'monospace' }}>
//                   {orderNumber}
//                 </Typography>
//                 <IconButton 
//                   onClick={handleCopyOrderNumber}
//                   sx={{ 
//                     color: 'white', 
//                     '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } 
//                   }}
//                   size="small"
//                 >
//                   <ContentCopy fontSize="small" />
//                 </IconButton>
//               </Box>
//             </Box>
//           </Paper>
//         </Fade>

//         {/* Quick Actions */}
//         <Fade in timeout={800} style={{ transitionDelay: '400ms' }}>
//           <Paper
//             elevation={0}
//             sx={{
//               borderRadius: 2,
//               border: '1px solid #E5E7EB',
//               mb: { xs: 3, md: 4 },
//               p: { xs: 3, md: 4 }
//             }}
//           >
//             <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827' }}>
//               Quick Actions
//             </Typography>
            
//             <Stack 
//               direction={{ xs: 'column', sm: 'row' }} 
//               spacing={2}
//               sx={{ flexWrap: 'wrap' }}
//             >
//               <Button
//                 variant="contained"
//                 startIcon={<TrackChanges />}
//                 onClick={handleTrackOrder}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   py: 1.5,
//                   px: 3,
//                   fontWeight: 600,
//                   backgroundColor: '#111827',
//                   '&:hover': { backgroundColor: '#374151' }
//                 }}
//               >
//                 Track Order
//               </Button>
              
//               <Button
//                 variant="outlined"
//                 startIcon={<Print />}
//                 onClick={handlePrintOrder}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   py: 1.5,
//                   px: 3,
//                   fontWeight: 600,
//                   borderColor: '#E5E7EB',
//                   color: '#374151',
//                   '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
//                 }}
//               >
//                 Print Receipt
//               </Button>
              
//               <Button
//                 variant="outlined"
//                 startIcon={<Email />}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   py: 1.5,
//                   px: 3,
//                   fontWeight: 600,
//                   borderColor: '#E5E7EB',
//                   color: '#374151',
//                   '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
//                 }}
//               >
//                 Email Receipt
//               </Button>
              
//               <Button
//                 variant="outlined"
//                 onClick={() => navigate('/dashboard')}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   py: 1.5,
//                   px: 3,
//                   fontWeight: 600,
//                   borderColor: '#E5E7EB',
//                   color: '#374151',
//                   '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
//                 }}
//               >
//                 Continue Shopping
//               </Button>
//             </Stack>
//           </Paper>
//         </Fade>

//         {/* Order Details Grid */}
//         <Grid container spacing={{ xs: 3, md: 4 }}>
//           {/* Left Column - Order Information */}
//           <Grid item xs={12} lg={8}>
//             <Stack spacing={{ xs: 3, md: 4 }}>
//               {/* Order Status Timeline */}
//               <Fade in timeout={800} style={{ transitionDelay: '600ms' }}>
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     borderRadius: 2,
//                     border: '1px solid #E5E7EB',
//                     p: { xs: 3, md: 4 }
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827' }}>
//                     Order Status
//                   </Typography>
                  
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                     <Chip
//                       label={order?.order_status || 'Confirmed'}
//                       color="success"
//                       sx={{ 
//                         fontWeight: 600,
//                         fontSize: '0.9rem',
//                         px: 1
//                       }}
//                     />
//                     <Typography variant="body2" color="#6B7280">
//                       Order placed on {formatDate(order?.created_at)}
//                     </Typography>
//                   </Box>

//                   <Alert 
//                     severity="info" 
//                     icon={<LocalShipping />}
//                     sx={{ 
//                       borderRadius: 2,
//                       '& .MuiAlert-message': {
//                         fontSize: '0.95rem'
//                       }
//                     }}
//                   >
//                     <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
//                       Estimated Delivery
//                     </Typography>
//                     <Typography variant="body2">
//                       {formatDate(order?.estimated_delivery_date)} - We'll notify you once your order is shipped.
//                     </Typography>
//                   </Alert>
//                 </Paper>
//               </Fade>

//               {/* Order Items */}
//               <Fade in timeout={800} style={{ transitionDelay: '800ms' }}>
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     borderRadius: 2,
//                     border: '1px solid #E5E7EB',
//                     p: { xs: 3, md: 4 }
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827' }}>
//                     Order Items
//                   </Typography>
                  
//                   <Stack spacing={2}>
//                     {order?.order_items?.map((item, index) => (
//                       <Box key={index}>
//                         <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
//                           <Avatar
//                             variant="rounded"
//                             sx={{ 
//                               width: 64, 
//                               height: 64, 
//                               bgcolor: '#F3F4F6',
//                               color: '#6B7280'
//                             }}
//                           >
//                             <ShoppingBag />
//                           </Avatar>
                          
//                           <Box sx={{ flex: 1 }}>
//                             <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
//                               {item.product_name}
//                             </Typography>
//                             <Typography variant="body2" color="#6B7280" sx={{ mb: 1 }}>
//                               {item.product_description}
//                             </Typography>
//                             <Typography variant="body2" color="#6B7280">
//                               Quantity: {item.quantity} × {formatCurrency(item.unit_price)}
//                             </Typography>
//                           </Box>
                          
//                           <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                             {formatCurrency(item.total_price)}
//                           </Typography>
//                         </Box>
//                         {index < order.order_items.length - 1 && <Divider sx={{ mt: 2 }} />}
//                       </Box>
//                     ))}
//                   </Stack>
//                 </Paper>
//               </Fade>

//               {/* Delivery Address */}
//               <Fade in timeout={800} style={{ transitionDelay: '1000ms' }}>
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     borderRadius: 2,
//                     border: '1px solid #E5E7EB',
//                     p: { xs: 3, md: 4 }
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827', display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <LocationOn color="action" />
//                     Delivery Address
//                   </Typography>
                  
//                   {order?.delivery_address ? (
//                     <Box>
//                       <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
//                         {order.delivery_address.full_name}
//                       </Typography>
//                       <Typography variant="body2" color="#6B7280" sx={{ mb: 0.5 }}>
//                         {order.delivery_address.address_line_1}
//                       </Typography>
//                       {order.delivery_address.address_line_2 && (
//                         <Typography variant="body2" color="#6B7280" sx={{ mb: 0.5 }}>
//                           {order.delivery_address.address_line_2}
//                         </Typography>
//                       )}
//                       <Typography variant="body2" color="#6B7280" sx={{ mb: 0.5 }}>
//                         {order.delivery_address.city}, {order.delivery_address.state} {order.delivery_address.postal_code}
//                       </Typography>
//                       <Typography variant="body2" color="#6B7280">
//                         {order.delivery_address.country}
//                       </Typography>
//                       {order.delivery_address.phone_number && (
//                         <Typography variant="body2" color="#6B7280" sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <Phone fontSize="small" />
//                           {order.delivery_address.phone_number}
//                         </Typography>
//                       )}
//                     </Box>
//                   ) : (
//                     <Typography variant="body2" color="#6B7280">
//                       Delivery address information not available
//                     </Typography>
//                   )}
//                 </Paper>
//               </Fade>
//             </Stack>
//           </Grid>

//           {/* Right Column - Order Summary */}
//           <Grid item xs={12} lg={4}>
//             <Fade in timeout={800} style={{ transitionDelay: '1200ms' }}>
//               <Box sx={{ position: { lg: 'sticky' }, top: { lg: 24 } }}>
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     borderRadius: 2,
//                     border: '1px solid #E5E7EB',
//                     p: { xs: 3, md: 4 }
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827', display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <Receipt color="action" />
//                     Order Summary
//                   </Typography>
                  
//                   <Stack spacing={2}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <Typography variant="body2" color="#6B7280">Subtotal</Typography>
//                       <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {formatCurrency(order?.subtotal || 0)}
//                       </Typography>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <Typography variant="body2" color="#6B7280">Tax</Typography>
//                       <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {formatCurrency(order?.tax_amount || 0)}
//                       </Typography>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <Typography variant="body2" color="#6B7280">Shipping</Typography>
//                       <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {order?.shipping_amount > 0 ? formatCurrency(order.shipping_amount) : 'Free'}
//                       </Typography>
//                     </Box>
                    
//                     {order?.discount_amount > 0 && (
//                       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <Typography variant="body2" color="#16A34A">Discount</Typography>
//                         <Typography variant="body2" sx={{ fontWeight: 600, color: '#16A34A' }}>
//                           -{formatCurrency(order.discount_amount)}
//                         </Typography>
//                       </Box>
//                     )}
                    
//                     <Divider />
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <Typography variant="h6" sx={{ fontWeight: 700 }}>Total</Typography>
//                       <Typography variant="h6" sx={{ fontWeight: 700 }}>
//                         {formatCurrency(order?.total_amount || 0)}
//                       </Typography>
//                     </Box>
                    
//                     <Divider />
                    
//                     <Box>
//                       <Typography variant="body2" color="#6B7280" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <Payment fontSize="small" />
//                         Payment Method
//                       </Typography>
//                       <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
//                         {order?.payment_method || 'N/A'}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                 </Paper>
//               </Box>
//             </Fade>
//           </Grid>
//         </Grid>

//         {/* Support Information */}
//         <Fade in timeout={800} style={{ transitionDelay: '1400ms' }}>
//           <Paper
//             elevation={0}
//             sx={{
//               borderRadius: 2,
//               border: '1px solid #E5E7EB',
//               mt: { xs: 3, md: 4 },
//               p: { xs: 3, md: 4 }
//             }}
//           >
//             <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#111827' }}>
//               Need Help?
//             </Typography>
//             <Typography variant="body2" color="#6B7280" sx={{ mb: 3 }}>
//               If you have any questions about your order, please don't hesitate to contact our customer support team.
//             </Typography>
            
//             <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//               <Button
//                 variant="outlined"
//                 startIcon={<Email />}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   py: 1.5,
//                   px: 3,
//                   fontWeight: 600,
//                   borderColor: '#E5E7EB',
//                   color: '#374151',
//                   '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
//                 }}
//               >
//                 support@example.com
//               </Button>
              
//               <Button
//                 variant="outlined"
//                 startIcon={<Phone />}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   py: 1.5,
//                   px: 3,
//                   fontWeight: 600,
//                   borderColor: '#E5E7EB',
//                   color: '#374151',
//                   '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
//                 }}
//               >
//                 +1 (555) 123-4567
//               </Button>
//             </Stack>
//           </Paper>
//         </Fade>
//       </Container>
//     </Box>
//   );
// };

// export default OrderConfirmationPage;
























// src/pages/OrderConfirmationPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Button,
  Divider,
  Grid,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Chip,
  Avatar,
  Alert,
  IconButton,
  Fade,
  Zoom
} from '@mui/material';
import {
  CheckCircleOutline,
  LocalShipping,
  Receipt,
  Home,
  NavigateNext,
  ShoppingBag,
  LocationOn,
  Payment,
  CalendarToday,
  Print,
  Download,
  Share,
  TrackChanges,
  Email,
  Phone,
  ContentCopy
} from '@mui/icons-material';

import Header from '../components/homepagecomponent/AppHeaders';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { showToast } from '../components/ui/Toast';

// Global base URL variable
const API_BASE_URL = 'http://localhost:8000';

const OrderConfirmationPage = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get order details from navigation state if available
  const navigationOrderDetails = location.state?.orderDetails;
  const navigationOrderNumber = location.state?.orderNumber;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // If we have order details from navigation, use them initially
        if (navigationOrderDetails) {
          setOrderDetails(navigationOrderDetails);
          setLoading(false);
          return;
        }
        
        // Otherwise fetch from API
        const response = await axios.get(`${API_BASE_URL}/api/v1/orders/${orderId}`);
        setOrderDetails(response.data);
      } catch (err) {
        console.error('Error fetching order details:', err);
        setError(err.response?.data?.detail || 'Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId, navigationOrderDetails]);

  const handleCopyOrderNumber = () => {
    if (orderDetails?.order_number || navigationOrderNumber) {
      navigator.clipboard.writeText(orderDetails?.order_number || navigationOrderNumber);
      showToast('Order number copied to clipboard', 'success');
    }
  };

  const handlePrintOrder = () => {
    window.print();
  };

  const handleTrackOrder = () => {
    navigate(`/orders/${orderId}/track`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  // Loading state
  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
        <Header />
        <LoadingSpinner message="Loading order confirmation..." />
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
          title="Failed to load order details"
          onRetry={() => window.location.reload()}
          onGoHome={() => navigate('/dashboard')}
        />
      </Box>
    );
  }

  const order = orderDetails;
  const orderNumber = order?.order_number || navigationOrderNumber;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        {/* Breadcrumb Navigation */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Breadcrumbs 
            separator={<NavigateNext fontSize="small" />} 
            sx={{ mb: 2 }}
          >
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/dashboard')}
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
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/orders')}
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
              <ShoppingBag sx={{ fontSize: 16 }} />
              Orders
            </Link>
            <Typography 
              color="#111827" 
              variant="body2"
              sx={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              Order Confirmation
            </Typography>
          </Breadcrumbs>
        </Box>

        {/* Success Header */}
        <Fade in timeout={800}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: '1px solid #E5E7EB',
              mb: { xs: 3, md: 4 },
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
              color: 'white'
            }}
          >
            <Box sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
              <Zoom in timeout={1000} style={{ transitionDelay: '300ms' }}>
                <CheckCircleOutline sx={{ 
                  fontSize: { xs: 64, md: 80 }, 
                  mb: 3,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }} />
              </Zoom>
              
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  mb: 2
                }}
              >
                Order Confirmed!
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  opacity: 0.9,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  mb: 3
                }}
              >
                Thank you for your order. We've received your order and will start processing it soon.
              </Typography>

              {/* Order Number Display */}
              <Box sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 2,
                bgcolor: 'rgba(255,255,255,0.15)',
                borderRadius: 2,
                px: 3,
                py: 1.5,
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Order Number:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: 'monospace' }}>
                  {orderNumber}
                </Typography>
                <IconButton 
                  onClick={handleCopyOrderNumber}
                  sx={{ 
                    color: 'white', 
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } 
                  }}
                  size="small"
                >
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Fade>

        {/* Quick Actions */}
        <Fade in timeout={800} style={{ transitionDelay: '400ms' }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              border: '1px solid #E5E7EB',
              mb: { xs: 3, md: 4 },
              p: { xs: 3, md: 4 }
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827' }}>
              Quick Actions
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              sx={{ flexWrap: 'wrap' }}
            >
              <Button
                variant="contained"
                startIcon={<TrackChanges />}
                onClick={handleTrackOrder}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  backgroundColor: '#111827',
                  '&:hover': { backgroundColor: '#374151' }
                }}
              >
                Track Order
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Print />}
                onClick={handlePrintOrder}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderColor: '#E5E7EB',
                  color: '#374151',
                  '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
                }}
              >
                Print Receipt
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Email />}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderColor: '#E5E7EB',
                  color: '#374151',
                  '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
                }}
              >
                Email Receipt
              </Button>
              
              <Button
                variant="outlined"
                onClick={() => navigate('/dashboard')}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderColor: '#E5E7EB',
                  color: '#374151',
                  '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
                }}
              >
                Continue Shopping
              </Button>
            </Stack>
          </Paper>
        </Fade>

        {/* Order Details Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Left Column - Order Information */}
          <Grid item xs={12} lg={8}>
            <Stack spacing={{ xs: 3, md: 4 }}>
              {/* Order Status Timeline */}
              <Fade in timeout={800} style={{ transitionDelay: '600ms' }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    border: '1px solid #E5E7EB',
                    p: { xs: 3, md: 4 }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827' }}>
                    Order Status
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Chip
                      label={order?.order_status || 'Confirmed'}
                      color="success"
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        px: 1
                      }}
                    />
                    <Typography variant="body2" color="#6B7280">
                      Order placed on {formatDate(order?.created_at)}
                    </Typography>
                  </Box>

                  <Alert 
                    severity="info" 
                    icon={<LocalShipping />}
                    sx={{ 
                      borderRadius: 2,
                      '& .MuiAlert-message': {
                        fontSize: '0.95rem'
                      }
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Estimated Delivery
                    </Typography>
                    <Typography variant="body2">
                      {formatDate(order?.estimated_delivery_date)} - We'll notify you once your order is shipped.
                    </Typography>
                  </Alert>
                </Paper>
              </Fade>

              {/* Order Items */}
              <Fade in timeout={800} style={{ transitionDelay: '800ms' }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    border: '1px solid #E5E7EB',
                    p: { xs: 3, md: 4 }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827' }}>
                    Order Items
                  </Typography>
                  
                  <Stack spacing={2}>
                    {order?.order_items?.map((item, index) => (
                      <Box key={index}>
                        <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                          <Avatar
                            variant="rounded"
                            sx={{ 
                              width: 64, 
                              height: 64, 
                              bgcolor: '#F3F4F6',
                              color: '#6B7280'
                            }}
                          >
                            <ShoppingBag />
                          </Avatar>
                          
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                              {item.product_name}
                            </Typography>
                            <Typography variant="body2" color="#6B7280" sx={{ mb: 1 }}>
                              {item.product_description}
                            </Typography>
                            <Typography variant="body2" color="#6B7280">
                              Quantity: {item.quantity} × {formatCurrency(item.unit_price)}
                            </Typography>
                          </Box>
                          
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {formatCurrency(item.total_price)}
                          </Typography>
                        </Box>
                        {index < order.order_items.length - 1 && <Divider sx={{ mt: 2 }} />}
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Fade>

              {/* Delivery Address */}
              <Fade in timeout={800} style={{ transitionDelay: '1000ms' }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    border: '1px solid #E5E7EB',
                    p: { xs: 3, md: 4 }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn color="action" />
                    Delivery Address
                  </Typography>
                  
                  {order?.delivery_address ? (
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {order.delivery_address.full_name}
                      </Typography>
                      <Typography variant="body2" color="#6B7280" sx={{ mb: 0.5 }}>
                        {order.delivery_address.address_line_1}
                      </Typography>
                      {order.delivery_address.address_line_2 && (
                        <Typography variant="body2" color="#6B7280" sx={{ mb: 0.5 }}>
                          {order.delivery_address.address_line_2}
                        </Typography>
                      )}
                      <Typography variant="body2" color="#6B7280" sx={{ mb: 0.5 }}>
                        {order.delivery_address.city}, {order.delivery_address.state} {order.delivery_address.postal_code}
                      </Typography>
                      <Typography variant="body2" color="#6B7280">
                        {order.delivery_address.country}
                      </Typography>
                      {order.delivery_address.phone_number && (
                        <Typography variant="body2" color="#6B7280" sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Phone fontSize="small" />
                          {order.delivery_address.phone_number}
                        </Typography>
                      )}
                    </Box>
                  ) : (
                    <Typography variant="body2" color="#6B7280">
                      Delivery address information not available
                    </Typography>
                  )}
                </Paper>
              </Fade>
            </Stack>
          </Grid>

          {/* Right Column - Order Summary */}
          <Grid item xs={12} lg={4}>
            <Fade in timeout={800} style={{ transitionDelay: '1200ms' }}>
              <Box sx={{ position: { lg: 'sticky' }, top: { lg: 24 } }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    border: '1px solid #E5E7EB',
                    p: { xs: 3, md: 4 }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#111827', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Receipt color="action" />
                    Order Summary
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="#6B7280">Subtotal</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {formatCurrency(order?.subtotal || 0)}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="#6B7280">Tax</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {formatCurrency(order?.tax_amount || 0)}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="#6B7280">Shipping</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {order?.shipping_amount > 0 ? formatCurrency(order.shipping_amount) : 'Free'}
                      </Typography>
                    </Box>
                    
                    {order?.discount_amount > 0 && (
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="#16A34A">Discount</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#16A34A' }}>
                          -{formatCurrency(order.discount_amount)}
                        </Typography>
                      </Box>
                    )}
                    
                    <Divider />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Total</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {formatCurrency(order?.total_amount || 0)}
                      </Typography>
                    </Box>
                    
                    <Divider />
                    
                    <Box>
                      <Typography variant="body2" color="#6B7280" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Payment fontSize="small" />
                        Payment Method
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                        {order?.payment_method || 'N/A'}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Support Information */}
        <Fade in timeout={800} style={{ transitionDelay: '1400ms' }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              border: '1px solid #E5E7EB',
              mt: { xs: 3, md: 4 },
              p: { xs: 3, md: 4 }
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#111827' }}>
              Need Help?
            </Typography>
            <Typography variant="body2" color="#6B7280" sx={{ mb: 3 }}>
              If you have any questions about your order, please don't hesitate to contact our customer support team.
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Email />}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderColor: '#E5E7EB',
                  color: '#374151',
                  '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
                }}
              >
                support@example.com
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<Phone />}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderColor: '#E5E7EB',
                  color: '#374151',
                  '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' }
                }}
              >
                +1 (555) 123-4567
              </Button>
            </Stack>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default OrderConfirmationPage;