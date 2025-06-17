// // // src/components/cart/CartItem.jsx
// // import React from 'react';
// // import {
// //   Card,
// //   CardContent,
// //   Box,
// //   Typography,
// //   Chip,
// //   Stack,
// //   Divider,
// //   useTheme,
// //   useMediaQuery
// // } from '@mui/material';
// // import { CheckCircle, Error } from '@mui/icons-material';
// // import CartItemImage from './CartItemImage';

// // const CartItem = ({ item }) => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
// //   const { product, quantity } = item;
// //   const unitPrice = parseFloat(product.price);
// //   const subtotal = unitPrice * quantity;

// //   const formatPrice = (price) => {
// //     return `₹${price.toLocaleString('en-IN', {
// //       minimumFractionDigits: 2,
// //       maximumFractionDigits: 2
// //     })}`;
// //   };

// //   return (
// //     <Card
// //       sx={{
// //         mb: 2,
// //         borderRadius: 3,
// //         boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
// //         border: '1px solid',
// //         borderColor: 'grey.200',
// //         transition: 'all 0.2s ease',
// //         '&:hover': {
// //           boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
// //           transform: 'translateY(-2px)'
// //         }
// //       }}
// //     >
// //       <CardContent sx={{ p: 3 }}>
// //         <Box
// //           sx={{
// //             display: 'flex',
// //             flexDirection: isMobile ? 'column' : 'row',
// //             gap: 3
// //           }}
// //         >
// //           {/* Product Image */}
// //           <Box sx={{ alignSelf: isMobile ? 'center' : 'flex-start' }}>
// //             <CartItemImage
// //               src={product.primary_image_url}
// //               alt={product.name}
// //               size={isMobile ? 100 : 120}
// //             />
// //           </Box>

// //           {/* Product Details */}
// //           <Box sx={{ flex: 1, minWidth: 0 }}>
// //             <Stack spacing={2}>
// //               {/* Product Name & Category */}
// //               <Box>
// //                 <Typography
// //                   variant="h6"
// //                   sx={{
// //                     fontWeight: 600,
// //                     fontSize: isMobile ? '1.1rem' : '1.25rem',
// //                     lineHeight: 1.3,
// //                     mb: 1,
// //                     color: 'text.primary'
// //                   }}
// //                 >
// //                   {product.name}
// //                 </Typography>
                
// //                 {product.category && (
// //                   <Chip
// //                     label={product.category.name}
// //                     size="small"
// //                     variant="outlined"
// //                     sx={{ 
// //                       fontSize: '0.75rem',
// //                       fontWeight: 500,
// //                       borderColor: 'primary.main',
// //                       color: 'primary.main'
// //                     }}
// //                   />
// //                 )}
// //               </Box>

// //               {/* Description */}
// //               {product.description && (
// //                 <Typography
// //                   variant="body2"
// //                   color="text.secondary"
// //                   sx={{
// //                     display: '-webkit-box',
// //                     WebkitLineClamp: 2,
// //                     WebkitBoxOrient: 'vertical',
// //                     overflow: 'hidden',
// //                     lineHeight: 1.5
// //                   }}
// //                 >
// //                   {product.description}
// //                 </Typography>
// //               )}

// //               {/* Stock Status */}
// //               <Box>
// //                 {product.stock_quantity > 0 ? (
// //                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                     <CheckCircle sx={{ fontSize: 16, color: 'success.main' }} />
// //                     <Typography variant="body2" color="success.main" fontWeight={500}>
// //                       In Stock ({product.stock_quantity} available)
// //                     </Typography>
// //                   </Box>
// //                 ) : (
// //                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                     <Error sx={{ fontSize: 16, color: 'error.main' }} />
// //                     <Typography variant="body2" color="error.main" fontWeight={500}>
// //                       Out of Stock
// //                     </Typography>
// //                   </Box>
// //                 )}
// //               </Box>

// //               <Divider />

