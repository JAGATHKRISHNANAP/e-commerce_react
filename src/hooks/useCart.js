// // // src/hooks/useCart.js
// // import { useState, useEffect } from 'react';

// // export const useCart = () => {
// //   const [cartData, setCartData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const fetchCartData = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       const token = localStorage.getItem('token');
// //       if (!token) {
// //         throw new Error('Authentication token not found');
// //       }

// //       const response = await fetch('http://65.1.248.179:8000/api/v1/cart', {
// //         method: 'GET',
// //         headers: {
// //           'Authorization': `Bearer ${token}`,
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       if (!response.ok) {
// //         if (response.status === 401) {
// //           throw new Error('Session expired. Please login again.');
// //         }
// //         if (response.status === 404) {
// //           throw new Error('Cart not found');
// //         }
// //         throw new Error(`Failed to fetch cart: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       setCartData(data);
// //     } catch (error) {
// //       console.error('Error fetching cart:', error);
// //       setError(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCartData();
// //   }, []);

// //   return { cartData, loading, error, refetch: fetchCartData };
// // };




// // src/hooks/useCart.js
// import { useState, useEffect } from 'react';

// export const useCart = () => {
//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [actionLoading, setActionLoading] = useState(false);

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

//   const fetchCartData = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch('http://65.1.248.179:8000/api/v1/cart', {
//         method: 'GET',
//         headers: getAuthHeaders(),
//       });

//       if (!response.ok) {
//         if (response.status === 401) {
//           throw new Error('Session expired. Please login again.');
//         }
//         if (response.status === 404) {
//           throw new Error('Cart not found');
//         }
//         throw new Error(`Failed to fetch cart: ${response.status}`);
//       }

//       const data = await response.json();
//       setCartData(data);
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeItem = async (productId) => {
//     try {
//       setActionLoading(true);
//       const response = await fetch(`http://65.1.248.179:8000/api/v1/cart/item/${productId}`, {
//         method: 'DELETE',
//         headers: getAuthHeaders(),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to remove item from cart');
//       }

//       // Refresh cart data after successful removal
//       await fetchCartData();
//       return true;
//     } catch (error) {
//       console.error('Error removing item:', error);
//       throw error;
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       setActionLoading(true);
//       const response = await fetch('http://65.1.248.179:8000/api/v1/cart/clear', {
//         method: 'DELETE',
//         headers: getAuthHeaders(),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to clear cart');
//       }

//       // Refresh cart data after successful clear
//       await fetchCartData();
//       return true;
//     } catch (error) {
//       console.error('Error clearing cart:', error);
//       throw error;
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, []);

//   return { 
//     cartData, 
//     loading, 
//     error, 
//     actionLoading,
//     refetch: fetchCartData,
//     removeItem,
//     clearCart
//   };
// };









// src/hooks/useCart.js
import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

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

  const fetchCartData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://65.1.248.179:8000/api/v1/cart', {
        method: 'GET',
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Session expired. Please login again.');
        }
        if (response.status === 404) {
          throw new Error('Cart not found');
        }
        throw new Error(`Failed to fetch cart: ${response.status}`);
      }

      const data = await response.json();
      setCartData(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (productId) => {
    try {
      setActionLoading(true);
      const response = await fetch(`http://65.1.248.179:8000/api/v1/cart/item/${productId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      // Refresh cart data after successful removal
      await fetchCartData();
      return true;
    } catch (error) {
      console.error('Error removing item:', error);
      throw error;
    } finally {
      setActionLoading(false);
    }
  };

  const clearCart = async () => {
    try {
      setActionLoading(true);
      const response = await fetch('http://65.1.248.179:8000/api/v1/cart/clear', {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to clear cart');
      }

      // Refresh cart data after successful clear
      await fetchCartData();
      return true;
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    } finally {
      setActionLoading(false);
    }
  };



const onUpdateItem = async (productId, quantity) => {
  try {
    setActionLoading(true);
    const response = await fetch(`http://65.1.248.179:8000/api/v1/cart/item/${productId}`, {
      method: 'PUT',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),  // ✅ Pass updated quantity here
    });

    if (!response.ok) {
      throw new Error('Failed to update item quantity');
    }

    await fetchCartData(); // Refresh the cart
    return true;
  } catch (error) {
    console.error('Error updating item quantity:', error);
    throw error;
  } finally {
    setActionLoading(false);
  }
};




  useEffect(() => {
    fetchCartData();
  }, []);

  return { 
    cartData, 
    loading, 
    error, 
    actionLoading,
    refetch: fetchCartData,
    removeItem,
    clearCart,
    onUpdateItem
  };
};