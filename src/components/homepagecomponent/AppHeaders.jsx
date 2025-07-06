// // import React, { useState, useRef, useEffect } from 'react'
// // import { useSelector, useDispatch } from 'react-redux'
// // import { logout } from '../../redux/slices/authSlices'
// // import LoadingSpinner from '../ui/LoadingSpinner'

// // const Header = ({ onSearch, searchQuery }) => {
// //   const dispatch = useDispatch()
// //   const { user, isLoading } = useSelector(state => state.auth)
// //   const [showProfileDropdown, setShowProfileDropdown] = useState(false)
// //   const [searchInput, setSearchInput] = useState(searchQuery || '')
// //   const [searchSuggestions, setSearchSuggestions] = useState([])
// //   const [showSuggestions, setShowSuggestions] = useState(false)
// //   const dropdownRef = useRef(null)
// //   const searchRef = useRef(null)

// //   const handleLogout = async () => {
// //     if (window.confirm('Are you sure you want to logout?')) {
// //       dispatch(logout())
// //     }
// //   }

// //   const handleSearch = (e) => {
// //     e.preventDefault()
// //     if (searchInput.trim()) {
// //       onSearch(searchInput.trim())
// //       setShowSuggestions(false)
// //     }
// //   }

// //   const handleSearchInputChange = async (e) => {
// //     const value = e.target.value
// //     setSearchInput(value)
    
// //     if (value.length >= 2) {
// //       try {
// //         const response = await fetch(`http://localhost:8000/api/v1/api/search/suggestions?q=${encodeURIComponent(value)}`)
// //         if (response.ok) {
// //           const suggestions = await response.json()
// //           setSearchSuggestions(suggestions)
// //           setShowSuggestions(true)
// //         }
// //       } catch (error) {
// //         console.error('Error fetching suggestions:', error)
// //       }
// //     } else {
// //       setShowSuggestions(false)
// //     }
// //   }

// //   const handleSuggestionClick = (suggestion) => {
// //     setSearchInput(suggestion)
// //     setShowSuggestions(false)
// //     onSearch(suggestion)
// //   }

// //   // Close dropdowns when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setShowProfileDropdown(false)
// //       }
// //       if (searchRef.current && !searchRef.current.contains(event.target)) {
// //         setShowSuggestions(false)
// //       }
// //     }

// //     document.addEventListener('mousedown', handleClickOutside)
// //     return () => document.removeEventListener('mousedown', handleClickOutside)
// //   }, [])

// //   return (
// //     <header style={{
// //       position: 'sticky',
// //       top: 0,
// //       zIndex: 1000,
// //       background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
// //       boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
// //       borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
// //     }}>
// //       <div style={{
// //         maxWidth: '1400px',
// //         margin: '0 auto',
// //         padding: '12px 24px',
// //         display: 'flex',
// //         alignItems: 'center',
// //         gap: '24px'
// //       }}>
// //         {/* Logo */}
// //         <div style={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '12px',
// //           minWidth: 'fit-content'
// //         }}>
// //           <div style={{
// //             width: '40px',
// //             height: '40px',
// //             background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// //             borderRadius: '8px',
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             fontSize: '20px'
// //           }}>
// //             🛒
// //           </div>
// //           <h1 style={{
// //             fontSize: '24px',
// //             fontWeight: 'bold',
// //             color: 'white',
// //             margin: '0',
// //             background: 'linear-gradient(45deg, #fff, #f0f8ff)',
// //             WebkitBackgroundClip: 'text',
// //             WebkitTextFillColor: 'transparent',
// //             backgroundClip: 'text'
// //           }}>
// //             E-commerce
// //           </h1>
// //         </div>