// //               {/* Pricing Section */}
// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   flexDirection: isMobile ? 'column' : 'row',
// //                   justifyContent: 'space-between',
// //                   alignItems: isMobile ? 'flex-start' : 'center',
// //                   gap: 2
// //                 }}
// //               >
// //                 {/* Quantity & Unit Price */}
// //                 <Box>
// //                   <Typography variant="body2" color="text.secondary" gutterBottom>
// //                     Quantity: <strong>{quantity}</strong>
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Unit Price: {formatPrice(unitPrice)}
// //                   </Typography>
// //                 </Box>

// //                 {/* Subtotal */}
// //                 <Box sx={{ textAlign: isMobile ? 'left' : 'right' }}>
// //                   <Typography variant="body2" color="text.secondary" gutterBottom>
// //                     Subtotal
// //                   </Typography>
// //                   <Typography
// //                     variant="h6"
// //                     sx={{
// //                       fontWeight: 700,
// //                       color: 'error.main',
// //                       fontSize: isMobile ? '1.1rem' : '1.25rem'
// //                     }}
// //                   >
// //                     {formatPrice(subtotal)}
// //                   </Typography>
// //                 </Box>
// //               </Box>
// //             </Stack>
// //           </Box>
// //         </Box>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default CartItem;






// // src/components/cart/CartItem.jsx
// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Box,
//   Typography,
//   Chip,
//   Stack,
//   Divider,
//   IconButton,
//   Button,
//   useTheme,
//   useMediaQuery,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   CircularProgress
// } from '@mui/material';
// import { 
//   CheckCircle, 
//   Error, 
//   Delete, 
//   ExpandMore, 
//   ExpandLess 
// } from '@mui/icons-material';
// import CartItemImage from './CartItemImage';

// const CartItem = ({ item, onRemove, isRemoving }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
//   const { product, quantity } = item;
//   const unitPrice = parseFloat(product.price);
//   const subtotal = unitPrice * quantity;

//   const formatPrice = (price) => {
//     return `₹${price.toLocaleString('en-IN', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     })}`;
//   };

//   const handleDeleteClick = () => {
//     setShowDeleteDialog(true);
//   };

//   const handleDeleteConfirm = async () => {
//     setShowDeleteDialog(false);
//     if (onRemove) {
//       await onRemove(product.product_id);
//     }
//   };

//   const shouldTruncateDescription = product.description && product.description.length > 120;

//   return (
//     <>
//       <Card
//         sx={{
//           mb: 3,
//           borderRadius: 4,
//           boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//           border: '1px solid',
//           borderColor: 'grey.200',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           position: 'relative',
//           overflow: 'visible',
//           '&:hover': {
//             boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
//             transform: 'translateY(-4px)'
//           }
//         }}
//       >
//         {/* Delete Button */}
//         <IconButton
//           onClick={handleDeleteClick}
//           disabled={isRemoving}
//           sx={{
//             position: 'absolute',
//             top: 16,
//             right: 16,
//             zIndex: 1,
//             bgcolor: 'white',
//             border: '1px solid',
//             borderColor: 'grey.300',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             '&:hover': {
//               bgcolor: 'error.50',
//               borderColor: 'error.main',
//               color: 'error.main'
//             }
//           }}
//         >
//           {isRemoving ? (
//             <CircularProgress size={20} />
//           ) : (
//             <Delete fontSize="small" />
//           )}
//         </IconButton>

//         <CardContent sx={{ p: 4 }}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: isMobile ? 'column' : 'row',
//               gap: 3
//             }}
//           >
//             {/* Product Image */}
//             <Box sx={{ alignSelf: isMobile ? 'center' : 'flex-start' }}>
//               <CartItemImage
//                 src={product.primary_image_url}
//                 alt={product.name}
//                 size={isMobile ? 120 : 140}
//               />
//             </Box>

//             {/* Product Details */}
//             <Box sx={{ flex: 1, minWidth: 0 }}>
//               <Stack spacing={2.5}>
//                 {/* Product Name & Category */}
//                 <Box>
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       fontWeight: 700,
//                       fontSize: isMobile ? '1.25rem' : '1.5rem',
//                       lineHeight: 1.3,
//                       mb: 1.5,
//                       color: 'text.primary',
//                       background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                       backgroundClip: 'text'
//                     }}
//                   >
//                     {product.name}
//                   </Typography>
                  
