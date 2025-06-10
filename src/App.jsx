// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// // App.jsx
// import React, { useEffect } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { checkAuthStatus } from './redux/slices/authSlices'
// import AuthenticationPage from './components/auth/AuthenticationPage'
// import LoadingSpinner from './components/ui/LoadingSpinner'

// // Simple Dashboard component for after login
// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
//         <div className="bg-white rounded-lg shadow p-6">
//           <p className="text-gray-600">Welcome! You have successfully logged in.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Simple 404 component
// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
//         <p className="text-gray-600 mb-6">Page not found</p>
//         <a href="/" className="text-blue-600 hover:text-blue-700">
//           Go back home
//         </a>
//       </div>
//     </div>
//   )
// }

// function App() {
//   const dispatch = useDispatch()
//   const { isAuthenticated, isLoading, isInitialized } = useSelector(state => state.auth)

//   useEffect(() => {
//     if (!isInitialized) {
//       dispatch(checkAuthStatus())
//     }
//   }, [dispatch, isInitialized])

//   // Show loading spinner while checking auth status
//   if (!isInitialized || isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <LoadingSpinner size="large" text="Loading..." />
//       </div>
//     )
//   }

//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route 
//         path="/login" 
//         element={
//           isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthenticationPage />
//         } 
//       />
      
//       {/* Protected Routes */}
//       <Route 
//         path="/dashboard" 
//         element={
//           isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
//         } 
//       />
      
//       {/* Default Routes */}
//       <Route 
//         path="/" 
//         element={
//           <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
//         } 
//       />
      
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   )
// }

// export default App

// import React, { useEffect } from 'react'
// // import { Routes, Route, Navigate } from 'react-router-dom'  // Commented out until installed
// import { useSelector, useDispatch } from 'react-redux'
// import { checkAuthStatus, logout } from './redux/slices/authSlices'
// import AuthenticationPage from './components/auth/AuthenticationPage'
// import LoadingSpinner from './components/ui/LoadingSpinner'

// // Enhanced Dashboard component with logout functionality
// const Dashboard = () => {
//   const dispatch = useDispatch()
//   const { user, isLoading } = useSelector(state => state.auth)

//   const handleLogout = async () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       dispatch(logout())
//     }
//   }

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
//     }}>
//       {/* Header with Logout */}
//       <header style={{
//         background: 'rgba(255, 255, 255, 0.95)',
//         backdropFilter: 'blur(10px)',
//         borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
//         padding: '16px 0',
//         boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
//       }}>
//         <div style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '0 24px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center'
//         }}>
//           {/* Logo/Brand */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px'
//           }}>
//             <div style={{
//               width: '40px',
//               height: '40px',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               borderRadius: '8px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               color: 'white',
//               fontWeight: 'bold',
//               fontSize: '18px'
//             }}>
//               🏠
//             </div>
//             <h1 style={{
//               fontSize: '24px',
//               fontWeight: '600',
//               color: '#333',
//               margin: '0'
//             }}>
//               Dashboard
//             </h1>
//           </div>

//           {/* User Info and Logout */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px'
//           }}>
//             {/* User Avatar and Info */}
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px',
//               padding: '8px 16px',
//               background: 'rgba(102, 126, 234, 0.1)',
//               borderRadius: '24px',
//               border: '1px solid rgba(102, 126, 234, 0.2)'
//             }}>
//               <div style={{
//                 width: '32px',
//                 height: '32px',
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 fontSize: '14px'
//               }}>
//                 {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//               </div>
//               <div>
//                 <p style={{
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   margin: '0',
//                   lineHeight: '1.2'
//                 }}>
//                   {user?.name || 'User'}
//                 </p>
//                 <p style={{
//                   fontSize: '12px',
//                   color: '#666',
//                   margin: '0',
//                   lineHeight: '1.2'
//                 }}>
//                   {user?.email || user?.phoneNumber || 'user@example.com'}
//                 </p>
//               </div>
//             </div>