// //         {/* Search Bar */}
// //         <div ref={searchRef} style={{
// //           flex: 1,
// //           position: 'relative',
// //           maxWidth: '600px'
// //         }}>
// //           <form onSubmit={handleSearch} style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             background: 'rgba(255, 255, 255, 0.95)',
// //             borderRadius: '25px',
// //             padding: '2px',
// //             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
// //           }}>
// //             <input
// //               type="text"
// //               placeholder="Search for products..."
// //               value={searchInput}
// //               onChange={handleSearchInputChange}
// //               style={{
// //                 flex: 1,
// //                 padding: '12px 20px',
// //                 border: 'none',
// //                 borderRadius: '25px',
// //                 fontSize: '16px',
// //                 outline: 'none',
// //                 background: 'transparent'
// //               }}
// //             />
// //             <button
// //               type="submit"
// //               style={{
// //                 padding: '10px 20px',
// //                 background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '22px',
// //                 cursor: 'pointer',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 gap: '8px',
// //                 fontSize: '14px',
// //                 fontWeight: '500',
// //                 margin: '2px'
// //               }}
// //             >
// //               🔍 Search
// //             </button>
// //           </form>

// //           {/* Search Suggestions */}
// //           {showSuggestions && searchSuggestions.length > 0 && (
// //             <div style={{
// //               position: 'absolute',
// //               top: '100%',
// //               left: 0,
// //               right: 0,
// //               background: 'white',
// //               borderRadius: '8px',
// //               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
// //               marginTop: '4px',
// //               zIndex: 1001,
// //               maxHeight: '300px',
// //               overflowY: 'auto'
// //             }}>
// //               {searchSuggestions.map((suggestion, index) => (
// //                 <div
// //                   key={index}
// //                   onClick={() => handleSuggestionClick(suggestion)}
// //                   style={{
// //                     padding: '12px 20px',
// //                     cursor: 'pointer',
// //                     borderBottom: index < searchSuggestions.length - 1 ? '1px solid #eee' : 'none',
// //                     fontSize: '14px',
// //                     color: '#333'
// //                   }}
// //                   onMouseOver={(e) => {
// //                     e.target.style.background = '#f8f9fa'
// //                   }}
// //                   onMouseOut={(e) => {
// //                     e.target.style.background = 'transparent'
// //                   }}
// //                 >
// //                   🔍 {suggestion}
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* User Profile and Actions */}
// //         <div style={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '16px',
// //           minWidth: 'fit-content'
// //         }}>
// //           {/* Cart Icon */}
// //           <button style={{
// //             padding: '10px',
// //             background: 'rgba(255, 255, 255, 0.1)',
// //             color: 'white',
// //             border: '1px solid rgba(255, 255, 255, 0.2)',
// //             borderRadius: '8px',
// //             cursor: 'pointer',
// //             fontSize: '20px',
// //             display: 'flex',
// //             alignItems: 'center',
// //             position: 'relative'
// //           }}>
// //             🛒
// //             <span style={{
// //               position: 'absolute',
// //               top: '-5px',
// //               right: '-5px',
// //               background: '#ff6b6b',
// //               color: 'white',
// //               borderRadius: '50%',
// //               width: '20px',
// //               height: '20px',
// //               fontSize: '12px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               fontWeight: 'bold'
// //             }}>
// //               0
// //             </span>
// //           </button>

// //           {/* Profile Dropdown */}
// //           <div ref={dropdownRef} style={{ position: 'relative' }}>
// //             <button
// //               onClick={() => setShowProfileDropdown(!showProfileDropdown)}
// //               style={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 gap: '12px',
// //                 padding: '8px 16px',
// //                 background: 'rgba(255, 255, 255, 0.1)',
// //                 border: '1px solid rgba(255, 255, 255, 0.2)',
// //                 borderRadius: '25px',
// //                 cursor: 'pointer',
// //                 color: 'white'
// //               }}
// //             >
// //               <div style={{
// //                 width: '32px',
// //                 height: '32px',
// //                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //                 borderRadius: '50%',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 color: 'white',
// //                 fontWeight: 'bold',
// //                 fontSize: '14px'
// //               }}>
// //                 {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
// //               </div>
// //               <div style={{ textAlign: 'left' }}>
// //                 <p style={{
// //                   fontSize: '14px',
// //                   fontWeight: '500',
// //                   margin: '0',
// //                   lineHeight: '1.2'
// //                 }}>
// //                   {user?.name || 'User'}
// //                 </p>
// //                 <p style={{
// //                   fontSize: '12px',
// //                   opacity: 0.8,
// //                   margin: '0',
// //                   lineHeight: '1.2'
// //                 }}>
// //                   View Profile
// //                 </p>
// //               </div>
// //               <span style={{
// //                 fontSize: '12px',
// //                 marginLeft: '4px'
// //               }}>
// //                 {showProfileDropdown ? '▲' : '▼'}
// //               </span>
// //             </button>

