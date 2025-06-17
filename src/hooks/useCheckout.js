// // src/hooks/useCheckout.js
// import { useState, useEffect } from 'react';

// export const useCheckout = () => {
//   const [cartData, setCartData] = useState(null);
//   const [addresses, setAddresses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [submitting, setSubmitting] = useState(false);

//   const getAuthHeaders = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       throw new Error('Authentication token not found');
//     }
//     return {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     };
//   };

//   const fetchCheckoutData = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Fetch cart data and saved addresses
//       const [cartResponse, addressResponse] = await Promise.all([
//         fetch('http://localhost:8000/api/v1/cart', {
//           headers: getAuthHeaders(),
//         }),
//         fetch('http://localhost:8000/api/v1/addresses', {
//           headers: getAuthHeaders(),
//         }).catch(() => ({ ok: false })) // Handle if addresses endpoint doesn't exist
//       ]);

//       if (!cartResponse.ok) {
//         throw new Error('Failed to fetch cart data');
//       }

//       const cartData = await cartResponse.json();
//       setCartData(cartData);

//       // Handle addresses if endpoint exists
//       if (addressResponse.ok) {
//         const addressData = await addressResponse.json();
//         setAddresses(addressData.addresses || []);
//       }

//     } catch (error) {
//       console.error('Error fetching checkout data:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const submitOrder = async (orderData) => {
//     try {
//       setSubmitting(true);
//       const response = await fetch('http://localhost:8000/api/v1/orders', {
//         method: 'POST',
//         headers: getAuthHeaders(),
//         body: JSON.stringify(orderData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to place order');
//       }

//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       throw error;
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     fetchCheckoutData();
//   }, []);

//   return {
//     cartData,
//     addresses,
//     loading,
//     error,
//     submitting,
//     refetch: fetchCheckoutData,
//     submitOrder
//   };
// };

// src/hooks/useCheckout.js
import { useState, useEffect } from 'react';

export const useCheckout = () => {
  const [cartData, setCartData] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token not found');
    }
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  };

  const fetchCheckoutData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch cart data and addresses
      const [cartResponse, addressResponse] = await Promise.all([
        fetch('http://localhost:8000/api/v1/cart', {
          headers: getAuthHeaders(),
        }),
        fetch('http://localhost:8000/api/v1/addresses', {
          headers: getAuthHeaders(),
        })
      ]);

      if (!cartResponse.ok) {
        throw new Error('Failed to fetch cart data');
      }

      const cartData = await cartResponse.json();
      setCartData(cartData);

      // Handle addresses response
      if (addressResponse.ok) {
        const addressData = await addressResponse.json();
        setAddresses(addressData.addresses || []);
      } else {
        setAddresses([]);
      }

    } catch (error) {
      console.error('Error fetching checkout data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addAddress = async (addressData) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/addresses', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(addressData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to add address');
      }

      const newAddress = await response.json();
      setAddresses(prev => [...prev, newAddress]);
      return newAddress;
    } catch (error) {
      console.error('Error adding address:', error);
      throw error;
    }
  };

  const submitOrder = async (orderData) => {
    try {
      setSubmitting(true);
      const response = await fetch('http://localhost:8000/api/v1/orders', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to place order');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error submitting order:', error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchCheckoutData();
  }, []);

  return {
    cartData,
    addresses,
    loading,
    error,
    submitting,
    refetch: fetchCheckoutData,
    addAddress,
    submitOrder
  };
};