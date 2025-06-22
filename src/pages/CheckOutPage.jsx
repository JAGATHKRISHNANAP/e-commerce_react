// // // // // src/pages/CheckOutPage.jsx

// // import AppHeader from '../components/homepagecomponent/AppHeaders';

// // const AddToCart = () => {

// //   return (
// //     <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
// //       <AppHeader />
// //       <div className="container mx-auto p-4">
// //         <h1 className="text-2xl font-bold mb-4">Your CheckOut</h1>
// //         <p className="text-gray-700">This is your CheckOut .</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddToCart;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Stack,
//   Breadcrumbs,
//   Link,
//   Stepper,
//   Step,
//   StepLabel,
//   Paper,
//   TextField,
//   Button,
//   Divider,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Card,
//   CardContent,
//   Chip,
//   IconButton,
//   Alert,
//   Collapse
// } from '@mui/material';
// import {
//   Home,
//   NavigateNext,
//   ShoppingCart,
//   LocalShipping,
//   Payment,
//   CheckCircle,
//   ExpandMore,
//   Edit,
//   CreditCard,
//   AccountBalance,
//   PhoneAndroid,
//   Add,
//   Remove,
//   Security,
//   LocalOffer
// } from '@mui/icons-material';

// import Header from '../components/homepagecomponent/AppHeaders';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import { useCart } from '../hooks/useCart';
// import { showToast } from '../components/ui/Toast';
// // import { useLocation } from 'react-router-dom';

// const steps = ['Shipping Address', 'Payment Method', 'Review & Place Order'];

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const { cartData, loading } = useCart();
// //   const location = useLocation();
// //   const cartData = location.state?.cart;

//   console.log("Received Cart Data in Checkout:", cartData);
//   const [activeStep, setActiveStep] = useState(0);
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddressId, setSelectedAddressId] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false);
//   const [couponCode, setCouponCode] = useState('');
//   const [couponApplied, setCouponApplied] = useState(false);
  
//   // Form states
//   const [addressForm, setAddressForm] = useState({
//     fullName: '',
//     phoneNumber: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     pinCode: '',
//     country: 'India',
//     isDefault: false
//   });

//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     cardName: '',
//     expiryMonth: '',
//     expiryYear: '',
//     cvv: ''
//   });

//   const [upiId, setUpiId] = useState('');
//   const [processing, setProcessing] = useState(false);

//   // Mock saved addresses (in real app, fetch from API)
//   useEffect(() => {
//     const mockAddresses = [
//       {
//         id: '1',
//         fullName: 'John Doe',
//         phoneNumber: '+91 9876543210',
//         addressLine1: '123, ABC Street',
//         addressLine2: 'Near XYZ Mall',
//         city: 'Mumbai',
//         state: 'Maharashtra',
//         pinCode: '400001',
//         country: 'India',
//         isDefault: true
//       }
//     ];
//     setAddresses(mockAddresses);
//     if (mockAddresses.length > 0) {
//       setSelectedAddressId(mockAddresses[0].id);
//     }
//   }, []);