//                   {product.category && (
//                     <Chip
//                       label={product.category.name}
//                       size="medium"
//                       variant="filled"
//                       sx={{ 
//                         fontSize: '0.875rem',
//                         fontWeight: 600,
//                         bgcolor: 'primary.50',
//                         color: 'primary.main',
//                         borderRadius: 2,
//                         px: 1
//                       }}
//                     />
//                   )}
//                 </Box>

//                 {/* Description */}
//                 {product.description && (
//                   <Box>
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         lineHeight: 1.6,
//                         fontSize: '0.95rem'
//                       }}
//                     >
//                       {shouldTruncateDescription && !showFullDescription
//                         ? `${product.description.substring(0, 120)}...`
//                         : product.description
//                       }
//                     </Typography>
                    
//                     {shouldTruncateDescription && (
//                       <Button
//                         onClick={() => setShowFullDescription(!showFullDescription)}
//                         endIcon={showFullDescription ? <ExpandLess /> : <ExpandMore />}
//                         sx={{ 
//                           mt: 1, 
//                           textTransform: 'none',
//                           fontSize: '0.875rem',
//                           fontWeight: 500
//                         }}
//                       >
//                         {showFullDescription ? 'Read less' : 'Read more'}
//                       </Button>
//                     )}
//                   </Box>
//                 )}

//                 {/* Stock Status */}
//                 <Box>
//                   {product.stock_quantity > 0 ? (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <CheckCircle sx={{ fontSize: 18, color: 'success.main' }} />
//                       <Typography variant="body2" color="success.main" fontWeight={600}>
//                         In Stock ({product.stock_quantity} available)
//                       </Typography>
//                     </Box>
//                   ) : (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <Error sx={{ fontSize: 18, color: 'error.main' }} />
//                       <Typography variant="body2" color="error.main" fontWeight={600}>
//                         Out of Stock
//                       </Typography>
//                     </Box>
//                   )}
//                 </Box>

//                 <Divider sx={{ borderStyle: 'dashed', opacity: 0.7 }} />

//                 {/* Pricing Section */}
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     flexDirection: isMobile ? 'column' : 'row',
//                     justifyContent: 'space-between',
//                     alignItems: isMobile ? 'flex-start' : 'center',
//                     gap: 2,
//                     bgcolor: 'grey.50',
//                     p: 2.5,
//                     borderRadius: 3,
//                     border: '1px solid',
//                     borderColor: 'grey.200'
//                   }}
//                 >
//                   {/* Quantity & Unit Price */}
//                   <Box>
//                     <Typography variant="body1" fontWeight={600} gutterBottom>
//                       Quantity: <span style={{ color: '#1976d2' }}>{quantity}</span>
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Unit Price: {formatPrice(unitPrice)}
//                     </Typography>
//                   </Box>

//                   {/* Subtotal */}
//                   <Box sx={{ textAlign: isMobile ? 'left' : 'right' }}>
//                     <Typography variant="body2" color="text.secondary" gutterBottom>
//                       Item Total
//                     </Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 800,
//                         color: 'error.main',
//                         fontSize: isMobile ? '1.25rem' : '1.5rem'
//                       }}
//                     >
//                       {formatPrice(subtotal)}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Stack>
//             </Box>
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Delete Confirmation Dialog */}
//       <Dialog
//         open={showDeleteDialog}
//         onClose={() => setShowDeleteDialog(false)}
//         PaperProps={{
//           sx: {
//             borderRadius: 3,
//             minWidth: { xs: '90%', sm: 400 }
//           }
//         }}
//       >
//         <DialogTitle sx={{ fontWeight: 600 }}>
//           Remove Item from Cart
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
//             Are you sure you want to remove <strong>{product.name}</strong> from your cart?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ p: 3, pt: 1 }}>
//           <Button 
//             onClick={() => setShowDeleteDialog(false)}
//             sx={{ textTransform: 'none', borderRadius: 2 }}
//           >
//             Cancel
//           </Button>
//           <Button 
//             onClick={handleDeleteConfirm}
//             variant="contained"
//             color="error"
//             sx={{ textTransform: 'none', borderRadius: 2 }}
//           >
//             Remove
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default CartItem;














