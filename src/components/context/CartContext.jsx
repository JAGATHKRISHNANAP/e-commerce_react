import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  // Generate or get session ID
  const getSessionId = () => {
    let sessionId = localStorage.getItem('cart_session_id')
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('cart_session_id', sessionId)
    }
    return sessionId
  }

  const sessionId = getSessionId()

  // Fetch cart on component mount
  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:8000/api/v1/api/cart/${sessionId}`)
      if (response.ok) {
        const data = await response.json()
        setCartItems(data.items || [])
        setCartCount(data.total_items || 0)
        setCartTotal(data.total_amount || 0)
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (product, quantity = 1) => {
    try {
      setLoading(true)
      
      const response = await fetch('http://localhost:8000/api/v1/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          product_id: product.product_id,
          quantity: quantity
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to add item to cart')
      }

      // Show success message
      showNotification(`✅ Added ${product.name} to cart!`, 'success')
      
      // Refresh cart
      await fetchCart()
      
      return true
    } catch (error) {
      console.error('Error adding to cart:', error)
      showNotification(`❌ ${error.message}`, 'error')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const updateCartItem = async (cartItemId, quantity) => {
    try {
      setLoading(true)
      
      const response = await fetch(`http://localhost:8000/api/v1/api/cart/${cartItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          quantity: quantity
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to update cart item')
      }

      // Refresh cart
      await fetchCart()
      showNotification('📝 Cart updated!', 'success')
      
    } catch (error) {
      console.error('Error updating cart item:', error)
      showNotification(`❌ ${error.message}`, 'error')
    } finally {
      setLoading(false)
    }
  }

  const removeFromCart = async (cartItemId) => {
    try {
      setLoading(true)
      
      const response = await fetch(`http://localhost:8000/api/v1/api/cart/${cartItemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to remove item from cart')
      }

      // Refresh cart
      await fetchCart()
      showNotification('🗑️ Item removed from cart', 'success')
      
    } catch (error) {
      console.error('Error removing from cart:', error)
      showNotification(`❌ ${error.message}`, 'error')
    } finally {
      setLoading(false)
    }
  }

  const clearCart = async () => {
    try {
      setLoading(true)
      
      const response = await fetch(`http://localhost:8000/api/v1/api/cart/clear/${sessionId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to clear cart')
      }

      // Reset cart state
      setCartItems([])
      setCartCount(0)
      setCartTotal(0)
      showNotification('🧹 Cart cleared!', 'success')
      
    } catch (error) {
      console.error('Error clearing cart:', error)
      showNotification(`❌ ${error.message}`, 'error')
    } finally {
      setLoading(false)
    }
  }

  const showNotification = (message, type = 'info') => {
    // Create notification element
    const notification = document.createElement('div')
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
      color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
      border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      animation: slideInRight 0.3s ease-out;
      max-width: 300px;
      word-wrap: break-word;
    `
    
    notification.textContent = message
    document.body.appendChild(notification)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-in'
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    loading,
    sessionId,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    fetchCart,
    formatPrice,
    showNotification
  }

  return (
    <CartContext.Provider value={value}>
      {children}
      
      {/* Add CSS animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </CartContext.Provider>
  )
}

export default CartProvider