// // src/services/api/searchAPI.js
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000/api/v1';

// // Create axios instance with auth
// const createAuthAxios = () => {
//   const token = localStorage.getItem('token');
//   return axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//       'Authorization': token ? `Bearer ${token}` : '',
//       'Content-Type': 'application/json'
//     },
//     timeout: 10000 // 10 second timeout
//   });
// };

// export const searchAPI = {
//   // Advanced product search with filters
//   searchProducts: async (searchParams) => {
//     try {
//       const api = createAuthAxios();
//       const params = new URLSearchParams();
      
//       // Required query parameter
//       if (searchParams.query) {
//         params.append('q', searchParams.query);
//       }
      
//       // Optional filters
//       if (searchParams.categoryId) {
//         params.append('category_id', searchParams.categoryId);
//       }
//       if (searchParams.subcategoryId) {
//         params.append('subcategory_id', searchParams.subcategoryId);
//       }
//       if (searchParams.minPrice !== undefined && searchParams.minPrice !== '') {
//         params.append('min_price', searchParams.minPrice);
//       }
//       if (searchParams.maxPrice !== undefined && searchParams.maxPrice !== '') {
//         params.append('max_price', searchParams.maxPrice);
//       }
//       if (searchParams.brand) {
//         params.append('brand', searchParams.brand);
//       }
//       if (searchParams.inStockOnly !== undefined) {
//         params.append('in_stock_only', searchParams.inStockOnly);
//       }
//       if (searchParams.sortBy) {
//         params.append('sort_by', searchParams.sortBy);
//       }
//       if (searchParams.page) {
//         params.append('page', searchParams.page);
//       }
//       if (searchParams.size) {
//         params.append('size', searchParams.size);
//       }
      
//       console.log('Search request URL:', `/search?${params.toString()}`);
      
//       const response = await api.get(`/search?${params.toString()}`);
      
//       console.log('Search response:', response.data);
      
//       return response.data;
//     } catch (error) {
//       console.error('Search failed:', error);
      
//       // Handle different types of errors
//       if (error.response) {
//         // Server responded with error status
//         const errorMessage = error.response.data?.detail || 'Search failed';
//         throw new Error(errorMessage);
//       } else if (error.request) {
//         // Request was made but no response received
//         throw new Error('No response from search server. Please check your connection.');
//       } else {
//         // Something else happened
//         throw new Error('An unexpected error occurred during search.');
//       }
//     }
//   },

//   // Get search suggestions/autocomplete
//   getSuggestions: async (query, size = 10) => {
//     try {
//       const api = createAuthAxios();
      
//       if (!query || query.length < 2) {
//         return [];
//       }
      
//       console.log('Getting suggestions for:', query);
      
//       const response = await api.get(`/search/suggestions?q=${encodeURIComponent(query)}&size=${size}`);
      
//       console.log('Suggestions response:', response.data);
      
//       return response.data.suggestions || [];
//     } catch (error) {
//       console.error('Failed to get suggestions:', error);
//       // Don't throw error for suggestions - just return empty array
//       return [];
//     }
//   },

//   // Reindex all products (admin function)
//   reindexProducts: async () => {
//     try {
//       const api = createAuthAxios();
//       const response = await api.post('/search/reindex');
//       return response.data;
//     } catch (error) {
//       console.error('Reindexing failed:', error);
//       throw new Error(error.response?.data?.detail || 'Reindexing failed');
//     }
//   },

//   // Index a single product (admin function)
//   indexProduct: async (productId) => {
//     try {
//       const api = createAuthAxios();
//       const response = await api.post(`/search/index-product/${productId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Product indexing failed:', error);
//       throw new Error(error.response?.data?.detail || 'Product indexing failed');
//     }
//   },

//   // Remove product from search index (admin function)
//   removeProductFromIndex: async (productId) => {
//     try {
//       const api = createAuthAxios();
//       const response = await api.delete(`/search/product/${productId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Product removal failed:', error);
//       throw new Error(error.response?.data?.detail || 'Product removal failed');
//     }
//   },

//   // Get search analytics (if implemented)
//   getSearchAnalytics: async (timeframe = '7d') => {
//     try {
//       const api = createAuthAxios();
//       const response = await api.get(`/search/analytics?timeframe=${timeframe}`);
//       return response.data;
//     } catch (error) {
//       console.error('Analytics fetch failed:', error);
//       throw new Error(error.response?.data?.detail || 'Analytics fetch failed');
//     }
//   }
// };

// // Utility functions for search
// export const searchUtils = {
//   // Build search URL for sharing
//   buildSearchUrl: (params) => {
//     const urlParams = new URLSearchParams();
    