// // src/components/cart/CartItem.jsx
// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Box,
//   Typography,
//   Chip,
//   Stack,
//   Divider,
//   IconButton,
//   Button,
//   useTheme,
//   useMediaQuery,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   CircularProgress
// } from '@mui/material';
// import { 
//   CheckCircle, 
//   Error, 
//   Delete, 
//   ExpandMore, 
//   ExpandLess 
// } from '@mui/icons-material';
// import CartItemImage from './CartItemImage';

// const CartItem = ({ item, onRemove, isRemoving }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
//   const { product, quantity } = item;
//   const unitPrice = parseFloat(product.price);
//   const subtotal = unitPrice * quantity;

//   const formatPrice = (price) => {
//     return `₹${price.toLocaleString('en-IN', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     })}`;
//   };

//   const handleDeleteClick = () => {
//     setShowDeleteDialog(true);
//   };

//   const handleDeleteConfirm = async () => {
//     setShowDeleteDialog(false);
//     if (onRemove) {
//       await onRemove(product.product_id);
//     }
//   };

//   const shouldTruncateDescription = product.description && product.description.length > 120;

//   return (
//     <>
//       <Card
//         sx={{
//           mb: 3,
//           borderRadius: 4,
//           boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//           border: '1px solid',
//           borderColor: 'grey.200',
//           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           position: 'relative',
//           overflow: 'visible',
//           '&:hover': {
//             boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
//             transform: 'translateY(-4px)'
//           }
//         }}
//       >
//         {/* Delete Button */}
//         <IconButton
//           onClick={handleDeleteClick}
//           disabled={isRemoving}
//           sx={{
//             position: 'absolute',
//             top: 16,
//             right: 16,
//             zIndex: 1,
//             bgcolor: 'white',
//             border: '1px solid',
//             borderColor: 'grey.300',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             '&:hover': {
//               bgcolor: 'error.50',
//               borderColor: 'error.main',
//               color: 'error.main'
//             }
//           }}
//         >
//           {isRemoving ? (
//             <CircularProgress size={20} />
//           ) : (
//             <Delete fontSize="small" />
//           )}
//         </IconButton>

//         <CardContent sx={{ p: 4 }}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: isMobile ? 'column' : 'row',
//               gap: 3
//             }}
//           >
//             {/* Product Image */}
//             <Box sx={{ alignSelf: isMobile ? 'center' : 'flex-start' }}>
//               <CartItemImage
//                 src={product.primary_image_url}
//                 alt={product.name}
//                 size={isMobile ? 120 : 140}
//               />
//             </Box>

//             {/* Product Details */}
//             <Box sx={{ flex: 1, minWidth: 0 }}>
//               <Stack spacing={2.5}>
//                 {/* Product Name & Category */}
//                 <Box>
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       fontWeight: 700,
//                       fontSize: isMobile ? '1.25rem' : '1.5rem',
//                       lineHeight: 1.3,
//                       mb: 1.5,
//                       color: 'text.primary',
//                       background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                       backgroundClip: 'text'
//                     }}
//                   >
//                     {product.name}
//                   </Typography>
                  
//                   {product.category && (
//                     <Chip
//                       label={product.category.name}
//                       size="medium"
//                       variant="filled"
//                       sx={{ 
//                         fontSize: '0.875rem',
//                         fontWeight: 600,
//                         bgcolor: 'primary.50',
//                         color: 'primary.main',
//                         borderRadius: 2,
//                         px: 1
//                       }}
//                     />
//                   )}
//                 </Box>

//                 {/* Description */}
//                 {product.description && (
//                   <Box>
//                     <Typography
//                       variant="body1"
//                       color="text.secondary"
//                       sx={{
//                         lineHeight: 1.6,
//                         fontSize: '0.95rem'
//                       }}
//                     >
//                       {shouldTruncateDescription && !showFullDescription
//                         ? `${product.description.substring(0, 120)}...`
//                         : product.description
//                       }
//                     </Typography>
                    
