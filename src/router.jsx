// // import React from 'react'
// // import { Routes, Route, Navigate } from 'react-router-dom'
// // import { useSelector } from 'react-redux'
// // import AuthenticationPage from './components/auth/AuthenticationPage'
// // import Dashboard from './pages/Dashboard'
// // // import NotFound from './components/NotFound'

// // // Simple Dashboard component for after login
// // // const Dashboard = () => {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-8">
// // //       <div className="max-w-4xl mx-auto">
// // //         <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
// // //         <div className="bg-white rounded-lg shadow p-6">
// // //           <p className="text-gray-600">Welcome! You have successfully logged in.</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // Simple 404 component
// // // const NotFound = () => {
// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // //       <div className="text-center">
// // //         <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
// // //         <p className="text-gray-600 mb-6">Page not found</p>
// // //         <a href="/" className="text-blue-600 hover:text-blue-700">
// // //           Go back home
// // //         </a>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // Protected Route wrapper component
// // const ProtectedRoute = ({ children }) => {
// //   const { isAuthenticated } = useSelector(state => state.auth)
// //   return isAuthenticated ? children : <Navigate to="/login" replace />
// // }

// // // Public Route wrapper component (redirects to dashboard if already authenticated)
// // const PublicRoute = ({ children }) => {
// //   const { isAuthenticated } = useSelector(state => state.auth)
// //   return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
// // }

// // const AppRouter = () => {
// //   const { isAuthenticated } = useSelector(state => state.auth)

// //   return (
// //     <Routes>
// //       {/* Public Routes */}
// //       <Route 
// //         path="/login" 
// //         element={
// //           <PublicRoute>
// //             <AuthenticationPage />
// //           </PublicRoute>
// //         } 
// //       />
      
// //       {/* Protected Routes */}
// //       <Route 
// //         path="/dashboard" 
// //         element={
// //           <ProtectedRoute>
// //             <Dashboard />
// //           </ProtectedRoute>
// //         } 
// //       />

// //             {/* <Route 
// //         path="/your-account" 
// //         element={
// //           <ProtectedRoute>
// //             <Dashboard />
// //           </ProtectedRoute>
// //         } 
// //       /> */}
      
// //       {/* Default Routes */}
// //       <Route 
// //         path="/" 
// //         element={
// //           <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
// //         } 
// //       />
      
// //       <Route path="*" element={<NotFound />} />
// //     </Routes>
// //   )
// // }

// // export default AppRouter







// // import React from 'react'
// // import { Routes, Route, Navigate } from 'react-router-dom'
// // import { useSelector } from 'react-redux'
// // import AuthenticationPage from './components/auth/AuthenticationPage'
// // import Dashboard from './pages/Dashboard'
// // import AccountPage from './pages/AccountPage'
// // import CardUsageExamples from './pages/cardexample'
// // import YourOrderPage from './pages/YourOrderPage' 
// // import ProductDetailsPage from './pages/ProductDetailsPage'
// // import YourAdressPage from './pages/YourAdressPage'

// // // Simple 404 component
// // const NotFound = () => {
// //   return (
// //     <div style={{
// //       minHeight: '100vh',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
// //     }}>
// //       <div style={{
// //         background: 'rgba(255, 255, 255, 0.95)',
// //         backdropFilter: 'blur(10px)',
// //         borderRadius: '16px',
// //         padding: '40px',
// //         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
// //         border: '1px solid rgba(255, 255, 255, 0.2)',
// //         textAlign: 'center'
// //       }}>
// //         <div style={{
// //           fontSize: '72px',
// //           marginBottom: '16px'
// //         }}>
// //           🔍
// //         </div>
// //         <h1 style={{
// //           fontSize: '48px',
// //           fontWeight: 'bold',
// //           color: '#333',
// //           margin: '0 0 16px 0'
// //         }}>
// //           404
// //         </h1>
// //         <p style={{
// //           fontSize: '18px',
// //           color: '#666',
// //           margin: '0 0 24px 0'
// //         }}>
// //           Oops! Page not found
// //         </p>
// //         <button
// //           onClick={() => window.location.href = '/'}
// //           style={{
// //             padding: '12px 24px',
// //             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '8px',
// //             fontSize: '16px',
// //             fontWeight: '500',
// //             cursor: 'pointer',
// //             transition: 'all 0.2s ease',
// //             boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
// //           }}
// //         >
// //           🏠 Go back home
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// // const ProtectedRoute = ({ children }) => {
// //   const { isAuthenticated } = useSelector(state => state.auth)
// //   return isAuthenticated ? children : <Navigate to="/login" replace />
// // }