//     Object.entries(params).forEach(([key, value]) => {
//       if (value && value !== '' && value !== false) {
//         if (key === 'inStockOnly' && value === true) {
//           return; // Don't add default true value
//         }
//         urlParams.set(key === 'query' ? 'q' : key, value.toString());
//       }
//     });
    
//     return `/search?${urlParams.toString()}`;
//   },

//   // Parse search URL parameters
//   parseSearchUrl: (searchParams) => {
//     return {
//       query: searchParams.get('q') || '',
//       categoryId: searchParams.get('category_id') || '',
//       subcategoryId: searchParams.get('subcategory_id') || '',
//       minPrice: searchParams.get('min_price') || '',
//       maxPrice: searchParams.get('max_price') || '',
//       brand: searchParams.get('brand') || '',
//       sortBy: searchParams.get('sort_by') || 'relevance',
//       inStockOnly: searchParams.get('in_stock_only') !== 'false',
//       page: parseInt(searchParams.get('page')) || 1,
//       size: parseInt(searchParams.get('size')) || 20
//     };
//   },

//   // Format price for display
//   formatPrice: (price) => {
//     if (typeof price !== 'number') return '$0.00';
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(price);
//   },

//   // Format large numbers (for result counts)
//   formatNumber: (num) => {
//     if (typeof num !== 'number') return '0';
//     return new Intl.NumberFormat('en-US').format(num);
//   },

//   // Generate search result sharing text
//   generateShareText: (query, totalResults) => {
//     return `Found ${searchUtils.formatNumber(totalResults)} results for "${query}" on E-commerce`;
//   },

//   // Validate search parameters
//   validateSearchParams: (params) => {
//     const errors = [];
    
//     if (!params.query || params.query.trim().length === 0) {
//       errors.push('Search query is required');
//     }
    
//     if (params.query && params.query.length > 100) {
//       errors.push('Search query is too long (max 100 characters)');
//     }
    
//     if (params.minPrice && isNaN(parseFloat(params.minPrice))) {
//       errors.push('Minimum price must be a valid number');
//     }
    
//     if (params.maxPrice && isNaN(parseFloat(params.maxPrice))) {
//       errors.push('Maximum price must be a valid number');
//     }
    
//     if (params.minPrice && params.maxPrice && parseFloat(params.minPrice) > parseFloat(params.maxPrice)) {
//       errors.push('Minimum price cannot be greater than maximum price');
//     }
    
//     if (params.page && (isNaN(parseInt(params.page)) || parseInt(params.page) < 1)) {
//       errors.push('Page number must be a positive integer');
//     }
    
//     if (params.size && (isNaN(parseInt(params.size)) || parseInt(params.size) < 1 || parseInt(params.size) > 100)) {
//       errors.push('Page size must be between 1 and 100');
//     }
    
//     return errors;
//   }
// };

// // Export default
// export default searchAPI;











// src/services/api/searchAPI.js
import axios from 'axios';

// Global base URL variable
const API_BASE_URL = 'http://localhost:8000';

// Create axios instance with auth
const createAuthAxios = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: `${API_BASE_URL}/api/v1`,
    headers: {
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    },
    timeout: 10000 // 10 second timeout
  });
};