//                     {shouldTruncateDescription && (
//                       <Button
//                         onClick={() => setShowFullDescription(!showFullDescription)}
//                         endIcon={showFullDescription ? <ExpandLess /> : <ExpandMore />}
//                         sx={{ 
//                           mt: 1, 
//                           textTransform: 'none',
//                           fontSize: '0.875rem',
//                           fontWeight: 500
//                         }}
//                       >
//                         {showFullDescription ? 'Read less' : 'Read more'}
//                       </Button>
//                     )}
//                   </Box>
//                 )}

//                 {/* Stock Status */}
//                 <Box>
//                   {product.stock_quantity > 0 ? (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <CheckCircle sx={{ fontSize: 18, color: 'success.main' }} />
//                       <Typography variant="body2" color="success.main" fontWeight={600}>
//                         In Stock ({product.stock_quantity} available)
//                       </Typography>
//                     </Box>
//                   ) : (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <Error sx={{ fontSize: 18, color: 'error.main' }} />
//                       <Typography variant="body2" color="error.main" fontWeight={600}>
//                         Out of Stock
//                       </Typography>
//                     </Box>
//                   )}
//                 </Box>

//                 <Divider sx={{ borderStyle: 'dashed', opacity: 0.7 }} />

//                 {/* Pricing Section */}
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     flexDirection: isMobile ? 'column' : 'row',
//                     justifyContent: 'space-between',
//                     alignItems: isMobile ? 'flex-start' : 'center',
//                     gap: 2,
//                     bgcolor: 'grey.50',
//                     p: 2.5,
//                     borderRadius: 3,
//                     border: '1px solid',
//                     borderColor: 'grey.200'
//                   }}
//                 >
//                   {/* Quantity & Unit Price */}
//                   <Box>
//                     <Typography variant="body1" fontWeight={600} gutterBottom>
//                       Quantity: <span style={{ color: '#1976d2' }}>{quantity}</span>
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Unit Price: {formatPrice(unitPrice)}
//                     </Typography>
//                   </Box>

//                   {/* Subtotal */}
//                   <Box sx={{ textAlign: isMobile ? 'left' : 'right' }}>
//                     <Typography variant="body2" color="text.secondary" gutterBottom>
//                       Item Total
//                     </Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 800,
//                         color: 'error.main',
//                         fontSize: isMobile ? '1.25rem' : '1.5rem'
//                       }}
//                     >
//                       {formatPrice(subtotal)}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Stack>
//             </Box>
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Delete Confirmation Dialog */}
//       <Dialog
//         open={showDeleteDialog}
//         onClose={() => setShowDeleteDialog(false)}
//         PaperProps={{
//           sx: {
//             borderRadius: 3,
//             minWidth: { xs: '90%', sm: 400 }
//           }
//         }}
//       >
//         <DialogTitle sx={{ fontWeight: 600 }}>
//           Remove Item from Cart
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
//             Are you sure you want to remove <strong>{product.name}</strong> from your cart?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ p: 3, pt: 1 }}>
//           <Button 
//             onClick={() => setShowDeleteDialog(false)}
//             sx={{ textTransform: 'none', borderRadius: 2 }}
//           >
//             Cancel
//           </Button>
//           <Button 
//             onClick={handleDeleteConfirm}
//             variant="contained"
//             color="error"
//             sx={{ textTransform: 'none', borderRadius: 2 }}
//           >
//             Remove
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default CartItem;














// src/components/cart/CartItem.jsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Stack,
  Divider,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  TextField,
} from '@mui/material';
import {
  CheckCircle,
  Error,
  Delete,
  ExpandMore,
  ExpandLess,
  Add,
  Remove
} from '@mui/icons-material';
import CartItemImage from './CartItemImage';

