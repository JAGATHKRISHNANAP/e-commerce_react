// // src/components/checkout/OrderSummary.jsx
// import React from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Divider,
//   Chip,
//   Stack
// } from '@mui/material';
// import { Receipt, LocalShipping, Security } from '@mui/icons-material';

// const OrderSummary = ({ cartData }) => {
//   const calculateTotals = () => {
//     if (!cartData?.items || cartData.items.length === 0) {
//       return { 
//         itemCount: 0, 
//         totalQuantity: 0, 
//         subtotal: 0,
//         shipping: 0,
//         tax: 0,
//         grandTotal: 0
//       };
//     }

//     const itemCount = cartData.items.length;
//     const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
//     const subtotal = cartData.items.reduce((sum, item) => {
//       return sum + (parseFloat(item.product.price) * item.quantity);
//     }, 0);

//     const shipping = 0; // Free shipping
//     const tax = subtotal * 0.18; // 18% GST
//     const grandTotal = subtotal + shipping + tax;

//     return { itemCount, totalQuantity, subtotal, shipping, tax, grandTotal };
//   };

//   const { itemCount, totalQuantity, subtotal, shipping, tax, grandTotal } = calculateTotals();

//   const formatPrice = (price) => {
//     return `₹${price.toLocaleString('en-IN', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     })}`;
//   };

//   return (
//     <Card
//       sx={{
//         borderRadius: 3,
//         boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//         position: { md: 'sticky' },
//         top: { md: 24 },
//         height: 'fit-content'
//       }}
//     >
//       <CardContent sx={{ p: 4 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 700,
//             mb: 3,
//             display: 'flex',
//             alignItems: 'center',
//             gap: 1,
//             color: 'text.primary'
//           }}
//         >
//           <Receipt sx={{ color: 'primary.main' }} />
//           Order Summary
//         </Typography>

//         {/* Order Items */}
//         <Box sx={{ mb: 3 }}>
//           <Typography variant="subtitle1" fontWeight={600} gutterBottom>
//             Items ({itemCount})
//           </Typography>
//           <Stack spacing={1.5}>
//             {cartData?.items?.map((item, index) => {
//               const itemTotal = parseFloat(item.product.price) * item.quantity;
//               return (
//                 <Box
//                   key={`${item.product.product_id}-${index}`}
//                   sx={{
//                     p: 2,
//                     bgcolor: 'grey.50',
//                     borderRadius: 2,
//                     border: '1px solid',
//                     borderColor: 'grey.200'
//                   }}
//                 >
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       fontWeight: 600,
//                       mb: 0.5,
//                       display: '-webkit-box',
//                       WebkitLineClamp: 1,
//                       WebkitBoxOrient: 'vertical',
//                       overflow: 'hidden'
//                     }}
//                   >
//                     {item.product.name}
//                   </Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <Typography variant="body2" color="text.secondary">
//                       {formatPrice(parseFloat(item.product.price))} × {item.quantity}
//                     </Typography>
//                     <Typography variant="body2" fontWeight={600} color="error.main">
//                       {formatPrice(itemTotal)}
//                     </Typography>
//                   </Box>
//                 </Box>
//               );
//             })}
//           </Stack>
//         </Box>

//         <Divider sx={{ mb: 3 }} />

//         {/* Price Breakdown */}
//         <Stack spacing={2}>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Typography variant="body1">Subtotal ({totalQuantity} items)</Typography>
//             <Typography variant="body1" fontWeight={500}>
//               {formatPrice(subtotal)}
//             </Typography>
//           </Box>

//           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Typography variant="body1">Shipping</Typography>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Chip label="FREE" size="small" color="success" />
//               <Typography variant="body1" fontWeight={500}>
//                 {formatPrice(shipping)}
//               </Typography>
//             </Box>
//           </Box>

//           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Typography variant="body1">Tax (GST 18%)</Typography>
//             <Typography variant="body1" fontWeight={500}>
//               {formatPrice(tax)}
//             </Typography>
//           </Box>

//           <Divider />

//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Typography variant="h6" fontWeight={700}>
//               Total Amount
//             </Typography>
//             <Typography variant="h5" fontWeight={700} color="error.main">
//               {formatPrice(grandTotal)}
//             </Typography>
//           </Box>
//         </Stack>

//         {/* Delivery Info */}
//         <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.50', borderRadius: 2 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//             <LocalShipping sx={{ color: 'primary.main', fontSize: 20 }} />
//             <Typography variant="subtitle2" fontWeight={600} color="primary.main">
//               Estimated Delivery
//             </Typography>
//           </Box>
//           <Typography variant="body2" color="text.secondary">
//             3-5 business days for standard delivery
//           </Typography>
//         </Box>

//         {/* Security Badge */}
//         <Box sx={{ mt: 2, p: 2, bgcolor: 'success.50', borderRadius: 2 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Security sx={{ color: 'success.main', fontSize: 20 }} />
//             <Typography variant="body2" fontWeight={600} color="success.main">
//               Secure Checkout Protected
//             </Typography>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default OrderSummary;









// src/components/checkout/OrderSummary.jsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
  Stack
} from '@mui/material';
import { Receipt, LocalShipping, Security } from '@mui/icons-material';

const OrderSummary = ({ cartData }) => {
  const calculateTotals = () => {
    if (!cartData?.items || cartData.items.length === 0) {
      return { 
        itemCount: 0, 
        totalQuantity: 0, 
        subtotal: 0,
        shipping: 0,
        tax: 0,
        grandTotal: 0
      };
    }

    const itemCount = cartData.items.length;
    const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartData.items.reduce((sum, item) => {
      return sum + (parseFloat(item.product.price) * item.quantity);
    }, 0);

    const shipping = 0; // Free shipping
    const tax = subtotal * 0.18; // 18% GST
    const grandTotal = subtotal + shipping + tax;

    return { itemCount, totalQuantity, subtotal, shipping, tax, grandTotal };
  };

  const { itemCount, totalQuantity, subtotal, shipping, tax, grandTotal } = calculateTotals();

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        position: { md: 'sticky' },
        top: { md: 10 },
        height: 'fit-content'
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
            gap: 1,
            color: 'text.primary'
          }}
        >
          <Receipt sx={{ color: 'primary.main' }} />
          Order Summary
        </Typography>

        {/* Order Items */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Items ({itemCount})
          </Typography>
          <Stack spacing={1.5}>
            {cartData?.items?.map((item, index) => {
              const itemTotal = parseFloat(item.product.price) * item.quantity;
              return (
                <Box
                  key={`${item.product.product_id}-${index}`}
                  sx={{
                    p: 2,
                    bgcolor: 'grey.50',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.200'
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
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

        <Divider sx={{ mb: 3 }} />

        {/* Price Breakdown */}
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">Subtotal ({totalQuantity} items)</Typography>
            <Typography variant="body1" fontWeight={500}>
              {formatPrice(subtotal)}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">Shipping</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip label="FREE" size="small" color="success" />
              <Typography variant="body1" fontWeight={500}>
                {formatPrice(shipping)}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">Tax (GST 18%)</Typography>
            <Typography variant="body1" fontWeight={500}>
              {formatPrice(tax)}
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight={700}>
              Total Amount
            </Typography>
            <Typography variant="h5" fontWeight={700} color="error.main">
              {formatPrice(grandTotal)}
            </Typography>
          </Box>
        </Stack>

        {/* Delivery Info */}
        <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.50', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocalShipping sx={{ color: 'primary.main', fontSize: 20 }} />
            <Typography variant="subtitle2" fontWeight={600} color="primary.main">
              Estimated Delivery
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            3-5 business days for standard delivery
          </Typography>
        </Box>

        {/* Security Badge */}
        {/* <Box sx={{ mt: 2, p: 2, bgcolor: 'success.50', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Security sx={{ color: 'success.main', fontSize: 20 }} />
            <Typography variant="body2" fontWeight={600} color="success.main">
              Secure Checkout Protected
            </Typography>
          </Box>
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
