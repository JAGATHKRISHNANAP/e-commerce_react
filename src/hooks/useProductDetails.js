// src/hooks/useProductDetails.js
import { useState, useEffect } from 'react';

export const useProductDetails = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`http://localhost:8000/api/v1/products/${productId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Product not found');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);
      
    } catch (error) {
      console.error('Error fetching product details:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  return { product, loading, error, refetch: fetchProductDetails };
};