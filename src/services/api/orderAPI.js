import api from './authAPI'; // Use the same axios instance with auth

export const orderAPI = {
  // Get all orders for the current user
  getOrders: async () => {
    try {
      const response = await api.get('/orders');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get specific order details
  getOrderDetails: async (orderId) => {
    try {
      const response = await api.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Cancel an order
  cancelOrder: async (orderId) => {
    try {
      const response = await api.post(`/orders/${orderId}/cancel`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Return an order
  returnOrder: async (orderId) => {
    try {
      const response = await api.post(`/orders/${orderId}/return`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};
