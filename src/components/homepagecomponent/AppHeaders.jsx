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









// import React, { useState, useRef, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../../redux/slices/authSlices'
// import LoadingSpinner from '../ui/LoadingSpinner'
// import { useNavigate } from 'react-router-dom'
// // import axios from 'axios'
// import { cartAPI } from '../../services/api/cartAPI'

// const Header = ({ onSearch, searchQuery }) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()  
//   const { user, isLoading } = useSelector(state => state.auth)
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false)
//   const [searchInput, setSearchInput] = useState(searchQuery || '')
//   const [searchSuggestions, setSearchSuggestions] = useState([])
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   const [cartCount, setCartCount] = useState(0);
//   const dropdownRef = useRef(null)
//   const searchRef = useRef(null)


//   console.log('Header rendered with searchQuery:', user)
//   sessionStorage.setItem("customer_id", user?.customer_id);
//   // const customer_id = user?.customer_id;
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


//   //   useEffect(() => {
//   //   const fetchCartCount = async () => {
//   //     try {
//   //       const token = localStorage.getItem('token'); // Token should only be the JWT
//   //       if (!token) {
//   //         console.warn('No token found in localStorage');
//   //         return;
//   //       }

//   //       const response = await axios.get('http://localhost:8000/api/v1/cart/count', {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`
//   //         }
//   //       });
//   //       // console.log('Cart count response:', response.data);

//   //       setCartCount(response.data.total_items);
//   //     } catch (error) {
//   //       console.error('Failed to fetch cart count:', error);
//   //     }
//   //   };

//   //   fetchCartCount();
//   // }, []);

// useEffect(() => {
//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.warn('No token found in localStorage');
//         return;
//       }

//       const cartData = await cartAPI.getCartCount();
//       setCartCount(cartData.total_items);
//     } catch (error) {
//       console.error('Failed to fetch cart count:', error);
//     }
//   };

//   fetchCartCount();
// }, []);



//   console.log('Cart count:', cartCount);

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

//   const handleCartClick = () => {
//     navigate('/cart')
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
//       {/* <style>
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
//       </style> */}

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
//             <button 
//               onClick={handleCartClick}
//               style={{
//                 padding: '8px 12px',
//                 background: 'transparent',
//                 color: '#fff',
//                 border: '1px solid #5a6c7d',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '6px',
//                 position: 'relative',
//                 transition: 'all 0.2s ease',
//                 fontWeight: '500'
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.borderColor = '#ff9900'
//                 e.target.style.color = '#ff9900'
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.borderColor = '#5a6c7d'
//                 e.target.style.color = '#fff'
//               }}
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
//                 {/* 0 */}

//                 {cartCount}
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
//                           {/* {user?.name || 'User'} */}
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



// import React, { useState, useRef, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../../redux/slices/authSlices'
// import LoadingSpinner from '../ui/LoadingSpinner'
// import { useNavigate } from 'react-router-dom'
// import { cartAPI } from '../../services/api/cartAPI'
// import { searchAPI } from '../../services/api/searchapiss' // Add this import

// const Header = ({ onSearch, searchQuery }) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()  
//   const { user, isLoading } = useSelector(state => state.auth)
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false)
//   const [searchInput, setSearchInput] = useState(searchQuery || '')
//   const [searchSuggestions, setSearchSuggestions] = useState([])
//   const [showSuggestions, setShowSuggestions] = useState(false)
//   const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
//   const [cartCount, setCartCount] = useState(0)

//   const dropdownRef = useRef(null)
//   const searchRef = useRef(null)
//   const suggestionTimeoutRef = useRef(null)

//   // Store customer_id in session storage
//   useEffect(() => {
//     if (user?.customer_id) {
//       sessionStorage.setItem("customer_id", user.customer_id);
//     }
//   }, [user?.customer_id]);

//   const handleLogout = async () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       dispatch(logout())
//     }
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (searchInput.trim()) {
//       // Call the onSearch prop if provided (for backward compatibility)
//       if (onSearch) {
//         onSearch(searchInput.trim())
//       }

//       // Navigate to search results page with query
//       navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`)
//       setShowSuggestions(false)
//     }
//   }

//   // Fetch cart count
//   useEffect(() => {
//     const fetchCartCount = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.warn('No token found in localStorage');
//           return;
//         }

//         const cartData = await cartAPI.getCartCount();
//         setCartCount(cartData.total_items);
//       } catch (error) {
//         console.error('Failed to fetch cart count:', error);
//       }
//     };

//     fetchCartCount();
//   }, []);

//   // Enhanced search input handler with debounced Elasticsearch suggestions
//   const handleSearchInputChange = async (e) => {
//     const value = e.target.value
//     setSearchInput(value)

//     // Clear previous timeout
//     if (suggestionTimeoutRef.current) {
//       clearTimeout(suggestionTimeoutRef.current)
//     }

//     if (value.length >= 2) {
//       setIsLoadingSuggestions(true)

//       // Debounce the API call to Elasticsearch
//       suggestionTimeoutRef.current = setTimeout(async () => {
//         try {
//           // Use the proper Elasticsearch suggestions API
//           const suggestions = await searchAPI.getSuggestions(value, 8)
//           setSearchSuggestions(suggestions)
//           setShowSuggestions(suggestions.length > 0)
//           setIsLoadingSuggestions(false)
//         } catch (error) {
//           console.error('Error fetching Elasticsearch suggestions:', error)
//           setSearchSuggestions([])
//           setShowSuggestions(false)
//           setIsLoadingSuggestions(false)
//         }
//       }, 300) // 300ms debounce
//     } else {
//       setShowSuggestions(false)
//       setSearchSuggestions([])
//       setIsLoadingSuggestions(false)
//     }
//   }

//   const handleSuggestionClick = (suggestion) => {
//     setSearchInput(suggestion)
//     setShowSuggestions(false)

//     // Call the onSearch prop if provided (for backward compatibility)
//     if (onSearch) {
//       onSearch(suggestion)
//     }

//     // Navigate to search results page
//     navigate(`/search?q=${encodeURIComponent(suggestion)}`)
//   }

//   const handleCartClick = () => {
//     navigate('/cart')
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
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//       // Clean up timeout on unmount
//       if (suggestionTimeoutRef.current) {
//         clearTimeout(suggestionTimeoutRef.current)
//       }
//     }
//   }, [])

//   return (
//     <>
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
//           {/* Logo - Make it clickable to go home */}
//           <div className="header-logo" style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             minWidth: 'fit-content',
//             cursor: 'pointer'
//           }}
//           onClick={() => navigate('/')}
//           >
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

//           {/* Enhanced Search Bar with Elasticsearch */}
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
//                 placeholder="Search products, brands, categories..."
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
//                 disabled={isLoadingSuggestions}
//                 style={{
//                   padding: '10px 16px',
//                   background: isLoadingSuggestions ? '#ddd' : '#febd69',
//                   color: '#111',
//                   border: 'none',
//                   cursor: isLoadingSuggestions ? 'not-allowed' : 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '6px',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   transition: 'background 0.2s ease'
//                 }}
//                 onMouseOver={(e) => {
//                   if (!isLoadingSuggestions) {
//                     e.target.style.background = '#ff9900'
//                   }
//                 }}
//                 onMouseOut={(e) => {
//                   if (!isLoadingSuggestions) {
//                     e.target.style.background = '#febd69'
//                   }
//                 }}
//               >
//                 {isLoadingSuggestions ? '⏳' : '🔍'}
//               </button>
//             </form>

//             {/* Enhanced Search Suggestions from Elasticsearch */}
//             {(showSuggestions || isLoadingSuggestions) && (
//               <div style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 right: 0,
//                 background: '#fff',
//                 border: '1px solid #ddd',
//                 borderTop: 'none',
//                 borderRadius: '0 0 4px 4px',
//                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
//                 zIndex: 1001,
//                 maxHeight: '400px',
//                 overflowY: 'auto'
//               }}>
//                 {isLoadingSuggestions ? (
//                   <div style={{
//                     padding: '16px',
//                     textAlign: 'center',
//                     color: '#666',
//                     fontSize: '14px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '8px'
//                   }}>
//                     <LoadingSpinner size="small" color="#ff9900" />
//                     <span>Loading suggestions...</span>
//                   </div>
//                 ) : searchSuggestions.length > 0 ? (
//                   <>
//                     <div style={{
//                       padding: '8px 16px',
//                       background: '#f8f9fa',
//                       borderBottom: '1px solid #eee',
//                       fontSize: '12px',
//                       color: '#666',
//                       fontWeight: '500',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       Search Suggestions
//                     </div>
//                     {searchSuggestions.map((suggestion, index) => (
//                       <div
//                         key={index}
//                         className="search-suggestion"
//                         onClick={() => handleSuggestionClick(suggestion)}
//                         style={{
//                           padding: '12px 16px',
//                           cursor: 'pointer',
//                           borderBottom: index < searchSuggestions.length - 1 ? '1px solid #f0f0f0' : 'none',
//                           fontSize: '14px',
//                           color: '#111',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '12px',
//                           transition: 'all 0.2s ease'
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.background = '#f8f9fa'
//                           e.target.style.paddingLeft = '20px'
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.background = 'transparent'
//                           e.target.style.paddingLeft = '16px'
//                         }}
//                       >
//                         <span style={{ opacity: 0.5, fontSize: '12px' }}>🔍</span>
//                         <span style={{ flex: 1 }}>{suggestion}</span>
//                         <span style={{ 
//                           opacity: 0.3, 
//                           fontSize: '12px',
//                           transform: 'rotate(-45deg)'
//                         }}>↗</span>
//                       </div>
//                     ))}
//                   </>
//                 ) : (
//                   <div style={{
//                     padding: '16px',
//                     textAlign: 'center',
//                     color: '#666',
//                     fontSize: '14px'
//                   }}>
//                     No suggestions found
//                   </div>
//                 )}
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
//             {/* Enhanced Cart Icon */}
//             <button 
//               onClick={handleCartClick}
//               style={{
//                 padding: '8px 12px',
//                 background: 'transparent',
//                 color: '#fff',
//                 border: '1px solid #5a6c7d',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '6px',
//                 position: 'relative',
//                 transition: 'all 0.2s ease',
//                 fontWeight: '500'
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.borderColor = '#ff9900'
//                 e.target.style.color = '#ff9900'
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.borderColor = '#5a6c7d'
//                 e.target.style.color = '#fff'
//               }}
//             >
//               <span style={{ fontSize: '16px' }}>🛒</span>
//               <span className="cart-text" style={{ fontSize: '12px' }}>Cart</span>
//               {cartCount > 0 && (
//                 <span style={{
//                   position: 'absolute',
//                   top: '-6px',
//                   right: '-6px',
//                   background: '#ff9900',
//                   color: '#232f3e',
//                   borderRadius: '50%',
//                   minWidth: '18px',
//                   height: '18px',
//                   fontSize: '11px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontWeight: '700',
//                   padding: '0 2px',
//                   animation: cartCount > 0 ? 'pulse 0.3s ease-in-out' : 'none'
//                 }}>
//                   {cartCount > 99 ? '99+' : cartCount}
//                 </span>
//               )}
//             </button>

//             {/* Profile Dropdown - Same as before */}
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

//               {/* Profile Dropdown Menu */}
//               {showProfileDropdown && (
//                 <div 
//                   className="profile-dropdown-enter"
//                   style={{
//                     position: 'absolute',
//                     top: '100%',
//                     right: '0',
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
//                       { icon: '👤', label: 'Your Account', action: () => {
//                         navigate('/your-account')
//                         setShowProfileDropdown(false)
//                       }},
//                       { icon: '📦', label: 'Your Orders', action: () => {
//                         navigate('/orders')
//                         setShowProfileDropdown(false)
//                       }},
//                       { icon: '❤️', label: 'Your Wish List', action: () => {
//                         navigate('/wishlist')
//                         setShowProfileDropdown(false)
//                       }},
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

//       {/* Add CSS animation for cart pulse effect */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.1); }
//             100% { transform: scale(1); }
//           }
//         `}
//       </style>
//     </>
//   )
// }

// export default Header




// // src/components/homepagecomponent/AppHeaders.jsx - Complete Integrated Professional Header
// import React, { useState, useEffect, useRef } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../../redux/slices/authSlices'
// import LoadingSpinner from '../ui/LoadingSpinner'
// import { useNavigate } from 'react-router-dom'
// import { cartAPI } from '../../services/api/cartAPI'
// import { searchAPI } from '../../services/api/searchapiss'

// const Header = ({ onSearch, searchQuery, onToggleSidebar, sidebarOpen }) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { user, isLoading } = useSelector(state => state.auth)

//   // State management
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false)
//   const [searchInput, setSearchInput] = useState(searchQuery || '')
//   const [searchSuggestions, setSearchSuggestions] = useState([])
//   const [showSuggestions, setShowSuggestions] = useState(false)
//   const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
//   const [cartCount, setCartCount] = useState(0)
//   const [isMobile, setIsMobile] = useState(false)