// // const PublicRoute = ({ children }) => {
// //   const { isAuthenticated } = useSelector(state => state.auth)
// //   return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
// // }

// // const AppRouter = () => {
// //   const { isAuthenticated } = useSelector(state => state.auth)

// //   return (
// //     <Routes>
// //       {/* Root route - redirects based on auth status */}
// //       <Route 
// //         path="/" 
// //         element={
// //           <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
// //         } 
// //       />
      
// //       {/* Login Route */}
// //       <Route 
// //         path="/login" 
// //         element={
// //           <PublicRoute>
// //             <AuthenticationPage />
// //           </PublicRoute>
// //         } 
// //       />
      
// //       {/* Protected Routes */}
// //       <Route 
// //         path="/dashboard" 
// //         element={
// //           <ProtectedRoute>
// //             <Dashboard />
// //           </ProtectedRoute>
// //         } 
// //       />
// //                   <Route 
// //         path="/your-account" 
// //         element={
// //           <ProtectedRoute>
// //             <AccountPage />
// //           </ProtectedRoute>
// //         } 
// //       />
// //       {/* product details page start here */}

// //       <Route 
// //         path="/product/:id" 
// //         element={
// //           <ProtectedRoute>
// //             <ProductDetailsPage />
// //           </ProtectedRoute>
// //         } 
// //       />
// //       {/* your account page link starts here   */}

// //                         <Route 
// //         path="/orders" 
// //         element={
// //           <ProtectedRoute>
// //             <YourOrderPage />
// //           </ProtectedRoute>
// //         } 
// //       />

// //                         <Route 
// //         path="/address" 
// //         element={
// //           <ProtectedRoute>
// //             <YourAdressPage />
// //           </ProtectedRoute>
// //         } 
// //       />








// //                         <Route 
// //         path="/common-card-example" 
// //         element={
// //           <ProtectedRoute>
// //             <CardUsageExamples />
// //           </ProtectedRoute>
// //         } 
// //       />
      
// //       {/* Catch all unknown routes */}
// //       <Route path="*" element={<NotFound />} />
// //     </Routes>
// //   )
// // }

// // export default AppRouter



// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import AuthenticationPage from './components/auth/AuthenticationPage'
// import Dashboard from './pages/Dashboard'
// import AccountPage from './pages/AccountPage'
// import CardUsageExamples from './pages/cardexample'
// import YourOrderPage from './pages/YourOrderPage' 
// import ProductDetailsPage from './pages/ProductDetailsPage'
// import YourAdressPage from './pages/YourAdressPage'
// import AddToCartPage from './pages/AddToCartPage'
// import CheckOutPage from './pages/CheckOutPage'
// import OrderConfirmationPage from './pages/OrderConfirmationPage'

// // Simple 404 component
// const NotFound = () => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
//     }}>
//       <div style={{
//         background: 'rgba(255, 255, 255, 0.95)',
//         backdropFilter: 'blur(10px)',
//         borderRadius: '16px',
//         padding: '40px',
//         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//         border: '1px solid rgba(255, 255, 255, 0.2)',
//         textAlign: 'center'
//       }}>
//         <div style={{
//           fontSize: '72px',
//           marginBottom: '16px'
//         }}>
//           🔍
//         </div>
//         <h1 style={{
//           fontSize: '48px',
//           fontWeight: 'bold',
//           color: '#333',
//           margin: '0 0 16px 0'
//         }}>
//           404
//         </h1>
//         <p style={{
//           fontSize: '18px',
//           color: '#666',
//           margin: '0 0 24px 0'
//         }}>
//           Oops! Page not found
//         </p>
//         <button
//           onClick={() => window.location.href = '/dashboard'}
//           style={{
//             padding: '12px 24px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             transition: 'all 0.2s ease',
//             boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
//           }}
//         >
//           🏠 Go back to dashboard
//         </button>
//       </div>
//     </div>
//   )
// }

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useSelector(state => state.auth)
//   return isAuthenticated ? children : <Navigate to="/login" replace />
// }

// const PublicRoute = ({ children }) => {
//   const { isAuthenticated } = useSelector(state => state.auth)
//   return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
// }

