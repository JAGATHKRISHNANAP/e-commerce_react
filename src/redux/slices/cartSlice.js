// src/redux/slices/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { cartAPI } from '../../services/api/cartAPI'

// Async Thunks
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await cartAPI.addToCart(productId, quantity)
      return response
    } catch (error) {
      return rejectWithValue(error.detail || error.message || 'Failed to add to cart')
    }
  }
)

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartAPI.getCart()
      return response
    } catch (error) {
      return rejectWithValue(error.detail || error.message || 'Failed to fetch cart')
    }
  }
)

export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await cartAPI.updateCartItem(productId, quantity)
      return response
    } catch (error) {
      return rejectWithValue(error.detail || error.message || 'Failed to update cart item')
    }
  }
)

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await cartAPI.removeFromCart(productId)
      return { ...response, productId }
    } catch (error) {
      return rejectWithValue(error.detail || error.message || 'Failed to remove from cart')
    }
  }
)

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartAPI.clearCart()
      return response
    } catch (error) {
      return rejectWithValue(error.detail || error.message || 'Failed to clear cart')
    }
  }
)

export const fetchCartCount = createAsyncThunk(
  'cart/fetchCartCount',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cartAPI.getCartCount()
      return response
    } catch (error) {
      return rejectWithValue(error.detail || error.message || 'Failed to fetch cart count')
    }
  }
)

// Initial State
const initialState = {
  cart: null,
  items: [],
  totalItems: 0,
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  isUpdating: false,
  error: null,
  lastAddedItem: null
}

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearLastAddedItem: (state) => {
      state.lastAddedItem = null
    },
    resetCart: () => initialState
  },
  extraReducers: (builder) => {
    builder
      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.isUpdating = true
        state.error = null
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isUpdating = false
        state.lastAddedItem = action.payload.cart_item
        
        // Update cart summary
        if (action.payload.cart_summary) {
          state.totalItems = action.payload.cart_summary.total_items
          state.totalQuantity = action.payload.cart_summary.total_quantity
          state.totalAmount = action.payload.cart_summary.total_amount
        }
        
        // Update or add item in local state
        const existingItemIndex = state.items.findIndex(
          item => item.product_id === action.payload.cart_item.product_id
        )
        
        if (existingItemIndex >= 0) {
          state.items[existingItemIndex] = action.payload.cart_item
        } else {
          state.items.push(action.payload.cart_item)
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isUpdating = false
        state.error = action.payload
      })
      
      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.cart = action.payload
        state.items = action.payload.items || []
        state.totalItems = action.payload.total_items || 0
        state.totalQuantity = action.payload.total_quantity || 0
        state.totalAmount = action.payload.total_amount || 0
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      
      // Update Cart Item
      .addCase(updateCartItem.pending, (state) => {
        state.isUpdating = true
        state.error = null
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.isUpdating = false
        
        // Update item in local state
        const itemIndex = state.items.findIndex(
          item => item.product_id === action.payload.product_id
        )
        
        if (itemIndex >= 0) {
          state.items[itemIndex] = action.payload
          
          // Recalculate totals
          state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0)
          state.totalAmount = state.items.reduce(
            (sum, item) => sum + (item.quantity * parseFloat(item.price_at_time)), 
            0
          )
        }
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.isUpdating = false
        state.error = action.payload
      })
      
      // Remove from Cart
      .addCase(removeFromCart.pending, (state) => {
        state.isUpdating = true
        state.error = null
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isUpdating = false
        
        // Remove item from local state
        state.items = state.items.filter(
          item => item.product_id !== action.payload.productId
        )
        
        // Update totals from response
        if (action.payload.cart_summary) {
          state.totalItems = action.payload.cart_summary.total_items
          state.totalQuantity = action.payload.cart_summary.total_quantity
          state.totalAmount = action.payload.cart_summary.total_amount
        }
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isUpdating = false
        state.error = action.payload
      })
      
      // Clear Cart
      .addCase(clearCart.pending, (state) => {
        state.isUpdating = true
        state.error = null
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.isUpdating = false
        state.items = []
        state.totalItems = 0
        state.totalQuantity = 0
        state.totalAmount = 0
        state.cart = null
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.isUpdating = false
        state.error = action.payload
      })
      
      // Fetch Cart Count
      .addCase(fetchCartCount.fulfilled, (state, action) => {
        state.totalItems = action.payload.total_items
        state.totalQuantity = action.payload.total_quantity
      })
  }
})

// Export actions
export const { clearError, clearLastAddedItem, resetCart } = cartSlice.actions

// Selectors
export const selectCart = (state) => state.cart
export const selectCartItems = (state) => state.cart?.items || []
export const selectCartTotalItems = (state) => state.cart?.totalItems || 0
export const selectCartTotalQuantity = (state) => state.cart?.totalQuantity || 0
export const selectCartTotalAmount = (state) => state.cart?.totalAmount || 0
export const selectCartIsLoading = (state) => state.cart?.isLoading || false
export const selectCartIsUpdating = (state) => state.cart?.isUpdating || false
export const selectCartError = (state) => state.cart?.error || null
export const selectLastAddedItem = (state) => state.cart?.lastAddedItem || null

// Helper selector to check if product is in cart
export const selectIsProductInCart = (productId) => (state) => {
  return state.cart?.items?.some(item => item.product_id === productId) || false
}

// Helper selector to get quantity of product in cart
export const selectProductQuantityInCart = (productId) => (state) => {
  const item = state.cart?.items?.find(item => item.product_id === productId)
  return item?.quantity || 0
}

// Default export
const cartReducer = cartSlice.reducer
export default cartReducer