//   // Refs
//   const dropdownRef = useRef(null)
//   const searchRef = useRef(null)
//   const suggestionTimeoutRef = useRef(null)

//   // Check screen size for responsive behavior
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768)
//     }

//     checkScreenSize()
//     window.addEventListener('resize', checkScreenSize)
//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [])

//   // Store customer_id in session storage
//   useEffect(() => {
//     if (user?.customer_id) {
//       sessionStorage.setItem("customer_id", user.customer_id)
//     }
//   }, [user?.customer_id])

//   // Update search input when searchQuery prop changes
//   useEffect(() => {
//     setSearchInput(searchQuery || '')
//   }, [searchQuery])

//   // Fetch cart count
//   useEffect(() => {
//     const fetchCartCount = async () => {
//       try {
//         const token = localStorage.getItem('token')
//         if (!token) {
//           console.warn('No token found in localStorage')
//           return
//         }

//         const cartData = await cartAPI.getCartCount()
//         setCartCount(cartData.total_items)
//       } catch (error) {
//         console.error('Failed to fetch cart count:', error)
//       }
//     }

//     if (user) {
//       fetchCartCount()
//     }
//   }, [user])

//   // Enhanced search input handler with debounced Elasticsearch suggestions
//   const handleSearchInputChange = async (e) => {
//     const value = e.target.value
//     setSearchInput(value)

//     // Clear previous timeout
//     if (suggestionTimeoutRef.current) {
//       clearTimeout(suggestionTimeoutRef.current)
//     }

//     if (value.length >= 2) {
//       setIsLoadingSuggestions(true)

//       // Debounce the API call to Elasticsearch
//       suggestionTimeoutRef.current = setTimeout(async () => {
//         try {
//           const suggestions = await searchAPI.getSuggestions(value, 8)
//           setSearchSuggestions(suggestions)
//           setShowSuggestions(suggestions.length > 0)
//           setIsLoadingSuggestions(false)
//         } catch (error) {
//           console.error('Error fetching Elasticsearch suggestions:', error)
//           setSearchSuggestions([])
//           setShowSuggestions(false)
//           setIsLoadingSuggestions(false)
//         }
//       }, 300) // 300ms debounce
//     } else {
//       setShowSuggestions(false)
//       setSearchSuggestions([])
//       setIsLoadingSuggestions(false)
//     }
//   }

//   const handleSearchSubmit = (e) => {
//     e.preventDefault()
//     if (searchInput.trim()) {
//       // Call the onSearch prop if provided (for backward compatibility)
//       if (onSearch) {
//         onSearch(searchInput.trim())
//       }

//       // Navigate to search results page with query
//       navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`)
//       setShowSuggestions(false)
//     }
//   }

//   const handleSuggestionClick = (suggestion) => {
//     setSearchInput(suggestion)
//     setShowSuggestions(false)

//     // Call the onSearch prop if provided (for backward compatibility)
//     if (onSearch) {
//       onSearch(suggestion)
//     }

//     // Navigate to search results page
//     navigate(`/search?q=${encodeURIComponent(suggestion)}`)
//   }

//   const handleCartClick = () => {
//     navigate('/cart')
//   }

//   const handleLogout = async () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       dispatch(logout())
//     }
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
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//       // Clean up timeout on unmount
//       if (suggestionTimeoutRef.current) {
//         clearTimeout(suggestionTimeoutRef.current)
//       }
//     }
//   }, [])

//   return (
//     <>
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: '70px',
//         background: 'white',
//         borderBottom: '1px solid #E5E7EB',
//         boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//         zIndex: 1000,
//         fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
//       }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           height: '100%',
//           padding: '0 24px',
//           maxWidth: '100%'
//         }}>
//           {/* Left Section - Logo and Sidebar Toggle */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//             minWidth: 'fit-content'
//           }}>
//             {/* Sidebar Toggle Button - Only show if onToggleSidebar prop exists */}
//             {onToggleSidebar && (
//               <button
//                 onClick={onToggleSidebar}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '40px',
//                   height: '40px',
//                   background: sidebarOpen ? '#EFF6FF' : '#F9FAFB',
//                   border: `1px solid ${sidebarOpen ? '#DBEAFE' : '#E5E7EB'}`,
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s ease',
//                   fontSize: '16px',
//                   color: sidebarOpen ? '#1D4ED8' : '#6B7280'
//                 }}
//                 onMouseOver={(e) => {
//                   if (!sidebarOpen) {
//                     e.target.style.background = '#F3F4F6'
//                     e.target.style.color = '#374151'
//                   }
//                 }}
//                 onMouseOut={(e) => {
//                   if (!sidebarOpen) {
//                     e.target.style.background = '#F9FAFB'
//                     e.target.style.color = '#6B7280'
//                   }
//                 }}
//               >
//                 {sidebarOpen ? '✕' : '☰'}
//               </button>
//             )}

//             {/* Logo */}
//             <div 
//               onClick={() => navigate('/')}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 width: '40px',
//                 height: '40px',
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 borderRadius: '10px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '20px',
//                 color: 'white',
//                 fontWeight: 'bold'
//               }}>
//                 🛒
//               </div>
//               {!isMobile && (
//                 <div>
//                   <h1 style={{
//                     fontSize: '20px',
//                     fontWeight: '700',
//                     color: '#1F2937',
//                     margin: '0',
//                     letterSpacing: '-0.025em'
//                   }}>
//                     E-commerce
//                   </h1>
//                   <p style={{
//                     fontSize: '12px',
//                     color: '#6B7280',
//                     margin: '0',
//                     fontWeight: '500'
//                   }}>
//                     Professional Shopping
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Center Section - Enhanced Search Bar with Elasticsearch */}
//           <div ref={searchRef} style={{
//             flex: 1,
//             maxWidth: '600px',
//             margin: '0 24px',
//             position: 'relative'
//           }}>
//             <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
//               <div style={{
//                 position: 'relative',
//                 display: 'flex',
//                 alignItems: 'center'
//               }}>
//                 <input
//                   type="text"
//                   value={searchInput}
//                   onChange={handleSearchInputChange}
//                   placeholder="Search products, brands, categories..."
//                   style={{
//                     width: '100%',
//                     padding: '12px 16px 12px 48px',
//                     border: '2px solid #E5E7EB',
//                     borderRadius: '12px',
//                     fontSize: '14px',
//                     fontFamily: 'inherit',
//                     background: '#F9FAFB',
//                     transition: 'all 0.2s ease',
//                     outline: 'none'
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#6366F1'
//                     e.target.style.background = 'white'
//                     e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)'
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#E5E7EB'
//                     e.target.style.background = '#F9FAFB'
//                     e.target.style.boxShadow = 'none'
//                   }}
//                 />

//                 {/* Search Icon */}
//                 <div style={{
//                   position: 'absolute',
//                   left: '16px',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   color: '#9CA3AF',
//                   fontSize: '16px',
//                   pointerEvents: 'none'
//                 }}>
//                   🔍
//                 </div>

//                 {/* Clear Search */}
//                 {searchInput && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearchInput('')
//                       if (onSearch) onSearch('')
//                     }}
//                     style={{
//                       position: 'absolute',
//                       right: isMobile ? '48px' : '80px',
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       width: '20px',
//                       height: '20px',
//                       background: '#E5E7EB',
//                       color: '#6B7280',
//                       border: 'none',
//                       borderRadius: '50%',
//                       fontSize: '12px',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       transition: 'all 0.2s ease'
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.background = '#DC2626'
//                       e.target.style.color = 'white'
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.background = '#E5E7EB'
//                       e.target.style.color = '#6B7280'
//                     }}
//                   >
//                     ✕
//                   </button>
//                 )}

//                 {/* Search Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoadingSuggestions}
//                   style={{
//                     position: 'absolute',
//                     right: '8px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     padding: '8px 16px',
//                     background: isLoadingSuggestions ? '#D1D5DB' : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '8px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     cursor: isLoadingSuggestions ? 'not-allowed' : 'pointer',
//                     transition: 'all 0.2s ease',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '4px'
//                   }}
//                   onMouseOver={(e) => {
//                     if (!isLoadingSuggestions) {
//                       e.target.style.transform = 'translateY(-50%) scale(1.05)'
//                       e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)'
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (!isLoadingSuggestions) {
//                       e.target.style.transform = 'translateY(-50%) scale(1)'
//                       e.target.style.boxShadow = 'none'
//                     }
//                   }}
//                 >
//                   {isLoadingSuggestions ? '⏳' : (isMobile ? '🔍' : 'Search')}
//                 </button>
//               </div>
//             </form>

//             {/* Enhanced Search Suggestions from Elasticsearch */}
//             {(showSuggestions || isLoadingSuggestions) && (
//               <div style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 right: 0,
//                 background: 'white',
//                 border: '1px solid #E5E7EB',
//                 borderTop: 'none',
//                 borderRadius: '0 0 12px 12px',
//                 boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//                 zIndex: 1001,
//                 maxHeight: '400px',
//                 overflowY: 'auto'
//               }}>
//                 {isLoadingSuggestions ? (
//                   <div style={{
//                     padding: '16px',
//                     textAlign: 'center',
//                     color: '#6B7280',
//                     fontSize: '14px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '8px'
//                   }}>
//                     <LoadingSpinner size="small" color="#6366F1" />
//                     <span>Loading suggestions...</span>
//                   </div>
//                 ) : searchSuggestions.length > 0 ? (
//                   <>
//                     <div style={{
//                       padding: '8px 16px',
//                       background: '#F9FAFB',
//                       borderBottom: '1px solid #E5E7EB',
//                       fontSize: '12px',
//                       color: '#6B7280',
//                       fontWeight: '500',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       Search Suggestions
//                     </div>
//                     {searchSuggestions.map((suggestion, index) => (
//                       <div
//                         key={index}
//                         onClick={() => handleSuggestionClick(suggestion)}
//                         style={{
//                           padding: '12px 16px',
//                           cursor: 'pointer',
//                           borderBottom: index < searchSuggestions.length - 1 ? '1px solid #F3F4F6' : 'none',
//                           fontSize: '14px',
//                           color: '#374151',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '12px',
//                           transition: 'all 0.2s ease'
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.background = '#F9FAFB'
//                           e.target.style.paddingLeft = '20px'
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.background = 'transparent'
//                           e.target.style.paddingLeft = '16px'
//                         }}
//                       >
//                         <span style={{ opacity: 0.5, fontSize: '12px' }}>🔍</span>
//                         <span style={{ flex: 1 }}>{suggestion}</span>
//                         <span style={{ 
//                           opacity: 0.3, 
//                           fontSize: '12px',
//                           transform: 'rotate(-45deg)'
//                         }}>↗</span>
//                       </div>
//                     ))}
//                   </>
//                 ) : (
//                   <div style={{
//                     padding: '16px',
//                     textAlign: 'center',
//                     color: '#6B7280',
//                     fontSize: '14px'
//                   }}>
//                     No suggestions found
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Right Section - Navigation and Profile */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             minWidth: 'fit-content'
//           }}>
//             {/* Enhanced Cart Icon */}
//             <button 
//               onClick={handleCartClick}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '6px',
//                 padding: '8px 12px',
//                 background: 'transparent',
//                 border: '1px solid #E5E7EB',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 color: '#6B7280',
//                 position: 'relative',
//                 transition: 'all 0.2s ease',
//                 fontWeight: '500',
//                 fontFamily: 'inherit'
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.borderColor = '#6366F1'
//                 e.target.style.color = '#6366F1'
//                 e.target.style.background = '#EFF6FF'
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.borderColor = '#E5E7EB'
//                 e.target.style.color = '#6B7280'
//                 e.target.style.background = 'transparent'
//               }}
//             >
//               <span style={{ fontSize: '16px' }}>🛒</span>
//               {!isMobile && <span style={{ fontSize: '13px' }}>Cart</span>}
//               {cartCount > 0 && (
//                 <span style={{
//                   position: 'absolute',
//                   top: '-6px',
//                   right: '-6px',
//                   background: '#EF4444',
//                   color: 'white',
//                   borderRadius: '50%',
//                   minWidth: '18px',
//                   height: '18px',
//                   fontSize: '11px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontWeight: '700',
//                   padding: '0 2px',
//                   animation: cartCount > 0 ? 'pulse 0.3s ease-in-out' : 'none'
//                 }}>
//                   {cartCount > 99 ? '99+' : cartCount}
//                 </span>
//               )}
//             </button>

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <button
//                 onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '40px',
//                   height: '40px',
//                   background: '#F9FAFB',
//                   border: '1px solid #E5E7EB',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   fontSize: '16px',
//                   color: '#6B7280'
//                 }}
//               >
//                 ⋮
//               </button>
//             )}

//             {/* Enhanced Profile Section */}
//             {!isMobile && (
//               <div ref={dropdownRef} style={{ position: 'relative' }}>
//                 <button
//                   onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     padding: '6px',
//                     background: 'transparent',
//                     border: '1px solid transparent',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease',
//                     fontFamily: 'inherit'
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.background = '#F3F4F6'
//                     e.target.style.borderColor = '#E5E7EB'
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.background = 'transparent'
//                     e.target.style.borderColor = 'transparent'
//                   }}
//                 >
//                   <div style={{
//                     width: '32px',
//                     height: '32px',
//                     background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '14px',
//                     color: 'white',
//                     fontWeight: '600'
//                   }}>
//                     {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                   </div>
//                   <div style={{
//                     textAlign: 'left',
//                     lineHeight: '1.2'
//                   }}>
//                     <div style={{
//                       fontSize: '13px',
//                       fontWeight: '600',
//                       color: '#1F2937'
//                     }}>
//                       Hello, {user?.name?.split(' ')[0] || 'User'}
//                     </div>
//                     <div style={{
//                       fontSize: '11px',
//                       color: '#6B7280'
//                     }}>
//                       Account & Lists ▼
//                     </div>
//                   </div>
//                 </button>

//                 {/* Enhanced Profile Dropdown */}
//                 {showProfileDropdown && (
//                   <div style={{
//                     position: 'absolute',
//                     top: '100%',
//                     right: '0',
//                     marginTop: '8px',
//                     width: '280px',
//                     background: 'white',
//                     border: '1px solid #E5E7EB',
//                     borderRadius: '12px',
//                     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//                     zIndex: 1001,
//                     overflow: 'hidden'
//                   }}>
//                     {/* Profile Header */}
//                     <div style={{
//                       padding: '16px',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       color: 'white'
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '12px'
//                       }}>
//                         <div style={{
//                           width: '40px',
//                           height: '40px',
//                           background: 'rgba(255, 255, 255, 0.2)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontSize: '16px',
//                           fontWeight: '600'
//                         }}>
//                           {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                         </div>
//                         <div>
//                           <div style={{
//                             fontSize: '14px',
//                             fontWeight: '600',
//                             marginBottom: '2px'
//                           }}>
//                             {user?.name || 'User'}
//                           </div>
//                           <div style={{
//                             fontSize: '12px',
//                             opacity: 0.8
//                           }}>
//                             {user?.email || user?.phoneNumber || 'user@example.com'}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Menu Items */}
//                     <div style={{ padding: '8px 0' }}>
//                       {[
//                         { icon: '👤', label: 'Your Account', action: () => {
//                           navigate('/your-account')
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '📦', label: 'Your Orders', action: () => {
//                           navigate('/orders')
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '❤️', label: 'Your Wish List', action: () => {
//                           navigate('/wishlist')
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '🔄', label: 'Your Subscriptions', action: () => {
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '💳', label: 'Payment Options', action: () => {
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '⚙️', label: 'Account Settings', action: () => {
//                           setShowProfileDropdown(false)
//                         }}
//                       ].map((item, index) => (
//                         <button
//                           key={index}
//                           onClick={item.action}
//                           style={{
//                             width: '100%',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '12px',
//                             padding: '12px 16px',
//                             background: 'transparent',
//                             border: 'none',
//                             fontSize: '14px',
//                             color: '#374151',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.2s ease',
//                             fontFamily: 'inherit',
//                             textAlign: 'left'
//                           }}
//                           onMouseOver={(e) => {
//                             e.target.style.background = '#F9FAFB'
//                           }}
//                           onMouseOut={(e) => {
//                             e.target.style.background = 'transparent'
//                           }}
//                         >
//                           <span style={{ fontSize: '16px' }}>{item.icon}</span>
//                           {item.label}
//                         </button>
//                       ))}

//                       <div style={{
//                         height: '1px',
//                         background: '#E5E7EB',
//                         margin: '8px 0'
//                       }} />

//                       <button
//                         onClick={handleLogout}
//                         disabled={isLoading}
//                         style={{
//                           width: '100%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '12px',
//                           padding: '12px 16px',
//                           background: 'transparent',
//                           border: 'none',
//                           fontSize: '14px',
//                           color: '#DC2626',
//                           cursor: isLoading ? 'not-allowed' : 'pointer',
//                           opacity: isLoading ? 0.7 : 1,
//                           fontWeight: '500',
//                           transition: 'background-color 0.2s ease',
//                           fontFamily: 'inherit',
//                           textAlign: 'left'
//                         }}
//                         onMouseOver={(e) => {
//                           if (!isLoading) {
//                             e.target.style.background = '#FEF2F2'
//                           }
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.background = 'transparent'
//                         }}
//                       >
//                         {isLoading ? (
//                           <>
//                             <LoadingSpinner size="small" color="#DC2626" />
//                             <span>Signing out...</span>
//                           </>
//                         ) : (
//                           <>
//                             <span style={{ fontSize: '16px' }}>🚪</span>
//                             <span>Sign Out</span>
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Profile Menu */}
//         {isMobile && showProfileDropdown && (
//           <div style={{
//             position: 'absolute',
//             top: '100%',
//             left: '0',
//             right: '0',
//             background: 'white',
//             borderTop: '1px solid #E5E7EB',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             zIndex: 1001
//           }}>
//             <div style={{ padding: '16px 24px' }}>
//               {/* Mobile Profile Section */}
//               <div style={{
//                 padding: '16px',
//                 background: '#F9FAFB',
//                 borderRadius: '8px',
//                 border: '1px solid #E5E7EB',
//                 marginBottom: '16px'
//               }}>
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   marginBottom: '12px'
//                 }}>
//                   <div style={{
//                     width: '40px',
//                     height: '40px',
//                     background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '16px',
//                     color: 'white',
//                     fontWeight: '600'
//                   }}>
//                     {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                   </div>
//                   <div>
//                     <div style={{
//                       fontSize: '14px',
//                       fontWeight: '600',
//                       color: '#1F2937'
//                     }}>
//                       {user?.name || 'User'}
//                     </div>
//                     <div style={{
//                       fontSize: '12px',
//                       color: '#6B7280'
//                     }}>
//                       {user?.email || user?.phoneNumber || 'user@example.com'}
//                     </div>
//                   </div>
//                 </div>

//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(2, 1fr)',
//                   gap: '8px'
//                 }}>
//                   {[
//                     { icon: '👤', label: 'Profile', action: () => navigate('/your-account') },
//                     { icon: '📦', label: 'Orders', action: () => navigate('/orders') },
//                     { icon: '❤️', label: 'Wishlist', action: () => navigate('/wishlist') },
//                     { icon: '⚙️', label: 'Settings', action: () => {} }
//                   ].map((item, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         item.action()
//                         setShowProfileDropdown(false)
//                       }}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '8px 12px',
//                         background: 'white',
//                         border: '1px solid #E5E7EB',
//                         borderRadius: '6px',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         color: '#374151',
//                         cursor: 'pointer',
//                         fontFamily: 'inherit'
//                       }}
//                     >
//                       <span style={{ fontSize: '14px' }}>{item.icon}</span>
//                       {item.label}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Mobile Logout Button */}
//                 <button
//                   onClick={handleLogout}
//                   disabled={isLoading}
//                   style={{
//                     width: '100%',
//                     marginTop: '12px',
//                     padding: '10px',
//                     background: '#FEF2F2',
//                     border: '1px solid #FECACA',
//                     borderRadius: '6px',
//                     fontSize: '13px',
//                     fontWeight: '500',
//                     color: '#DC2626',
//                     cursor: isLoading ? 'not-allowed' : 'pointer',
//                     opacity: isLoading ? 0.7 : 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '8px',
//                     fontFamily: 'inherit'
//                   }}
//                 >
//                   {isLoading ? (
//                     <>
//                       <LoadingSpinner size="small" color="#DC2626" />
//                       <span>Signing out...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span style={{ fontSize: '14px' }}>🚪</span>
//                       <span>Sign Out</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Click outside to close dropdown */}
//         {showProfileDropdown && (
//           <div
//             style={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: 999
//             }}
//             onClick={() => setShowProfileDropdown(false)}
//           />
//         )}
//       </header>

//       {/* Global Styles */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.1); }
//             100% { transform: scale(1); }
//           }

//           /* Custom scrollbar for search suggestions */
//           ::-webkit-scrollbar {
//             width: 6px;
//           }

//           ::-webkit-scrollbar-track {
//             background: #F3F4F6;
//           }

//           ::-webkit-scrollbar-thumb {
//             background: #D1D5DB;
//             border-radius: 3px;
//           }

//           ::-webkit-scrollbar-thumb:hover {
//             background: #9CA3AF;
//           }
//         `}
//       </style>
//     </>
//   )
// }

// export default Header












// // src/components/homepagecomponent/AppHeaders.jsx - Updated with better right-side positioning
// import React, { useState, useEffect, useRef } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../../redux/slices/authSlices'
// import LoadingSpinner from '../ui/LoadingSpinner'
// import { useNavigate } from 'react-router-dom'
// import { cartAPI } from '../../services/api/cartAPI'
// import { searchAPI } from '../../services/api/searchapiss'

// const Header = ({ onSearch, searchQuery, onToggleSidebar, sidebarOpen }) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { user, isLoading } = useSelector(state => state.auth)

//   // State management
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false)
//   const [searchInput, setSearchInput] = useState(searchQuery || '')
//   const [searchSuggestions, setSearchSuggestions] = useState([])
//   const [showSuggestions, setShowSuggestions] = useState(false)
//   const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
//   const [cartCount, setCartCount] = useState(0)
//   const [isMobile, setIsMobile] = useState(false)

//   // Refs
//   const dropdownRef = useRef(null)
//   const searchRef = useRef(null)
//   const suggestionTimeoutRef = useRef(null)

//   // Check screen size for responsive behavior
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768)
//     }

//     checkScreenSize()
//     window.addEventListener('resize', checkScreenSize)
//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [])

//   // Store customer_id in session storage
//   useEffect(() => {
//     if (user?.customer_id) {
//       sessionStorage.setItem("customer_id", user.customer_id)
//     }
//   }, [user?.customer_id])

//   // Update search input when searchQuery prop changes
//   useEffect(() => {
//     setSearchInput(searchQuery || '')
//   }, [searchQuery])

//   // Fetch cart count
//   useEffect(() => {
//     const fetchCartCount = async () => {
//       try {
//         const token = localStorage.getItem('token')
//         if (!token) {
//           console.warn('No token found in localStorage')
//           return
//         }

//         const cartData = await cartAPI.getCartCount()
//         setCartCount(cartData.total_items)
//       } catch (error) {
//         console.error('Failed to fetch cart count:', error)
//       }
//     }

//     if (user) {
//       fetchCartCount()
//     }
//   }, [user])

//   // Enhanced search input handler with debounced Elasticsearch suggestions
//   const handleSearchInputChange = async (e) => {
//     const value = e.target.value
//     setSearchInput(value)

//     // Clear previous timeout
//     if (suggestionTimeoutRef.current) {
//       clearTimeout(suggestionTimeoutRef.current)
//     }

//     if (value.length >= 2) {
//       setIsLoadingSuggestions(true)

//       // Debounce the API call to Elasticsearch
//       suggestionTimeoutRef.current = setTimeout(async () => {
//         try {
//           const suggestions = await searchAPI.getSuggestions(value, 8)
//           setSearchSuggestions(suggestions)
//           setShowSuggestions(suggestions.length > 0)
//           setIsLoadingSuggestions(false)
//         } catch (error) {
//           console.error('Error fetching Elasticsearch suggestions:', error)
//           setSearchSuggestions([])
//           setShowSuggestions(false)
//           setIsLoadingSuggestions(false)
//         }
//       }, 300) // 300ms debounce
//     } else {
//       setShowSuggestions(false)
//       setSearchSuggestions([])
//       setIsLoadingSuggestions(false)
//     }
//   }

//   const handleSearchSubmit = (e) => {
//     e.preventDefault()
//     if (searchInput.trim()) {
//       // Call the onSearch prop if provided (for backward compatibility)
//       if (onSearch) {
//         onSearch(searchInput.trim())
//       }

//       // Navigate to search results page with query
//       navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`)
//       setShowSuggestions(false)
//     }
//   }

//   const handleSuggestionClick = (suggestion) => {
//     setSearchInput(suggestion)
//     setShowSuggestions(false)

//     // Call the onSearch prop if provided (for backward compatibility)
//     if (onSearch) {
//       onSearch(suggestion)
//     }

//     // Navigate to search results page
//     navigate(`/search?q=${encodeURIComponent(suggestion)}`)
//   }

//   const handleCartClick = () => {
//     navigate('/cart')
//   }

//   const handleLogout = async () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       dispatch(logout())
//     }
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
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//       // Clean up timeout on unmount
//       if (suggestionTimeoutRef.current) {
//         clearTimeout(suggestionTimeoutRef.current)
//       }
//     }
//   }, [])

//   return (
//     <>
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: '70px',
//         background: 'white',
//         borderBottom: '1px solid #E5E7EB',
//         boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//         zIndex: 1000,
//         fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
//       }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between', // This ensures proper spacing
//           height: '100%',
//           padding: '0 24px',
//           maxWidth: '100%'
//         }}>
//           {/* Left Section - Logo and Sidebar Toggle */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//             flex: '0 0 auto', // Prevent shrinking
//             minWidth: 'fit-content'
//           }}>
//             {/* Sidebar Toggle Button - Only show if onToggleSidebar prop exists */}
//             {onToggleSidebar && (
//               <button
//                 onClick={onToggleSidebar}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '40px',
//                   height: '40px',
//                   background: sidebarOpen ? '#EFF6FF' : '#F9FAFB',
//                   border: `1px solid ${sidebarOpen ? '#DBEAFE' : '#E5E7EB'}`,
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s ease',
//                   fontSize: '16px',
//                   color: sidebarOpen ? '#1D4ED8' : '#6B7280'
//                 }}
//                 onMouseOver={(e) => {
//                   if (!sidebarOpen) {
//                     e.target.style.background = '#F3F4F6'
//                     e.target.style.color = '#374151'
//                   }
//                 }}
//                 onMouseOut={(e) => {
//                   if (!sidebarOpen) {
//                     e.target.style.background = '#F9FAFB'
//                     e.target.style.color = '#6B7280'
//                   }
//                 }}
//               >
//                 {sidebarOpen ? '✕' : '☰'}
//               </button>
//             )}

//             {/* Logo */}
//             <div 
//               onClick={() => navigate('/')}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 width: '40px',
//                 height: '40px',
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 borderRadius: '10px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '20px',
//                 color: 'white',
//                 fontWeight: 'bold'
//               }}>
//                 🛒
//               </div>
//               {!isMobile && (
//                 <div>
//                   <h1 style={{
//                     fontSize: '20px',
//                     fontWeight: '700',
//                     color: '#1F2937',
//                     margin: '0',
//                     letterSpacing: '-0.025em'
//                   }}>
//                     E-commerce
//                   </h1>
//                   <p style={{
//                     fontSize: '12px',
//                     color: '#6B7280',
//                     margin: '0',
//                     fontWeight: '500'
//                   }}>
//                     Professional Shopping
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Center Section - Enhanced Search Bar with Elasticsearch */}
//           <div ref={searchRef} style={{
//             flex: '1', // Take available space
//             maxWidth: '600px',
//             margin: '0 24px',
//             position: 'relative'
//           }}>
//             <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
//               <div style={{
//                 position: 'relative',
//                 display: 'flex',
//                 alignItems: 'center'
//               }}>
//                 <input
//                   type="text"
//                   value={searchInput}
//                   onChange={handleSearchInputChange}
//                   placeholder="Search products, brands, categories..."
//                   style={{
//                     width: '100%',
//                     padding: '12px 16px 12px 48px',
//                     border: '2px solid #E5E7EB',
//                     borderRadius: '12px',
//                     fontSize: '14px',
//                     fontFamily: 'inherit',
//                     background: '#F9FAFB',
//                     transition: 'all 0.2s ease',
//                     outline: 'none'
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#6366F1'
//                     e.target.style.background = 'white'
//                     e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)'
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#E5E7EB'
//                     e.target.style.background = '#F9FAFB'
//                     e.target.style.boxShadow = 'none'
//                   }}
//                 />

//                 {/* Search Icon */}
//                 <div style={{
//                   position: 'absolute',
//                   left: '16px',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   color: '#9CA3AF',
//                   fontSize: '16px',
//                   pointerEvents: 'none'
//                 }}>
//                   🔍
//                 </div>

//                 {/* Clear Search */}
//                 {searchInput && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearchInput('')
//                       if (onSearch) onSearch('')
//                     }}
//                     style={{
//                       position: 'absolute',
//                       right: isMobile ? '48px' : '80px',
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       width: '20px',
//                       height: '20px',
//                       background: '#E5E7EB',
//                       color: '#6B7280',
//                       border: 'none',
//                       borderRadius: '50%',
//                       fontSize: '12px',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       transition: 'all 0.2s ease'
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.background = '#DC2626'
//                       e.target.style.color = 'white'
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.background = '#E5E7EB'
//                       e.target.style.color = '#6B7280'
//                     }}
//                   >
//                     ✕
//                   </button>
//                 )}

//                 {/* Search Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoadingSuggestions}
//                   style={{
//                     position: 'absolute',
//                     right: '8px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     padding: '8px 16px',
//                     background: isLoadingSuggestions ? '#D1D5DB' : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '8px',
//                     fontSize: '13px',
//                     fontWeight: '600',
//                     cursor: isLoadingSuggestions ? 'not-allowed' : 'pointer',
//                     transition: 'all 0.2s ease',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '4px'
//                   }}
//                   onMouseOver={(e) => {
//                     if (!isLoadingSuggestions) {
//                       e.target.style.transform = 'translateY(-50%) scale(1.05)'
//                       e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)'
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (!isLoadingSuggestions) {
//                       e.target.style.transform = 'translateY(-50%) scale(1)'
//                       e.target.style.boxShadow = 'none'
//                     }
//                   }}
//                 >
//                   {isLoadingSuggestions ? '⏳' : (isMobile ? '🔍' : 'Search')}
//                 </button>
//               </div>
//             </form>

//             {/* Enhanced Search Suggestions from Elasticsearch */}
//             {(showSuggestions || isLoadingSuggestions) && (
//               <div style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 right: 0,
//                 background: 'white',
//                 border: '1px solid #E5E7EB',
//                 borderTop: 'none',
//                 borderRadius: '0 0 12px 12px',
//                 boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//                 zIndex: 1001,
//                 maxHeight: '400px',
//                 overflowY: 'auto'
//               }}>
//                 {isLoadingSuggestions ? (
//                   <div style={{
//                     padding: '16px',
//                     textAlign: 'center',
//                     color: '#6B7280',
//                     fontSize: '14px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '8px'
//                   }}>
//                     <LoadingSpinner size="small" color="#6366F1" />
//                     <span>Loading suggestions...</span>
//                   </div>
//                 ) : searchSuggestions.length > 0 ? (
//                   <>
//                     <div style={{
//                       padding: '8px 16px',
//                       background: '#F9FAFB',
//                       borderBottom: '1px solid #E5E7EB',
//                       fontSize: '12px',
//                       color: '#6B7280',
//                       fontWeight: '500',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       Search Suggestions
//                     </div>
//                     {searchSuggestions.map((suggestion, index) => (
//                       <div
//                         key={index}
//                         onClick={() => handleSuggestionClick(suggestion)}
//                         style={{
//                           padding: '12px 16px',
//                           cursor: 'pointer',
//                           borderBottom: index < searchSuggestions.length - 1 ? '1px solid #F3F4F6' : 'none',
//                           fontSize: '14px',
//                           color: '#374151',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '12px',
//                           transition: 'all 0.2s ease'
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.background = '#F9FAFB'
//                           e.target.style.paddingLeft = '20px'
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.background = 'transparent'
//                           e.target.style.paddingLeft = '16px'
//                         }}
//                       >
//                         <span style={{ opacity: 0.5, fontSize: '12px' }}>🔍</span>
//                         <span style={{ flex: 1 }}>{suggestion}</span>
//                         <span style={{ 
//                           opacity: 0.3, 
//                           fontSize: '12px',
//                           transform: 'rotate(-45deg)'
//                         }}>↗</span>
//                       </div>
//                     ))}
//                   </>
//                 ) : (
//                   <div style={{
//                     padding: '16px',
//                     textAlign: 'center',
//                     color: '#6B7280',
//                     fontSize: '14px'
//                   }}>
//                     No suggestions found
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Right Section - Navigation and Profile - IMPROVED POSITIONING */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px', // Increased gap for better spacing
//             flex: '0 0 auto', // Prevent shrinking
//             minWidth: 'fit-content',
//             paddingLeft: '16px' // Add some padding from the search bar
//           }}>
//             {/* Enhanced Cart Icon */}
//             <button 
//               onClick={handleCartClick}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 padding: '10px 14px', // Slightly increased padding
//                 background: 'transparent',
//                 border: '2px solid #E5E7EB', // Thicker border for better definition
//                 borderRadius: '10px', // Slightly more rounded
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 color: '#6B7280',
//                 position: 'relative',
//                 transition: 'all 0.2s ease',
//                 fontWeight: '600', // Bolder text
//                 fontFamily: 'inherit',
//                 minWidth: isMobile ? '48px' : '80px', // Ensure minimum width
//                 justifyContent: 'center'
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.borderColor = '#6366F1'
//                 e.target.style.color = '#6366F1'
//                 e.target.style.background = '#EFF6FF'
//                 e.target.style.transform = 'translateY(-1px)'
//                 e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.15)'
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.borderColor = '#E5E7EB'
//                 e.target.style.color = '#6B7280'
//                 e.target.style.background = 'transparent'
//                 e.target.style.transform = 'translateY(0)'
//                 e.target.style.boxShadow = 'none'
//               }}
//             >
//               <span style={{ fontSize: '18px' }}>🛒</span>
//               {!isMobile && <span style={{ fontSize: '14px' }}>Cart</span>}
//               {cartCount > 0 && (
//                 <span style={{
//                   position: 'absolute',
//                   top: '-8px',
//                   right: '-8px',
//                   background: '#EF4444',
//                   color: 'white',
//                   borderRadius: '50%',
//                   minWidth: '20px',
//                   height: '20px',
//                   fontSize: '11px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontWeight: '700',
//                   padding: '0 2px',
//                   border: '2px solid white', // White border for better visibility
//                   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                   animation: cartCount > 0 ? 'pulse 0.3s ease-in-out' : 'none'
//                 }}>
//                   {cartCount > 99 ? '99+' : cartCount}
//                 </span>
//               )}
//             </button>

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <button
//                 onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '48px',
//                   height: '48px',
//                   background: '#F9FAFB',
//                   border: '2px solid #E5E7EB',
//                   borderRadius: '10px',
//                   cursor: 'pointer',
//                   fontSize: '18px',
//                   color: '#6B7280',
//                   transition: 'all 0.2s ease'
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.background = '#F3F4F6'
//                   e.target.style.borderColor = '#D1D5DB'
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.background = '#F9FAFB'
//                   e.target.style.borderColor = '#E5E7EB'
//                 }}
//               >
//                 ⋮
//               </button>
//             )}

//             {/* Enhanced Profile Section - DESKTOP ONLY */}
//             {!isMobile && (
//               <div ref={dropdownRef} style={{ position: 'relative' }}>
//                 <button
//                   onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                     padding: '8px 12px',
//                     background: 'transparent',
//                     border: '2px solid transparent',
//                     borderRadius: '10px',
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease',
//                     fontFamily: 'inherit',
//                     minWidth: '140px' // Ensure consistent width
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.background = '#F3F4F6'
//                     e.target.style.borderColor = '#E5E7EB'
//                     e.target.style.transform = 'translateY(-1px)'
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.background = 'transparent'
//                     e.target.style.borderColor = 'transparent'
//                     e.target.style.transform = 'translateY(0)'
//                   }}
//                 >
//                   <div style={{
//                     width: '36px', // Slightly larger
//                     height: '36px',
//                     background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '16px',
//                     color: 'white',
//                     fontWeight: '600',
//                     border: '2px solid white',
//                     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
//                   }}>
//                     {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                   </div>
//                   <div style={{
//                     textAlign: 'left',
//                     lineHeight: '1.2',
//                     flex: 1
//                   }}>
//                     <div style={{
//                       fontSize: '14px',
//                       fontWeight: '600',
//                       color: '#1F2937'
//                     }}>
//                       Hello, {user?.name?.split(' ')[0] || 'User'}
//                     </div>
//                     <div style={{
//                       fontSize: '12px',
//                       color: '#6B7280',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '4px'
//                     }}>
//                       Account & Lists 
//                       <span style={{ 
//                         fontSize: '10px',
//                         transition: 'transform 0.2s ease',
//                         transform: showProfileDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
//                       }}>▼</span>
//                     </div>
//                   </div>
//                 </button>

//                 {/* Enhanced Profile Dropdown */}
//                 {showProfileDropdown && (
//                   <div style={{
//                     position: 'absolute',
//                     top: '100%',
//                     right: '0',
//                     marginTop: '8px',
//                     width: '300px', // Slightly wider
//                     background: 'white',
//                     border: '1px solid #E5E7EB',
//                     borderRadius: '12px',
//                     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//                     zIndex: 1001,
//                     overflow: 'hidden'
//                   }}>
//                     {/* Profile Header */}
//                     <div style={{
//                       padding: '20px',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       color: 'white'
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '12px'
//                       }}>
//                         <div style={{
//                           width: '48px',
//                           height: '48px',
//                           background: 'rgba(255, 255, 255, 0.2)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontSize: '18px',
//                           fontWeight: '600'
//                         }}>
//                           {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                         </div>
//                         <div>
//                           <div style={{
//                             fontSize: '16px',
//                             fontWeight: '600',
//                             marginBottom: '4px'
//                           }}>
//                             {user?.name || 'User'}
//                           </div>
//                           <div style={{
//                             fontSize: '13px',
//                             opacity: 0.8
//                           }}>
//                             {user?.email || user?.phoneNumber || 'user@example.com'}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Menu Items */}
//                     <div style={{ padding: '8px 0' }}>
//                       {[
//                         { icon: '👤', label: 'Your Account', action: () => {
//                           navigate('/your-account')
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '📦', label: 'Your Orders', action: () => {
//                           navigate('/orders')
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '❤️', label: 'Your Wish List', action: () => {
//                           navigate('/wishlist')
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '🔄', label: 'Your Subscriptions', action: () => {
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '💳', label: 'Payment Options', action: () => {
//                           setShowProfileDropdown(false)
//                         }},
//                         { icon: '⚙️', label: 'Account Settings', action: () => {
//                           setShowProfileDropdown(false)
//                         }}
//                       ].map((item, index) => (
//                         <button
//                           key={index}
//                           onClick={item.action}
//                           style={{
//                             width: '100%',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '12px',
//                             padding: '14px 20px',
//                             background: 'transparent',
//                             border: 'none',
//                             fontSize: '14px',
//                             color: '#374151',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.2s ease',
//                             fontFamily: 'inherit',
//                             textAlign: 'left'
//                           }}
//                           onMouseOver={(e) => {
//                             e.target.style.background = '#F9FAFB'
//                           }}
//                           onMouseOut={(e) => {
//                             e.target.style.background = 'transparent'
//                           }}
//                         >
//                           <span style={{ fontSize: '16px' }}>{item.icon}</span>
//                           {item.label}
//                         </button>
//                       ))}

//                       <div style={{
//                         height: '1px',
//                         background: '#E5E7EB',
//                         margin: '8px 0'
//                       }} />

//                       <button
//                         onClick={handleLogout}
//                         disabled={isLoading}
//                         style={{
//                           width: '100%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '12px',
//                           padding: '14px 20px',
//                           background: 'transparent',
//                           border: 'none',
//                           fontSize: '14px',
//                           color: '#DC2626',
//                           cursor: isLoading ? 'not-allowed' : 'pointer',
//                           opacity: isLoading ? 0.7 : 1,
//                           fontWeight: '500',
//                           transition: 'background-color 0.2s ease',
//                           fontFamily: 'inherit',
//                           textAlign: 'left'
//                         }}
//                         onMouseOver={(e) => {
//                           if (!isLoading) {
//                             e.target.style.background = '#FEF2F2'
//                           }
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.background = 'transparent'
//                         }}
//                       >
//                         {isLoading ? (
//                           <>
//                             <LoadingSpinner size="small" color="#DC2626" />
//                             <span>Signing out...</span>
//                           </>
//                         ) : (
//                           <>
//                             <span style={{ fontSize: '16px' }}>🚪</span>
//                             <span>Sign Out</span>
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Profile Menu */}
//         {isMobile && showProfileDropdown && (
//           <div style={{
//             position: 'absolute',
//             top: '100%',
//             left: '0',
//             right: '0',
//             background: 'white',
//             borderTop: '1px solid #E5E7EB',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             zIndex: 1001
//           }}>
//             <div style={{ padding: '16px 24px' }}>
//               {/* Mobile Profile Section */}
//               <div style={{
//                 padding: '16px',
//                 background: '#F9FAFB',
//                 borderRadius: '8px',
//                 border: '1px solid #E5E7EB',
//                 marginBottom: '16px'
//               }}>
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px',
//                   marginBottom: '12px'
//                 }}>
//                   <div style={{
//                     width: '40px',
//                     height: '40px',
//                     background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '16px',
//                     color: 'white',
//                     fontWeight: '600'
//                   }}>
//                     {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
//                   </div>
//                   <div>
//                     <div style={{
//                       fontSize: '14px',
//                       fontWeight: '600',
//                       color: '#1F2937'
//                     }}>
//                       {user?.name || 'User'}
//                     </div>
//                     <div style={{
//                       fontSize: '12px',
//                       color: '#6B7280'
//                     }}>
//                       {user?.email || user?.phoneNumber || 'user@example.com'}
//                     </div>
//                   </div>
//                 </div>

//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(2, 1fr)',
//                   gap: '8px'
//                 }}>
//                   {[
//                     { icon: '👤', label: 'Profile', action: () => navigate('/your-account') },
//                     { icon: '📦', label: 'Orders', action: () => navigate('/orders') },
//                     { icon: '❤️', label: 'Wishlist', action: () => navigate('/wishlist') },
//                     { icon: '⚙️', label: 'Settings', action: () => {} }
//                   ].map((item, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         item.action()
//                         setShowProfileDropdown(false)
//                       }}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '8px 12px',
//                         background: 'white',
//                         border: '1px solid #E5E7EB',
//                         borderRadius: '6px',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         color: '#374151',
//                         cursor: 'pointer',
//                         fontFamily: 'inherit'
//                       }}
//                     >
//                       <span style={{ fontSize: '14px' }}>{item.icon}</span>
//                       {item.label}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Mobile Logout Button */}
//                 <button
//                   onClick={handleLogout}
//                   disabled={isLoading}
//                   style={{
//                     width: '100%',
//                     marginTop: '12px',
//                     padding: '10px',
//                     background: '#FEF2F2',
//                     border: '1px solid #FECACA',
//                     borderRadius: '6px',
//                     fontSize: '13px',
//                     fontWeight: '500',
//                     color: '#DC2626',
//                     cursor: isLoading ? 'not-allowed' : 'pointer',
//                     opacity: isLoading ? 0.7 : 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '8px',
//                     fontFamily: 'inherit'
//                   }}
//                 >
//                   {isLoading ? (
//                     <>
//                       <LoadingSpinner size="small" color="#DC2626" />
//                       <span>Signing out...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span style={{ fontSize: '14px' }}>🚪</span>
//                       <span>Sign Out</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Click outside to close dropdown */}
//         {showProfileDropdown && (
//           <div
//             style={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: 999
//             }}
//             onClick={() => setShowProfileDropdown(false)}
//           />
//         )}
//       </header>

//       {/* Global Styles */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.1); }
//             100% { transform: scale(1); }
//           }

//           /* Custom scrollbar for search suggestions */
//           ::-webkit-scrollbar {
//             width: 6px;
//           }

//           ::-webkit-scrollbar-track {
//             background: #F3F4F6;
//           }

//           ::-webkit-scrollbar-thumb {
//             background: #D1D5DB;
//             border-radius: 3px;
//           }

//           ::-webkit-scrollbar-thumb:hover {
//             background: #9CA3AF;
//           }
//         `}
//       </style>
//     </>
//   )
// }

// export default Header



// src/components/homepagecomponent/AppHeaders.jsx - Updated with authentication states
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlices'
import LoadingSpinner from '../ui/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import { cartAPI } from '../../services/api/cartAPI'
import { searchAPI } from '../../services/api/searchapiss'

const Header = ({ onSearch, searchQuery, onToggleSidebar, sidebarOpen }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isAuthenticated } = useSelector(state => state.auth)

  // State management
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [searchInput, setSearchInput] = useState(searchQuery || '')
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Refs
  const dropdownRef = useRef(null)
  const searchRef = useRef(null)
  const suggestionTimeoutRef = useRef(null)

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Store customer_id in session storage
  useEffect(() => {
    if (user?.customer_id) {
      sessionStorage.setItem("customer_id", user.customer_id)
    }
  }, [user?.customer_id])

  // Update search input when searchQuery prop changes
  useEffect(() => {
    setSearchInput(searchQuery || '')
  }, [searchQuery])

  // Fetch cart count only if authenticated
  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          setCartCount(0)
          return
        }

        const cartData = await cartAPI.getCartCount()
        setCartCount(cartData.total_items || 0)
      } catch (error) {
        console.error('Failed to fetch cart count:', error)
        setCartCount(0)
      }
    }

    if (isAuthenticated && user) {
      fetchCartCount()
    } else {
      setCartCount(0)
    }
  }, [isAuthenticated, user])

  // Enhanced search input handler with debounced Elasticsearch suggestions
  const handleSearchInputChange = async (e) => {
    const value = e.target.value
    setSearchInput(value)

    // Clear previous timeout
    if (suggestionTimeoutRef.current) {
      clearTimeout(suggestionTimeoutRef.current)
    }

    if (value.length >= 2) {
      setIsLoadingSuggestions(true)

      // Debounce the API call to Elasticsearch
      suggestionTimeoutRef.current = setTimeout(async () => {
        try {
          const suggestions = await searchAPI.getSuggestions(value, 8)
          setSearchSuggestions(suggestions)
          setShowSuggestions(suggestions.length > 0)
          setIsLoadingSuggestions(false)
        } catch (error) {
          console.error('Error fetching Elasticsearch suggestions:', error)
          setSearchSuggestions([])
          setShowSuggestions(false)
          setIsLoadingSuggestions(false)
        }
      }, 300) // 300ms debounce
    } else {
      setShowSuggestions(false)
      setSearchSuggestions([])
      setIsLoadingSuggestions(false)
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      // Call the onSearch prop if provided (for backward compatibility)
      if (onSearch) {
        onSearch(searchInput.trim())
      }

      // Navigate to search results page with query
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion)
    setShowSuggestions(false)

    // Call the onSearch prop if provided (for backward compatibility)
    if (onSearch) {
      onSearch(suggestion)
    }

    // Navigate to search results page
    navigate(`/search?q=${encodeURIComponent(suggestion)}`)
  }

  const handleCartClick = () => {
    if (!isAuthenticated) {
      // Redirect to login with return URL
      navigate('/login?returnTo=' + encodeURIComponent('/cart'))
    } else {
      navigate('/cart')
    }
  }

  const handleSignInClick = () => {
    navigate('/login')
  }

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout())
      // Redirect to home after logout
      navigate('/')
    }
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      // Clean up timeout on unmount
      if (suggestionTimeoutRef.current) {
        clearTimeout(suggestionTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        background: 'white',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0 24px',
          maxWidth: '100%'
        }}>
          {/* Left Section - Logo and Sidebar Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flex: '0 0 auto',
            minWidth: 'fit-content'
          }}>
            {/* Sidebar Toggle Button - Only show if onToggleSidebar prop exists */}
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: sidebarOpen ? '#EFF6FF' : '#F9FAFB',
                  border: `1px solid ${sidebarOpen ? '#DBEAFE' : '#E5E7EB'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '16px',
                  color: sidebarOpen ? '#1D4ED8' : '#6B7280'
                }}
                onMouseOver={(e) => {
                  if (!sidebarOpen) {
                    e.target.style.background = '#F3F4F6'
                    e.target.style.color = '#374151'
                  }
                }}
                onMouseOut={(e) => {
                  if (!sidebarOpen) {
                    e.target.style.background = '#F9FAFB'
                    e.target.style.color = '#6B7280'
                  }
                }}
              >
                {sidebarOpen ? '✕' : '☰'}
              </button>
            )}

            {/* Logo */}
            <div
              onClick={() => navigate('/')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: 'white',
                fontWeight: 'bold'
              }}>
                🛒
              </div>
              {!isMobile && (
                <div>
                  <h1 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1F2937',
                    margin: '0',
                    letterSpacing: '-0.025em'
                  }}>
                    {/* E-commerce */}
                    Elakkiya.com
                  </h1>
                  <p style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    margin: '0',
                    fontWeight: '500'
                  }}>
                    {/* Professional Shopping */}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Center Section - Enhanced Search Bar with Elasticsearch */}
          <div ref={searchRef} style={{
            flex: '1',
            maxWidth: '600px',
            margin: '0 24px',
            position: 'relative'
          }}>
            <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  placeholder="Search products, brands, categories..."
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 48px',
                    border: '2px solid #E5E7EB',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    background: '#F9FAFB',
                    transition: 'all 0.2s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6366F1'
                    e.target.style.background = 'white'
                    e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E5E7EB'
                    e.target.style.background = '#F9FAFB'
                    e.target.style.boxShadow = 'none'
                  }}
                />

                {/* Search Icon */}
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9CA3AF',
                  fontSize: '16px',
                  pointerEvents: 'none'
                }}>
                  🔍
                </div>

                {/* Clear Search */}
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput('')
                      if (onSearch) onSearch('')
                    }}
                    style={{
                      position: 'absolute',
                      right: isMobile ? '48px' : '80px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '20px',
                      height: '20px',
                      background: '#E5E7EB',
                      color: '#6B7280',
                      border: 'none',
                      borderRadius: '50%',
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = '#DC2626'
                      e.target.style.color = 'white'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = '#E5E7EB'
                      e.target.style.color = '#6B7280'
                    }}
                  >
                    ✕
                  </button>
                )}

                {/* Search Button */}
                <button
                  type="submit"
                  disabled={isLoadingSuggestions}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '8px 16px',
                    background: isLoadingSuggestions ? '#D1D5DB' : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: isLoadingSuggestions ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseOver={(e) => {
                    if (!isLoadingSuggestions) {
                      e.target.style.transform = 'translateY(-50%) scale(1.05)'
                      e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isLoadingSuggestions) {
                      e.target.style.transform = 'translateY(-50%) scale(1)'
                      e.target.style.boxShadow = 'none'
                    }
                  }}
                >
                  {isLoadingSuggestions ? '⏳' : (isMobile ? '🔍' : 'Search')}
                </button>
              </div>
            </form>

            {/* Enhanced Search Suggestions from Elasticsearch */}
            {(showSuggestions || isLoadingSuggestions) && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                border: '1px solid #E5E7EB',
                borderTop: 'none',
                borderRadius: '0 0 12px 12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                zIndex: 1001,
                maxHeight: '400px',
                overflowY: 'auto'
              }}>
                {isLoadingSuggestions ? (
                  <div style={{
                    padding: '16px',
                    textAlign: 'center',
                    color: '#6B7280',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}>
                    <LoadingSpinner size="small" color="#6366F1" />
                    <span>Loading suggestions...</span>
                  </div>
                ) : searchSuggestions.length > 0 ? (
                  <>
                    <div style={{
                      padding: '8px 16px',
                      background: '#F9FAFB',
                      borderBottom: '1px solid #E5E7EB',
                      fontSize: '12px',
                      color: '#6B7280',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Search Suggestions
                    </div>
                    {searchSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{
                          padding: '12px 16px',
                          cursor: 'pointer',
                          borderBottom: index < searchSuggestions.length - 1 ? '1px solid #F3F4F6' : 'none',
                          fontSize: '14px',
                          color: '#374151',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = '#F9FAFB'
                          e.target.style.paddingLeft = '20px'
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'transparent'
                          e.target.style.paddingLeft = '16px'
                        }}
                      >
                        <span style={{ opacity: 0.5, fontSize: '12px' }}>🔍</span>
                        <span style={{ flex: 1 }}>{suggestion}</span>
                        <span style={{
                          opacity: 0.3,
                          fontSize: '12px',
                          transform: 'rotate(-45deg)'
                        }}>↗</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <div style={{
                    padding: '16px',
                    textAlign: 'center',
                    color: '#6B7280',
                    fontSize: '14px'
                  }}>
                    No suggestions found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Section - Cart and Sign In/Profile */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flex: '0 0 auto',
            minWidth: 'fit-content',
            paddingLeft: '16px'
          }}>
            {/* Enhanced Cart Icon */}
            <button
              onClick={handleCartClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                background: 'transparent',
                border: '2px solid #E5E7EB',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#6B7280',
                position: 'relative',
                transition: 'all 0.2s ease',
                fontWeight: '600',
                fontFamily: 'inherit',
                minWidth: isMobile ? '48px' : '80px',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = '#6366F1'
                e.target.style.color = '#6366F1'
                e.target.style.background = '#EFF6FF'
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.15)'
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = '#E5E7EB'
                e.target.style.color = '#6B7280'
                e.target.style.background = 'transparent'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '18px' }}>🛒</span>
              {!isMobile && <span style={{ fontSize: '14px' }}>Cart</span>}
              {isAuthenticated && cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#EF4444',
                  color: 'white',
                  borderRadius: '50%',
                  minWidth: '20px',
                  height: '20px',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  padding: '0 2px',
                  border: '2px solid white',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  animation: cartCount > 0 ? 'pulse 0.3s ease-in-out' : 'none'
                }}>
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            {/* Conditional Rendering: Sign In Button OR Profile Section */}
            {!isAuthenticated ? (
              /* Sign In Button for Non-Authenticated Users */
              <button
                onClick={handleSignInClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease',
                  minWidth: isMobile ? '48px' : '100px',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-1px)'
                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)'
                  e.target.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                  e.target.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                }}
              >
                <span style={{ fontSize: '16px' }}>👤</span>
                {!isMobile && <span>Sign In</span>}
              </button>
            ) : (
              /* Profile Section for Authenticated Users */
              <>
                {/* Mobile Menu Button */}
                {isMobile && (
                  <button
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      background: '#F9FAFB',
                      border: '2px solid #E5E7EB',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '18px',
                      color: '#6B7280',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = '#F3F4F6'
                      e.target.style.borderColor = '#D1D5DB'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = '#F9FAFB'
                      e.target.style.borderColor = '#E5E7EB'
                    }}
                  >
                    ⋮
                  </button>
                )}

                {/* Desktop Profile Section */}
                {!isMobile && (
                  <div ref={dropdownRef} style={{ position: 'relative' }}>
                    <button
                      onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 12px',
                        background: 'transparent',
                        border: '2px solid transparent',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontFamily: 'inherit',
                        minWidth: '140px'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#F3F4F6'
                        e.target.style.borderColor = '#E5E7EB'
                        e.target.style.transform = 'translateY(-1px)'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent'
                        e.target.style.borderColor = 'transparent'
                        e.target.style.transform = 'translateY(0)'
                      }}
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        color: 'white',
                        fontWeight: '600',
                        border: '2px solid white',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                      }}>
                        {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
                      </div>
                      <div style={{
                        textAlign: 'left',
                        lineHeight: '1.2',
                        flex: 1
                      }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1F2937'
                        }}>
                          Hello, {user?.name?.split(' ')[0] || 'User'}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#6B7280',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          Account & Lists
                          <span style={{
                            fontSize: '10px',
                            transition: 'transform 0.2s ease',
                            transform: showProfileDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}>▼</span>
                        </div>
                      </div>
                    </button>

                    {/* Enhanced Profile Dropdown */}
                    {showProfileDropdown && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: '0',
                        marginTop: '8px',
                        width: '300px',
                        background: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                        zIndex: 1001,
                        overflow: 'hidden'
                      }}>
                        {/* Profile Header */}
                        <div style={{
                          padding: '20px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                          }}>
                            <div style={{
                              width: '48px',
                              height: '48px',
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '18px',
                              fontWeight: '600'
                            }}>
                              {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
                            </div>
                            <div>
                              <div style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                marginBottom: '4px'
                              }}>
                                {user?.name || 'User'}
                              </div>
                              <div style={{
                                fontSize: '13px',
                                opacity: 0.8
                              }}>
                                {user?.email || user?.phoneNumber || 'user@example.com'}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div style={{ padding: '8px 0' }}>
                          {[
                            {
                              icon: '👤', label: 'Your Account', action: () => {
                                navigate('/your-account')
                                setShowProfileDropdown(false)
                              }
                            },
                            {
                              icon: '📦', label: 'Your Orders', action: () => {
                                navigate('/orders')
                                setShowProfileDropdown(false)
                              }
                            },
                            {
                              icon: '❤️', label: 'Your Wish List', action: () => {
                                navigate('/wishlist')
                                setShowProfileDropdown(false)
                              }
                            },
                            {
                              icon: '🔄', label: 'Your Subscriptions', action: () => {
                                setShowProfileDropdown(false)
                              }
                            },
                            {
                              icon: '💳', label: 'Payment Options', action: () => {
                                setShowProfileDropdown(false)
                              }
                            },
                            {
                              icon: '⚙️', label: 'Account Settings', action: () => {
                                setShowProfileDropdown(false)
                              }
                            }
                          ].map((item, index) => (
                            <button
                              key={index}
                              onClick={item.action}
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '14px 20px',
                                background: 'transparent',
                                border: 'none',
                                fontSize: '14px',
                                color: '#374151',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease',
                                fontFamily: 'inherit',
                                textAlign: 'left'
                              }}
                              onMouseOver={(e) => {
                                e.target.style.background = '#F9FAFB'
                              }}
                              onMouseOut={(e) => {
                                e.target.style.background = 'transparent'
                              }}
                            >
                              <span style={{ fontSize: '16px' }}>{item.icon}</span>
                              {item.label}
                            </button>
                          ))}

                          <div style={{
                            height: '1px',
                            background: '#E5E7EB',
                            margin: '8px 0'
                          }} />

                          <button
                            onClick={handleLogout}
                            disabled={isLoading}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '14px 20px',
                              background: 'transparent',
                              border: 'none',
                              fontSize: '14px',
                              color: '#DC2626',
                              cursor: isLoading ? 'not-allowed' : 'pointer',
                              opacity: isLoading ? 0.7 : 1,
                              fontWeight: '500',
                              transition: 'background-color 0.2s ease',
                              fontFamily: 'inherit',
                              textAlign: 'left'
                            }}
                            onMouseOver={(e) => {
                              if (!isLoading) {
                                e.target.style.background = '#FEF2F2'
                              }
                            }}
                            onMouseOut={(e) => {
                              e.target.style.background = 'transparent'
                            }}
                          >
                            {isLoading ? (
                              <>
                                <LoadingSpinner size="small" color="#DC2626" />
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
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile Profile Menu - Only show if authenticated */}
        {isMobile && isAuthenticated && showProfileDropdown && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            background: 'white',
            borderTop: '1px solid #E5E7EB',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1001
          }}>
            <div style={{ padding: '16px 24px' }}>
              {/* Mobile Profile Section */}
              <div style={{
                padding: '16px',
                background: '#F9FAFB',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                marginBottom: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1F2937'
                    }}>
                      {user?.name || 'User'}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6B7280'
                    }}>
                      {user?.email || user?.phoneNumber || 'user@example.com'}
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px'
                }}>
                  {[
                    { icon: '👤', label: 'Profile', action: () => navigate('/your-account') },
                    { icon: '📦', label: 'Orders', action: () => navigate('/orders') },
                    { icon: '❤️', label: 'Wishlist', action: () => navigate('/wishlist') },
                    { icon: '⚙️', label: 'Settings', action: () => { } }
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        item.action()
                        setShowProfileDropdown(false)
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 12px',
                        background: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#374151',
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}
                    >
                      <span style={{ fontSize: '14px' }}>{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Logout Button */}
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    marginTop: '12px',
                    padding: '10px',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#DC2626',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontFamily: 'inherit'
                  }}
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="small" color="#DC2626" />
                      <span>Signing out...</span>
                    </>
                  ) : (
                    <>
                      <span style={{ fontSize: '14px' }}>🚪</span>
                      <span>Sign Out</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Click outside to close dropdown */}
        {showProfileDropdown && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setShowProfileDropdown(false)}
          />
        )}
      </header>

      {/* Global Styles */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          /* Custom scrollbar for search suggestions */
          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background: #F3F4F6;
          }

          ::-webkit-scrollbar-thumb {
            background: #D1D5DB;
            border-radius: 3px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #9CA3AF;
          }
        `}
      </style>
    </>
  )
}

export default Header