import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthenticationPage from './components/auth/AuthenticationPage'
import Dashboard from './pages/Dashboard'
import AccountPage from './pages/AccountPage'
import CardUsageExamples from './pages/cardexample'
import YourOrderPage from './pages/YourOrderPage' 
import ProductDetailsPage from './pages/ProductDetailsPage'
import YourAdressPage from './pages/YourAdressPage'
import AddToCartPage from './pages/AddToCartPage'
import CheckOutPage from './pages/CheckOutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import SearchResults from './pages/SearchResults'

// Simple 404 component
const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '72px',
          marginBottom: '16px'
        }}>
          🔍
        </div>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 16px 0'
        }}>
          404
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#666',
          margin: '0 0 24px 0'
        }}>
          Oops! Page not found
        </p>
        <button
          onClick={() => window.location.href = '/'}
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
          }}
        >
          🏠 Go back home
        </button>
      </div>
    </div>
  )
}

// Protected route for authenticated users only
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth)
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

// Public route that redirects authenticated users away from login
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth)
  return isAuthenticated ? <Navigate to="/" replace /> : children
}

// Semi-protected route - shows content but may require auth for certain actions
const SemiProtectedRoute = ({ children }) => {
  // Always show the content, authentication is handled within components
  return children
}

const AppRouter = () => {
  return (
    <Routes>
      {/* Root route - Dashboard (PUBLIC ACCESS) */}
      <Route 
        path="/" 
        element={
          <SemiProtectedRoute>
            <Dashboard />
          </SemiProtectedRoute>
        } 
      />
      
      {/* Dashboard route (same as root) */}
      <Route 
        path="/dashboard" 
        element={
          <SemiProtectedRoute>
            <Dashboard />
          </SemiProtectedRoute>
        } 
      />
      
      {/* Login Route - redirects to home if already authenticated */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <AuthenticationPage />
          </PublicRoute>
        } 
      />
      
      {/* Search Results page - PUBLIC ACCESS */}
      <Route 
        path="/search" 
        element={
          <SemiProtectedRoute>
            <SearchResults />
          </SemiProtectedRoute>
        } 
      />

      {/* Product details page - PUBLIC ACCESS */}
      <Route 
        path="/product/:productId" 
        element={
          <SemiProtectedRoute>
            <ProductDetailsPage />
          </SemiProtectedRoute>
        } 
      />

      {/* PROTECTED ROUTES - Require Authentication */}
      
      {/* Account page - PROTECTED */}
      <Route 
        path="/your-account" 
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        } 
      />

      {/* Orders page - PROTECTED */}
      <Route 
        path="/orders" 
        element={
          <ProtectedRoute>
            <YourOrderPage />
          </ProtectedRoute>
        } 
      />

      {/* Address page - PROTECTED */}
      <Route 
        path="/address" 
        element={
          <ProtectedRoute>
            <YourAdressPage />
          </ProtectedRoute>
        } 
      />

      {/* Wishlist page - PROTECTED */}
      <Route 
        path="/wishlist" 
        element={
          <ProtectedRoute>
            <div style={{ 
              minHeight: '100vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '18px',
              color: '#666'
            }}>
              🚧 Wishlist page coming soon...
            </div>
          </ProtectedRoute>
        } 
      />

      {/* Cart page - PROTECTED (users need to login to manage cart) */}
      <Route 
        path="/cart" 
        element={
          <ProtectedRoute>
            <AddToCartPage />
          </ProtectedRoute>
        } 
      />

      {/* Checkout page - PROTECTED */}
      <Route 
        path="/checkout" 
        element={
          <ProtectedRoute>
            <CheckOutPage />
          </ProtectedRoute>
        } 
      />

      {/* Order confirmation page - PROTECTED */}
      <Route 
        path="/order-confirmation/:orderId" 
        element={
          <ProtectedRoute>
            <OrderConfirmationPage />
          </ProtectedRoute>
        } 
      />

      {/* Common card examples page - PROTECTED (admin/dev feature) */}
      <Route 
        path="/common-card-example" 
        element={
          <ProtectedRoute>
            <CardUsageExamples />
          </ProtectedRoute>
        } 
      />

      {/* Catch all unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter