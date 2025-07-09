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
  CircularProgress,
  Paper,
  Stack
} from '@mui/material';
import {
  Home,
  NavigateNext,
  ShoppingCart,
  LocationOn,
  Payment,
  CheckCircle,
  ArrowBack,
  ArrowForward
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
      <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
        <Header />
        <LoadingSpinner message="Loading checkout..." />
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
      <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
        <Header />
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper 
            elevation={0}
            sx={{ 
              textAlign: 'center', 
              p: 6,
              borderRadius: 3,
              border: '1px solid #E5E7EB'
            }}
          >
            <ShoppingCart sx={{ fontSize: 64, color: '#9CA3AF', mb: 3 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#111827' }}>
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="#6B7280" sx={{ mb: 4, fontSize: '1.1rem' }}>
              Add some items to your cart before proceeding to checkout.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/dashboard')}
              startIcon={<ShoppingCart />}
              sx={{ 
                borderRadius: 2, 
                textTransform: 'none',
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: '#111827',
                '&:hover': { backgroundColor: '#374151' }
              }}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#F8FAFC' }}>
      <Header />
      
      {/* Main Container with proper max width */}
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
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
              onClick={() => navigate('/cart')}
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
              <ShoppingCart sx={{ fontSize: 16 }} />
              Cart
            </Link>
            <Typography 
              color="#111827" 
              variant="body2"
              sx={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              Checkout
            </Typography>
          </Breadcrumbs>

          {/* Page Title */}
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: '#111827',
              mb: 1,
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}
          >
            Checkout
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#6B7280',
              fontSize: '1.1rem'
            }}
          >
            Complete your order in just a few simple steps
          </Typography>
        </Box>

        {/* Progress Stepper */}
        <Paper 
          elevation={0}
          sx={{ 
            mb: { xs: 3, md: 4 },
            borderRadius: 2,
            border: '1px solid #E5E7EB',
            overflow: 'hidden'
          }}
        >
          <Stepper 
            activeStep={activeStep} 
            sx={{ 
              p: { xs: 2, md: 3 },
              '& .MuiStepConnector-line': {
                borderColor: '#E5E7EB'
              }
            }}
          >
            {steps.map((step, index) => (
              <Step key={step.label} completed={isStepComplete(index)}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: { xs: 32, md: 40 },
                        height: { xs: 32, md: 40 },
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: index <= activeStep ? '#111827' : '#E5E7EB',
                        color: index <= activeStep ? 'white' : '#9CA3AF',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {isStepComplete(index) ? <CheckCircle /> : step.icon}
                    </Box>
                  )}
                  sx={{
                    '& .MuiStepLabel-label': {
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      color: index <= activeStep ? '#111827' : '#6B7280',
                      mt: { xs: 1, md: 1.5 }
                    }
                  }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {/* Main 2-Column Layout: 75% / 25% split */}
        <Box sx={{ display: 'flex', gap: { xs: 3, md: 4 }, flexDirection: { xs: 'column', lg: 'row' } }}>
          {/* Left Column - Forms & Content (75%) */}
          <Box sx={{ flex: '1 1 75%', minWidth: 0 }}>
            <Fade in timeout={600}>
              <Stack spacing={{ xs: 3, md: 4 }}>
                {/* Form Content Area */}
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    border: '1px solid #E5E7EB',
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ p: { xs: 3, md: 4 } }}>
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
                      <Box sx={{ textAlign: 'center', py: { xs: 4, md: 6 } }}>
                        <CheckCircle sx={{ 
                          fontSize: { xs: 64, md: 80 }, 
                          color: '#16A34A', 
                          mb: 3 
                        }} />
                        <Typography 
                          variant="h4" 
                          gutterBottom 
                          sx={{ 
                            fontWeight: 700,
                            color: '#111827',
                            fontSize: { xs: '1.75rem', md: '2.25rem' }
                          }}
                        >
                          Review Your Order
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#6B7280',
                            mb: 4,
                            fontSize: '1.1rem',
                            maxWidth: 500,
                            mx: 'auto'
                          }}
                        >
                          Please review your order details before placing the order. 
                          You can make changes by going back to previous steps.
                        </Typography>
                        
                        <Alert 
                          severity="info" 
                          sx={{ 
                            mb: 4, 
                            borderRadius: 2, 
                            maxWidth: 600, 
                            mx: 'auto',
                            textAlign: 'left',
                            '& .MuiAlert-message': {
                              fontSize: '0.95rem'
                            }
                          }}
                        >
                          By placing this order, you agree to our Terms & Conditions and Privacy Policy. 
                          Your payment information is secure and encrypted.
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
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            backgroundColor: '#16A34A',
                            boxShadow: '0 4px 14px rgba(22, 163, 74, 0.25)',
                            '&:hover': {
                              backgroundColor: '#15803D',
                              transform: 'translateY(-1px)',
                              boxShadow: '0 6px 20px rgba(22, 163, 74, 0.35)'
                            },
                            '&:disabled': {
                              backgroundColor: '#9CA3AF'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {submitting ? 'Placing Order...' : 'Place Order'}
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Paper>

                {/* Navigation Buttons */}
                {activeStep < 2 && (
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 2,
                      border: '1px solid #E5E7EB',
                      p: { xs: 3, md: 4 }
                    }}
                  >
                    <Stack 
                      direction="row" 
                      justifyContent="space-between" 
                      alignItems="center"
                      spacing={2}
                    >
                      <Button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        startIcon={<ArrowBack />}
                        sx={{
                          borderRadius: 2,
                          textTransform: 'none',
                          px: 4,
                          py: 1.5,
                          color: '#6B7280',
                          borderColor: '#E5E7EB',
                          '&:hover': {
                            borderColor: '#9CA3AF',
                            backgroundColor: '#F9FAFB'
                          },
                          '&:disabled': {
                            color: '#D1D5DB'
                          }
                        }}
                        variant="outlined"
                      >
                        Back
                      </Button>
                      
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        endIcon={<ArrowForward />}
                        sx={{
                          borderRadius: 2,
                          textTransform: 'none',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          backgroundColor: '#111827',
                          '&:hover': {
                            backgroundColor: '#374151',
                            transform: 'translateY(-1px)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {activeStep === 1 ? 'Review Order' : 'Continue'}
                      </Button>
                    </Stack>
                  </Paper>
                )}
              </Stack>
            </Fade>
          </Box>

          {/* Right Column - Order Summary Invoice (25%) */}
          <Box sx={{ flex: '0 0 25%', minWidth: { xs: '100%', lg: '320px' } }}>
            <Fade in timeout={600} style={{ transitionDelay: '200ms' }}>
              <Box sx={{ position: { lg: 'sticky' }, top: { lg: 24 } }}>
                <OrderSummary cartData={cartData} />
              </Box>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CheckoutPage;