//   const handleNext = () => {
//     if (activeStep === 0 && !selectedAddressId && !showNewAddressForm) {
//       showToast('Please select a shipping address', 'warning');
//       return;
//     }
//     if (activeStep === 1 && !paymentMethod) {
//       showToast('Please select a payment method', 'warning');
//       return;
//     }
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleAddressChange = (e) => {
//     const { name, value, checked } = e.target;
//     setAddressForm(prev => ({
//       ...prev,
//       [name]: name === 'isDefault' ? checked : value
//     }));
//   };

//   const handleSaveAddress = () => {
//     // Validate address form
//     if (!addressForm.fullName || !addressForm.phoneNumber || !addressForm.addressLine1 ||
//         !addressForm.city || !addressForm.state || !addressForm.pinCode) {
//       showToast('Please fill all required fields', 'warning');
//       return;
//     }

//     // Save address (in real app, make API call)
//     const newAddress = {
//       ...addressForm,
//       id: `addr_${Date.now()}`
//     };
//     setAddresses([...addresses, newAddress]);
//     setSelectedAddressId(newAddress.id);
//     setShowNewAddressForm(false);
//     showToast('Address saved successfully', 'success');
//   };

//   const handlePlaceOrder = async () => {
//     setProcessing(true);
    
//     // Simulate order processing
//     setTimeout(() => {
//       showToast('Order placed successfully!', 'success');
//       // In real app, navigate to order confirmation page
//       navigate('/order-confirmation');
//     }, 2000);
//   };

//   const handleApplyCoupon = () => {
//     if (couponCode.trim()) {
//       // Simulate coupon validation
//       setCouponApplied(true);
//       showToast('Coupon applied successfully!', 'success');
//     }
//   };

//   const calculateTotal = () => {
//     if (!cartData) return { subtotal: 0, tax: 0, shipping: 0, discount: 0, total: 0 };
    
//     const subtotal = cartData.total || 0;
//     const tax = subtotal * 0.18; // 18% GST
//     const shipping = subtotal > 500 ? 0 : 40; // Free shipping above ₹500
//     const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount
//     const total = subtotal + tax + shipping - discount;
    
//     return { subtotal, tax, shipping, discount, total };
//   };

//   const { subtotal, tax, shipping, discount, total } = calculateTotal();

//   if (loading) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
//         <Header />
//         <LoadingSpinner message="Loading checkout..." />
//       </Box>
//     );
//   }

//   if (!cartData || cartData.items?.length === 0) {
//     navigate('/cart');
//     return null;
//   }

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
//       <Header />
      
//       <Container maxWidth="lg" sx={{ py: 3 }}>
//         {/* Breadcrumbs */}
//         <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 3 }}>
//           <Link
//             component="button"
//             variant="body2"
//             onClick={() => navigate('/dashboard')}
//             sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0.5 }}
//           >
//             <Home sx={{ fontSize: 16 }} />
//             Home
//           </Link>
//           <Link
//             component="button"
//             variant="body2"
//             onClick={() => navigate('/cart')}
//             sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0.5 }}
//           >
//             <ShoppingCart sx={{ fontSize: 16 }} />
//             Cart
//           </Link>
//           <Typography color="text.primary" variant="body2">
//             Checkout
//           </Typography>
//         </Breadcrumbs>

//         {/* Stepper */}
//         <Paper sx={{ p: 3, mb: 3 }}>
//           <Stepper activeStep={activeStep}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//         </Paper>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8}>
//             {/* Step 1: Shipping Address */}
//             {activeStep === 0 && (
//               <Paper sx={{ p: 3 }}>
//                 <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <LocalShipping />
//                   Shipping Address
//                 </Typography>

//                 {/* Saved Addresses */}
//                 {addresses.map((address) => (
//                   <Card
//                     key={address.id}
//                     sx={{
//                       mb: 2,
//                       border: selectedAddressId === address.id ? '2px solid' : '1px solid',
//                       borderColor: selectedAddressId === address.id ? 'primary.main' : 'divider',
//                       cursor: 'pointer'
//                     }}
//                     onClick={() => setSelectedAddressId(address.id)}
//                   >
//                     <CardContent>
//                       <Stack direction="row" justifyContent="space-between" alignItems="start">
//                         <Stack direction="row" spacing={2}>
//                           <Radio
//                             checked={selectedAddressId === address.id}
//                             onChange={() => setSelectedAddressId(address.id)}
//                           />
//                           <Box>
//                             <Typography variant="subtitle1" fontWeight="bold">
//                               {address.fullName}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               {address.addressLine1}, {address.addressLine2}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               {address.city}, {address.state} - {address.pinCode}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               Phone: {address.phoneNumber}
//                             </Typography>
//                             {address.isDefault && (
//                               <Chip label="Default" size="small" color="primary" sx={{ mt: 1 }} />
//                             )}
//                           </Box>
//                         </Stack>
//                         <IconButton size="small">
//                           <Edit fontSize="small" />
//                         </IconButton>
//                       </Stack>
//                     </CardContent>
//                   </Card>
//                 ))}

//                 {/* Add New Address Button */}
//                 {!showNewAddressForm && (
//                   <Button
//                     variant="outlined"
//                     startIcon={<Add />}
//                     onClick={() => setShowNewAddressForm(true)}
//                     sx={{ mb: 2 }}
//                   >
//                     Add New Address
//                   </Button>
//                 )}

//                 {/* New Address Form */}
//                 <Collapse in={showNewAddressForm}>
//                   <Box sx={{ mt: 3, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
//                     <Typography variant="h6" sx={{ mb: 2 }}>
//                       Add New Address
//                     </Typography>
//                     <Grid container spacing={2}>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Full Name"
//                           name="fullName"
//                           value={addressForm.fullName}
//                           onChange={handleAddressChange}
//                           required
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Phone Number"
//                           name="phoneNumber"
//                           value={addressForm.phoneNumber}
//                           onChange={handleAddressChange}
//                           required
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="Address Line 1"
//                           name="addressLine1"
//                           value={addressForm.addressLine1}
//                           onChange={handleAddressChange}
//                           required
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="Address Line 2"
//                           name="addressLine2"
//                           value={addressForm.addressLine2}
//                           onChange={handleAddressChange}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="City"
//                           name="city"
//                           value={addressForm.city}
//                           onChange={handleAddressChange}
//                           required
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="State"
//                           name="state"
//                           value={addressForm.state}
//                           onChange={handleAddressChange}
//                           required
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="PIN Code"
//                           name="pinCode"
//                           value={addressForm.pinCode}
//                           onChange={handleAddressChange}
//                           required
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <FormControl fullWidth>
//                           <InputLabel>Country</InputLabel>
//                           <Select
//                             name="country"
//                             value={addressForm.country}
//                             onChange={handleAddressChange}
//                             label="Country"
//                           >
//                             <MenuItem value="India">India</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <FormControlLabel
//                           control={
//                             <Checkbox
//                               name="isDefault"
//                               checked={addressForm.isDefault}
//                               onChange={handleAddressChange}
//                             />
//                           }
//                           label="Set as default address"
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <Stack direction="row" spacing={2}>
//                           <Button
//                             variant="contained"
//                             onClick={handleSaveAddress}
//                           >
//                             Save Address
//                           </Button>
//                           <Button
//                             variant="outlined"
//                             onClick={() => setShowNewAddressForm(false)}
//                           >
//                             Cancel
//                           </Button>
//                         </Stack>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </Collapse>
//               </Paper>
//             )}

//             {/* Step 2: Payment Method */}
//             {activeStep === 1 && (
//               <Paper sx={{ p: 3 }}>
//                 <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Payment />
//                   Payment Method
//                 </Typography>

//                 <RadioGroup
//                   value={paymentMethod}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                 >
//                   {/* Credit/Debit Card */}
//                   <Accordion expanded={paymentMethod === 'card'}>
//                     <AccordionSummary
//                       expandIcon={<ExpandMore />}
//                       onClick={() => setPaymentMethod('card')}
//                     >
//                       <FormControlLabel
//                         value="card"
//                         control={<Radio />}
//                         label={
//                           <Stack direction="row" alignItems="center" spacing={1}>
//                             <CreditCard />
//                             <Typography>Credit/Debit Card</Typography>
//                           </Stack>
//                         }
//                       />
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                           <TextField
//                             fullWidth
//                             label="Card Number"
//                             placeholder="1234 5678 9012 3456"
//                             value={cardDetails.cardNumber}
//                             onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
//                           />
//                         </Grid>
//                         <Grid item xs={12}>
//                           <TextField
//                             fullWidth
//                             label="Name on Card"
//                             value={cardDetails.cardName}
//                             onChange={(e) => setCardDetails({ ...cardDetails, cardName: e.target.value })}
//                           />
//                         </Grid>
//                         <Grid item xs={6}>
//                           <Stack direction="row" spacing={2}>
//                             <FormControl size="small" sx={{ minWidth: 100 }}>
//                               <InputLabel>Month</InputLabel>
//                               <Select
//                                 value={cardDetails.expiryMonth}
//                                 onChange={(e) => setCardDetails({ ...cardDetails, expiryMonth: e.target.value })}
//                                 label="Month"
//                               >
//                                 {[...Array(12)].map((_, i) => (
//                                   <MenuItem key={i + 1} value={i + 1}>
//                                     {String(i + 1).padStart(2, '0')}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             </FormControl>
//                             <FormControl size="small" sx={{ minWidth: 100 }}>
//                               <InputLabel>Year</InputLabel>
//                               <Select
//                                 value={cardDetails.expiryYear}
//                                 onChange={(e) => setCardDetails({ ...cardDetails, expiryYear: e.target.value })}
//                                 label="Year"
//                               >
//                                 {[...Array(10)].map((_, i) => (
//                                   <MenuItem key={i} value={2024 + i}>
//                                     {2024 + i}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             </FormControl>
//                           </Stack>
//                         </Grid>
//                         <Grid item xs={6}>
//                           <TextField
//                             fullWidth
//                             label="CVV"
//                             placeholder="123"
//                             value={cardDetails.cvv}
//                             onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
//                           />
//                         </Grid>
//                       </Grid>
//                     </AccordionDetails>
//                   </Accordion>

//                   {/* UPI */}
//                   <Accordion expanded={paymentMethod === 'upi'}>
//                     <AccordionSummary
//                       expandIcon={<ExpandMore />}
//                       onClick={() => setPaymentMethod('upi')}
//                     >
//                       <FormControlLabel
//                         value="upi"
//                         control={<Radio />}
//                         label={
//                           <Stack direction="row" alignItems="center" spacing={1}>
//                             <PhoneAndroid />
//                             <Typography>UPI</Typography>
//                           </Stack>
//                         }
//                       />
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <TextField
//                         fullWidth
//                         label="UPI ID"
//                         placeholder="yourname@upi"
//                         value={upiId}
//                         onChange={(e) => setUpiId(e.target.value)}
//                         helperText="Enter your UPI ID to proceed with payment"
//                       />
//                     </AccordionDetails>
//                   </Accordion>

//                   {/* Net Banking */}
//                   <Accordion expanded={paymentMethod === 'netbanking'}>
//                     <AccordionSummary
//                       expandIcon={<ExpandMore />}
//                       onClick={() => setPaymentMethod('netbanking')}
//                     >
//                       <FormControlLabel
//                         value="netbanking"
//                         control={<Radio />}
//                         label={
//                           <Stack direction="row" alignItems="center" spacing={1}>
//                             <AccountBalance />
//                             <Typography>Net Banking</Typography>
//                           </Stack>
//                         }
//                       />
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <FormControl fullWidth>
//                         <InputLabel>Select Bank</InputLabel>
//                         <Select label="Select Bank">
//                           <MenuItem value="sbi">State Bank of India</MenuItem>
//                           <MenuItem value="hdfc">HDFC Bank</MenuItem>
//                           <MenuItem value="icici">ICICI Bank</MenuItem>
//                           <MenuItem value="axis">Axis Bank</MenuItem>
//                           <MenuItem value="kotak">Kotak Bank</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </AccordionDetails>
//                   </Accordion>

//                   {/* Cash on Delivery */}
//                   <Accordion expanded={paymentMethod === 'cod'}>
//                     <AccordionSummary
//                       onClick={() => setPaymentMethod('cod')}
//                     >
//                       <FormControlLabel
//                         value="cod"
//                         control={<Radio />}
//                         label="Cash on Delivery"
//                       />
//                     </AccordionSummary>
//                   </Accordion>
//                 </RadioGroup>

//                 <Alert severity="info" sx={{ mt: 3 }}>
//                   <Stack direction="row" alignItems="center" spacing={1}>
//                     <Security />
//                     <Typography variant="body2">
//                       Your payment information is encrypted and secure
//                     </Typography>
//                   </Stack>
//                 </Alert>
//               </Paper>
//             )}

//             {/* Step 3: Review Order */}
//             {activeStep === 2 && (
//               <Paper sx={{ p: 3 }}>
//                 <Typography variant="h6" sx={{ mb: 3 }}>
//                   Review Your Order
//                 </Typography>

//                 {/* Delivery Address */}
//                 <Box sx={{ mb: 3 }}>
//                   <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
//                     Delivery Address
//                   </Typography>
//                   {addresses.find(addr => addr.id === selectedAddressId) && (
//                     <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
//                       <Typography variant="body2">
//                         {addresses.find(addr => addr.id === selectedAddressId).fullName}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {addresses.find(addr => addr.id === selectedAddressId).addressLine1}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {addresses.find(addr => addr.id === selectedAddressId).city}, 
//                         {addresses.find(addr => addr.id === selectedAddressId).state} - 
//                         {addresses.find(addr => addr.id === selectedAddressId).pinCode}
//                       </Typography>
//                     </Box>
//                   )}
//                 </Box>

//                 {/* Payment Method */}
//                 <Box sx={{ mb: 3 }}>
//                   <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
//                     Payment Method
//                   </Typography>
//                   <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
//                     <Typography variant="body2">
//                       {paymentMethod === 'card' && 'Credit/Debit Card'}
//                       {paymentMethod === 'upi' && `UPI - ${upiId}`}
//                       {paymentMethod === 'netbanking' && 'Net Banking'}
//                       {paymentMethod === 'cod' && 'Cash on Delivery'}
//                     </Typography>
//                   </Box>
//                 </Box>

//                 {/* Order Items */}
//                 <Box>
//                   <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
//                     Order Items
//                   </Typography>
//                   {cartData.items.map((item) => (
//                     <Box key={item.product.product_id} sx={{ mb: 2 }}>
//                       <Stack direction="row" justifyContent="space-between">
//                         <Stack direction="row" spacing={2}>
//                           <Box
//                             component="img"
//                             src={item.product.image_url || '/placeholder.jpg'}
//                             alt={item.product.product_name}
//                             sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1 }}
//                           />
//                           <Box>
//                             <Typography variant="body2">{item.product.product_name}</Typography>
//                             <Typography variant="caption" color="text.secondary">
//                               Qty: {item.quantity}
//                             </Typography>
//                           </Box>
//                         </Stack>
//                         <Typography variant="body2">
//                           ₹{(item.product.price * item.quantity).toFixed(2)}
//                         </Typography>
//                       </Stack>
//                     </Box>
//                   ))}
//                 </Box>
//               </Paper>
//             )}
//           </Grid>

//           {/* Order Summary Sidebar */}
//           <Grid item xs={12} md={4}>
//             <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 Order Summary
//               </Typography>

//               <Stack spacing={2}>
//                 <Stack direction="row" justifyContent="space-between">
//                   <Typography variant="body2">Subtotal</Typography>
//                   <Typography variant="body2">₹{subtotal.toFixed(2)}</Typography>
//                 </Stack>

//                 <Stack direction="row" justifyContent="space-between">
//                   <Typography variant="body2">Tax (GST 18%)</Typography>
//                   <Typography variant="body2">₹{tax.toFixed(2)}</Typography>
//                 </Stack>

//                 <Stack direction="row" justifyContent="space-between">
//                   <Typography variant="body2">Shipping</Typography>
//                   <Typography variant="body2">
//                     {shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}
//                   </Typography>
//                 </Stack>

//                 {discount > 0 && (
//                   <Stack direction="row" justifyContent="space-between">
//                     <Typography variant="body2" color="success.main">Discount</Typography>
//                     <Typography variant="body2" color="success.main">
//                       -₹{discount.toFixed(2)}
//                     </Typography>
//                   </Stack>
//                 )}

//                 <Divider />

//                 <Stack direction="row" justifyContent="space-between">
//                   <Typography variant="h6">Total</Typography>
//                   <Typography variant="h6">₹{total.toFixed(2)}</Typography>
//                 </Stack>

//                 {/* Coupon Code */}
//                 {activeStep < 2 && (
//                   <>
//                     <Divider />
//                     <Stack spacing={1}>
//                       <Stack direction="row" spacing={1}>
//                         <TextField
//                           size="small"
//                           placeholder="Enter coupon code"
//                           value={couponCode}
//                           onChange={(e) => setCouponCode(e.target.value)}
//                           disabled={couponApplied}
//                           fullWidth
//                         />
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           onClick={handleApplyCoupon}
//                           disabled={couponApplied}
//                           startIcon={<LocalOffer />}
//                         >
//                           Apply
//                         </Button>
//                       </Stack>
//                       {couponApplied && (
//                         <Alert severity="success" sx={{ py: 0.5 }}>
//                           Coupon applied!
//                         </Alert>
//                       )}
//                     </Stack>
//                   </>
//                 )}

//                 <Divider />

//                 {/* Action Buttons */}
//                 <Stack spacing={2}>
//                   {activeStep === 2 ? (
//                     <Button
//                       variant="contained"
//                       fullWidth
//                       size="large"
//                       onClick={handlePlaceOrder}
//                       disabled={processing}
//                       startIcon={processing ? null : <CheckCircle />}
//                     >
//                       {processing ? 'Processing...' : 'Place Order'}
//                     </Button>
//                   ) : (
//                     <Button
//                       variant="contained"
//                       fullWidth
//                       size="large"
//                       onClick={handleNext}
//                     >
//                       Continue
//                     </Button>
//                   )}
                  
//                   {activeStep > 0 && (
//                     <Button
//                       variant="outlined"
//                       fullWidth
//                       onClick={handleBack}
//                     >
//                       Back
//                     </Button>
//                   )}
//                 </Stack>

//                 {/* Secure Payment */}
//                 <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
//                   <Security fontSize="small" color="action" />
//                   <Typography variant="caption" color="text.secondary">
//                     100% Secure Payment
//                   </Typography>
//                 </Stack>
//               </Stack>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CheckoutPage;
















// // src/pages/CheckoutPage.jsx - Updated Main Checkout Page
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Alert,
//   Breadcrumbs,
//   Link,
//   Fade,
//   CircularProgress
// } from '@mui/material';
// import {
//   Home,
//   NavigateNext,
//   ShoppingCart,
//   LocationOn,
//   Payment,
//   CheckCircle
// } from '@mui/icons-material';

// import Header from '../components/homepagecomponent/AppHeaders';
// import ShippingAddressForm from '../components/checkout/ShippingAddressForm';
// import PaymentForm from '../components/checkout/PaymentForm';
// import OrderSummary from '../components/checkout/OrderSummary';
// import LoadingSpinner from '../components/ui/LoadingSpinner';
// import ErrorMessage from '../components/ui/ErrorMessage';
// import { useCheckout } from '../hooks/useCheckout';
// import { showToast } from '../components/ui/Toast';

// const steps = [
//   { label: 'Delivery Address', icon: <LocationOn /> },
//   { label: 'Payment Method', icon: <Payment /> },
//   { label: 'Place Order', icon: <CheckCircle /> }
// ];

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const { cartData, addresses, loading, error, submitting, refetch, addAddress, submitOrder } = useCheckout();
  
//   const [activeStep, setActiveStep] = useState(0);
//   const [selectedAddressId, setSelectedAddressId] = useState('');
//   const [selectedPayment, setSelectedPayment] = useState('');
//   const [paymentData, setPaymentData] = useState({});

//   // Set first address as selected when addresses load
//   React.useEffect(() => {
//     if (addresses.length > 0 && !selectedAddressId) {
//       const defaultAddress = addresses.find(addr => addr.is_default) || addresses[0];
//       setSelectedAddressId(defaultAddress.address_id.toString());
//     }
//   }, [addresses, selectedAddressId]);

//   const handleNext = () => {
//     if (activeStep === 0) {
//       if (!selectedAddressId) {
//         showToast('Please select a delivery address', 'warning');
//         return;
//       }
//     }
    
//     if (activeStep === 1) {
//       if (!selectedPayment) {
//         showToast('Please select a payment method', 'warning');
//         return;
//       }
      
//       if (selectedPayment === 'card') {
//         const { card_number, expiry_date, cvv, card_holder_name } = paymentData;
//         if (!card_number || !expiry_date || !cvv || !card_holder_name) {
//           showToast('Please fill in all card details', 'warning');
//           return;
//         }
//       }
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleAddressAdd = async (newAddress) => {
//     try {
//       const savedAddress = await addAddress(newAddress);
//       setSelectedAddressId(savedAddress.address_id.toString());
//       showToast('Address added successfully', 'success');
//     } catch (error) {
//       showToast('Failed to add address', 'error');
//       throw error;
//     }
//   };

//   const handlePlaceOrder = async () => {
//     try {
//       const orderData = {
//         delivery_address_id: parseInt(selectedAddressId),
//         payment_method: selectedPayment,
//         payment_details: selectedPayment === 'card' ? {
//           card_number: paymentData.card_number,
//           card_holder_name: paymentData.card_holder_name,
//           expiry_date: paymentData.expiry_date,
//           cvv: paymentData.cvv
//         } : null,
//         special_instructions: null
//       };

//       const result = await submitOrder(orderData);
      
//       showToast(result.message || 'Order placed successfully!', 'success');
//       navigate(`/order-confirmation/${result.order_id}`, { 
//         state: { 
//           orderDetails: result,
//           orderNumber: result.order_number 
//         } 
//       });
      
//     } catch (error) {
//       showToast(error.message || 'Failed to place order. Please try again.', 'error');
//     }
//   };

//   const isStepComplete = (step) => {
//     switch (step) {
//       case 0:
//         return selectedAddressId !== '';
//       case 1:
//         if (selectedPayment === 'card') {
//           const { card_number, expiry_date, cvv, card_holder_name } = paymentData;
//           return card_number && expiry_date && cvv && card_holder_name;
//         }
//         return selectedPayment !== '';
//       default:
//         return false;
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
//         <Header />
//         <LoadingSpinner message="Loading checkout..." />
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
//           title="Failed to load checkout"
//           onRetry={refetch}
//           onGoHome={() => navigate('/dashboard')}
//         />
//       </Box>
//     );
//   }

//   // Empty cart check
//   if (!cartData?.items || cartData.items.length === 0) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
//         <Header />
//         <Container maxWidth="md" sx={{ py: 8 }}>
//           <Box sx={{ textAlign: 'center' }}>
//             <Typography variant="h4" gutterBottom>
//               Your cart is empty
//             </Typography>
//             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//               Add some items to your cart before proceeding to checkout.
//             </Typography>
//             <Button
//               variant="contained"
//               onClick={() => navigate('/dashboard')}
//               sx={{ borderRadius: 2, textTransform: 'none' }}
//             >
//               Continue Shopping
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
//       <Header />
      
//       <Container maxWidth="sx" sx={{ py: 2 }}>
//         {/* Breadcrumb */}
//         <Breadcrumbs 
//           separator={<NavigateNext fontSize="small" />} 
//           sx={{ mb: 4 }}
//         >
//           <Link
//             component="button"
//             variant="body2"
//             onClick={() => navigate('/dashboard')}
//             sx={{ 
//               textDecoration: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5,
//               color: 'primary.main',
//               fontWeight: 500,
//               fontSize: 14
//             }}
//           >
//             <Home sx={{ fontSize: 18 }} />
//             Home
//           </Link>
//           <Link
//             component="button"
//             variant="body2"
//             onClick={() => navigate('/cart')}
//             sx={{ 
//               textDecoration: 'none',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 0.5,
//               color: 'primary.main',
//               fontWeight: 500
//             }}
//           >
//             <ShoppingCart sx={{ fontSize: 18 }} />
//             Cart
//           </Link>
//           <Typography 
//             color="text.primary" 
//             variant="body2"
//             sx={{ fontWeight: 600 }}
//           >
//             Checkout
//           </Typography>
//         </Breadcrumbs>

//         {/* Page Header */}
//         <Box sx={{ mb: 4 }}>
//           {/* <Typography
//             variant="h3"
//             sx={{
//               fontWeight: 800,
//               color: 'text.primary',
//               mb: 1,
//               background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}
//           >
//             Secure Checkout
//           </Typography> */}
//           <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 100 }}>
//             Complete your order in just a few steps
//           </Typography>
//         </Box>

//         {/* Progress Stepper */}
//         <Box sx={{ mb: 2 }}>
//           <Stepper 
//             activeStep={activeStep} 
//             sx={{ 
//               bgcolor: 'white', 
//               p: 3, 
//               borderRadius: 3,
//               boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
//             }}
//           >
//             {steps.map((step, index) => (
//               <Step key={step.label} completed={isStepComplete(index)}>
//                 <StepLabel
//                   StepIconComponent={() => (
//                     <Box
//                       sx={{
//                         width: 40,
//                         height: 40,
//                         borderRadius: '50%',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         bgcolor: index <= activeStep ? 'primary.main' : 'grey.300',
//                         color: 'white',
//                         fontSize: '1.2rem'
//                       }}
//                     >
//                       {isStepComplete(index) ? <CheckCircle /> : step.icon}
//                     </Box>
//                   )}
//                   sx={{
//                     '& .MuiStepLabel-label': {
//                       fontWeight: 600,
//                       fontSize: '1rem',
//                       color: index <= activeStep ? 'primary.main' : 'text.secondary'
//                     }
//                   }}
//                 >
//                   {step.label}
//                 </StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//         </Box>

//         {/* Main Content */}
//         <Grid container spacing={4} backgroundColor="yellow" >
//           {/* Forms Section */}
//           <Grid item xs={12} lg={7} xl={8}>
//             <Fade in timeout={600}>
//               <Box>
//                 {activeStep === 0 && (
//                   <ShippingAddressForm
//                     addresses={addresses}
//                     selectedAddressId={selectedAddressId}
//                     onAddressSelect={setSelectedAddressId}
//                     onAddressAdd={handleAddressAdd}
//                   />
//                 )}

//                 {activeStep === 1 && (
//                   <PaymentForm
//                     selectedPayment={selectedPayment}
//                     onPaymentSelect={setSelectedPayment}
//                     paymentData={paymentData}
//                     onPaymentDataChange={setPaymentData}
//                   />
//                 )}

//                 {activeStep === 2 && (
//                   <Box
//                     sx={{
//                       textAlign: 'center',
//                       py: 6,
//                       bgcolor: 'white',
//                       borderRadius: 3,
//                       boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
//                     }}
//                   >
//                     <CheckCircle sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
//                     <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
//                       Review Your Order
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
//                       Please review your order details before placing the order
//                     </Typography>
                    
//                     <Alert severity="info" sx={{ mb: 3, borderRadius: 2, maxWidth: 500, mx: 'auto' }}>
//                       By placing this order, you agree to our Terms & Conditions and Privacy Policy
//                     </Alert>

//                     <Button
//                       variant="contained"
//                       size="large"
//                       onClick={handlePlaceOrder}
//                       disabled={submitting}
//                       startIcon={submitting ? <CircularProgress size={20} /> : <CheckCircle />}
//                       sx={{
//                         py: 2,
//                         px: 6,
//                         borderRadius: 3,
//                         textTransform: 'none',
//                         fontSize: '1.2rem',
//                         fontWeight: 700,
//                         background: 'linear-gradient(45deg, #4caf50 30%, #66bb6a 90%)',
//                         '&:hover': {
//                           background: 'linear-gradient(45deg, #388e3c 30%, #4caf50 90%)'
//                         }
//                       }}
//                     >
//                       {submitting ? 'Placing Order...' : 'Place Order'}
//                     </Button>
//                   </Box>
//                 )}

//                 {/* Navigation Buttons */}
//                 {activeStep < 2 && (
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
//                     <Button
//                       onClick={handleBack}
//                       disabled={activeStep === 0}
//                       sx={{
//                         borderRadius: 2,
//                         textTransform: 'none',
//                         px: 4,
//                         py: 1.5
//                       }}
//                     >
//                       Back
//                     </Button>
                    
//                     <Button
//                       variant="contained"
//                       onClick={handleNext}
//                       sx={{
//                         borderRadius: 2,
//                         textTransform: 'none',
//                         px: 4,
//                         py: 1.5,
//                         fontSize: '1rem',
//                         fontWeight: 600
//                       }}
//                     >
//                       {activeStep === 1 ? 'Review Order' : 'Continue'}
//                     </Button>
//                   </Box>
//                 )}
//               </Box>
//             </Fade>
//           </Grid>

//           {/* Order Summary Sidebar */}
//           <Grid item xs={12} lg={5} xl={3}>
//             <Fade in timeout={600} style={{ transitionDelay: '200ms' }}>
//               <Box>
//                 <OrderSummary cartData={cartData} />
//               </Box>
//             </Fade>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CheckoutPage;








// src/pages/CheckoutPage.jsx - Updated Main Checkout Page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
  Alert,
  Breadcrumbs,
  Link,
  Fade,
  CircularProgress
} from '@mui/material';
import {
  Home,
  NavigateNext,
  ShoppingCart,
  LocationOn,
  Payment,
  CheckCircle
} from '@mui/icons-material';

import Header from '../components/homepagecomponent/AppHeaders';
import ShippingAddressForm from '../components/checkout/ShippingAddressForm';
import PaymentForm from '../components/checkout/PaymentForm';
import OrderSummary from '../components/checkout/OrderSummary';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useCheckout } from '../hooks/useCheckout';
import { showToast } from '../components/ui/Toast';