// //             {/* Dropdown Menu */}
// //             {showProfileDropdown && (
// //               <div style={{
// //                 position: 'absolute',
// //                 top: '100%',
// //                 right: 0,
// //                 background: 'white',
// //                 borderRadius: '8px',
// //                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
// //                 marginTop: '8px',
// //                 minWidth: '200px',
// //                 zIndex: 1001,
// //                 border: '1px solid rgba(0, 0, 0, 0.1)'
// //               }}>
// //                 <div style={{
// //                   padding: '16px',
// //                   borderBottom: '1px solid #eee'
// //                 }}>
// //                   <p style={{
// //                     fontSize: '16px',
// //                     fontWeight: '600',
// //                     color: '#333',
// //                     margin: '0 0 4px 0'
// //                   }}>
// //                     {user?.name || 'User'}
// //                   </p>
// //                   <p style={{
// //                     fontSize: '14px',
// //                     color: '#666',
// //                     margin: '0'
// //                   }}>
// //                     {user?.email || user?.phoneNumber || 'user@example.com'}
// //                   </p>
// //                 </div>
                
// //                 <div style={{ padding: '8px 0' }}>
// //                   {[
// //                     { icon: '👤', label: 'My Profile', action: () => {} },
// //                     { icon: '📦', label: 'My Orders', action: () => {} },
// //                     { icon: '❤️', label: 'Wishlist', action: () => {} },
// //                     { icon: '⚙️', label: 'Settings', action: () => {} }
// //                   ].map((item, index) => (
// //                     <button
// //                       key={index}
// //                       onClick={item.action}
// //                       style={{
// //                         width: '100%',
// //                         padding: '12px 16px',
// //                         background: 'none',
// //                         border: 'none',
// //                         textAlign: 'left',
// //                         cursor: 'pointer',
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         gap: '12px',
// //                         fontSize: '14px',
// //                         color: '#333'
// //                       }}
// //                       onMouseOver={(e) => {
// //                         e.target.style.background = '#f8f9fa'
// //                       }}
// //                       onMouseOut={(e) => {
// //                         e.target.style.background = 'none'
// //                       }}
// //                     >
// //                       <span>{item.icon}</span>
// //                       <span>{item.label}</span>
// //                     </button>
// //                   ))}
                  
// //                   <div style={{
// //                     height: '1px',
// //                     background: '#eee',
// //                     margin: '8px 0'
// //                   }} />
                  
// //                   <button
// //                     onClick={handleLogout}
// //                     disabled={isLoading}
// //                     style={{
// //                       width: '100%',
// //                       padding: '12px 16px',
// //                       background: 'none',
// //                       border: 'none',
// //                       textAlign: 'left',
// //                       cursor: isLoading ? 'not-allowed' : 'pointer',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       gap: '12px',
// //                       fontSize: '14px',
// //                       color: '#ff6b6b',
// //                       opacity: isLoading ? 0.7 : 1
// //                     }}
// //                     onMouseOver={(e) => {
// //                       if (!isLoading) {
// //                         e.target.style.background = '#fff5f5'
// //                       }
// //                     }}
// //                     onMouseOut={(e) => {
// //                       e.target.style.background = 'none'
// //                     }}
// //                   >
// //                     {isLoading ? (
// //                       <>
// //                         <LoadingSpinner size="small" color="#ff6b6b" />
// //                         <span>Logging out...</span>
// //                       </>
// //                     ) : (
// //                       <>
// //                         <span>🚪</span>
// //                         <span>Logout</span>
// //                       </>
// //                     )}
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   )
// // }

// // export default Header
















// import React, { useState, useRef, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../../redux/slices/authSlices'
// import LoadingSpinner from '../ui/LoadingSpinner'
// import { useNavigate } from 'react-router-dom'

// const Header = ({ onSearch, searchQuery }) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()  
//   const { user, isLoading } = useSelector(state => state.auth)
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false)
//   const [searchInput, setSearchInput] = useState(searchQuery || '')
//   const [searchSuggestions, setSearchSuggestions] = useState([])
//   const [showSuggestions, setShowSuggestions] = useState(false)
//   const dropdownRef = useRef(null)
//   const searchRef = useRef(null)