//             {/* Logout Button */}
//             <button
//               onClick={handleLogout}
//               disabled={isLoading}
//               style={{
//                 padding: '10px 20px',
//                 background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 cursor: isLoading ? 'not-allowed' : 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 transition: 'all 0.2s ease',
//                 boxShadow: '0 2px 8px rgba(255, 107, 107, 0.3)',
//                 opacity: isLoading ? 0.7 : 1
//               }}
//               onMouseOver={(e) => {
//                 if (!isLoading) {
//                   e.target.style.transform = 'translateY(-1px)'
//                   e.target.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.4)'
//                 }
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.transform = 'translateY(0)'
//                 e.target.style.boxShadow = '0 2px 8px rgba(255, 107, 107, 0.3)'
//               }}
//             >
//               {isLoading ? (
//                 <>
//                   <LoadingSpinner size="small" color="white" />
//                   <span>Logging out...</span>
//                 </>
//               ) : (
//                 <>
//                   <span>🚪</span>
//                   <span>Logout</span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main style={{
//         padding: '40px 24px',
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         {/* Welcome Card */}
//         <div style={{
//           background: 'rgba(255, 255, 255, 0.95)',
//           backdropFilter: 'blur(10px)',
//           borderRadius: '16px',
//           padding: '32px',
//           marginBottom: '32px',
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//           border: '1px solid rgba(255, 255, 255, 0.2)'
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'flex-start',
//             gap: '20px'
//           }}>
//             <div style={{
//               width: '64px',
//               height: '64px',
//               background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
//               borderRadius: '16px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '32px'
//             }}>
//               🎉
//             </div>
//             <div style={{ flex: 1 }}>
//               <h2 style={{
//                 fontSize: '28px',
//                 fontWeight: '600',
//                 color: '#333',
//                 margin: '0 0 8px 0'
//               }}>
//                 Welcome back, {user?.name || 'User'}!
//               </h2>
//               <p style={{
//                 fontSize: '16px',
//                 color: '#666',
//                 margin: '0 0 16px 0',
//                 lineHeight: '1.6'
//               }}>
//                 You have successfully logged in to your dashboard. Your authentication system is working perfectly!
//               </p>
//               <div style={{
//                 display: 'flex',
//                 gap: '8px',
//                 flexWrap: 'wrap'
//               }}>
//                 <span style={{
//                   padding: '6px 12px',
//                   background: 'rgba(76, 175, 80, 0.1)',
//                   color: '#4caf50',
//                   borderRadius: '20px',
//                   fontSize: '12px',
//                   fontWeight: '500',
//                   border: '1px solid rgba(76, 175, 80, 0.2)'
//                 }}>
//                   ✅ Authenticated
//                 </span>
//                 <span style={{
//                   padding: '6px 12px',
//                   background: 'rgba(33, 150, 243, 0.1)',
//                   color: '#2196f3',
//                   borderRadius: '20px',
//                   fontSize: '12px',
//                   fontWeight: '500',
//                   border: '1px solid rgba(33, 150, 243, 0.2)'
//                 }}>
//                   🔒 Secure Session
//                 </span>
//                 <span style={{
//                   padding: '6px 12px',
//                   background: 'rgba(156, 39, 176, 0.1)',
//                   color: '#9c27b0',
//                   borderRadius: '20px',
//                   fontSize: '12px',
//                   fontWeight: '500',
//                   border: '1px solid rgba(156, 39, 176, 0.2)'
//                 }}>
//                   🚀 Active User
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats Grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//           gap: '24px',
//           marginBottom: '32px'
//         }}>
//           {[
//             { title: 'Profile Status', value: 'Complete', icon: '👤', color: '#4caf50' },
//             { title: 'Security Level', value: 'High', icon: '🛡️', color: '#2196f3' },
//             { title: 'Last Login', value: 'Just now', icon: '🕒', color: '#ff9800' },
//             { title: 'Session Type', value: user?.phoneNumber ? 'Phone' : 'SSO', icon: '📱', color: '#9c27b0' }
//           ].map((stat, index) => (
//             <div key={index} style={{
//               background: 'rgba(255, 255, 255, 0.95)',
//               backdropFilter: 'blur(10px)',
//               borderRadius: '12px',
//               padding: '24px',
//               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//               border: '1px solid rgba(255, 255, 255, 0.2)',
//               transition: 'transform 0.2s ease'
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = 'translateY(-4px)'
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = 'translateY(0)'
//             }}
//             >
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '12px'
//               }}>
//                 <div style={{
//                   width: '40px',
//                   height: '40px',
//                   background: `${stat.color}20`,
//                   borderRadius: '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '20px'
//                 }}>
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <h3 style={{
//                     fontSize: '14px',
//                     color: '#666',
//                     margin: '0',
//                     fontWeight: '500'
//                   }}>
//                     {stat.title}
//                   </h3>
//                   <p style={{
//                     fontSize: '18px',
//                     color: stat.color,
//                     margin: '0',
//                     fontWeight: '600'
//                   }}>
//                     {stat.value}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Action Center */}
//         <div style={{
//           background: 'rgba(255, 255, 255, 0.95)',
//           backdropFilter: 'blur(10px)',
//           borderRadius: '16px',
//           padding: '32px',
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//           border: '1px solid rgba(255, 255, 255, 0.2)'
//         }}>
//           <h3 style={{
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#333',
//             margin: '0 0 20px 0'
//           }}>
//             🎯 Quick Actions
//           </h3>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//             gap: '16px'
//           }}>
//             {[
//               { label: '👤 Edit Profile', desc: 'Update your information' },
//               { label: '🔒 Security Settings', desc: 'Manage your security' },
//               { label: '📊 View Analytics', desc: 'Check your activity' },
//               { label: '⚙️ Preferences', desc: 'Customize your experience' }
//             ].map((action, index) => (
//               <button key={index} style={{
//                 padding: '16px',
//                 background: 'rgba(102, 126, 234, 0.1)',
//                 border: '1px solid rgba(102, 126, 234, 0.2)',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 transition: 'all 0.2s ease',
//                 textAlign: 'left'
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.background = 'rgba(102, 126, 234, 0.2)'
//                 e.target.style.transform = 'translateY(-2px)'
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.background = 'rgba(102, 126, 234, 0.1)'
//                 e.target.style.transform = 'translateY(0)'
//               }}
//               >
//                 <div style={{
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   marginBottom: '4px'
//                 }}>
//                   {action.label}
//                 </div>
//                 <div style={{
//                   fontSize: '12px',
//                   color: '#666'
//                 }}>
//                   {action.desc}
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// // Simple 404 component
// const NotFound = () => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: '#f5f5f5',
//       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
//     }}>
//       <div style={{ textAlign: 'center' }}>
//         <h1 style={{
//           fontSize: '72px',
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
//           Page not found
//         </p>
//         <a href="/" style={{
//           color: '#667eea',
//           textDecoration: 'none',
//           fontSize: '16px',
//           fontWeight: '500'
//         }}>
//           Go back home
//         </a>
//       </div>
//     </div>
//   )
// }

// function App() {
//   const dispatch = useDispatch()
//   const { isAuthenticated, isLoading, isInitialized } = useSelector(state => state.auth)

//   useEffect(() => {
//     if (!isInitialized) {
//       dispatch(checkAuthStatus())
//     }
//   }, [dispatch, isInitialized])

//   // Show loading spinner while checking auth status
//   if (!isInitialized || isLoading) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: '#f5f5f5'
//       }}>
//         <LoadingSpinner size="large" text="Loading..." />
//       </div>
//     )
//   }

//   // Simple conditional rendering without router for now
//   if (isAuthenticated) {
//     return <Dashboard />
//   } else {
//     return <AuthenticationPage />
//   }
// }

// export default App















// import React, { useEffect } from 'react'
// // import { Routes, Route, Navigate } from 'react-router-dom'  // Commented out until installed
// import { useSelector, useDispatch } from 'react-redux'
// import { checkAuthStatus } from './redux/slices/authSlices'
// import AuthenticationPage from './components/auth/AuthenticationPage'
// import Dashboard from './pages/Dashboard'
// import LoadingSpinner from './components/ui/LoadingSpinner'

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
//           onClick={() => window.location.href = '/'}
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
//           onMouseOver={(e) => {
//             e.target.style.transform = 'translateY(-2px)'
//             e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
//           }}
//           onMouseOut={(e) => {
//             e.target.style.transform = 'translateY(0)'
//             e.target.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)'
//           }}
//         >
//           🏠 Go back home
//         </button>
//       </div>
//     </div>
//   )
// }

// function App() {
//   const dispatch = useDispatch()
//   const { isAuthenticated, isLoading, isInitialized } = useSelector(state => state.auth)

//   useEffect(() => {
//     if (!isInitialized) {
//       dispatch(checkAuthStatus())
//     }
//   }, [dispatch, isInitialized])

//   // Show loading spinner while checking auth status
//   if (!isInitialized || isLoading) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//         fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
//       }}>
//         <div style={{
//           background: 'rgba(255, 255, 255, 0.95)',
//           backdropFilter: 'blur(10px)',
//           borderRadius: '16px',
//           padding: '40px',
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//           border: '1px solid rgba(255, 255, 255, 0.2)',
//           textAlign: 'center'
//         }}>
//           <div style={{
//             width: '60px',
//             height: '60px',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             margin: '0 auto 20px',
//             fontSize: '24px'
//           }}>
//             🚀
//           </div>
//           <LoadingSpinner size="large" />
//           <p style={{
//             marginTop: '16px',
//             fontSize: '16px',
//             color: '#666',
//             fontWeight: '500'
//           }}>
//             Loading your dashboard...
//           </p>
//           <p style={{
//             marginTop: '8px',
//             fontSize: '14px',
//             color: '#999'
//           }}>
//             Please wait while we set everything up
//           </p>
//         </div>
//       </div>
//     )
//   }

//   if (isAuthenticated) {
//     return <Dashboard />
//   } else {
//     return <AuthenticationPage />
//   }
// }

// export default App












import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store' // Adjust path as needed
import AppContent from './AppContent'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  )
}

export default App




// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { checkAuthStatus } from './redux/slices/authSlices'
// import LoadingSpinner from './components/ui/LoadingSpinner'
// import AppRouter from './router'

// function App() {
//   const dispatch = useDispatch()
//   const { isLoading, isInitialized } = useSelector(state => state.auth)

//   useEffect(() => {
//     if (!isInitialized) {
//       dispatch(checkAuthStatus())
//     }
//   }, [dispatch, isInitialized])

//   // Show loading spinner while checking auth status
//   if (!isInitialized || isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <LoadingSpinner size="large" text="Loading..." />
//       </div>
//     )
//   }

//   return <AppRouter />
// }

// export default App