const CartItem = ({ item, onRemove, onUpdateItem, isRemoving }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const { product, quantity } = item;
  const unitPrice = parseFloat(product.price);
  const subtotal = unitPrice * quantity;

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;

  const handleDeleteClick = () => setShowDeleteDialog(true);
  const handleDeleteConfirm = async () => {
    setShowDeleteDialog(false);
    if (onRemove) await onRemove(product.product_id);
  };

  const shouldTruncateDescription = product.description?.length > 120;

  const handleIncrease = () => {
    if (onUpdateItem) onUpdateItem(product.product_id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1 && onUpdateItem) {
      onUpdateItem(product.product_id, quantity - 1);
    }
  };


  

  return (
    <>
      <Card
        sx={{
          mb: 3,
          borderRadius: 4,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid',
          borderColor: 'grey.200',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'visible',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)'
          }
        }}
      >
        {/* Delete Button */}
        <IconButton
          onClick={handleDeleteClick}
          disabled={isRemoving}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
            bgcolor: 'white',
            border: '1px solid',
            borderColor: 'grey.300',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '&:hover': {
              bgcolor: 'error.50',
              borderColor: 'error.main',
              color: 'error.main'
            }
          }}
        >
          {isRemoving ? <CircularProgress size={20} /> : <Delete fontSize="small" />}
        </IconButton>

        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 3 }}>
            <Box sx={{ alignSelf: isMobile ? 'center' : 'flex-start' }}>
              <CartItemImage
                src={product.primary_image_url}
                alt={product.name}
                size={isMobile ? 120 : 140}
              />
            </Box>

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Stack spacing={2.5}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: isMobile ? '1.25rem' : '1.5rem',
                      lineHeight: 1.3,
                      mb: 1.5,
                      color: 'text.primary',
                      background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {product.name}
                  </Typography>

                  {product.category && (
                    <Chip
                      label={product.category.name}
                      size="medium"
                      variant="filled"
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        bgcolor: 'primary.50',
                        color: 'primary.main',
                        borderRadius: 2,
                        px: 1
                      }}
                    />
                  )}
                </Box>

                {product.description && (
                  <Box>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
                      {shouldTruncateDescription && !showFullDescription
                        ? `${product.description.substring(0, 120)}...`
                        : product.description}
                    </Typography>
                    {shouldTruncateDescription && (
                      <Button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        endIcon={showFullDescription ? <ExpandLess /> : <ExpandMore />}
                        sx={{ mt: 1, textTransform: 'none', fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        {showFullDescription ? 'Read less' : 'Read more'}
                      </Button>
                    )}
                  </Box>
                )}

                <Box>
                  {product.stock_quantity > 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle sx={{ fontSize: 18, color: 'success.main' }} />
                      <Typography variant="body2" color="success.main" fontWeight={600}>
                        In Stock ({product.stock_quantity} available)
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Error sx={{ fontSize: 18, color: 'error.main' }} />
                      <Typography variant="body2" color="error.main" fontWeight={600}>
                        Out of Stock
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Divider sx={{ borderStyle: 'dashed', opacity: 0.7 }} />

                {/* Quantity and Pricing */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: 2,
                    bgcolor: 'grey.50',
                    p: 2.5,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200'
                  }}
                >
                  {/* Quantity Controls */}
                  <Box>
                    <Typography variant="body1" fontWeight={600} gutterBottom>
                      Quantity:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconButton size="small" onClick={handleDecrease} disabled={quantity <= 1 || isRemoving}>
                        <Remove fontSize="small" />
                      </IconButton>
                      <Typography fontWeight={600} sx={{ minWidth: 24, textAlign: 'center' }}>
                        {quantity}
                      </Typography>
                      <IconButton size="small" onClick={handleIncrease} disabled={isRemoving}>
                        <Add fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      Unit Price: {formatPrice(unitPrice)}
                    </Typography>
                  </Box>

                  {/* Subtotal */}
                  <Box sx={{ textAlign: isMobile ? 'left' : 'right' }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Item Total
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'error.main', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>
                      {formatPrice(subtotal)}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Delete Dialog */}
      <Dialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        PaperProps={{ sx: { borderRadius: 3, minWidth: { xs: '90%', sm: 400 } } }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Remove Item from Cart
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
            Are you sure you want to remove <strong>{product.name}</strong> from your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button onClick={() => setShowDeleteDialog(false)} sx={{ textTransform: 'none', borderRadius: 2 }}>
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} variant="contained" color="error" sx={{ textTransform: 'none', borderRadius: 2 }}>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartItem;