//   const handleLogout = async () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       dispatch(logout())
//     }
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (searchInput.trim()) {
//       onSearch(searchInput.trim())
//       setShowSuggestions(false)
//     }
//   }

//   const handleSearchInputChange = async (e) => {
//     const value = e.target.value
//     setSearchInput(value)
    
//     if (value.length >= 2) {
//       try {
//         const response = await fetch(`http://localhost:8000/api/v1/api/search/suggestions?q=${encodeURIComponent(value)}`)
//         if (response.ok) {
//           const suggestions = await response.json()
//           setSearchSuggestions(suggestions)
//           setShowSuggestions(true)
//         }
//       } catch (error) {
//         console.error('Error fetching suggestions:', error)
//       }
//     } else {
//       setShowSuggestions(false)
//     }
//   }

//   const handleSuggestionClick = (suggestion) => {
//     setSearchInput(suggestion)
//     setShowSuggestions(false)
//     onSearch(suggestion)
//   }

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowProfileDropdown(false)
//       }
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowSuggestions(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   return (
//     <>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');
          
//           .header-container {
//             font-family: 'Amazon Ember', Arial, sans-serif;
//           }
          
//           .profile-dropdown-enter {
//             animation: dropdownSlideIn 0.2s ease-out;
//           }
          
//           @keyframes dropdownSlideIn {
//             from {
//               opacity: 0;
//               transform: translateY(-10px) scale(0.95);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0) scale(1);
//             }
//           }
          
//           .search-suggestion:hover {
//             background: linear-gradient(90deg, #f3f3f3 0%, #e8f4fd 100%) !important;
//           }
          
//           @media (max-width: 768px) {
//             .header-search {
//               max-width: 200px;
//             }
//             .header-logo h1 {
//               display: none;
//             }
//             .profile-text {
//               display: none;
//             }
//           }
          
//           @media (max-width: 480px) {
//             .header-search {
//               max-width: 150px;
//             }
//           }
//         `}
//       </style>

//       <header className="header-container" style={{
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000,
//         background: '#232f3e',
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
//         borderBottom: '1px solid #3c4043'
//       }}>
//         <div style={{
//           maxWidth: '1400px',
//           margin: '0 auto',
//           padding: '12px 24px',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '20px'
//         }}>
//           {/* Logo */}
//           <div className="header-logo" style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             minWidth: 'fit-content'
//           }}>
//             <div style={{
//               width: '40px',
//               height: '40px',
//               background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)',
//               borderRadius: '6px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '20px',
//               boxShadow: '0 2px 4px rgba(255, 153, 0, 0.3)'
//             }}>
//               🛒
//             </div>
//             <h1 style={{
//               fontSize: '22px',
//               fontWeight: '700',
//               color: '#fff',
//               margin: '0',
//               letterSpacing: '-0.5px'
//             }}>
//               E-commerce
//             </h1>
//           </div>

//           {/* Search Bar */}
//           <div ref={searchRef} className="header-search" style={{
//             flex: 1,
//             position: 'relative',
//             maxWidth: '1000px'
//           }}>
//             <form onSubmit={handleSearch} style={{
//               display: 'flex',
//               alignItems: 'center',
//               background: '#fff',
//               borderRadius: '4px',
//               border: '2px solid transparent',
//               overflow: 'hidden',
//               transition: 'border-color 0.2s ease'
//             }}
//             onFocus={(e) => {
//               e.currentTarget.style.borderColor = '#ff9900'
//             }}
//             onBlur={(e) => {
//               e.currentTarget.style.borderColor = 'transparent'
//             }}
//             >
//               <input
//                 type="text"
//                 placeholder="Search e-Commerce"
//                 value={searchInput}
//                 onChange={handleSearchInputChange}
//                 style={{
//                   flex: 1,
//                   padding: '10px 16px',
//                   border: 'none',
//                   fontSize: '14px',
//                   outline: 'none',
//                   background: 'transparent',
//                   color: '#111'
//                 }}
//               />
//               <button
//                 type="submit"
//                 style={{
//                   padding: '10px 16px',
//                   background: '#febd69',
//                   color: '#111',
//                   border: 'none',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '6px',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   transition: 'background 0.2s ease'
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.background = '#ff9900'
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.background = '#febd69'
//                 }}
//               >
//                 🔍
//               </button>
//             </form>

//             {/* Search Suggestions */}
//             {showSuggestions && searchSuggestions.length > 0 && (
//               <div style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 right: 0,
//                 background: '#fff',
//                 border: '1px solid #ddd',
//                 borderTop: 'none',
//                 borderRadius: '0 0 4px 4px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 zIndex: 1001,
//                 maxHeight: '300px',
//                 overflowY: 'auto'
//               }}>
//                 {searchSuggestions.map((suggestion, index) => (
//                   <div
//                     key={index}
//                     className="search-suggestion"
//                     onClick={() => handleSuggestionClick(suggestion)}
//                     style={{
//                       padding: '10px 16px',
//                       cursor: 'pointer',
//                       borderBottom: index < searchSuggestions.length - 1 ? '1px solid #eee' : 'none',
//                       fontSize: '14px',
//                       color: '#111',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '10px'
//                     }}
//                   >
//                     <span style={{ opacity: 0.6 }}>🔍</span>
//                     <span>{suggestion}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Right Side Actions */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//             marginLeft: 'auto'
//           }}>
//             {/* Cart Icon */}
//             <button style={{
//               padding: '8px 12px',
//               background: 'transparent',
//               color: '#fff',
//               border: '1px solid #5a6c7d',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '6px',
//               position: 'relative',
//               transition: 'all 0.2s ease',
//               fontWeight: '500'
//             }}
//             onMouseOver={(e) => {
//               e.target.style.borderColor = '#ff9900'
//               e.target.style.color = '#ff9900'
//             }}
//             onMouseOut={(e) => {
//               e.target.style.borderColor = '#5a6c7d'
//               e.target.style.color = '#fff'
//             }}
//             >
//               <span style={{ fontSize: '16px' }}>🛒</span>
//               <span className="cart-text" style={{ fontSize: '12px' }}>Cart</span>
//               <span style={{
//                 position: 'absolute',
//                 top: '-6px',
//                 right: '-6px',
//                 background: '#ff9900',
//                 color: '#232f3e',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 fontSize: '11px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontWeight: '700'
//               }}>
//                 0
//               </span>
//             </button>

//             {/* Profile Dropdown - Enhanced Right Positioning */}
//             <div ref={dropdownRef} style={{ 
//               position: 'relative',
//               marginLeft: '8px'
//             }}>
//               <button
//                 onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   padding: '6px 12px',
//                   background: 'transparent',
//                   border: '1px solid #5a6c7d',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                   color: '#fff',
//                   transition: 'all 0.2s ease',
//                   fontSize: '14px'
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.borderColor = '#ff9900'
//                   e.target.style.color = '#ff9900'
//                 }}
//                 onMouseOut={(e) => {
//                   if (!showProfileDropdown) {
//                     e.target.style.borderColor = '#5a6c7d'
//                     e.target.style.color = '#fff'
//                   }
//                 }}
//               >
//                 <div style={{
//                   width: '24px',
//                   height: '24px',
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: '#fff',
//                   fontWeight: '700',
//                   fontSize: '12px'
//                 }}>
//                   {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                 </div>
//                 <div className="profile-text" style={{ 
//                   textAlign: 'left',
//                   lineHeight: '1.2'
//                 }}>
//                   <div style={{
//                     fontSize: '12px',
//                     fontWeight: '500',
//                     margin: '0'
//                   }}>
//                     Hello, {user?.name?.split(' ')[0] || 'User'}
//                   </div>
//                   <div style={{
//                     fontSize: '11px',
//                     opacity: 0.8,
//                     margin: '0',
//                     fontWeight: '700'
//                   }}>
//                     Account & Lists ▼
//                   </div>
//                 </div>
//               </button>

//               {/* Enhanced Dropdown Menu - Right Aligned */}
//               {showProfileDropdown && (
//                 <div 
//                   className="profile-dropdown-enter"
//                   style={{
//                     position: 'absolute',
//                     top: '100%',
//                     right: '0', // Right aligned dropdown
//                     background: '#fff',
//                     borderRadius: '4px',
//                     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
//                     marginTop: '8px',
//                     minWidth: '280px',
//                     zIndex: 1001,
//                     border: '1px solid #ddd',
//                     overflow: 'hidden'
//                   }}
//                 >
//                   {/* User Info Header */}
//                   <div style={{
//                     padding: '16px 20px',
//                     borderBottom: '1px solid #eee',
//                     background: '#f7f7f7'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '12px'
//                     }}>
//                       <div style={{
//                         width: '40px',
//                         height: '40px',
//                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                         borderRadius: '50%',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: '#fff',
//                         fontWeight: '700',
//                         fontSize: '16px'
//                       }}>
//                         {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                       </div>
//                       <div>
//                         <p style={{
//                           fontSize: '16px',
//                           fontWeight: '600',
//                           color: '#111',
//                           margin: '0 0 4px 0'
//                         }}>
//                           {user?.name || 'User'}
//                         </p>
//                         <p style={{
//                           fontSize: '13px',
//                           color: '#666',
//                           margin: '0'
//                         }}>
//                           {user?.email || user?.phoneNumber || 'user@example.com'}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Menu Items */}
//                   <div style={{ padding: '8px 0' }}>
//                     {[
//                        { icon: '👤', label: 'Your Account', action: () => {
//                         navigate('/your-account')
//                         setShowProfileDropdown(false)
//                       }},
//                       { icon: '📦', label: 'Your Orders', action: () => {} },
//                       { icon: '❤️', label: 'Your Wish List', action: () => {} },
//                       { icon: '🔄', label: 'Your Subscriptions', action: () => {} },
//                       { icon: '💳', label: 'Payment Options', action: () => {} },
//                       { icon: '⚙️', label: 'Account Settings', action: () => {} }
//                     ].map((item, index) => (
//                       <button
//                         key={index}
//                         onClick={item.action}
//                         style={{
//                           width: '100%',
//                           padding: '12px 20px',
//                           background: 'none',
//                           border: 'none',
//                           textAlign: 'left',
//                           cursor: 'pointer',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '12px',
//                           fontSize: '14px',
//                           color: '#111',
//                           transition: 'background 0.2s ease'
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.background = '#f3f3f3'
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.background = 'none'
//                         }}
//                       >
//                         <span style={{ fontSize: '16px', opacity: 0.7 }}>{item.icon}</span>
//                         <span style={{ fontWeight: '400' }}>{item.label}</span>
//                       </button>
//                     ))}
                    
//                     <div style={{
//                       height: '1px',
//                       background: '#eee',
//                       margin: '8px 0'
//                     }} />
                    
//                     <button
//                       onClick={handleLogout}
//                       disabled={isLoading}
//                       style={{
//                         width: '100%',
//                         padding: '12px 20px',
//                         background: 'none',
//                         border: 'none',
//                         textAlign: 'left',
//                         cursor: isLoading ? 'not-allowed' : 'pointer',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '12px',
//                         fontSize: '14px',
//                         color: '#d73027',
//                         opacity: isLoading ? 0.7 : 1,
//                         fontWeight: '500',
//                         transition: 'background 0.2s ease'
//                       }}
//                       onMouseOver={(e) => {
//                         if (!isLoading) {
//                           e.target.style.background = '#fff5f5'
//                         }
//                       }}
//                       onMouseOut={(e) => {
//                         e.target.style.background = 'none'
//                       }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <LoadingSpinner size="small" color="#d73027" />
//                           <span>Signing out...</span>
//                         </>
//                       ) : (
//                         <>
//                           <span style={{ fontSize: '16px' }}>🚪</span>
//                           <span>Sign Out</span>
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Header









import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlices'
import LoadingSpinner from '../ui/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { cartAPI } from '../../services/api/cartAPI'

const Header = ({ onSearch, searchQuery }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()  
  const { user, isLoading } = useSelector(state => state.auth)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [searchInput, setSearchInput] = useState(searchQuery || '')
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef(null)
  const searchRef = useRef(null)
  

  console.log('Header rendered with searchQuery:', user)
  sessionStorage.setItem("customer_id", user?.customer_id);
  // const customer_id = user?.customer_id;
  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout())
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      onSearch(searchInput.trim())
      setShowSuggestions(false)
    }
  }


  //   useEffect(() => {
  //   const fetchCartCount = async () => {
  //     try {
  //       const token = localStorage.getItem('token'); // Token should only be the JWT
  //       if (!token) {
  //         console.warn('No token found in localStorage');
  //         return;
  //       }

  //       const response = await axios.get('http://localhost:8000/api/v1/cart/count', {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       // console.log('Cart count response:', response.data);

  //       setCartCount(response.data.total_items);
  //     } catch (error) {
  //       console.error('Failed to fetch cart count:', error);
  //     }
  //   };

  //   fetchCartCount();
  // }, []);

useEffect(() => {
  const fetchCartCount = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.warn('No token found in localStorage');
        return;
      }

      const cartData = await cartAPI.getCartCount();
      setCartCount(cartData.total_items);
    } catch (error) {
      console.error('Failed to fetch cart count:', error);
    }
  };

  fetchCartCount();
}, []);



  console.log('Cart count:', cartCount);

  const handleSearchInputChange = async (e) => {
    const value = e.target.value
    setSearchInput(value)
    
    if (value.length >= 2) {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/api/search/suggestions?q=${encodeURIComponent(value)}`)
        if (response.ok) {
          const suggestions = await response.json()
          setSearchSuggestions(suggestions)
          setShowSuggestions(true)
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion)
    setShowSuggestions(false)
    onSearch(suggestion)
  }

  const handleCartClick = () => {
    navigate('/cart')
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');
          
          .header-container {
            font-family: 'Amazon Ember', Arial, sans-serif;
          }
          
          .profile-dropdown-enter {
            animation: dropdownSlideIn 0.2s ease-out;
          }
          
          @keyframes dropdownSlideIn {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .search-suggestion:hover {
            background: linear-gradient(90deg, #f3f3f3 0%, #e8f4fd 100%) !important;
          }
          
          @media (max-width: 768px) {
            .header-search {
              max-width: 200px;
            }
            .header-logo h1 {
              display: none;
            }
            .profile-text {
              display: none;
            }
          }
          
          @media (max-width: 480px) {
            .header-search {
              max-width: 150px;
            }
          }
        `}
      </style> */}

      <header className="header-container" style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#232f3e',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        borderBottom: '1px solid #3c4043'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          {/* Logo */}
          <div className="header-logo" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: 'fit-content'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              boxShadow: '0 2px 4px rgba(255, 153, 0, 0.3)'
            }}>
              🛒
            </div>
            <h1 style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#fff',
              margin: '0',
              letterSpacing: '-0.5px'
            }}>
              E-commerce
            </h1>
          </div>

          {/* Search Bar */}
          <div ref={searchRef} className="header-search" style={{
            flex: 1,
            position: 'relative',
            maxWidth: '1000px'
          }}>
            <form onSubmit={handleSearch} style={{
              display: 'flex',
              alignItems: 'center',
              background: '#fff',
              borderRadius: '4px',
              border: '2px solid transparent',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#ff9900'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'transparent'
            }}
            >
              <input
                type="text"
                placeholder="Search e-Commerce"
                value={searchInput}
                onChange={handleSearchInputChange}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  border: 'none',
                  fontSize: '14px',
                  outline: 'none',
                  background: 'transparent',
                  color: '#111'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 16px',
                  background: '#febd69',
                  color: '#111',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#ff9900'
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#febd69'
                }}
              >
                🔍
              </button>
            </form>

            {/* Search Suggestions */}
            {showSuggestions && searchSuggestions.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: '#fff',
                border: '1px solid #ddd',
                borderTop: 'none',
                borderRadius: '0 0 4px 4px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                zIndex: 1001,
                maxHeight: '300px',
                overflowY: 'auto'
              }}>
                {searchSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="search-suggestion"
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{
                      padding: '10px 16px',
                      cursor: 'pointer',
                      borderBottom: index < searchSuggestions.length - 1 ? '1px solid #eee' : 'none',
                      fontSize: '14px',
                      color: '#111',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ opacity: 0.6 }}>🔍</span>
                    <span>{suggestion}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginLeft: 'auto'
          }}>
            {/* Cart Icon */}
            <button 
              onClick={handleCartClick}
              style={{
                padding: '8px 12px',
                background: 'transparent',
                color: '#fff',
                border: '1px solid #5a6c7d',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                position: 'relative',
                transition: 'all 0.2s ease',
                fontWeight: '500'
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = '#ff9900'
                e.target.style.color = '#ff9900'
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = '#5a6c7d'
                e.target.style.color = '#fff'
              }}
            >
              <span style={{ fontSize: '16px' }}>🛒</span>
              <span className="cart-text" style={{ fontSize: '12px' }}>Cart</span>
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#ff9900',
                color: '#232f3e',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700'
              }}>
                {/* 0 */}

                {cartCount}
              </span>
            </button>

            {/* Profile Dropdown - Enhanced Right Positioning */}
            <div ref={dropdownRef} style={{ 
              position: 'relative',
              marginLeft: '8px'
            }}>
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  background: 'transparent',
                  border: '1px solid #5a6c7d',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                  fontSize: '14px'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = '#ff9900'
                  e.target.style.color = '#ff9900'
                }}
                onMouseOut={(e) => {
                  if (!showProfileDropdown) {
                    e.target.style.borderColor = '#5a6c7d'
                    e.target.style.color = '#fff'
                  }
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '12px'
                }}>
                  {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
                </div>
                <div className="profile-text" style={{ 
                  textAlign: 'left',
                  lineHeight: '1.2'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    Hello, {user?.name?.split(' ')[0] || 'User'}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    opacity: 0.8,
                    margin: '0',
                    fontWeight: '700'
                  }}>
                    Account & Lists ▼
                  </div>
                </div>
              </button>

              {/* Enhanced Dropdown Menu - Right Aligned */}
              {showProfileDropdown && (
                <div 
                  className="profile-dropdown-enter"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: '0', // Right aligned dropdown
                    background: '#fff',
                    borderRadius: '4px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                    marginTop: '8px',
                    minWidth: '280px',
                    zIndex: 1001,
                    border: '1px solid #ddd',
                    overflow: 'hidden'
                  }}
                >
                  {/* User Info Header */}
                  <div style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #eee',
                    background: '#f7f7f7'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: '16px'
                      }}>
                        {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
                      </div>
                      <div>
                        <p style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#111',
                          margin: '0 0 4px 0'
                        }}>
                          {/* {user?.name || 'User'} */}
                          {user?.name || 'User'}
                        </p>
                        <p style={{
                          fontSize: '13px',
                          color: '#666',
                          margin: '0'
                        }}>
                          {user?.email || user?.phoneNumber || 'user@example.com'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Menu Items */}
                  <div style={{ padding: '8px 0' }}>
                    {[
                       { icon: '👤', label: 'Your Account', action: () => {
                        navigate('/your-account')
                        setShowProfileDropdown(false)
                      }},
                      { icon: '📦', label: 'Your Orders', action: () => {} },
                      { icon: '❤️', label: 'Your Wish List', action: () => {} },
                      { icon: '🔄', label: 'Your Subscriptions', action: () => {} },
                      { icon: '💳', label: 'Payment Options', action: () => {} },
                      { icon: '⚙️', label: 'Account Settings', action: () => {} }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={item.action}
                        style={{
                          width: '100%',
                          padding: '12px 20px',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '14px',
                          color: '#111',
                          transition: 'background 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = '#f3f3f3'
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'none'
                        }}
                      >
                        <span style={{ fontSize: '16px', opacity: 0.7 }}>{item.icon}</span>
                        <span style={{ fontWeight: '400' }}>{item.label}</span>
                      </button>
                    ))}
                    
                    <div style={{
                      height: '1px',
                      background: '#eee',
                      margin: '8px 0'
                    }} />
                    
                    <button
                      onClick={handleLogout}
                      disabled={isLoading}
                      style={{
                        width: '100%',
                        padding: '12px 20px',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '14px',
                        color: '#d73027',
                        opacity: isLoading ? 0.7 : 1,
                        fontWeight: '500',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        if (!isLoading) {
                          e.target.style.background = '#fff5f5'
                        }
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <LoadingSpinner size="small" color="#d73027" />
                          <span>Signing out...</span>
                        </>
                      ) : (
                        <>
                          <span style={{ fontSize: '16px' }}>🚪</span>
                          <span>Sign Out</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header