// const AppRouter = () => {
//   const { isAuthenticated } = useSelector(state => state.auth)

//   return (
//     <Routes>
//       {/* Root route - redirects based on auth status */}
//       <Route 
//         path="/" 
//         element={
//           <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
//         } 
//       />
      
//       {/* Login Route */}
//       <Route 
//         path="/login" 
//         element={
//           <PublicRoute>
//             <AuthenticationPage />
//           </PublicRoute>
//         } 
//       />
      
//       {/* Protected Routes */}
//       <Route 
//         path="/dashboard" 
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Account page */}
//       <Route 
//         path="/your-account" 
//         element={
//           <ProtectedRoute>
//             <AccountPage />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Product details page - IMPORTANT: Changed from :id to :productId for consistency */}
//       <Route 
//         path="/product/:productId" 
//         element={
//           <ProtectedRoute>
//             <ProductDetailsPage />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Orders page */}
//       <Route 
//         path="/orders" 
//         element={
//           <ProtectedRoute>
//             <YourOrderPage />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Address page */}
//       <Route 
//         path="/address" 
//         element={
//           <ProtectedRoute>
//             <YourAdressPage />
//           </ProtectedRoute>
//         } 
//       />
//             {/* Add To Cart page */}
//       <Route 
//         path="/cart" 
//         element={
//           <ProtectedRoute>
//             <AddToCartPage />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Common card examples page */}
//       <Route 
//         path="/common-card-example" 
//         element={
//           <ProtectedRoute>
//             <CardUsageExamples />
//           </ProtectedRoute>
//         } 
//       />

//       {/* chack out page */}


//             <Route 
//         path="/checkout" 
//         element={
//           <ProtectedRoute>
//             <CheckOutPage />
//           </ProtectedRoute>
//         } 
//       />

//                   <Route 
//         path="/order-confirmation/:orderId" 
//         element={
//           <ProtectedRoute>
//             <OrderConfirmationPage />
//           </ProtectedRoute>
//         } 
//       />

      
      
//       {/* Catch all unknown routes */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   )
// }

// export default AppRouter



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
import SearchResults from './pages/SearchResults' // Add this import

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
          onClick={() => window.location.href = '/dashboard'}
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
          🏠 Go back to dashboard
        </button>
      </div>
    </div>
  )
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth)
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth)
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
}

const AppRouter = () => {
  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <Routes>
      {/* Root route - redirects based on auth status */}
      <Route 
        path="/" 
        element={
          <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
        } 
      />
      
      {/* Login Route */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <AuthenticationPage />
          </PublicRoute>
        } 
      />
      
      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />

      {/* Account page */}
      <Route 
        path="/your-account" 
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        } 
      />

      {/* Search Results page - NEW ELASTICSEARCH SEARCH */}
      <Route 
        path="/search" 
        element={
          <ProtectedRoute>
            <SearchResults />
          </ProtectedRoute>
        } 
      />

      {/* Product details page - IMPORTANT: Changed from :id to :productId for consistency */}
      <Route 
        path="/product/:productId" 
        element={
          <ProtectedRoute>
            <ProductDetailsPage />
          </ProtectedRoute>
        } 
      />

      {/* Orders page */}
      <Route 
        path="/orders" 
        element={
          <ProtectedRoute>
            <YourOrderPage />
          </ProtectedRoute>
        } 
      />

      {/* Address page */}
      <Route 
        path="/address" 
        element={
          <ProtectedRoute>
            <YourAdressPage />
          </ProtectedRoute>
        } 
      />

      {/* Add To Cart page */}
      <Route 
        path="/cart" 
        element={
          <ProtectedRoute>
            <AddToCartPage />
          </ProtectedRoute>
        } 
      />

      {/* Common card examples page */}
      <Route 
        path="/common-card-example" 
        element={
          <ProtectedRoute>
            <CardUsageExamples />
          </ProtectedRoute>
        } 
      />

      {/* Checkout page */}
      <Route 
        path="/checkout" 
        element={
          <ProtectedRoute>
            <CheckOutPage />
          </ProtectedRoute>
        } 
      />

      {/* Order confirmation page */}
      <Route 
        path="/order-confirmation/:orderId" 
        element={
          <ProtectedRoute>
            <OrderConfirmationPage />
          </ProtectedRoute>
        } 
      />

      {/* Catch all unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter