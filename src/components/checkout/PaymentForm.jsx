// src/components/checkout/PaymentForm.jsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  InputAdornment,
  Chip,
  Alert,
  Divider
} from '@mui/material';
import {
  CreditCard,
  AccountBalance,
  Payment,
  Security,
  CheckCircle,
  Wallet
} from '@mui/icons-material';

const PaymentForm = ({ onPaymentSelect, selectedPayment, paymentData, onPaymentDataChange }) => {
  const [errors, setErrors] = useState({});

  const validateCardDetails = () => {
    const newErrors = {};
    
    if (selectedPayment === 'card') {
      if (!paymentData.cardNumber || paymentData.cardNumber.replace(/\s/g, '').length !== 16) {
        newErrors.cardNumber = 'Invalid card number';
      }
      if (!paymentData.expiryDate || !/^\d{2}\/\d{2}$/.test(paymentData.expiryDate)) {
        newErrors.expiryDate = 'Invalid expiry date (MM/YY)';
      }
      if (!paymentData.cvv || paymentData.cvv.length !== 3) {
        newErrors.cvv = 'Invalid CVV';
      }
      if (!paymentData.cardHolderName.trim()) {
        newErrors.cardHolderName = 'Cardholder name is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const getCardType = (number) => {
    const num = number.replace(/\s/g, '');
    if (/^4/.test(num)) return 'Visa';
    if (/^5[1-5]/.test(num)) return 'Mastercard';
    if (/^3[47]/.test(num)) return 'Amex';
    if (/^6/.test(num)) return 'Discover';
    return 'Card';
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
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
          <Payment sx={{ color: 'primary.main' }} />
          Payment Method
        </Typography>

        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            value={selectedPayment}
            onChange={(e) => onPaymentSelect(e.target.value)}
          >
            {/* Credit/Debit Card */}
            <Card
              sx={{
                mb: 3,
                border: selectedPayment === 'card' ? '2px solid' : '1px solid',
                borderColor: selectedPayment === 'card' ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                transition: 'all 0.2s ease'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CreditCard sx={{ color: 'primary.main' }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Credit / Debit Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Visa, Mastercard, Amex, and more
                        </Typography>
                      </Box>
                    </Box>
                  }
                  sx={{ mb: selectedPayment === 'card' ? 2 : 0 }}
                />

                {selectedPayment === 'card' && (
                  <Box sx={{ ml: 4, mt: 2 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Card Number"
                          value={paymentData.cardNumber || ''}
                          onChange={(e) => {
                            const formatted = formatCardNumber(e.target.value);
                            onPaymentDataChange({ ...paymentData, cardNumber: formatted });
                          }}
                          error={!!errors.cardNumber}
                          helperText={errors.cardNumber}
                          placeholder="1234 5678 9012 3456"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CreditCard color="action" />
                              </InputAdornment>
                            ),
                            endAdornment: paymentData.cardNumber && (
                              <Chip
                                label={getCardType(paymentData.cardNumber)}
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            )
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Cardholder Name"
                          value={paymentData.cardHolderName || ''}
                          onChange={(e) => onPaymentDataChange({ ...paymentData, cardHolderName: e.target.value })}
                          error={!!errors.cardHolderName}
                          helperText={errors.cardHolderName}
                          placeholder="Name as on card"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Expiry Date"
                          value={paymentData.expiryDate || ''}
                          onChange={(e) => {
                            const formatted = formatExpiryDate(e.target.value);
                            onPaymentDataChange({ ...paymentData, expiryDate: formatted });
                          }}
                          error={!!errors.expiryDate}
                          helperText={errors.expiryDate}
                          placeholder="MM/YY"
                          inputProps={{ maxLength: 5 }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="CVV"
                          value={paymentData.cvv || ''}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').substring(0, 3);
                            onPaymentDataChange({ ...paymentData, cvv: value });
                          }}
                          error={!!errors.cvv}
                          helperText={errors.cvv}
                          placeholder="123"
                          type="password"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Security color="action" fontSize="small" />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Alert severity="info" sx={{ mt: 2, borderRadius: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Security fontSize="small" />
                        Your card details are secured with 256-bit SSL encryption
                      </Box>
                    </Alert>
                  </Box>
                )}
              </CardContent>
            </Card>

            {/* Net Banking */}
            <Card
              sx={{
                mb: 3,
                border: selectedPayment === 'netbanking' ? '2px solid' : '1px solid',
                borderColor: selectedPayment === 'netbanking' ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                transition: 'all 0.2s ease'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <FormControlLabel
                  value="netbanking"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <AccountBalance sx={{ color: 'primary.main' }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Net Banking
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          All major banks supported
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              </CardContent>
            </Card>

            {/* UPI */}
            <Card
              sx={{
                mb: 3,
                border: selectedPayment === 'upi' ? '2px solid' : '1px solid',
                borderColor: selectedPayment === 'upi' ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                transition: 'all 0.2s ease'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <FormControlLabel
                  value="upi"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Wallet sx={{ color: 'primary.main' }} />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          UPI
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Pay using PhonePe, Google Pay, Paytm & more
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              </CardContent>
            </Card>

            {/* Cash on Delivery */}
            <Card
              sx={{
                mb: 2,
                border: selectedPayment === 'cod' ? '2px solid' : '1px solid',
                borderColor: selectedPayment === 'cod' ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                transition: 'all 0.2s ease'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          bgcolor: 'success.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography variant="caption" color="white" fontWeight={600}>
                          ₹
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Cash on Delivery
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Pay when you receive the order
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              </CardContent>
            </Card>
          </RadioGroup>
        </FormControl>

        {/* Payment Security Info */}
        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />
            <Typography variant="subtitle2" fontWeight={600}>
              100% Secure Payments
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            All transactions are secured and encrypted. We never store your card details.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;