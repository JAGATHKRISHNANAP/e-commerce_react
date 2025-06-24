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
//         top: { md: 10 },
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
import { 
  Receipt, 
  LocalShipping, 
  Security, 
  Shield,
  LocalOffer,
  Verified,
  AccessTime
} from '@mui/icons-material';

const OrderSummary = ({ cartData }) => {
  const calculateTotals = () => {
    if (!cartData?.items || cartData.items.length === 0) {
      return { 
        itemCount: 0, 
        totalQuantity: 0, 
        subtotal: 0,
        shipping: 0,
        tax: 0,
        grandTotal: 0,
        discount: 0,
        platformFee: 0,
        savings: 0
      };
    }

    const itemCount = cartData.items.length;
    const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartData.items.reduce((sum, item) => {
      return sum + (parseFloat(item.product.price) * item.quantity);
    }, 0);

    // Professional invoice calculations
    const discount = subtotal * 0.15; // 15% discount
    const platformFee = 29;
    const shipping = 0; // Free shipping
    const tax = (subtotal - discount) * 0.18; // 18% GST on discounted amount
    const savings = discount + (subtotal > 499 ? 40 : 0); // Free delivery saves ₹40
    const grandTotal = subtotal - discount + platformFee + shipping + tax;

    return { 
      itemCount, 
      totalQuantity, 
      subtotal, 
      shipping, 
      tax, 
      grandTotal,
      discount,
      platformFee,
      savings
    };
  };

  const { 
    itemCount, 
    totalQuantity, 
    subtotal, 
    shipping, 
    tax, 
    grandTotal,
    discount,
    platformFee,
    savings
  } = calculateTotals();

  const formatPrice = (price) => {
    return `₹${Math.abs(price).toLocaleString('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })}`;
  };

  // Reusable row component for consistent styling
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

  if (!cartData?.items || cartData.items.length === 0) {
    return (
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
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Receipt sx={{ fontSize: 48, color: '#D1D5DB', mb: 2 }} />
          <Typography variant="h6" sx={{ color: '#6B7280', fontWeight: 600 }}>
            No items to display
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
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
        {/* Header */}
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#111827',
              fontSize: '1.125rem',
              mb: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Receipt sx={{ fontSize: 20, color: '#6B7280' }} />
            ORDER SUMMARY
          </Typography>
          <Typography variant="body2" sx={{ color: '#6B7280' }}>
            {itemCount} {itemCount === 1 ? 'Item' : 'Items'} • Review your order
          </Typography>
        </Box>

        <Divider sx={{ borderColor: '#F3F4F6' }} />

        {/* Order Items */}
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              color: '#374151',
              fontSize: '0.95rem'
            }}
          >
            ITEMS ORDERED
          </Typography>
          <Stack spacing={1.5}>
            {cartData.items.map((item, index) => {
              const itemTotal = parseFloat(item.product.price) * item.quantity;
              return (
                <Box
                  key={`${item.product.product_id}-${index}`}
                  sx={{
                    p: 2.5,
                    backgroundColor: '#F9FAFB',
                    borderRadius: 1.5,
                    border: '1px solid #F3F4F6'
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: '#111827',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: 1.4
                    }}
                  >
                    {item.product.name}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}>
                    <Typography variant="body2" sx={{ color: '#6B7280' }}>
                      {formatPrice(parseFloat(item.product.price))} × {item.quantity}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#111827',
                        fontSize: '0.95rem'
                      }}
                    >
                      {formatPrice(itemTotal)}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: '#F3F4F6' }} />

        {/* Price Breakdown */}
        <Box sx={{ px: 3, py: 2 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              color: '#374151',
              fontSize: '0.95rem'
            }}
          >
            PRICE BREAKDOWN
          </Typography>
          
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

            {/* Shipping */}
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
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <LocalShipping sx={{ fontSize: 16, color: '#6B7280' }} />
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
              label="Total Tax (GST 18%)"
              amount={tax}
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
              TOTAL AMOUNT
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
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <Verified sx={{ fontSize: 16 }} />
                You saved {formatPrice(savings)} on this order
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

        {/* Delivery Information */}
        <Box sx={{ p: 3 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              color: '#374151',
              fontSize: '0.95rem'
            }}
          >
            DELIVERY INFORMATION
          </Typography>
          
          <Box sx={{
            backgroundColor: '#EFF6FF',
            border: '1px solid #DBEAFE',
            borderRadius: 1.5,
            p: 2.5
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              mb: 1.5
            }}>
              <AccessTime sx={{ color: '#2563EB', fontSize: 20 }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#2563EB',
                  fontSize: '0.9rem'
                }}
              >
                Estimated Delivery Time
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#6B7280',
                lineHeight: 1.5,
                fontSize: '0.85rem'
              }}
            >
              Your order will be delivered within <strong>3-5 business days</strong> for standard delivery. 
              Express delivery options available at checkout.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;