export const searchAPI = {
  // Advanced product search with filters
  searchProducts: async (searchParams) => {
    try {
      const api = createAuthAxios();
      const params = new URLSearchParams();
      
      // Required query parameter
      if (searchParams.query) {
        params.append('q', searchParams.query);
      }
      
      // Optional filters
      if (searchParams.categoryId) {
        params.append('category_id', searchParams.categoryId);
      }
      if (searchParams.subcategoryId) {
        params.append('subcategory_id', searchParams.subcategoryId);
      }
      if (searchParams.minPrice !== undefined && searchParams.minPrice !== '') {
        params.append('min_price', searchParams.minPrice);
      }
      if (searchParams.maxPrice !== undefined && searchParams.maxPrice !== '') {
        params.append('max_price', searchParams.maxPrice);
      }
      if (searchParams.brand) {
        params.append('brand', searchParams.brand);
      }
      if (searchParams.inStockOnly !== undefined) {
        params.append('in_stock_only', searchParams.inStockOnly);
      }
      if (searchParams.sortBy) {
        params.append('sort_by', searchParams.sortBy);
      }
      if (searchParams.page) {
        params.append('page', searchParams.page);
      }
      if (searchParams.size) {
        params.append('size', searchParams.size);
      }
      
      console.log('Search request URL:', `/search?${params.toString()}`);
      
      const response = await api.get(`/search?${params.toString()}`);
      
      console.log('Search response:', response.data);
      
      return response.data;
    } catch (error) {
      console.error('Search failed:', error);
      
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data?.detail || 'Search failed';
        throw new Error(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('No response from search server. Please check your connection.');
      } else {
        // Something else happened
        throw new Error('An unexpected error occurred during search.');
      }
    }
  },

  // Get search suggestions/autocomplete
  getSuggestions: async (query, size = 10) => {
    try {
      const api = createAuthAxios();
      
      if (!query || query.length < 2) {
        return [];
      }
      
      console.log('Getting suggestions for:', query);
      
      const response = await api.get(`/search/suggestions?q=${encodeURIComponent(query)}&size=${size}`);
      
      console.log('Suggestions response:', response.data);
      
      return response.data.suggestions || [];
    } catch (error) {
      console.error('Failed to get suggestions:', error);
      // Don't throw error for suggestions - just return empty array
      return [];
    }
  },

  // Reindex all products (admin function)
  reindexProducts: async () => {
    try {
      const api = createAuthAxios();
      const response = await api.post('/search/reindex');
      return response.data;
    } catch (error) {
      console.error('Reindexing failed:', error);
      throw new Error(error.response?.data?.detail || 'Reindexing failed');
    }
  },

  // Index a single product (admin function)
  indexProduct: async (productId) => {
    try {
      const api = createAuthAxios();
      const response = await api.post(`/search/index-product/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Product indexing failed:', error);
      throw new Error(error.response?.data?.detail || 'Product indexing failed');
    }
  },

  // Remove product from search index (admin function)
  removeProductFromIndex: async (productId) => {
    try {
      const api = createAuthAxios();
      const response = await api.delete(`/search/product/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Product removal failed:', error);
      throw new Error(error.response?.data?.detail || 'Product removal failed');
    }
  },

  // Get search analytics (if implemented)
  getSearchAnalytics: async (timeframe = '7d') => {
    try {
      const api = createAuthAxios();
      const response = await api.get(`/search/analytics?timeframe=${timeframe}`);
      return response.data;
    } catch (error) {
      console.error('Analytics fetch failed:', error);
      throw new Error(error.response?.data?.detail || 'Analytics fetch failed');
    }
  }
};

// Utility functions for search
export const searchUtils = {
  // Build search URL for sharing
  buildSearchUrl: (params) => {
    const urlParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== '' && value !== false) {
        if (key === 'inStockOnly' && value === true) {
          return; // Don't add default true value
        }
        urlParams.set(key === 'query' ? 'q' : key, value.toString());
      }
    });
    
    return `/search?${urlParams.toString()}`;
  },

  // Parse search URL parameters
  parseSearchUrl: (searchParams) => {
    return {
      query: searchParams.get('q') || '',
      categoryId: searchParams.get('category_id') || '',
      subcategoryId: searchParams.get('subcategory_id') || '',
      minPrice: searchParams.get('min_price') || '',
      maxPrice: searchParams.get('max_price') || '',
      brand: searchParams.get('brand') || '',
      sortBy: searchParams.get('sort_by') || 'relevance',
      inStockOnly: searchParams.get('in_stock_only') !== 'false',
      page: parseInt(searchParams.get('page')) || 1,
      size: parseInt(searchParams.get('size')) || 20
    };
  },

  // Format price for display
  formatPrice: (price) => {
    if (typeof price !== 'number') return '₹0.00';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  },

  // Format large numbers (for result counts)
  formatNumber: (num) => {
    if (typeof num !== 'number') return '0';
    return new Intl.NumberFormat('en-IN').format(num);
  },

  // Generate search result sharing text
  generateShareText: (query, totalResults) => {
    return `Found ${searchUtils.formatNumber(totalResults)} results for "${query}" on E-commerce`;
  },

  // Validate search parameters
  validateSearchParams: (params) => {
    const errors = [];
    
    if (!params.query || params.query.trim().length === 0) {
      errors.push('Search query is required');
    }
    
    if (params.query && params.query.length > 100) {
      errors.push('Search query is too long (max 100 characters)');
    }
    
    if (params.minPrice && isNaN(parseFloat(params.minPrice))) {
      errors.push('Minimum price must be a valid number');
    }
    
    if (params.maxPrice && isNaN(parseFloat(params.maxPrice))) {
      errors.push('Maximum price must be a valid number');
    }
    
    if (params.minPrice && params.maxPrice && parseFloat(params.minPrice) > parseFloat(params.maxPrice)) {
      errors.push('Minimum price cannot be greater than maximum price');
    }
    
    if (params.page && (isNaN(parseInt(params.page)) || parseInt(params.page) < 1)) {
      errors.push('Page number must be a positive integer');
    }
    
    if (params.size && (isNaN(parseInt(params.size)) || parseInt(params.size) < 1 || parseInt(params.size) > 100)) {
      errors.push('Page size must be between 1 and 100');
    }
    
    return errors;
  }
};

// Export default
export default searchAPI;