const steps = [
  { label: 'Delivery Address', icon: <LocationOn /> },
  { label: 'Payment Method', icon: <Payment /> },
  { label: 'Place Order', icon: <CheckCircle /> }
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartData, addresses, loading, error, submitting, refetch, addAddress, submitOrder } = useCheckout();
  
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddressId, setSelectedAddressId] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [paymentData, setPaymentData] = useState({});

  // Set first address as selected when addresses load
  React.useEffect(() => {
    if (addresses.length > 0 && !selectedAddressId) {
      const defaultAddress = addresses.find(addr => addr.is_default) || addresses[0];
      setSelectedAddressId(defaultAddress.address_id.toString());
    }
  }, [addresses, selectedAddressId]);

  const handleNext = () => {
    if (activeStep === 0) {
      if (!selectedAddressId) {
        showToast('Please select a delivery address', 'warning');
        return;
      }
    }
    
    if (activeStep === 1) {
      if (!selectedPayment) {
        showToast('Please select a payment method', 'warning');
        return;
      }
      
      if (selectedPayment === 'card') {
        const { card_number, expiry_date, cvv, card_holder_name } = paymentData;
        if (!card_number || !expiry_date || !cvv || !card_holder_name) {
          showToast('Please fill in all card details', 'warning');
          return;
        }
      }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAddressAdd = async (newAddress) => {
    try {
      const savedAddress = await addAddress(newAddress);
      setSelectedAddressId(savedAddress.address_id.toString());
      showToast('Address added successfully', 'success');
    } catch (error) {
      showToast('Failed to add address', 'error');
      throw error;
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        delivery_address_id: parseInt(selectedAddressId),
        payment_method: selectedPayment,
        payment_details: selectedPayment === 'card' ? {
          card_number: paymentData.card_number,
          card_holder_name: paymentData.card_holder_name,
          expiry_date: paymentData.expiry_date,
          cvv: paymentData.cvv
        } : null,
        special_instructions: null
      };

      const result = await submitOrder(orderData);
      
      showToast(result.message || 'Order placed successfully!', 'success');
      navigate(`/order-confirmation/${result.order_id}`, { 
        state: { 
          orderDetails: result,
          orderNumber: result.order_number 
        } 
      });
      
    } catch (error) {
      showToast(error.message || 'Failed to place order. Please try again.', 'error');
    }
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 0:
        return selectedAddressId !== '';
      case 1:
        if (selectedPayment === 'card') {
          const { card_number, expiry_date, cvv, card_holder_name } = paymentData;
          return card_number && expiry_date && cvv && card_holder_name;
        }
        return selectedPayment !== '';
      default:
        return false;
    }
  };

  // Loading state
  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
        <Header />
        <LoadingSpinner message="Loading checkout..." />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
        <Header />
        <ErrorMessage
          error={error}
          title="Failed to load checkout"
          onRetry={refetch}
          onGoHome={() => navigate('/dashboard')}
        />
      </Box>
    );
  }

  // Empty cart check
  if (!cartData?.items || cartData.items.length === 0) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Add some items to your cart before proceeding to checkout.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/dashboard')}
              sx={{ borderRadius: 2, textTransform: 'none' }}
            >
              Continue Shopping
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>
      <Header />
      
      <Container maxWidth="sx" sx={{ py: 2 }}>
        {/* Breadcrumb */}
        <Breadcrumbs 
          separator={<NavigateNext fontSize="small" />} 
          sx={{ mb: 4 }}
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
              color: 'primary.main',
              fontWeight: 500,
              fontSize: 14
            }}
          >
            <Home sx={{ fontSize: 18 }} />
            Home
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate('/cart')}
            sx={{ 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: 'primary.main',
              fontWeight: 500
            }}
          >
            <ShoppingCart sx={{ fontSize: 18 }} />
            Cart
          </Link>
          <Typography 
            color="text.primary" 
            variant="body2"
            sx={{ fontWeight: 600 }}
          >
            Checkout
          </Typography>
        </Breadcrumbs>

        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 100 }}>
            Complete your order in just a few steps
          </Typography>
        </Box>

        {/* Progress Stepper */}
        <Box sx={{ mb: 2 }}>
          <Stepper 
            activeStep={activeStep} 
            sx={{ 
              bgcolor: 'white', 
              p: 3, 
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}
          >
            {steps.map((step, index) => (
              <Step key={step.label} completed={isStepComplete(index)}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: index <= activeStep ? 'primary.main' : 'grey.300',
                        color: 'white',
                        fontSize: '1.2rem'
                      }}
                    >
                      {isStepComplete(index) ? <CheckCircle /> : step.icon}
                    </Box>
                  )}
                  sx={{
                    '& .MuiStepLabel-label': {
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: index <= activeStep ? 'primary.main' : 'text.secondary'
                    }
                  }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Forms Section */}
          <Grid item xs={12} lg={7} xl={8}>
            <Fade in timeout={600}>
              <Box>
                {activeStep === 0 && (
                  <ShippingAddressForm
                    addresses={addresses}
                    selectedAddressId={selectedAddressId}
                    onAddressSelect={setSelectedAddressId}
                    onAddressAdd={handleAddressAdd}
                  />
                )}

                {activeStep === 1 && (
                  <PaymentForm
                    selectedPayment={selectedPayment}
                    onPaymentSelect={setSelectedPayment}
                    paymentData={paymentData}
                    onPaymentDataChange={setPaymentData}
                  />
                )}

                {activeStep === 2 && (
                  <Box
                    sx={{
                      textAlign: 'center',
                      py: 6,
                      bgcolor: 'white',
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                      Review Your Order
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                      Please review your order details before placing the order
                    </Typography>
                    
                    <Alert severity="info" sx={{ mb: 3, borderRadius: 2, maxWidth: 500, mx: 'auto' }}>
                      By placing this order, you agree to our Terms & Conditions and Privacy Policy
                    </Alert>

                    <Button
                      variant="contained"
                      size="large"
                      onClick={handlePlaceOrder}
                      disabled={submitting}
                      startIcon={submitting ? <CircularProgress size={20} /> : <CheckCircle />}
                      sx={{
                        py: 2,
                        px: 6,
                        borderRadius: 3,
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #4caf50 30%, #66bb6a 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #388e3c 30%, #4caf50 90%)'
                        }
                      }}
                    >
                      {submitting ? 'Placing Order...' : 'Place Order'}
                    </Button>
                  </Box>
                )}

                {/* Navigation Buttons */}
                {activeStep < 2 && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                    <Button
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        px: 4,
                        py: 1.5
                      }}
                    >
                      Back
                    </Button>
                    
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600
                      }}
                    >
                      {activeStep === 1 ? 'Review Order' : 'Continue'}
                    </Button>
                  </Box>
                )}
              </Box>
            </Fade>
          </Grid>

          {/* Order Summary Sidebar */}
          <Grid item xs={12} lg={12} xl={12}>
            <Fade in timeout={600} style={{ transitionDelay: '200ms' }}>
              <Box>
                <OrderSummary cartData={cartData} />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CheckoutPage;