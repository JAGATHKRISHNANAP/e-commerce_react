// // // // // src/pages/Dashboard.jsx
// // // // import React from 'react'
// // // // import { useSelector, useDispatch } from 'react-redux'
// // // // import { logout } from '../redux/slices/authSlices'
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner'

// // // // const Dashboard = () => {
// // // //   const dispatch = useDispatch()
// // // //   const { user, isLoading } = useSelector(state => state.auth)

// // // //   const handleLogout = async () => {
// // // //     if (window.confirm('Are you sure you want to logout?')) {
// // // //       dispatch(logout())
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div style={{
// // // //       minHeight: '100vh',
// // // //       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //       fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
// // // //     }}>
// // // //       {/* Header with Logout */}
// // // //       <header style={{
// // // //         background: 'rgba(255, 255, 255, 0.95)',
// // // //         backdropFilter: 'blur(10px)',
// // // //         borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
// // // //         padding: '16px 0',
// // // //         boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
// // // //       }}>
// // // //         <div style={{
// // // //           maxWidth: '1200px',
// // // //           margin: '0 auto',
// // // //           padding: '0 24px',
// // // //           display: 'flex',
// // // //           justifyContent: 'space-between',
// // // //           alignItems: 'center'
// // // //         }}>
// // // //           {/* Logo/Brand */}
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             gap: '12px'
// // // //           }}>
// // // //             <div style={{
// // // //               width: '40px',
// // // //               height: '40px',
// // // //               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //               borderRadius: '8px',
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               justifyContent: 'center',
// // // //               color: 'white',
// // // //               fontWeight: 'bold',
// // // //               fontSize: '18px'
// // // //             }}>
// // // //               🏠
// // // //             </div>
// // // //             <h1 style={{
// // // //               fontSize: '24px',
// // // //               fontWeight: '600',
// // // //               color: '#333',
// // // //               margin: '0'
// // // //             }}>
// // // //               Dashboard
// // // //             </h1>
// // // //           </div>

// // // //           {/* User Info and Logout */}
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             gap: '16px'
// // // //           }}>
// // // //             {/* User Avatar and Info */}
// // // //             <div style={{
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               gap: '12px',
// // // //               padding: '8px 16px',
// // // //               background: 'rgba(102, 126, 234, 0.1)',
// // // //               borderRadius: '24px',
// // // //               border: '1px solid rgba(102, 126, 234, 0.2)'
// // // //             }}>
// // // //               <div style={{
// // // //                 width: '32px',
// // // //                 height: '32px',
// // // //                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //                 borderRadius: '50%',
// // // //                 display: 'flex',
// // // //                 alignItems: 'center',
// // // //                 justifyContent: 'center',
// // // //                 color: 'white',
// // // //                 fontWeight: 'bold',
// // // //                 fontSize: '14px'
// // // //               }}>
// // // //                 {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
// // // //               </div>
// // // //               <div>
// // // //                 <p style={{
// // // //                   fontSize: '14px',
// // // //                   fontWeight: '500',
// // // //                   color: '#333',
// // // //                   margin: '0',
// // // //                   lineHeight: '1.2'
// // // //                 }}>
// // // //                   {user?.name || 'User'}
// // // //                 </p>
// // // //                 <p style={{
// // // //                   fontSize: '12px',
// // // //                   color: '#666',
// // // //                   margin: '0',
// // // //                   lineHeight: '1.2'
// // // //                 }}>
// // // //                   {user?.email || user?.phoneNumber || 'user@example.com'}
// // // //                 </p>
// // // //               </div>
// // // //             </div>

// // // //             {/* Logout Button */}
// // // //             <button
// // // //               onClick={handleLogout}
// // // //               disabled={isLoading}
// // // //               style={{
// // // //                 padding: '10px 20px',
// // // //                 background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// // // //                 color: 'white',
// // // //                 border: 'none',
// // // //                 borderRadius: '8px',
// // // //                 fontSize: '14px',
// // // //                 fontWeight: '500',
// // // //                 cursor: isLoading ? 'not-allowed' : 'pointer',
// // // //                 display: 'flex',
// // // //                 alignItems: 'center',
// // // //                 gap: '8px',
// // // //                 transition: 'all 0.2s ease',
// // // //                 boxShadow: '0 2px 8px rgba(255, 107, 107, 0.3)',
// // // //                 opacity: isLoading ? 0.7 : 1
// // // //               }}
// // // //               onMouseOver={(e) => {
// // // //                 if (!isLoading) {
// // // //                   e.target.style.transform = 'translateY(-1px)'
// // // //                   e.target.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.4)'
// // // //                 }
// // // //               }}
// // // //               onMouseOut={(e) => {
// // // //                 e.target.style.transform = 'translateY(0)'
// // // //                 e.target.style.boxShadow = '0 2px 8px rgba(255, 107, 107, 0.3)'
// // // //               }}
// // // //             >
// // // //               {isLoading ? (
// // // //                 <>
// // // //                   <LoadingSpinner size="small" color="white" />
// // // //                   <span>Logging out...</span>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <span>🚪</span>
// // // //                   <span>Logout</span>
// // // //                 </>
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       {/* Main Content */}
// // // //       <main style={{
// // // //         padding: '40px 24px',
// // // //         maxWidth: '1200px',
// // // //         margin: '0 auto'
// // // //       }}>
// // // //         {/* Welcome Card */}
// // // //         <div style={{
// // // //           background: 'rgba(255, 255, 255, 0.95)',
// // // //           backdropFilter: 'blur(10px)',
// // // //           borderRadius: '16px',
// // // //           padding: '32px',
// // // //           marginBottom: '32px',
// // // //           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
// // // //           border: '1px solid rgba(255, 255, 255, 0.2)'
// // // //         }}>
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'flex-start',
// // // //             gap: '20px'
// // // //           }}>
// // // //             <div style={{
// // // //               width: '64px',
// // // //               height: '64px',
// // // //               background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
// // // //               borderRadius: '16px',
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               justifyContent: 'center',
// // // //               fontSize: '32px'
// // // //             }}>
// // // //               🎉
// // // //             </div>
// // // //             <div style={{ flex: 1 }}>
// // // //               <h2 style={{
// // // //                 fontSize: '28px',
// // // //                 fontWeight: '600',
// // // //                 color: '#333',
// // // //                 margin: '0 0 8px 0'
// // // //               }}>
// // // //                 Welcome back, {user?.name || 'User'}!
// // // //               </h2>
// // // //               <p style={{
// // // //                 fontSize: '16px',
// // // //                 color: '#666',
// // // //                 margin: '0 0 16px 0',
// // // //                 lineHeight: '1.6'
// // // //               }}>
// // // //                 You have successfully logged in to your dashboard. Your authentication system is working perfectly!
// // // //               </p>
// // // //               <div style={{
// // // //                 display: 'flex',
// // // //                 gap: '8px',
// // // //                 flexWrap: 'wrap'
// // // //               }}>
// // // //                 <span style={{
// // // //                   padding: '6px 12px',
// // // //                   background: 'rgba(76, 175, 80, 0.1)',
// // // //                   color: '#4caf50',
// // // //                   borderRadius: '20px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500',
// // // //                   border: '1px solid rgba(76, 175, 80, 0.2)'
// // // //                 }}>
// // // //                   ✅ Authenticated
// // // //                 </span>
// // // //                 <span style={{
// // // //                   padding: '6px 12px',
// // // //                   background: 'rgba(33, 150, 243, 0.1)',
// // // //                   color: '#2196f3',
// // // //                   borderRadius: '20px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500',
// // // //                   border: '1px solid rgba(33, 150, 243, 0.2)'
// // // //                 }}>
// // // //                   🔒 Secure Session
// // // //                 </span>
// // // //                 <span style={{
// // // //                   padding: '6px 12px',
// // // //                   background: 'rgba(156, 39, 176, 0.1)',
// // // //                   color: '#9c27b0',
// // // //                   borderRadius: '20px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500',
// // // //                   border: '1px solid rgba(156, 39, 176, 0.2)'
// // // //                 }}>
// // // //                   🚀 Active User
// // // //                 </span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Quick Stats Grid */}
// // // //         <div style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
// // // //           gap: '24px',
// // // //           marginBottom: '32px'
// // // //         }}>
// // // //           {[
// // // //             { title: 'Profile Status', value: 'Complete', icon: '👤', color: '#4caf50' },
// // // //             { title: 'Security Level', value: 'High', icon: '🛡️', color: '#2196f3' },
// // // //             { title: 'Last Login', value: 'Just now', icon: '🕒', color: '#ff9800' },
// // // //             { title: 'Session Type', value: user?.phoneNumber ? 'Phone' : 'SSO', icon: '📱', color: '#9c27b0' }
// // // //           ].map((stat, index) => (
// // // //             <div key={index} style={{
// // // //               background: 'rgba(255, 255, 255, 0.95)',
// // // //               backdropFilter: 'blur(10px)',
// // // //               borderRadius: '12px',
// // // //               padding: '24px',
// // // //               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //               border: '1px solid rgba(255, 255, 255, 0.2)',
// // // //               transition: 'transform 0.2s ease'
// // // //             }}
// // // //             onMouseOver={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(-4px)'
// // // //             }}
// // // //             onMouseOut={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(0)'
// // // //             }}
// // // //             >
// // // //               <div style={{
// // // //                 display: 'flex',
// // // //                 alignItems: 'center',
// // // //                 gap: '12px',
// // // //                 marginBottom: '12px'
// // // //               }}>
// // // //                 <div style={{
// // // //                   width: '40px',
// // // //                   height: '40px',
// // // //                   background: `${stat.color}20`,
// // // //                   borderRadius: '10px',
// // // //                   display: 'flex',
// // // //                   alignItems: 'center',
// // // //                   justifyContent: 'center',
// // // //                   fontSize: '20px'
// // // //                 }}>
// // // //                   {stat.icon}
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 style={{
// // // //                     fontSize: '14px',
// // // //                     color: '#666',
// // // //                     margin: '0',
// // // //                     fontWeight: '500'
// // // //                   }}>
// // // //                     {stat.title}
// // // //                   </h3>
// // // //                   <p style={{
// // // //                     fontSize: '18px',
// // // //                     color: stat.color,
// // // //                     margin: '0',
// // // //                     fontWeight: '600'
// // // //                   }}>
// // // //                     {stat.value}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Action Center */}
// // // //         <div style={{
// // // //           background: 'rgba(255, 255, 255, 0.95)',
// // // //           backdropFilter: 'blur(10px)',
// // // //           borderRadius: '16px',
// // // //           padding: '32px',
// // // //           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
// // // //           border: '1px solid rgba(255, 255, 255, 0.2)'
// // // //         }}>
// // // //           <h3 style={{
// // // //             fontSize: '20px',
// // // //             fontWeight: '600',
// // // //             color: '#333',
// // // //             margin: '0 0 20px 0'
// // // //           }}>
// // // //             🎯 Quick Actions
// // // //           </h3>
// // // //           <div style={{
// // // //             display: 'grid',
// // // //             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// // // //             gap: '16px'
// // // //           }}>
// // // //             {[
// // // //               { label: '👤 Edit Profile', desc: 'Update your information' },
// // // //               { label: '🔒 Security Settings', desc: 'Manage your security' },
// // // //               { label: '📊 View Analytics', desc: 'Check your activity' },
// // // //               { label: '⚙️ Preferences', desc: 'Customize your experience' }
// // // //             ].map((action, index) => (
// // // //               <button key={index} style={{
// // // //                 padding: '16px',
// // // //                 background: 'rgba(102, 126, 234, 0.1)',
// // // //                 border: '1px solid rgba(102, 126, 234, 0.2)',
// // // //                 borderRadius: '8px',
// // // //                 cursor: 'pointer',
// // // //                 transition: 'all 0.2s ease',
// // // //                 textAlign: 'left'
// // // //               }}
// // // //               onMouseOver={(e) => {
// // // //                 e.target.style.background = 'rgba(102, 126, 234, 0.2)'
// // // //                 e.target.style.transform = 'translateY(-2px)'
// // // //               }}
// // // //               onMouseOut={(e) => {
// // // //                 e.target.style.background = 'rgba(102, 126, 234, 0.1)'
// // // //                 e.target.style.transform = 'translateY(0)'
// // // //               }}
// // // //               >
// // // //                 <div style={{
// // // //                   fontSize: '14px',
// // // //                   fontWeight: '500',
// // // //                   color: '#333',
// // // //                   marginBottom: '4px'
// // // //                 }}>
// // // //                   {action.label}
// // // //                 </div>
// // // //                 <div style={{
// // // //                   fontSize: '12px',
// // // //                   color: '#666'
// // // //                 }}>
// // // //                   {action.desc}
// // // //                 </div>
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Dashboard











// // // // import React, { useState, useEffect } from 'react'
// // // // import Header from '../components/homepagecomponent/AppHeaders'
// // // // import HeroBanner from '../components/homepagecomponent/HeroBanner'
// // // // import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// // // // import ProductFilters from '../components/homepagecomponent/ProductFilters'
// // // // import ProductGrid from '../components/homepagecomponent/ProductGrid'
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner'

// // // // const Homepage = () => {
// // // //   // State management
// // // //   const [products, setProducts] = useState([])
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [error, setError] = useState(null)
// // // //   const [searchQuery, setSearchQuery] = useState('')
// // // //   const [filters, setFilters] = useState({
// // // //     category_id: '',
// // // //     min_price: '',
// // // //     max_price: '',
// // // //     sort_by: 'name',
// // // //     sort_order: 'asc'
// // // //   })
// // // //   const [pagination, setPagination] = useState({
// // // //     page: 1,
// // // //     per_page: 20,
// // // //     total_count: 0,
// // // //     total_pages: 0
// // // //   })

// // // //   // Fetch products when filters, search, or pagination changes
// // // //   useEffect(() => {
// // // //     fetchProducts()
// // // //   }, [filters, searchQuery, pagination.page])

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       setLoading(true)
// // // //       setError(null)

// // // //       // Build query parameters
// // // //       const params = new URLSearchParams({
// // // //         page: pagination.page.toString(),
// // // //         per_page: pagination.per_page.toString(),
// // // //         sort_by: filters.sort_by,
// // // //         sort_order: filters.sort_order
// // // //       })

// // // //       // Add optional filters
// // // //       if (filters.category_id) params.append('category_id', filters.category_id)
// // // //       if (filters.min_price) params.append('min_price', filters.min_price)
// // // //       if (filters.max_price) params.append('max_price', filters.max_price)
// // // //       if (searchQuery) params.append('search', searchQuery)

// // // //       const response = await fetch(`http://localhost:8000/api/v1/api/products?${params}`)

// // // //       if (!response.ok) {
// // // //         throw new Error(`HTTP error! status: ${response.status}`)
// // // //       }

// // // //       const data = await response.json()

// // // //       setProducts(data.products || [])
// // // //       setPagination(prev => ({
// // // //         ...prev,
// // // //         total_count: data.total_count || 0,
// // // //         total_pages: data.total_pages || 0
// // // //       }))

// // // //     } catch (error) {
// // // //       console.error('Error fetching products:', error)
// // // //       setError(error.message)
// // // //       setProducts([])
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   // Event handlers
// // // //   const handleSearch = (query) => {
// // // //     setSearchQuery(query)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handleFiltersChange = (newFilters) => {
// // // //     setFilters(newFilters)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handlePageChange = (newPage) => {
// // // //     setPagination(prev => ({ ...prev, page: newPage }))
// // // //     // Scroll to top of products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
// // // //     }
// // // //   }

// // // //   const handleAddToCart = (product) => {
// // // //     // TODO: Implement add to cart functionality
// // // //     console.log('Add to cart:', product)
// // // //     // Show a temporary notification
// // // //     if (window.confirm(`Add "${product.name}" to cart?`)) {
// // // //       // Add your cart logic here
// // // //       alert('Product added to cart! (This is a demo)')
// // // //     }
// // // //   }

// // // //   const handleViewDetails = (product) => {
// // // //     // TODO: Implement product details view
// // // //     console.log('View product details:', product)
// // // //     // For now, show an alert with product details
// // // //     alert(`Product Details:\n\nName: ${product.name}\nPrice: ₹${product.price}\nStock: ${product.stock_quantity}\nDescription: ${product.description || 'No description available'}`)
// // // //   }

// // // //   const handleShopNow = () => {
// // // //     // Scroll to products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth' })
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div style={{
// // // //       minHeight: '100vh',
// // // //       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
// // // //       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
// // // //     }}>
// // // //       {/* Header */}
// // // //       <Header 
// // // //         onSearch={handleSearch}
// // // //         searchQuery={searchQuery}
// // // //       />

// // // //       {/* Main Content */}
// // // //       <main style={{
// // // //         maxWidth: '1400px',
// // // //         margin: '0 auto',
// // // //         padding: '24px'
// // // //       }}>
// // // //         {/* Hero Banner */}
// // // //         <HeroBanner onShopNow={handleShopNow} />

// // // //         {/* Featured Products Section */}
// // // //         <FeaturedProducts 
// // // //           onAddToCart={handleAddToCart}
// // // //           onViewDetails={handleViewDetails}
// // // //         />

// // // //         {/* All Products Section */}
// // // //         <div id="all-products" style={{
// // // //           background: 'white',
// // // //           borderRadius: '16px',
// // // //           padding: '24px',
// // // //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //           border: '1px solid #e0e0e0'
// // // //         }}>
// // // //           {/* Section Header */}
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '24px',
// // // //             paddingBottom: '16px',
// // // //             borderBottom: '2px solid #f8f9fa'
// // // //           }}>
// // // //             <span style={{ fontSize: '28px' }}>🛍️</span>
// // // //             <h2 style={{
// // // //               fontSize: '28px',
// // // //               fontWeight: '700',
// // // //               color: '#333',
// // // //               margin: '0'
// // // //             }}>
// // // //               All Products
// // // //             </h2>
// // // //             {searchQuery && (
// // // //               <div style={{
// // // //                 padding: '6px 12px',
// // // //                 background: '#e3f2fd',
// // // //                 color: '#1976d2',
// // // //                 borderRadius: '16px',
// // // //                 fontSize: '14px',
// // // //                 fontWeight: '500'
// // // //               }}>
// // // //                 Results for: "{searchQuery}"
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Products Layout */}
// // // //           <div style={{
// // // //             display: 'grid',
// // // //             gridTemplateColumns: '300px 1fr',
// // // //             gap: '24px',
// // // //             alignItems: 'start'
// // // //           }}>
// // // //             {/* Filters Sidebar */}
// // // //             <div style={{ position: 'sticky', top: '100px' }}>
// // // //               <ProductFilters 
// // // //                 onFiltersChange={handleFiltersChange}
// // // //                 filters={filters}
// // // //               />
// // // //             </div>

// // // //             {/* Products Grid */}
// // // //             <div>
// // // //               <ProductGrid
// // // //                 products={products}
// // // //                 loading={loading}
// // // //                 error={error}
// // // //                 onAddToCart={handleAddToCart}
// // // //                 onViewDetails={handleViewDetails}
// // // //                 totalCount={pagination.total_count}
// // // //                 currentPage={pagination.page}
// // // //                 totalPages={pagination.total_pages}
// // // //                 onPageChange={handlePageChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Quick Stats Section */}
// // // //         <div style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // //           gap: '20px',
// // // //           marginTop: '32px'
// // // //         }}>
// // // //           {[
// // // //             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
// // // //             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
// // // //             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
// // // //             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
// // // //           ].map((feature, index) => (
// // // //             <div key={index} style={{
// // // //               background: 'white',
// // // //               padding: '24px',
// // // //               borderRadius: '12px',
// // // //               textAlign: 'center',
// // // //               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// // // //               border: '1px solid #e0e0e0'
// // // //             }}>
// // // //               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
// // // //                 {feature.icon}
// // // //               </div>
// // // //               <h3 style={{
// // // //                 fontSize: '16px',
// // // //                 fontWeight: '600',
// // // //                 color: '#333',
// // // //                 margin: '0 0 8px 0'
// // // //               }}>
// // // //                 {feature.title}
// // // //               </h3>
// // // //               <p style={{
// // // //                 fontSize: '14px',
// // // //                 color: '#666',
// // // //                 margin: '0'
// // // //               }}>
// // // //                 {feature.desc}
// // // //               </p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </main>

// // // //       {/* Footer */}
// // // //       <footer style={{
// // // //         background: '#2c3e50',
// // // //         color: 'white',
// // // //         padding: '40px 24px 20px',
// // // //         marginTop: '48px'
// // // //       }}>
// // // //         <div style={{
// // // //           maxWidth: '1400px',
// // // //           margin: '0 auto',
// // // //           textAlign: 'center'
// // // //         }}>
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '16px'
// // // //           }}>
// // // //             <div style={{
// // // //               width: '40px',
// // // //               height: '40px',
// // // //               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// // // //               borderRadius: '8px',
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               justifyContent: 'center',
// // // //               fontSize: '20px'
// // // //             }}>
// // // //               🛒
// // // //             </div>
// // // //             <h3 style={{
// // // //               fontSize: '24px',
// // // //               fontWeight: 'bold',
// // // //               margin: '0'
// // // //             }}>
// // // //               ShopEasy
// // // //             </h3>
// // // //           </div>
// // // //           <p style={{
// // // //             fontSize: '16px',
// // // //             opacity: 0.8,
// // // //             margin: '0 0 20px 0'
// // // //           }}>
// // // //             Your one-stop destination for quality products at amazing prices.
// // // //           </p>
// // // //           <div style={{
// // // //             paddingTop: '20px',
// // // //             borderTop: '1px solid rgba(255, 255, 255, 0.2)',
// // // //             fontSize: '14px',
// // // //             opacity: 0.7
// // // //           }}>
// // // //             © 2024 ShopEasy. All rights reserved. | Built with ❤️ for amazing shopping experience.
// // // //           </div>
// // // //         </div>
// // // //       </footer>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Homepage


// // // // import React, { useState, useEffect } from 'react'
// // // // import Header from '../components/homepagecomponent/AppHeaders'
// // // // import HeroBanner from '../components/homepagecomponent/HeroBanner'
// // // // import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// // // // import ProductFilters from '../components/homepagecomponent/ProductFilters'
// // // // import ProductGrid from '../components/homepagecomponent/ProductGrid'
// // // // import ProductDetailsModal from '../components/modals/ProductDetailsModal'
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner'

// // // // const Homepage = () => {
// // // //   // State management
// // // //   const [products, setProducts] = useState([])
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [error, setError] = useState(null)
// // // //   const [searchQuery, setSearchQuery] = useState('')
// // // //   const [filters, setFilters] = useState({
// // // //     category_id: '',
// // // //     min_price: '',
// // // //     max_price: '',
// // // //     sort_by: 'name',
// // // //     sort_order: 'asc'
// // // //   })
// // // //   const [pagination, setPagination] = useState({
// // // //     page: 1,
// // // //     per_page: 20,
// // // //     total_count: 0,
// // // //     total_pages: 0
// // // //   })

// // // //   // Modal state
// // // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // // //   const [selectedProduct, setSelectedProduct] = useState(null)

// // // //   // Fetch products when filters, search, or pagination changes
// // // //   useEffect(() => {
// // // //     fetchProducts()
// // // //   }, [filters, searchQuery, pagination.page])

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       setLoading(true)
// // // //       setError(null)

// // // //       // Build query parameters
// // // //       const params = new URLSearchParams({
// // // //         page: pagination.page.toString(),
// // // //         per_page: pagination.per_page.toString(),
// // // //         sort_by: filters.sort_by,
// // // //         sort_order: filters.sort_order
// // // //       })

// // // //       // Add optional filters
// // // //       if (filters.category_id) params.append('category_id', filters.category_id)
// // // //       if (filters.min_price) params.append('min_price', filters.min_price)
// // // //       if (filters.max_price) params.append('max_price', filters.max_price)
// // // //       if (searchQuery) params.append('search', searchQuery)

// // // //       const response = await fetch(`http://localhost:8000/api/v1/api/products?${params}`)

// // // //       if (!response.ok) {
// // // //         throw new Error(`HTTP error! status: ${response.status}`)
// // // //       }

// // // //       const data = await response.json()

// // // //       setProducts(data.products || [])
// // // //       setPagination(prev => ({
// // // //         ...prev,
// // // //         total_count: data.total_count || 0,
// // // //         total_pages: data.total_pages || 0
// // // //       }))

// // // //     } catch (error) {
// // // //       console.error('Error fetching products:', error)
// // // //       setError(error.message)
// // // //       setProducts([])
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   // Event handlers
// // // //   const handleSearch = (query) => {
// // // //     setSearchQuery(query)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handleFiltersChange = (newFilters) => {
// // // //     setFilters(newFilters)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handlePageChange = (newPage) => {
// // // //     setPagination(prev => ({ ...prev, page: newPage }))
// // // //     // Scroll to top of products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
// // // //     }
// // // //   }

// // // //   const handleAddToCart = (product) => {
// // // //     console.log('Add to cart:', product)

// // // //     // Create a more sophisticated notification
// // // //     const notification = document.createElement('div')
// // // //     notification.style.cssText = `
// // // //       position: fixed;
// // // //       top: 20px;
// // // //       right: 20px;
// // // //       background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
// // // //       color: white;
// // // //       padding: 16px 20px;
// // // //       border-radius: 12px;
// // // //       box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
// // // //       z-index: 10000;
// // // //       font-family: "Inter", sans-serif;
// // // //       font-weight: 500;
// // // //       animation: slideInRight 0.3s ease-out;
// // // //       max-width: 300px;
// // // //     `

// // // //     notification.innerHTML = `
// // // //       <div style="display: flex; align-items: center; gap: 12px;">
// // // //         <span style="font-size: 20px;">✅</span>
// // // //         <div>
// // // //           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
// // // //           <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
// // // //         </div>
// // // //       </div>
// // // //     `

// // // //     document.body.appendChild(notification)

// // // //     // Add animation styles
// // // //     const style = document.createElement('style')
// // // //     style.textContent = `
// // // //       @keyframes slideInRight {
// // // //         from {
// // // //           opacity: 0;
// // // //           transform: translateX(100px);
// // // //         }
// // // //         to {
// // // //           opacity: 1;
// // // //           transform: translateX(0);
// // // //         }
// // // //       }
// // // //       @keyframes slideOutRight {
// // // //         from {
// // // //           opacity: 1;
// // // //           transform: translateX(0);
// // // //         }
// // // //         to {
// // // //           opacity: 0;
// // // //           transform: translateX(100px);
// // // //         }
// // // //       }
// // // //     `
// // // //     document.head.appendChild(style)

// // // //     // Remove notification after 3 seconds
// // // //     setTimeout(() => {
// // // //       notification.style.animation = 'slideOutRight 0.3s ease-in'
// // // //       setTimeout(() => {
// // // //         if (notification.parentNode) {
// // // //           notification.parentNode.removeChild(notification)
// // // //         }
// // // //         if (style.parentNode) {
// // // //           style.parentNode.removeChild(style)
// // // //         }
// // // //       }, 300)
// // // //     }, 3000)
// // // //   }

// // // //   const handleViewDetails = (product) => {
// // // //     setSelectedProduct(product)
// // // //     setIsModalOpen(true)
// // // //   }

// // // //   const handleCloseModal = () => {
// // // //     setIsModalOpen(false)
// // // //     setSelectedProduct(null)
// // // //   }

// // // //   const handleShopNow = () => {
// // // //     // Scroll to products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth' })
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div style={{
// // // //       minHeight: '100vh',
// // // //       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
// // // //       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
// // // //     }}>
// // // //       {/* Header */}
// // // //       <Header 
// // // //         onSearch={handleSearch}
// // // //         searchQuery={searchQuery}
// // // //       />

// // // //       {/* Main Content */}
// // // //       <main style={{
// // // //         maxWidth: '1400px',
// // // //         margin: '0 auto',
// // // //         padding: '24px'
// // // //       }}>
// // // //         {/* Hero Banner */}
// // // //         <HeroBanner onShopNow={handleShopNow} />

// // // //         {/* Featured Products Section */}
// // // //         <FeaturedProducts 
// // // //           onAddToCart={handleAddToCart}
// // // //           onViewDetails={handleViewDetails}
// // // //         />

// // // //         {/* All Products Section */}
// // // //         <div id="all-products" style={{
// // // //           background: 'white',
// // // //           borderRadius: '16px',
// // // //           padding: '24px',
// // // //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //           border: '1px solid #e0e0e0'
// // // //         }}>
// // // //           {/* Section Header */}
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '24px',
// // // //             paddingBottom: '16px',
// // // //             borderBottom: '2px solid #f8f9fa'
// // // //           }}>
// // // //             <span style={{ fontSize: '28px' }}>🛍️</span>
// // // //             <h2 style={{
// // // //               fontSize: '28px',
// // // //               fontWeight: '700',
// // // //               color: '#333',
// // // //               margin: '0'
// // // //             }}>
// // // //               All Products
// // // //             </h2>
// // // //             {searchQuery && (
// // // //               <div style={{
// // // //                 padding: '6px 12px',
// // // //                 background: '#e3f2fd',
// // // //                 color: '#1976d2',
// // // //                 borderRadius: '16px',
// // // //                 fontSize: '14px',
// // // //                 fontWeight: '500'
// // // //               }}>
// // // //                 Results for: "{searchQuery}"
// // // //               </div>
// // // //             )}
// // // //             <div style={{
// // // //               marginLeft: 'auto',
// // // //               padding: '8px 16px',
// // // //               background: '#f8f9fa',
// // // //               borderRadius: '20px',
// // // //               fontSize: '14px',
// // // //               color: '#666',
// // // //               border: '1px solid #e0e0e0'
// // // //             }}>
// // // //               {pagination.total_count} products found
// // // //             </div>
// // // //           </div>

// // // //           {/* Products Layout */}
// // // //           <div style={{
// // // //             display: 'grid',
// // // //             gridTemplateColumns: '300px 1fr',
// // // //             gap: '24px',
// // // //             alignItems: 'start'
// // // //           }}>
// // // //             {/* Filters Sidebar */}
// // // //             <div style={{ position: 'sticky', top: '100px' }}>
// // // //               <ProductFilters 
// // // //                 onFiltersChange={handleFiltersChange}
// // // //                 filters={filters}
// // // //               />
// // // //             </div>

// // // //             {/* Products Grid */}
// // // //             <div>
// // // //               <ProductGrid
// // // //                 products={products}
// // // //                 loading={loading}
// // // //                 error={error}
// // // //                 onAddToCart={handleAddToCart}
// // // //                 onViewDetails={handleViewDetails}
// // // //                 totalCount={pagination.total_count}
// // // //                 currentPage={pagination.page}
// // // //                 totalPages={pagination.total_pages}
// // // //                 onPageChange={handlePageChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Quick Stats Section */}
// // // //         <div style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // //           gap: '20px',
// // // //           marginTop: '32px'
// // // //         }}>
// // // //           {[
// // // //             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
// // // //             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
// // // //             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
// // // //             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
// // // //           ].map((feature, index) => (
// // // //             <div key={index} style={{
// // // //               background: 'white',
// // // //               padding: '24px',
// // // //               borderRadius: '12px',
// // // //               textAlign: 'center',
// // // //               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// // // //               border: '1px solid #e0e0e0',
// // // //               transition: 'transform 0.2s ease',
// // // //               cursor: 'pointer'
// // // //             }}
// // // //             onMouseOver={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(-4px)'
// // // //             }}
// // // //             onMouseOut={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(0)'
// // // //             }}
// // // //             >
// // // //               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
// // // //                 {feature.icon}
// // // //               </div>
// // // //               <h3 style={{
// // // //                 fontSize: '16px',
// // // //                 fontWeight: '600',
// // // //                 color: '#333',
// // // //                 margin: '0 0 8px 0'
// // // //               }}>
// // // //                 {feature.title}
// // // //               </h3>
// // // //               <p style={{
// // // //                 fontSize: '14px',
// // // //                 color: '#666',
// // // //                 margin: '0'
// // // //               }}>
// // // //                 {feature.desc}
// // // //               </p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </main>

// // // //       {/* Footer */}
// // // //       <footer style={{
// // // //         background: '#2c3e50',
// // // //         color: 'white',
// // // //         padding: '40px 24px 20px',
// // // //         marginTop: '48px'
// // // //       }}>
// // // //         <div style={{
// // // //           maxWidth: '1400px',
// // // //           margin: '0 auto',
// // // //           textAlign: 'center'
// // // //         }}>
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '16px'
// // // //           }}>
// // // //             <div style={{
// // // //               width: '40px',
// // // //               height: '40px',
// // // //               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// // // //               borderRadius: '8px',
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               justifyContent: 'center',
// // // //               fontSize: '20px'
// // // //             }}>
// // // //               🛒
// // // //             </div>
// // // //             <h3 style={{
// // // //               fontSize: '24px',
// // // //               fontWeight: 'bold',
// // // //               margin: '0'
// // // //             }}>
// // // //               ShopEasy
// // // //             </h3>
// // // //           </div>
// // // //           <p style={{
// // // //             fontSize: '16px',
// // // //             opacity: 0.8,
// // // //             margin: '0 0 20px 0'
// // // //           }}>
// // // //             Your one-stop destination for quality products at amazing prices.
// // // //           </p>
// // // //           <div style={{
// // // //             paddingTop: '20px',
// // // //             borderTop: '1px solid rgba(255, 255, 255, 0.2)',
// // // //             fontSize: '14px',
// // // //             opacity: 0.7
// // // //           }}>
// // // //             © 2024 ShopEasy. All rights reserved. | Built with ❤️ for amazing shopping experience.
// // // //           </div>
// // // //         </div>
// // // //       </footer>

// // // //       {/* Product Details Modal */}
// // // //       <ProductDetailsModal
// // // //         isOpen={isModalOpen}
// // // //         onClose={handleCloseModal}
// // // //         product={selectedProduct}
// // // //         onAddToCart={handleAddToCart}
// // // //       />
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Homepage








// // // // import React, { useState, useEffect } from 'react'
// // // // import Header from '../components/homepagecomponent/AppHeaders'
// // // // import HeroBanner from '../components/homepagecomponent/HeroBanner'
// // // // import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// // // // import FixedProductFilters from '../components/homepagecomponent/ProductFilters'
// // // // import ProductGrid from '../components/homepagecomponent/ProductGrid'
// // // // import ProductDetailsModal from '../components/modals/ProductDetailsModal'
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner'

// // // // const Homepage = () => {
// // // //   // State management
// // // //   const [products, setProducts] = useState([])
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [error, setError] = useState(null)
// // // //   const [searchQuery, setSearchQuery] = useState('')
// // // //   const [filters, setFilters] = useState({
// // // //     category_id: '',
// // // //     min_price: '',
// // // //     max_price: '',
// // // //     sort_by: 'name',
// // // //     sort_order: 'asc'
// // // //   })
// // // //   const [pagination, setPagination] = useState({
// // // //     page: 1,
// // // //     per_page: 20,
// // // //     total_count: 0,
// // // //     total_pages: 0
// // // //   })

// // // //   // Modal state
// // // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // // //   const [selectedProduct, setSelectedProduct] = useState(null)

// // // //   // Fetch products when filters, search, or pagination changes
// // // //   useEffect(() => {
// // // //     fetchProducts()
// // // //   }, [filters, searchQuery, pagination.page])

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       setLoading(true)
// // // //       setError(null)

// // // //       // Build query parameters
// // // //       const params = new URLSearchParams({
// // // //         page: pagination.page.toString(),
// // // //         per_page: pagination.per_page.toString(),
// // // //         sort_by: filters.sort_by,
// // // //         sort_order: filters.sort_order
// // // //       })

// // // //       // Add optional filters
// // // //       if (filters.category_id) params.append('category_id', filters.category_id)
// // // //       if (filters.min_price) params.append('min_price', filters.min_price)
// // // //       if (filters.max_price) params.append('max_price', filters.max_price)
// // // //       if (searchQuery) params.append('search', searchQuery)

// // // //       const response = await fetch(`http://localhost:8000/api/v1/api/products?${params}`)

// // // //       if (!response.ok) {
// // // //         throw new Error(`HTTP error! status: ${response.status}`)
// // // //       }

// // // //       const data = await response.json()

// // // //       setProducts(data.products || [])
// // // //       setPagination(prev => ({
// // // //         ...prev,
// // // //         total_count: data.total_count || 0,
// // // //         total_pages: data.total_pages || 0
// // // //       }))

// // // //     } catch (error) {
// // // //       console.error('Error fetching products:', error)
// // // //       setError(error.message)
// // // //       setProducts([])
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   // Event handlers
// // // //   const handleSearch = (query) => {
// // // //     setSearchQuery(query)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handleFiltersChange = (newFilters) => {
// // // //     setFilters(newFilters)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handlePageChange = (newPage) => {
// // // //     setPagination(prev => ({ ...prev, page: newPage }))
// // // //     // Scroll to top of products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
// // // //     }
// // // //   }

// // // //   const handleAddToCart = (product) => {
// // // //     console.log('Add to cart:', product)

// // // //     // Create a more sophisticated notification
// // // //     const notification = document.createElement('div')
// // // //     notification.style.cssText = `
// // // //       position: fixed;
// // // //       top: 20px;
// // // //       right: 20px;
// // // //       background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
// // // //       color: white;
// // // //       padding: 16px 20px;
// // // //       border-radius: 12px;
// // // //       box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
// // // //       z-index: 10000;
// // // //       font-family: "Inter", sans-serif;
// // // //       font-weight: 500;
// // // //       animation: slideInRight 0.3s ease-out;
// // // //       max-width: 300px;
// // // //     `

// // // //     notification.innerHTML = `
// // // //       <div style="display: flex; align-items: center; gap: 12px;">
// // // //         <span style="font-size: 20px;">✅</span>
// // // //         <div>
// // // //           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
// // // //           <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
// // // //         </div>
// // // //       </div>
// // // //     `

// // // //     document.body.appendChild(notification)

// // // //     // Add animation styles
// // // //     const style = document.createElement('style')
// // // //     style.textContent = `
// // // //       @keyframes slideInRight {
// // // //         from {
// // // //           opacity: 0;
// // // //           transform: translateX(100px);
// // // //         }
// // // //         to {
// // // //           opacity: 1;
// // // //           transform: translateX(0);
// // // //         }
// // // //       }
// // // //       @keyframes slideOutRight {
// // // //         from {
// // // //           opacity: 1;
// // // //           transform: translateX(0);
// // // //         }
// // // //         to {
// // // //           opacity: 0;
// // // //           transform: translateX(100px);
// // // //         }
// // // //       }
// // // //     `
// // // //     document.head.appendChild(style)

// // // //     // Remove notification after 3 seconds
// // // //     setTimeout(() => {
// // // //       notification.style.animation = 'slideOutRight 0.3s ease-in'
// // // //       setTimeout(() => {
// // // //         if (notification.parentNode) {
// // // //           notification.parentNode.removeChild(notification)
// // // //         }
// // // //         if (style.parentNode) {
// // // //           style.parentNode.removeChild(style)
// // // //         }
// // // //       }, 300)
// // // //     }, 3000)
// // // //   }

// // // //   const handleViewDetails = (product) => {
// // // //     setSelectedProduct(product)
// // // //     setIsModalOpen(true)
// // // //   }

// // // //   const handleCloseModal = () => {
// // // //     setIsModalOpen(false)
// // // //     setSelectedProduct(null)
// // // //   }

// // // //   const handleShopNow = () => {
// // // //     // Scroll to products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth' })
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div style={{
// // // //       minHeight: '100vh',
// // // //       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
// // // //       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
// // // //     }}>
// // // //       {/* Fixed Filters Sidebar */}
// // // //       <FixedProductFilters 
// // // //         onFiltersChange={handleFiltersChange}
// // // //         filters={filters}
// // // //       />

// // // //       {/* Header */}
// // // //       <Header 
// // // //         onSearch={handleSearch}
// // // //         searchQuery={searchQuery}
// // // //       />

// // // //       {/* Main Content */}
// // // //       <main style={{
// // // //         maxWidth: '1400px',
// // // //         margin: '0 auto',
// // // //         padding: '24px',
// // // //         marginLeft: '380px' // Make space for fixed filter
// // // //       }}>
// // // //         {/* Hero Banner */}
// // // //         <HeroBanner onShopNow={handleShopNow} />

// // // //         {/* Featured Products Section */}
// // // //         <FeaturedProducts 
// // // //           onAddToCart={handleAddToCart}
// // // //           onViewDetails={handleViewDetails}
// // // //         />

// // // //         {/* All Products Section */}
// // // //         <div id="all-products" style={{
// // // //           background: 'white',
// // // //           borderRadius: '16px',
// // // //           padding: '24px',
// // // //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //           border: '1px solid #e0e0e0'
// // // //         }}>
// // // //           {/* Section Header */}
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '24px',
// // // //             paddingBottom: '16px',
// // // //             borderBottom: '2px solid #f8f9fa'
// // // //           }}>
// // // //             <span style={{ fontSize: '28px' }}>🛍️</span>
// // // //             <h2 style={{
// // // //               fontSize: '28px',
// // // //               fontWeight: '700',
// // // //               color: '#333',
// // // //               margin: '0'
// // // //             }}>
// // // //               All Products
// // // //             </h2>
// // // //             {searchQuery && (
// // // //               <div style={{
// // // //                 padding: '6px 12px',
// // // //                 background: '#e3f2fd',
// // // //                 color: '#1976d2',
// // // //                 borderRadius: '16px',
// // // //                 fontSize: '14px',
// // // //                 fontWeight: '500'
// // // //               }}>
// // // //                 Results for: "{searchQuery}"
// // // //               </div>
// // // //             )}
// // // //             <div style={{
// // // //               marginLeft: 'auto',
// // // //               padding: '8px 16px',
// // // //               background: '#f8f9fa',
// // // //               borderRadius: '20px',
// // // //               fontSize: '14px',
// // // //               color: '#666',
// // // //               border: '1px solid #e0e0e0'
// // // //             }}>
// // // //               {pagination.total_count} products found
// // // //             </div>
// // // //           </div>

// // // //           {/* Filter Status Bar */}
// // // //           {(filters.category_id || filters.min_price || filters.max_price) && (
// // // //             <div style={{
// // // //               display: 'flex',
// // // //               flexWrap: 'wrap',
// // // //               gap: '8px',
// // // //               marginBottom: '20px',
// // // //               padding: '12px',
// // // //               background: '#f8f9fa',
// // // //               borderRadius: '10px',
// // // //               border: '1px solid #e0e0e0'
// // // //             }}>
// // // //               <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
// // // //                 Active Filters:
// // // //               </span>
// // // //               {filters.category_id && (
// // // //                 <span style={{
// // // //                   padding: '4px 8px',
// // // //                   background: '#007bff',
// // // //                   color: 'white',
// // // //                   borderRadius: '12px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500'
// // // //                 }}>
// // // //                   Category: {filters.category_id}
// // // //                 </span>
// // // //               )}
// // // //               {filters.min_price && (
// // // //                 <span style={{
// // // //                   padding: '4px 8px',
// // // //                   background: '#28a745',
// // // //                   color: 'white',
// // // //                   borderRadius: '12px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500'
// // // //                 }}>
// // // //                   Min: ₹{filters.min_price}
// // // //                 </span>
// // // //               )}
// // // //               {filters.max_price && (
// // // //                 <span style={{
// // // //                   padding: '4px 8px',
// // // //                   background: '#dc3545',
// // // //                   color: 'white',
// // // //                   borderRadius: '12px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500'
// // // //                 }}>
// // // //                   Max: ₹{filters.max_price}
// // // //                 </span>
// // // //               )}
// // // //             </div>
// // // //           )}

// // // //           {/* Products Grid - Full Width */}
// // // //           <ProductGrid
// // // //             products={products}
// // // //             loading={loading}
// // // //             error={error}
// // // //             onAddToCart={handleAddToCart}
// // // //             onViewDetails={handleViewDetails}
// // // //             totalCount={pagination.total_count}
// // // //             currentPage={pagination.page}
// // // //             totalPages={pagination.total_pages}
// // // //             onPageChange={handlePageChange}
// // // //           />
// // // //         </div>

// // // //         {/* Quick Stats Section */}
// // // //         <div style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // //           gap: '20px',
// // // //           marginTop: '32px'
// // // //         }}>
// // // //           {[
// // // //             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
// // // //             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
// // // //             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
// // // //             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
// // // //           ].map((feature, index) => (
// // // //             <div key={index} style={{
// // // //               background: 'white',
// // // //               padding: '24px',
// // // //               borderRadius: '12px',
// // // //               textAlign: 'center',
// // // //               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// // // //               border: '1px solid #e0e0e0',
// // // //               transition: 'transform 0.2s ease',
// // // //               cursor: 'pointer'
// // // //             }}
// // // //             onMouseOver={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(-4px)'
// // // //             }}
// // // //             onMouseOut={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(0)'
// // // //             }}
// // // //             >
// // // //               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
// // // //                 {feature.icon}
// // // //               </div>
// // // //               <h3 style={{
// // // //                 fontSize: '16px',
// // // //                 fontWeight: '600',
// // // //                 color: '#333',
// // // //                 margin: '0 0 8px 0'
// // // //               }}>
// // // //                 {feature.title}
// // // //               </h3>
// // // //               <p style={{
// // // //                 fontSize: '14px',
// // // //                 color: '#666',
// // // //                 margin: '0'
// // // //               }}>
// // // //                 {feature.desc}
// // // //               </p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </main>

// // // //       {/* Footer */}
// // // //       <footer style={{
// // // //         background: '#2c3e50',
// // // //         color: 'white',
// // // //         padding: '40px 24px 20px',
// // // //         marginTop: '48px',
// // // //         marginLeft: '380px' // Make space for fixed filter
// // // //       }}>
// // // //         <div style={{
// // // //           maxWidth: '1400px',
// // // //           margin: '0 auto',
// // // //           textAlign: 'center'
// // // //         }}>
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '16px'
// // // //           }}>
// // // //             <div style={{
// // // //               width: '40px',
// // // //               height: '40px',
// // // //               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// // // //               borderRadius: '8px',
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               justifyContent: 'center',
// // // //               fontSize: '20px'
// // // //             }}>
// // // //               🛒
// // // //             </div>
// // // //             <h3 style={{
// // // //               fontSize: '24px',
// // // //               fontWeight: 'bold',
// // // //               margin: '0'
// // // //             }}>
// // // //               ShopEasy
// // // //             </h3>
// // // //           </div>
// // // //           <p style={{
// // // //             fontSize: '16px',
// // // //             opacity: 0.8,
// // // //             margin: '0 0 20px 0'
// // // //           }}>
// // // //             Your one-stop destination for quality products at amazing prices.
// // // //           </p>
// // // //           <div style={{
// // // //             paddingTop: '20px',
// // // //             borderTop: '1px solid rgba(255, 255, 255, 0.2)',
// // // //             fontSize: '14px',
// // // //             opacity: 0.7
// // // //           }}>
// // // //             © 2024 ShopEasy. All rights reserved. | Built with ❤️ for amazing shopping experience.
// // // //           </div>
// // // //         </div>
// // // //       </footer>

// // // //       {/* Product Details Modal */}
// // // //       <ProductDetailsModal
// // // //         isOpen={isModalOpen}
// // // //         onClose={handleCloseModal}
// // // //         product={selectedProduct}
// // // //         onAddToCart={handleAddToCart}
// // // //       />

// // // //       {/* Responsive Styles for Mobile */}
// // // //       <style>
// // // //         {`
// // // //           @media (max-width: 768px) {
// // // //             main {
// // // //               margin-left: 80px !important;
// // // //               padding: 16px !important;
// // // //             }
// // // //             footer {
// // // //               margin-left: 80px !important;
// // // //             }
// // // //           }

// // // //           @media (max-width: 480px) {
// // // //             main {
// // // //               margin-left: 70px !important;
// // // //               padding: 12px !important;
// // // //             }
// // // //             footer {
// // // //               margin-left: 70px !important;
// // // //             }
// // // //           }
// // // //         `}
// // // //       </style>
// // // //     </div>
// // // //   )
// // // // }


// // // // export default Homepage










// // // // import React, { useState, useEffect } from 'react'
// // // // import Header from '../components/homepagecomponent/AppHeaders'
// // // // import HeroBanner from '../components/homepagecomponent/HeroBanner'
// // // // import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// // // // import FixedProductFilters from '../components/homepagecomponent/ProductFilters'
// // // // import ProductGrid from '../components/homepagecomponent/ProductGrid'
// // // // import ProductDetailsModal from '../components/modals/ProductDetailsModal'
// // // // import LoadingSpinner from '../components/ui/LoadingSpinner'

// // // // const Homepage = () => {
// // // //   // State management
// // // //   const [products, setProducts] = useState([])
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [error, setError] = useState(null)
// // // //   const [searchQuery, setSearchQuery] = useState('')
// // // //   const [filters, setFilters] = useState({
// // // //     category_id: '',
// // // //     min_price: '',
// // // //     max_price: '',
// // // //     sort_by: 'name',
// // // //     sort_order: 'asc'
// // // //   })
// // // //   const [pagination, setPagination] = useState({
// // // //     page: 1,
// // // //     per_page: 20,
// // // //     total_count: 0,
// // // //     total_pages: 0
// // // //   })

// // // //   // Modal state
// // // //   const [isModalOpen, setIsModalOpen] = useState(false)
// // // //   const [selectedProduct, setSelectedProduct] = useState(null)

// // // //   // Fetch products when filters, search, or pagination changes
// // // //   useEffect(() => {
// // // //     fetchProducts()
// // // //   }, [filters, searchQuery, pagination.page])

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       setLoading(true)
// // // //       setError(null)

// // // //       // Build query parameters
// // // //       const params = new URLSearchParams({
// // // //         page: pagination.page.toString(),
// // // //         per_page: pagination.per_page.toString(),
// // // //         sort_by: filters.sort_by,
// // // //         sort_order: filters.sort_order
// // // //       })

// // // //       // Add optional filters
// // // //       if (filters.category_id) params.append('category_id', filters.category_id)
// // // //       if (filters.min_price) params.append('min_price', filters.min_price)
// // // //       if (filters.max_price) params.append('max_price', filters.max_price)
// // // //       if (searchQuery) params.append('search', searchQuery)

// // // //       const response = await fetch(`http://localhost:8000/api/v1/products?${params}`)

// // // //       if (!response.ok) {
// // // //         throw new Error(`HTTP error! status: ${response.status}`)
// // // //       }

// // // //       const data = await response.json()

// // // //       setProducts(data.products || [])
// // // //       setPagination(prev => ({
// // // //         ...prev,
// // // //         total_count: data.total_count || 0,
// // // //         total_pages: data.total_pages || 0
// // // //       }))

// // // //     } catch (error) {
// // // //       console.error('Error fetching products:', error)
// // // //       setError(error.message)
// // // //       setProducts([])
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   // Event handlers
// // // //   const handleSearch = (query) => {
// // // //     setSearchQuery(query)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handleFiltersChange = (newFilters) => {
// // // //     setFilters(newFilters)
// // // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // // //   }

// // // //   const handlePageChange = (newPage) => {
// // // //     setPagination(prev => ({ ...prev, page: newPage }))
// // // //     // Scroll to top of products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
// // // //     }
// // // //   }

// // // //   const handleAddToCart = (product) => {
// // // //     console.log('Add to cart:', product)

// // // //     // Create a more sophisticated notification
// // // //     const notification = document.createElement('div')
// // // //     notification.style.cssText = `
// // // //       position: fixed;
// // // //       top: 20px;
// // // //       right: 20px;
// // // //       background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
// // // //       color: white;
// // // //       padding: 16px 20px;
// // // //       border-radius: 12px;
// // // //       box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
// // // //       z-index: 10000;
// // // //       font-family: "Inter", sans-serif;
// // // //       font-weight: 500;
// // // //       animation: slideInRight 0.3s ease-out;
// // // //       max-width: 300px;
// // // //     `

// // // //     notification.innerHTML = `
// // // //       <div style="display: flex; align-items: center; gap: 12px;">
// // // //         <span style="font-size: 20px;">✅</span>
// // // //         <div>
// // // //           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
// // // //           <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
// // // //         </div>
// // // //       </div>
// // // //     `

// // // //     document.body.appendChild(notification)

// // // //     // Add animation styles
// // // //     const style = document.createElement('style')
// // // //     style.textContent = `
// // // //       @keyframes slideInRight {
// // // //         from {
// // // //           opacity: 0;
// // // //           transform: translateX(100px);
// // // //         }
// // // //         to {
// // // //           opacity: 1;
// // // //           transform: translateX(0);
// // // //         }
// // // //       }
// // // //       @keyframes slideOutRight {
// // // //         from {
// // // //           opacity: 1;
// // // //           transform: translateX(0);
// // // //         }
// // // //         to {
// // // //           opacity: 0;
// // // //           transform: translateX(100px);
// // // //         }
// // // //       }
// // // //     `
// // // //     document.head.appendChild(style)

// // // //     // Remove notification after 3 seconds
// // // //     setTimeout(() => {
// // // //       notification.style.animation = 'slideOutRight 0.3s ease-in'
// // // //       setTimeout(() => {
// // // //         if (notification.parentNode) {
// // // //           notification.parentNode.removeChild(notification)
// // // //         }
// // // //         if (style.parentNode) {
// // // //           style.parentNode.removeChild(style)
// // // //         }
// // // //       }, 300)
// // // //     }, 3000)
// // // //   }

// // // //   const handleViewDetails = (product) => {
// // // //     setSelectedProduct(product)
// // // //     setIsModalOpen(true)
// // // //   }

// // // //   const handleCloseModal = () => {
// // // //     setIsModalOpen(false)
// // // //     setSelectedProduct(null)
// // // //   }

// // // //   const handleShopNow = () => {
// // // //     // Scroll to products section
// // // //     const productsSection = document.getElementById('all-products')
// // // //     if (productsSection) {
// // // //       productsSection.scrollIntoView({ behavior: 'smooth' })
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div style={{
// // // //       minHeight: '100vh',
// // // //       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
// // // //       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
// // // //     }}>
// // // //       {/* Fixed Filters Sidebar */}
// // // //       <FixedProductFilters 
// // // //         onFiltersChange={handleFiltersChange}
// // // //         filters={filters}
// // // //       />

// // // //       {/* Header */}
// // // //       <Header 
// // // //         onSearch={handleSearch}
// // // //         searchQuery={searchQuery}
// // // //       />

// // // //       {/* Main Content */}
// // // //       <main style={{
// // // //         maxWidth: '1400px',
// // // //         margin: '0 auto',
// // // //         padding: window.innerWidth <= 768 ? '16px 16px 120px 16px' : '24px 24px 24px 304px',
// // // //         transition: 'all 0.3s ease',
// // // //         fontFamily: 'Amazon Ember, Arial, sans-serif'
// // // //       }}>
// // // //         {/* Hero Banner */}
// // // //         <HeroBanner onShopNow={handleShopNow} />

// // // //         {/* Featured Products Section */}
// // // //         {/* <FeaturedProducts 
// // // //           onAddToCart={handleAddToCart}
// // // //           onViewDetails={handleViewDetails}
// // // //         /> */}

// // // //         {/* All Products Section */}
// // // //         <div id="all-products" style={{
// // // //           background: 'white',
// // // //           borderRadius: '16px',
// // // //           padding: '24px',
// // // //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //           border: '1px solid #e0e0e0'
// // // //         }}>
// // // //           {/* Section Header */}
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '24px',
// // // //             paddingBottom: '16px',
// // // //             borderBottom: '2px solid #f8f9fa'
// // // //           }}>
// // // //             <span style={{ fontSize: '28px' }}>🛍️</span>
// // // //             <h2 style={{
// // // //               fontSize: '28px',
// // // //               fontWeight: '700',
// // // //               color: '#333',
// // // //               margin: '0'
// // // //             }}>
// // // //               All Products
// // // //             </h2>
// // // //             {searchQuery && (
// // // //               <div style={{
// // // //                 padding: '6px 12px',
// // // //                 background: '#e3f2fd',
// // // //                 color: '#1976d2',
// // // //                 borderRadius: '16px',
// // // //                 fontSize: '14px',
// // // //                 fontWeight: '500'
// // // //               }}>
// // // //                 Results for: "{searchQuery}"
// // // //               </div>
// // // //             )}
// // // //             <div style={{
// // // //               marginLeft: 'auto',
// // // //               padding: '8px 16px',
// // // //               background: '#f8f9fa',
// // // //               borderRadius: '20px',
// // // //               fontSize: '14px',
// // // //               color: '#666',
// // // //               border: '1px solid #e0e0e0'
// // // //             }}>
// // // //               {pagination.total_count} products found
// // // //             </div>
// // // //           </div>

// // // //           {/* Filter Status Bar */}
// // // //           {(filters.category_id || filters.min_price || filters.max_price) && (
// // // //             <div style={{
// // // //               display: 'flex',
// // // //               flexWrap: 'wrap',
// // // //               gap: '8px',
// // // //               marginBottom: '20px',
// // // //               padding: '12px',
// // // //               background: '#f8f9fa',
// // // //               borderRadius: '10px',
// // // //               border: '1px solid #e0e0e0'
// // // //             }}>
// // // //               <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
// // // //                 Active Filters:
// // // //               </span>
// // // //               {filters.category_id && (
// // // //                 <span style={{
// // // //                   padding: '4px 8px',
// // // //                   background: '#007bff',
// // // //                   color: 'white',
// // // //                   borderRadius: '12px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500'
// // // //                 }}>
// // // //                   Category: {filters.category_id}
// // // //                 </span>
// // // //               )}
// // // //               {filters.min_price && (
// // // //                 <span style={{
// // // //                   padding: '4px 8px',
// // // //                   background: '#28a745',
// // // //                   color: 'white',
// // // //                   borderRadius: '12px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500'
// // // //                 }}>
// // // //                   Min: ₹{filters.min_price}
// // // //                 </span>
// // // //               )}
// // // //               {filters.max_price && (
// // // //                 <span style={{
// // // //                   padding: '4px 8px',
// // // //                   background: '#dc3545',
// // // //                   color: 'white',
// // // //                   borderRadius: '12px',
// // // //                   fontSize: '12px',
// // // //                   fontWeight: '500'
// // // //                 }}>
// // // //                   Max: ₹{filters.max_price}
// // // //                 </span>
// // // //               )}
// // // //             </div>
// // // //           )}

// // // //           {/* Products Grid - Full Width */}
// // // //           <ProductGrid
// // // //             products={products}
// // // //             loading={loading}
// // // //             error={error}
// // // //             onAddToCart={handleAddToCart}
// // // //             onViewDetails={handleViewDetails}
// // // //             totalCount={pagination.total_count}
// // // //             currentPage={pagination.page}
// // // //             totalPages={pagination.total_pages}
// // // //             onPageChange={handlePageChange}
// // // //           />
// // // //         </div>

// // // //         {/* Quick Stats Section */}
// // // //         <div style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // //           gap: '20px',
// // // //           marginTop: '32px'
// // // //         }}>
// // // //           {[
// // // //             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
// // // //             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
// // // //             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
// // // //             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
// // // //           ].map((feature, index) => (
// // // //             <div key={index} style={{
// // // //               background: 'white',
// // // //               padding: '24px',
// // // //               borderRadius: '12px',
// // // //               textAlign: 'center',
// // // //               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// // // //               border: '1px solid #e0e0e0',
// // // //               transition: 'transform 0.2s ease',
// // // //               cursor: 'pointer'
// // // //             }}
// // // //             onMouseOver={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(-4px)'
// // // //             }}
// // // //             onMouseOut={(e) => {
// // // //               e.currentTarget.style.transform = 'translateY(0)'
// // // //             }}
// // // //             >
// // // //               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
// // // //                 {feature.icon}
// // // //               </div>
// // // //               <h3 style={{
// // // //                 fontSize: '16px',
// // // //                 fontWeight: '600',
// // // //                 color: '#333',
// // // //                 margin: '0 0 8px 0'
// // // //               }}>
// // // //                 {feature.title}
// // // //               </h3>
// // // //               <p style={{
// // // //                 fontSize: '14px',
// // // //                 color: '#666',
// // // //                 margin: '0'
// // // //               }}>
// // // //                 {feature.desc}
// // // //               </p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </main>

// // // //       {/* Footer */}
// // // //       <footer style={{
// // // //         background: '#232f3e',
// // // //         color: 'white',
// // // //         padding: '40px 24px 20px',
// // // //         marginTop: '48px',
// // // //         marginLeft: window.innerWidth <= 768 ? '0' : '280px',
// // // //         transition: 'all 0.3s ease'
// // // //       }}>
// // // //         <div style={{
// // // //           maxWidth: '1400px',
// // // //           margin: '0 auto',
// // // //           textAlign: 'center'
// // // //         }}>
// // // //           <div style={{
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             gap: '12px',
// // // //             marginBottom: '16px'
// // // //           }}>
// // // //             <div style={{
// // // //               width: '40px',
// // // //               height: '40px',
// // // //               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// // // //               borderRadius: '8px',
// // // //               display: 'flex',
// // // //               alignItems: 'center',
// // // //               justifyContent: 'center',
// // // //               fontSize: '20px'
// // // //             }}>
// // // //               🛒
// // // //             </div>
// // // //             <h3 style={{
// // // //               fontSize: '24px',
// // // //               fontWeight: 'bold',
// // // //               margin: '0'
// // // //             }}>
// // // //               E-commerce
// // // //             </h3>
// // // //           </div>
// // // //           <p style={{
// // // //             fontSize: '16px',
// // // //             opacity: 0.8,
// // // //             margin: '0 0 20px 0'
// // // //           }}>
// // // //             Your one-stop destination for quality products at amazing prices.
// // // //           </p>
// // // //           {/* <div style={{
// // // //             paddingTop: '20px',
// // // //             borderTop: '1px solid rgba(255, 255, 255, 0.2)',
// // // //             fontSize: '14px',
// // // //             opacity: 0.7
// // // //           }}>
// // // //             © 2024 ShopEasy. All rights reserved. | Built with ❤️ for amazing shopping experience.
// // // //           </div> */}
// // // //         </div>
// // // //       </footer>

// // // //       {/* Product Details Modal */}
// // // //       <ProductDetailsModal
// // // //         isOpen={isModalOpen}
// // // //         onClose={handleCloseModal}
// // // //         product={selectedProduct}
// // // //         onAddToCart={handleAddToCart}
// // // //       />

// // // //       {/* Responsive Styles */}
// // // //       <style>
// // // //         {`
// // // //           @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');

// // // //           @media (max-width: 768px) {
// // // //             main {
// // // //               padding: 16px 16px 120px 16px !important;
// // // //               margin-left: 0 !important;
// // // //             }
// // // //             footer {
// // // //               margin-left: 0 !important;
// // // //               padding-bottom: 120px !important;
// // // //             }

// // // //             #all-products {
// // // //               margin-bottom: 20px;
// // // //             }

// // // //             .hero-banner {
// // // //               padding: 20px !important;
// // // //             }
// // // //           }

// // // //           @media (max-width: 480px) {
// // // //             main {
// // // //               padding: 12px 12px 130px 12px !important;
// // // //             }

// // // //             .quick-stats {
// // // //               grid-template-columns: 1fr !important;
// // // //             }
// // // //           }

// // // //           /* Desktop responsive adjustments */
// // // //           @media (min-width: 769px) {
// // // //             main {
// // // //               padding: 24px 24px 24px 304px !important;
// // // //             }
// // // //             footer {
// // // //               margin-left: 280px !important;
// // // //             }
// // // //           }

// // // //           /* Amazon-style search results header */
// // // //           .search-results-header {
// // // //             font-family: 'Amazon Ember', Arial, sans-serif;
// // // //             color: #565959;
// // // //             font-size: 14px;
// // // //             margin-bottom: 16px;
// // // //             padding: 12px 0;
// // // //             border-bottom: 1px solid #e7e7e7;
// // // //           }

// // // //           /* Amazon-style product grid improvements */
// // // //           .amazon-product-grid {
// // // //             display: grid;
// // // //             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// // // //             gap: 16px;
// // // //             padding: 16px 0;
// // // //           }

// // // //           @media (max-width: 768px) {
// // // //             .amazon-product-grid {
// // // //               grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
// // // //               gap: 12px;
// // // //             }
// // // //           }
// // // //         `}
// // // //       </style>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Homepage



















// // // // ecommerce/src/components/pages/dashorard.jsx
// // // import React, { useState, useEffect } from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // import Header from '../components/homepagecomponent/AppHeaders'
// // // import HeroBanner from '../components/homepagecomponent/HeroBanner'
// // // import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// // // import FixedProductFilters from '../components/homepagecomponent/ProductFilters'
// // // import ProductGrid from '../components/homepagecomponent/ProductGrid'
// // // import LoadingSpinner from '../components/ui/LoadingSpinner'

// // // const Homepage = () => {
// // //   const navigate = useNavigate()

// // //   // State management
// // //   const [products, setProducts] = useState([])
// // //   console.log('products', products)
// // //   console.log('products length', products.length)
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)
// // //   const [searchQuery, setSearchQuery] = useState('')
// // //   const [filters, setFilters] = useState({
// // //     category_id: '',
// // //     min_price: '',
// // //     max_price: '',
// // //     sort_by: 'name',
// // //     sort_order: 'asc'
// // //   })
// // //   const [pagination, setPagination] = useState({
// // //     page: 1,
// // //     per_page: 20,
// // //     total_count: 0,
// // //     total_pages: 0
// // //   })

// // //   // Fetch products when filters, search, or pagination changes
// // //   useEffect(() => {
// // //     fetchProducts()
// // //   }, [filters, searchQuery, pagination.page])

// // //   const fetchProducts = async () => {
// // //     try {
// // //       setLoading(true)
// // //       setError(null)

// // //       // Build query parameters
// // //       const params = new URLSearchParams({
// // //         page: pagination.page.toString(),
// // //         per_page: pagination.per_page.toString(),
// // //         sort_by: filters.sort_by,
// // //         sort_order: filters.sort_order
// // //       })

// // //       // Add optional filters
// // //       if (filters.category_id) params.append('category_id', filters.category_id)
// // //       if (filters.min_price) params.append('min_price', filters.min_price)
// // //       if (filters.max_price) params.append('max_price', filters.max_price)
// // //       if (searchQuery) params.append('search', searchQuery)

// // //       const response = await fetch(`http://localhost:8000/api/v1/products?${params}`)

// // //       if (!response.ok) {
// // //         throw new Error(`HTTP error! status: ${response.status}`)
// // //       }

// // //       const data = await response.json()

// // //       setProducts(data.products || [])
// // //       setPagination(prev => ({
// // //         ...prev,
// // //         total_count: data.total_count || 0,
// // //         total_pages: data.total_pages || 0
// // //       }))

// // //     } catch (error) {
// // //       console.error('Error fetching products:', error)
// // //       setError(error.message)
// // //       setProducts([])
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   // Event handlers
// // //   const handleSearch = (query) => {
// // //     setSearchQuery(query)
// // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // //   }

// // //   const handleFiltersChange = (newFilters) => {
// // //     setFilters(newFilters)
// // //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// // //   }

// // //   const handlePageChange = (newPage) => {
// // //     setPagination(prev => ({ ...prev, page: newPage }))
// // //     // Scroll to top of products section
// // //     const productsSection = document.getElementById('all-products')
// // //     if (productsSection) {
// // //       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
// // //     }
// // //   }

// // //   const handleAddToCart = (product) => {
// // //     console.log('Add to cart:', product)

// // //     // Create a more sophisticated notification
// // //     const notification = document.createElement('div')
// // //     notification.style.cssText = `
// // //       position: fixed;
// // //       top: 20px;
// // //       right: 20px;
// // //       background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
// // //       color: white;
// // //       padding: 16px 20px;
// // //       border-radius: 12px;
// // //       box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
// // //       z-index: 10000;
// // //       font-family: "Inter", sans-serif;
// // //       font-weight: 500;
// // //       animation: slideInRight 0.3s ease-out;
// // //       max-width: 300px;
// // //     `

// // //     notification.innerHTML = `
// // //       <div style="display: flex; align-items: center; gap: 12px;">
// // //         <span style="font-size: 20px;">✅</span>
// // //         <div>
// // //           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
// // //           <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
// // //         </div>
// // //       </div>
// // //     `

// // //     document.body.appendChild(notification)

// // //     // Add animation styles
// // //     const style = document.createElement('style')
// // //     style.textContent = `
// // //       @keyframes slideInRight {
// // //         from {
// // //           opacity: 0;
// // //           transform: translateX(100px);
// // //         }
// // //         to {
// // //           opacity: 1;
// // //           transform: translateX(0);
// // //         }
// // //       }
// // //       @keyframes slideOutRight {
// // //         from {
// // //           opacity: 1;
// // //           transform: translateX(0);
// // //         }
// // //         to {
// // //           opacity: 0;
// // //           transform: translateX(100px);
// // //         }
// // //       }
// // //     `
// // //     document.head.appendChild(style)

// // //     // Remove notification after 3 seconds
// // //     setTimeout(() => {
// // //       notification.style.animation = 'slideOutRight 0.3s ease-in'
// // //       setTimeout(() => {
// // //         if (notification.parentNode) {
// // //           notification.parentNode.removeChild(notification)
// // //         }
// // //         if (style.parentNode) {
// // //           style.parentNode.removeChild(style)
// // //         }
// // //       }, 300)
// // //     }, 3000)
// // //   }

// // //   // // Navigate to product details page instead of opening modal
// // //   // const handleViewDetails = (product) => {
// // //   //   navigate(`/product/${product.id}`)
// // //   // }

// // //   const handleViewDetails = (product) => {
// // //   // Navigate to product details page using the product_id
// // //   navigate(`/product/${product.product_id}`);
// // // };

// // //   const handleShopNow = () => {
// // //     // Scroll to products section
// // //     const productsSection = document.getElementById('all-products')
// // //     if (productsSection) {
// // //       productsSection.scrollIntoView({ behavior: 'smooth' })
// // //     }
// // //   }

// // //   return (
// // //     <div style={{
// // //       minHeight: '100vh',
// // //       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
// // //       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
// // //     }}>
// // //       {/* Fixed Filters Sidebar */}
// // //       <FixedProductFilters 
// // //         onFiltersChange={handleFiltersChange}
// // //         filters={filters}
// // //       />

// // //       {/* Header */}
// // //       <Header 
// // //         onSearch={handleSearch}
// // //         searchQuery={searchQuery}
// // //       />

// // //       {/* Main Content */}
// // //       <main style={{
// // //         maxWidth: '1400px',
// // //         margin: '0 auto',
// // //         padding: window.innerWidth <= 768 ? '16px 16px 120px 16px' : '24px 24px 24px 304px',
// // //         transition: 'all 0.3s ease',
// // //         fontFamily: 'Amazon Ember, Arial, sans-serif'
// // //       }}>
// // //         {/* Hero Banner */}
// // //         <HeroBanner onShopNow={handleShopNow} />

// // //         {/* Featured Products Section */}
// // //         {/* <FeaturedProducts 
// // //           onAddToCart={handleAddToCart}
// // //           onViewDetails={handleViewDetails}
// // //         /> */}

// // //         {/* All Products Section */}
// // //         <div id="all-products" style={{
// // //           background: 'white',
// // //           borderRadius: '16px',
// // //           padding: '24px',
// // //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // //           border: '1px solid #e0e0e0'
// // //         }}>
// // //           {/* Section Header */}
// // //           <div style={{
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             gap: '12px',
// // //             marginBottom: '24px',
// // //             paddingBottom: '16px',
// // //             borderBottom: '2px solid #f8f9fa'
// // //           }}>
// // //             <span style={{ fontSize: '28px' }}>🛍️</span>
// // //             <h2 style={{
// // //               fontSize: '28px',
// // //               fontWeight: '700',
// // //               color: '#333',
// // //               margin: '0'
// // //             }}>
// // //               All Products
// // //             </h2>
// // //             {searchQuery && (
// // //               <div style={{
// // //                 padding: '6px 12px',
// // //                 background: '#e3f2fd',
// // //                 color: '#1976d2',
// // //                 borderRadius: '16px',
// // //                 fontSize: '14px',
// // //                 fontWeight: '500'
// // //               }}>
// // //                 Results for: "{searchQuery}"
// // //               </div>
// // //             )}
// // //             <div style={{
// // //               marginLeft: 'auto',
// // //               padding: '8px 16px',
// // //               background: '#f8f9fa',
// // //               borderRadius: '20px',
// // //               fontSize: '14px',
// // //               color: '#666',
// // //               border: '1px solid #e0e0e0'
// // //             }}>
// // //               {pagination.total_count} products found
// // //             </div>
// // //           </div>

// // //           {/* Filter Status Bar */}
// // //           {(filters.category_id || filters.min_price || filters.max_price) && (
// // //             <div style={{
// // //               display: 'flex',
// // //               flexWrap: 'wrap',
// // //               gap: '8px',
// // //               marginBottom: '20px',
// // //               padding: '12px',
// // //               background: '#f8f9fa',
// // //               borderRadius: '10px',
// // //               border: '1px solid #e0e0e0'
// // //             }}>
// // //               <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
// // //                 Active Filters:
// // //               </span>
// // //               {filters.category_id && (
// // //                 <span style={{
// // //                   padding: '4px 8px',
// // //                   background: '#007bff',
// // //                   color: 'white',
// // //                   borderRadius: '12px',
// // //                   fontSize: '12px',
// // //                   fontWeight: '500'
// // //                 }}>
// // //                   Category: {filters.category_id}
// // //                 </span>
// // //               )}
// // //               {filters.min_price && (
// // //                 <span style={{
// // //                   padding: '4px 8px',
// // //                   background: '#28a745',
// // //                   color: 'white',
// // //                   borderRadius: '12px',
// // //                   fontSize: '12px',
// // //                   fontWeight: '500'
// // //                 }}>
// // //                   Min: ₹{filters.min_price}
// // //                 </span>
// // //               )}
// // //               {filters.max_price && (
// // //                 <span style={{
// // //                   padding: '4px 8px',
// // //                   background: '#dc3545',
// // //                   color: 'white',
// // //                   borderRadius: '12px',
// // //                   fontSize: '12px',
// // //                   fontWeight: '500'
// // //                 }}>
// // //                   Max: ₹{filters.max_price}
// // //                 </span>
// // //               )}
// // //             </div>
// // //           )}

// // //           {/* Products Grid - Full Width */}
// // //           <ProductGrid
// // //             products={products}
// // //             loading={loading}
// // //             error={error}
// // //             onAddToCart={handleAddToCart}
// // //             onViewDetails={handleViewDetails} // This will now navigate correctly
// // //             totalCount={pagination.total_count}
// // //             currentPage={pagination.page}
// // //             totalPages={pagination.total_pages}
// // //             onPageChange={handlePageChange}
// // //           />
// // //         </div>

// // //         {/* Quick Stats Section */}
// // //         <div style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // //           gap: '20px',
// // //           marginTop: '32px'
// // //         }}>
// // //           {[
// // //             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
// // //             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
// // //             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
// // //             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
// // //           ].map((feature, index) => (
// // //             <div key={index} style={{
// // //               background: 'white',
// // //               padding: '24px',
// // //               borderRadius: '12px',
// // //               textAlign: 'center',
// // //               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// // //               border: '1px solid #e0e0e0',
// // //               transition: 'transform 0.2s ease',
// // //               cursor: 'pointer'
// // //             }}
// // //             onMouseOver={(e) => {
// // //               e.currentTarget.style.transform = 'translateY(-4px)'
// // //             }}
// // //             onMouseOut={(e) => {
// // //               e.currentTarget.style.transform = 'translateY(0)'
// // //             }}
// // //             >
// // //               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
// // //                 {feature.icon}
// // //               </div>
// // //               <h3 style={{
// // //                 fontSize: '16px',
// // //                 fontWeight: '600',
// // //                 color: '#333',
// // //                 margin: '0 0 8px 0'
// // //               }}>
// // //                 {feature.title}
// // //               </h3>
// // //               <p style={{
// // //                 fontSize: '14px',
// // //                 color: '#666',
// // //                 margin: '0'
// // //               }}>
// // //                 {feature.desc}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </main>

// // //       {/* Footer */}
// // //       <footer style={{
// // //         background: '#232f3e',
// // //         color: 'white',
// // //         padding: '40px 24px 20px',
// // //         marginTop: '48px',
// // //         marginLeft: window.innerWidth <= 768 ? '0' : '280px',
// // //         transition: 'all 0.3s ease'
// // //       }}>
// // //         <div style={{
// // //           maxWidth: '1400px',
// // //           margin: '0 auto',
// // //           textAlign: 'center'
// // //         }}>
// // //           <div style={{
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             justifyContent: 'center',
// // //             gap: '12px',
// // //             marginBottom: '16px'
// // //           }}>
// // //             <div style={{
// // //               width: '40px',
// // //               height: '40px',
// // //               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// // //               borderRadius: '8px',
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               justifyContent: 'center',
// // //               fontSize: '20px'
// // //             }}>
// // //               🛒
// // //             </div>
// // //             <h3 style={{
// // //               fontSize: '24px',
// // //               fontWeight: 'bold',
// // //               margin: '0'
// // //             }}>
// // //               E-commerce
// // //             </h3>
// // //           </div>
// // //           <p style={{
// // //             fontSize: '16px',
// // //             opacity: 0.8,
// // //             margin: '0 0 20px 0'
// // //           }}>
// // //             Your one-stop destination for quality products at amazing prices.
// // //           </p>
// // //         </div>
// // //       </footer>

// // //       {/* Responsive Styles */}
// // //       <style>
// // //         {`
// // //           @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');

// // //           @media (max-width: 768px) {
// // //             main {
// // //               padding: 16px 16px 120px 16px !important;
// // //               margin-left: 0 !important;
// // //             }
// // //             footer {
// // //               margin-left: 0 !important;
// // //               padding-bottom: 120px !important;
// // //             }

// // //             #all-products {
// // //               margin-bottom: 20px;
// // //             }

// // //             .hero-banner {
// // //               padding: 20px !important;
// // //             }
// // //           }

// // //           @media (max-width: 480px) {
// // //             main {
// // //               padding: 12px 12px 130px 12px !important;
// // //             }

// // //             .quick-stats {
// // //               grid-template-columns: 1fr !important;
// // //             }
// // //           }

// // //           /* Desktop responsive adjustments */
// // //           @media (min-width: 769px) {
// // //             main {
// // //               padding: 24px 24px 24px 304px !important;
// // //             }
// // //             footer {
// // //               margin-left: 280px !important;
// // //             }
// // //           }

// // //           /* Amazon-style search results header */
// // //           .search-results-header {
// // //             font-family: 'Amazon Ember', Arial, sans-serif;
// // //             color: #565959;
// // //             font-size: 14px;
// // //             margin-bottom: 16px;
// // //             padding: 12px 0;
// // //             border-bottom: 1px solid #e7e7e7;
// // //           }

// // //           /* Amazon-style product grid improvements */
// // //           .amazon-product-grid {
// // //             display: grid;
// // //             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// // //             gap: 16px;
// // //             padding: 16px 0;
// // //           }

// // //           @media (max-width: 768px) {
// // //             .amazon-product-grid {
// // //               grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
// // //               gap: 12px;
// // //             }
// // //           }

// // //           @keyframes slideInRight {
// // //             from {
// // //               opacity: 0;
// // //               transform: translateX(100px);
// // //             }
// // //             to {
// // //               opacity: 1;
// // //               transform: translateX(0);
// // //             }
// // //           }

// // //           @keyframes slideOutRight {
// // //             from {
// // //               opacity: 1;
// // //               transform: translateX(0);
// // //             }
// // //             to {
// // //               opacity: 0;
// // //               transform: translateX(100px);
// // //             }
// // //           }
// // //         `}
// // //       </style>
// // //     </div>
// // //   )
// // // }

// // // export default Homepage



// // // ecommerce/src/components/pages/dashboard.jsx
// // import React, { useState, useEffect } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import Header from '../components/homepagecomponent/AppHeaders'
// // import HeroBanner from '../components/homepagecomponent/HeroBanner'
// // import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// // import FixedProductFilters from '../components/homepagecomponent/ProductFilters'
// // import ProductGrid from '../components/homepagecomponent/ProductGrid'
// // import LoadingSpinner from '../components/ui/LoadingSpinner'

// // const Homepage = () => {
// //   const navigate = useNavigate()

// //   // State management
// //   const [products, setProducts] = useState([])
// //   console.log('products', products)
// //   console.log('products length', products.length)
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)
// //   const [searchQuery, setSearchQuery] = useState('')
// //   const [filters, setFilters] = useState({
// //     category_id: '',
// //     subcategory_id: '', // Added subcategory support
// //     min_price: '',
// //     max_price: '',
// //     sort_by: 'name',
// //     sort_order: 'asc'
// //   })
// //   const [pagination, setPagination] = useState({
// //     page: 1,
// //     per_page: 20,
// //     total_count: 0,
// //     total_pages: 0
// //   })

// //   // Fetch products when filters, search, or pagination changes
// //   useEffect(() => {
// //     fetchProducts()
// //   }, [filters, searchQuery, pagination.page])

// //   const fetchProducts = async () => {
// //     try {
// //       setLoading(true)
// //       setError(null)

// //       // Build query parameters
// //       const params = new URLSearchParams({
// //         page: pagination.page.toString(),
// //         per_page: pagination.per_page.toString(),
// //         sort_by: filters.sort_by,
// //         sort_order: filters.sort_order
// //       })

// //       // Add optional filters
// //       if (filters.category_id) params.append('category_id', filters.category_id)
// //       if (filters.subcategory_id) params.append('subcategory_id', filters.subcategory_id) // Added subcategory
// //       if (filters.min_price) params.append('min_price', filters.min_price)
// //       if (filters.max_price) params.append('max_price', filters.max_price)
// //       if (searchQuery) params.append('search', searchQuery)

// //       const response = await fetch(`http://localhost:8000/api/v1/products?${params}`)

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`)
// //       }

// //       const data = await response.json()

// //       setProducts(data.products || [])
// //       setPagination(prev => ({
// //         ...prev,
// //         total_count: data.total_count || 0,
// //         total_pages: data.total_pages || 0
// //       }))

// //     } catch (error) {
// //       console.error('Error fetching products:', error)
// //       setError(error.message)
// //       setProducts([])
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   // Event handlers
// //   const handleSearch = (query) => {
// //     setSearchQuery(query)
// //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
// //   }

// //   const handleFiltersChange = (newFilters, filteredData = null) => {
// //     console.log('Filters changed:', newFilters)
// //     setFilters(newFilters)
// //     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page

// //     // If filtered data is provided from the filter component, use it directly
// //     if (filteredData) {
// //       setProducts(filteredData.products || filteredData.data || filteredData)
// //       setPagination(prev => ({
// //         ...prev,
// //         total_count: filteredData.total_count || filteredData.total || 0,
// //         total_pages: filteredData.total_pages || Math.ceil((filteredData.total || 0) / 20),
// //         page: 1
// //       }))
// //       setLoading(false)
// //     }
// //   }

// //   const handlePageChange = (newPage) => {
// //     setPagination(prev => ({ ...prev, page: newPage }))
// //     // Scroll to top of products section
// //     const productsSection = document.getElementById('all-products')
// //     if (productsSection) {
// //       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
// //     }
// //   }

// //   const handleAddToCart = (product) => {
// //     console.log('Add to cart:', product)

// //     // Create a more sophisticated notification
// //     const notification = document.createElement('div')
// //     notification.style.cssText = `
// //       position: fixed;
// //       top: 20px;
// //       right: 20px;
// //       background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
// //       color: white;
// //       padding: 16px 20px;
// //       border-radius: 12px;
// //       box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
// //       z-index: 10000;
// //       font-family: "Inter", sans-serif;
// //       font-weight: 500;
// //       animation: slideInRight 0.3s ease-out;
// //       max-width: 300px;
// //     `

// //     notification.innerHTML = `
// //       <div style="display: flex; align-items: center; gap: 12px;">
// //         <span style="font-size: 20px;">✅</span>
// //         <div>
// //           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
// //           <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
// //         </div>
// //       </div>
// //     `

// //     document.body.appendChild(notification)

// //     // Add animation styles
// //     const style = document.createElement('style')
// //     style.textContent = `
// //       @keyframes slideInRight {
// //         from {
// //           opacity: 0;
// //           transform: translateX(100px);
// //         }
// //         to {
// //           opacity: 1;
// //           transform: translateX(0);
// //         }
// //       }
// //       @keyframes slideOutRight {
// //         from {
// //           opacity: 1;
// //           transform: translateX(0);
// //         }
// //         to {
// //           opacity: 0;
// //           transform: translateX(100px);
// //         }
// //       }
// //     `
// //     document.head.appendChild(style)

// //     // Remove notification after 3 seconds
// //     setTimeout(() => {
// //       notification.style.animation = 'slideOutRight 0.3s ease-in'
// //       setTimeout(() => {
// //         if (notification.parentNode) {
// //           notification.parentNode.removeChild(notification)
// //         }
// //         if (style.parentNode) {
// //           style.parentNode.removeChild(style)
// //         }
// //       }, 300)
// //     }, 3000)
// //   }

// //   const handleViewDetails = (product) => {
// //     // Navigate to product details page using the product_id
// //     navigate(`/product/${product.product_id}`)
// //   }

// //   const handleShopNow = () => {
// //     // Scroll to products section
// //     const productsSection = document.getElementById('all-products')
// //     if (productsSection) {
// //       productsSection.scrollIntoView({ behavior: 'smooth' })
// //     }
// //   }

// //   // Helper function to get category name from ID
// //   const getCategoryDisplayName = (categoryId) => {
// //     // You might want to fetch categories and create a lookup
// //     // For now, return the ID or implement a mapping
// //     return categoryId
// //   }

// //   // Helper function to get subcategory name from ID
// //   const getSubcategoryDisplayName = (subcategoryId) => {
// //     // You might want to fetch subcategories and create a lookup
// //     // For now, return the ID or implement a mapping
// //     return subcategoryId
// //   }

// //   return (
// //     <div style={{
// //       minHeight: '100vh',
// //       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
// //       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
// //     }}>
// //       {/* Fixed Filters Sidebar */}
// //       <FixedProductFilters 
// //         onFiltersChange={handleFiltersChange}
// //         filters={filters}
// //       />

// //       {/* Header */}
// //       <Header 
// //         onSearch={handleSearch}
// //         searchQuery={searchQuery}
// //       />

// //       {/* Main Content */}
// //       <main style={{
// //         maxWidth: '1400px',
// //         margin: '0 auto',
// //         padding: window.innerWidth <= 768 ? '16px 16px 120px 16px' : '24px 24px 24px 304px',
// //         transition: 'all 0.3s ease',
// //         fontFamily: 'Amazon Ember, Arial, sans-serif'
// //       }}>
// //         {/* Hero Banner */}
// //         <HeroBanner onShopNow={handleShopNow} />

// //         {/* Featured Products Section */}
// //         {/* <FeaturedProducts 
// //           onAddToCart={handleAddToCart}
// //           onViewDetails={handleViewDetails}
// //         /> */}

// //         {/* All Products Section */}
// //         <div id="all-products" style={{
// //           background: 'white',
// //           borderRadius: '16px',
// //           padding: '24px',
// //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// //           border: '1px solid #e0e0e0'
// //         }}>
// //           {/* Section Header */}
// //           <div style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: '12px',
// //             marginBottom: '24px',
// //             paddingBottom: '16px',
// //             borderBottom: '2px solid #f8f9fa'
// //           }}>
// //             <span style={{ fontSize: '28px' }}>🛍️</span>
// //             <h2 style={{
// //               fontSize: '28px',
// //               fontWeight: '700',
// //               color: '#333',
// //               margin: '0'
// //             }}>
// //               All Products
// //             </h2>
// //             {searchQuery && (
// //               <div style={{
// //                 padding: '6px 12px',
// //                 background: '#e3f2fd',
// //                 color: '#1976d2',
// //                 borderRadius: '16px',
// //                 fontSize: '14px',
// //                 fontWeight: '500'
// //               }}>
// //                 Results for: "{searchQuery}"
// //               </div>
// //             )}
// //             <div style={{
// //               marginLeft: 'auto',
// //               padding: '8px 16px',
// //               background: '#f8f9fa',
// //               borderRadius: '20px',
// //               fontSize: '14px',
// //               color: '#666',
// //               border: '1px solid #e0e0e0'
// //             }}>
// //               {pagination.total_count} products found
// //             </div>
// //           </div>

// //           {/* Filter Status Bar - Enhanced with subcategory support */}
// //           {(filters.category_id || filters.subcategory_id || filters.min_price || filters.max_price) && (
// //             <div style={{
// //               display: 'flex',
// //               flexWrap: 'wrap',
// //               gap: '8px',
// //               marginBottom: '20px',
// //               padding: '12px',
// //               background: '#f8f9fa',
// //               borderRadius: '10px',
// //               border: '1px solid #e0e0e0'
// //             }}>
// //               <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
// //                 Active Filters:
// //               </span>
// //               {filters.category_id && (
// //                 <span style={{
// //                   padding: '4px 8px',
// //                   background: '#007bff',
// //                   color: 'white',
// //                   borderRadius: '12px',
// //                   fontSize: '12px',
// //                   fontWeight: '500'
// //                 }}>
// //                   Category: {getCategoryDisplayName(filters.category_id)}
// //                 </span>
// //               )}
// //               {filters.subcategory_id && (
// //                 <span style={{
// //                   padding: '4px 8px',
// //                   background: '#6f42c1',
// //                   color: 'white',
// //                   borderRadius: '12px',
// //                   fontSize: '12px',
// //                   fontWeight: '500'
// //                 }}>
// //                   Subcategory: {getSubcategoryDisplayName(filters.subcategory_id)}
// //                 </span>
// //               )}
// //               {filters.min_price && (
// //                 <span style={{
// //                   padding: '4px 8px',
// //                   background: '#28a745',
// //                   color: 'white',
// //                   borderRadius: '12px',
// //                   fontSize: '12px',
// //                   fontWeight: '500'
// //                 }}>
// //                   Min: ₹{filters.min_price}
// //                 </span>
// //               )}
// //               {filters.max_price && (
// //                 <span style={{
// //                   padding: '4px 8px',
// //                   background: '#dc3545',
// //                   color: 'white',
// //                   borderRadius: '12px',
// //                   fontSize: '12px',
// //                   fontWeight: '500'
// //                 }}>
// //                   Max: ₹{filters.max_price}
// //                 </span>
// //               )}
// //               <button
// //                 onClick={() => {
// //                   setFilters({
// //                     category_id: '',
// //                     subcategory_id: '',
// //                     min_price: '',
// //                     max_price: '',
// //                     sort_by: 'name',
// //                     sort_order: 'asc'
// //                   })
// //                   setPagination(prev => ({ ...prev, page: 1 }))
// //                 }}
// //                 style={{
// //                   padding: '4px 8px',
// //                   background: '#6c757d',
// //                   color: 'white',
// //                   border: 'none',
// //                   borderRadius: '12px',
// //                   fontSize: '12px',
// //                   fontWeight: '500',
// //                   cursor: 'pointer',
// //                   marginLeft: 'auto'
// //                 }}
// //               >
// //                 Clear All ✕
// //               </button>
// //             </div>
// //           )}

// //           {/* Products Grid - Full Width */}
// //           <ProductGrid
// //             products={products}
// //             loading={loading}
// //             error={error}
// //             onAddToCart={handleAddToCart}
// //             onViewDetails={handleViewDetails}
// //             totalCount={pagination.total_count}
// //             currentPage={pagination.page}
// //             totalPages={pagination.total_pages}
// //             onPageChange={handlePageChange}
// //           />
// //         </div>

// //         {/* Quick Stats Section */}
// //         <div style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// //           gap: '20px',
// //           marginTop: '32px'
// //         }}>
// //           {[
// //             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
// //             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
// //             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
// //             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
// //           ].map((feature, index) => (
// //             <div key={index} style={{
// //               background: 'white',
// //               padding: '24px',
// //               borderRadius: '12px',
// //               textAlign: 'center',
// //               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// //               border: '1px solid #e0e0e0',
// //               transition: 'transform 0.2s ease',
// //               cursor: 'pointer'
// //             }}
// //             onMouseOver={(e) => {
// //               e.currentTarget.style.transform = 'translateY(-4px)'
// //             }}
// //             onMouseOut={(e) => {
// //               e.currentTarget.style.transform = 'translateY(0)'
// //             }}
// //             >
// //               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
// //                 {feature.icon}
// //               </div>
// //               <h3 style={{
// //                 fontSize: '16px',
// //                 fontWeight: '600',
// //                 color: '#333',
// //                 margin: '0 0 8px 0'
// //               }}>
// //                 {feature.title}
// //               </h3>
// //               <p style={{
// //                 fontSize: '14px',
// //                 color: '#666',
// //                 margin: '0'
// //               }}>
// //                 {feature.desc}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </main>

// //       {/* Footer */}
// //       <footer style={{
// //         background: '#232f3e',
// //         color: 'white',
// //         padding: '40px 24px 20px',
// //         marginTop: '48px',
// //         marginLeft: window.innerWidth <= 768 ? '0' : '280px',
// //         transition: 'all 0.3s ease'
// //       }}>
// //         <div style={{
// //           maxWidth: '1400px',
// //           margin: '0 auto',
// //           textAlign: 'center'
// //         }}>
// //           <div style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             gap: '12px',
// //             marginBottom: '16px'
// //           }}>
// //             <div style={{
// //               width: '40px',
// //               height: '40px',
// //               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
// //               borderRadius: '8px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               fontSize: '20px'
// //             }}>
// //               🛒
// //             </div>
// //             <h3 style={{
// //               fontSize: '24px',
// //               fontWeight: 'bold',
// //               margin: '0'
// //             }}>
// //               E-commerce
// //             </h3>
// //           </div>
// //           <p style={{
// //             fontSize: '16px',
// //             opacity: 0.8,
// //             margin: '0 0 20px 0'
// //           }}>
// //             Your one-stop destination for quality products at amazing prices.
// //           </p>
// //         </div>
// //       </footer>

// //       {/* Responsive Styles */}
// //       <style>
// //         {`
// //           @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');

// //           @media (max-width: 768px) {
// //             main {
// //               padding: 16px 16px 120px 16px !important;
// //               margin-left: 0 !important;
// //             }
// //             footer {
// //               margin-left: 0 !important;
// //               padding-bottom: 120px !important;
// //             }

// //             #all-products {
// //               margin-bottom: 20px;
// //             }

// //             .hero-banner {
// //               padding: 20px !important;
// //             }
// //           }

// //           @media (max-width: 480px) {
// //             main {
// //               padding: 12px 12px 130px 12px !important;
// //             }

// //             .quick-stats {
// //               grid-template-columns: 1fr !important;
// //             }
// //           }

// //           /* Desktop responsive adjustments */
// //           @media (min-width: 769px) {
// //             main {
// //               padding: 24px 24px 24px 304px !important;
// //             }
// //             footer {
// //               margin-left: 280px !important;
// //             }
// //           }

// //           /* Amazon-style search results header */
// //           .search-results-header {
// //             font-family: 'Amazon Ember', Arial, sans-serif;
// //             color: #565959;
// //             font-size: 14px;
// //             margin-bottom: 16px;
// //             padding: 12px 0;
// //             border-bottom: 1px solid #e7e7e7;
// //           }

// //           /* Amazon-style product grid improvements */
// //           .amazon-product-grid {
// //             display: grid;
// //             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// //             gap: 16px;
// //             padding: 16px 0;
// //           }

// //           @media (max-width: 768px) {
// //             .amazon-product-grid {
// //               grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
// //               gap: 12px;
// //             }
// //           }

// //           @keyframes slideInRight {
// //             from {
// //               opacity: 0;
// //               transform: translateX(100px);
// //             }
// //             to {
// //               opacity: 1;
// //               transform: translateX(0);
// //             }
// //           }

// //           @keyframes slideOutRight {
// //             from {
// //               opacity: 1;
// //               transform: translateX(0);
// //             }
// //             to {
// //               opacity: 0;
// //               transform: translateX(100px);
// //             }
// //           }
// //         `}
// //       </style>
// //     </div>
// //   )
// // }

// // export default Homepage




// // ecommerce/src/components/pages/dashboard.jsx
// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Header from '../components/homepagecomponent/AppHeaders'
// import HeroBanner from '../components/homepagecomponent/HeroBanner'
// import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// import FixedProductFilters from '../components/homepagecomponent/ProductFilters'
// import ProductGrid from '../components/homepagecomponent/ProductGrid'
// import LoadingSpinner from '../components/ui/LoadingSpinner'

// const Homepage = () => {
//   const navigate = useNavigate()

//   // State management
//   const [products, setProducts] = useState([])
//   console.log('products', products)
//   console.log('products length', products.length)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filters, setFilters] = useState({
//     category_id: '',
//     subcategory_id: '', // Added subcategory support
//     min_price: '',
//     max_price: '',
//     sort_by: 'name',
//     sort_order: 'asc'
//   })
//   const [pagination, setPagination] = useState({
//     page: 1,
//     per_page: 20,
//     total_count: 0,
//     total_pages: 0
//   })

//   // Fetch products when filters, search, or pagination changes
//   useEffect(() => {
//     fetchProducts()
//   }, [filters, searchQuery, pagination.page])

//   const fetchProducts = async (customFilters = null, page = null) => {
//     try {
//       setLoading(true)
//       setError(null)

//       // Use custom filters if provided, otherwise use current filters
//       const filtersToUse = customFilters || filters
//       const pageToUse = page || pagination.page

//       // Build query parameters
//       const params = new URLSearchParams({
//         page: pageToUse.toString(),
//         per_page: pagination.per_page.toString(),
//         sort_by: filtersToUse.sort_by,
//         sort_order: filtersToUse.sort_order
//       })

//       // Add optional filters
//       if (filtersToUse.category_id) params.append('category_id', filtersToUse.category_id)
//       if (filtersToUse.subcategory_id) params.append('subcategory_id', filtersToUse.subcategory_id) // Added subcategory
//       if (filtersToUse.min_price) params.append('min_price', filtersToUse.min_price)
//       if (filtersToUse.max_price) params.append('max_price', filtersToUse.max_price)
//       if (searchQuery) params.append('search', searchQuery)

//       const response = await fetch(`http://localhost:8000/api/v1/products?${params}`)

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }

//       const data = await response.json()

//       setProducts(data.products || [])
//       setPagination(prev => ({
//         ...prev,
//         total_count: data.total_count || 0,
//         total_pages: data.total_pages || 0,
//         page: pageToUse
//       }))

//     } catch (error) {
//       console.error('Error fetching products:', error)
//       setError(error.message)
//       setProducts([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Event handlers
//   const handleSearch = (query) => {
//     setSearchQuery(query)
//     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
//   }

//   const handleFiltersChange = (newFilters, filteredData = null) => {
//     console.log('Filters changed:', newFilters)
//     setFilters(newFilters)
//     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page

//     // If filtered data is provided from the filter component, use it directly
//     if (filteredData) {
//       setProducts(filteredData.products || filteredData.data || filteredData)
//       setPagination(prev => ({
//         ...prev,
//         total_count: filteredData.total_count || filteredData.total || 0,
//         total_pages: filteredData.total_pages || Math.ceil((filteredData.total || 0) / 20),
//         page: 1
//       }))
//       setLoading(false)
//     }
//   }

//   const handlePageChange = (newPage) => {
//     setPagination(prev => ({ ...prev, page: newPage }))
//     // Scroll to top of products section
//     const productsSection = document.getElementById('all-products')
//     if (productsSection) {
//       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }

//   const handleAddToCart = (product) => {
//     console.log('Add to cart:', product)

//     // Create a more sophisticated notification
//     const notification = document.createElement('div')
//     notification.style.cssText = `
//       position: fixed;
//       top: 20px;
//       right: 20px;
//       background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
//       color: white;
//       padding: 16px 20px;
//       border-radius: 12px;
//       box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
//       z-index: 10000;
//       font-family: "Inter", sans-serif;
//       font-weight: 500;
//       animation: slideInRight 0.3s ease-out;
//       max-width: 300px;
//     `

//     notification.innerHTML = `
//       <div style="display: flex; align-items: center; gap: 12px;">
//         <span style="font-size: 20px;">✅</span>
//         <div>
//           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
//           <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
//         </div>
//       </div>
//     `

//     document.body.appendChild(notification)

//     // Add animation styles
//     const style = document.createElement('style')
//     style.textContent = `
//       @keyframes slideInRight {
//         from {
//           opacity: 0;
//           transform: translateX(100px);
//         }
//         to {
//           opacity: 1;
//           transform: translateX(0);
//         }
//       }
//       @keyframes slideOutRight {
//         from {
//           opacity: 1;
//           transform: translateX(0);
//         }
//         to {
//           opacity: 0;
//           transform: translateX(100px);
//         }
//       }
//     `
//     document.head.appendChild(style)

//     // Remove notification after 3 seconds
//     setTimeout(() => {
//       notification.style.animation = 'slideOutRight 0.3s ease-in'
//       setTimeout(() => {
//         if (notification.parentNode) {
//           notification.parentNode.removeChild(notification)
//         }
//         if (style.parentNode) {
//           style.parentNode.removeChild(style)
//         }
//       }, 300)
//     }, 3000)
//   }

//   const handleViewDetails = (product) => {
//     // Navigate to product details page using the product_id
//     navigate(`/product/${product.product_id}`)
//   }

//   const handleShopNow = () => {
//     // Scroll to products section
//     const productsSection = document.getElementById('all-products')
//     if (productsSection) {
//       productsSection.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   // Helper function to get category name from ID
//   const getCategoryDisplayName = (categoryId) => {
//     // You might want to fetch categories and create a lookup
//     // For now, return the ID or implement a mapping
//     return categoryId
//   }

//   // Helper function to get subcategory name from ID
//   const getSubcategoryDisplayName = (subcategoryId) => {
//     // You might want to fetch subcategories and create a lookup
//     // For now, return the ID or implement a mapping
//     return subcategoryId
//   }

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
//     }}>
//       {/* Fixed Filters Sidebar */}
//       <FixedProductFilters 
//         onFiltersChange={handleFiltersChange}
//         filters={filters}
//       />

//       {/* Header */}
//       <Header 
//         onSearch={handleSearch}
//         searchQuery={searchQuery}
//       />

//       {/* Main Content */}
//       <main style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         padding: window.innerWidth <= 768 ? '16px 16px 120px 16px' : '24px 24px 24px 304px',
//         transition: 'all 0.3s ease',
//         fontFamily: 'Amazon Ember, Arial, sans-serif'
//       }}>
//         {/* Hero Banner */}
//         <HeroBanner onShopNow={handleShopNow} />

//         {/* Featured Products Section */}
//         {/* <FeaturedProducts 
//           onAddToCart={handleAddToCart}
//           onViewDetails={handleViewDetails}
//         /> */}

//         {/* All Products Section */}
//         <div id="all-products" style={{
//           background: 'white',
//           borderRadius: '16px',
//           padding: '24px',
//           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//           border: '1px solid #e0e0e0'
//         }}>
//           {/* Section Header */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             marginBottom: '24px',
//             paddingBottom: '16px',
//             borderBottom: '2px solid #f8f9fa'
//           }}>
//             <span style={{ fontSize: '28px' }}>🛍️</span>
//             <h2 style={{
//               fontSize: '28px',
//               fontWeight: '700',
//               color: '#333',
//               margin: '0'
//             }}>
//               All Products
//             </h2>
//             {searchQuery && (
//               <div style={{
//                 padding: '6px 12px',
//                 background: '#e3f2fd',
//                 color: '#1976d2',
//                 borderRadius: '16px',
//                 fontSize: '14px',
//                 fontWeight: '500'
//               }}>
//                 Results for: "{searchQuery}"
//               </div>
//             )}
//             <div style={{
//               marginLeft: 'auto',
//               padding: '8px 16px',
//               background: '#f8f9fa',
//               borderRadius: '20px',
//               fontSize: '14px',
//               color: '#666',
//               border: '1px solid #e0e0e0'
//             }}>
//               {pagination.total_count} products found
//             </div>
//           </div>

//           {/* Filter Status Bar - Enhanced with subcategory support */}
//           {(filters.category_id || filters.subcategory_id || filters.min_price || filters.max_price) && (
//             <div style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: '8px',
//               marginBottom: '20px',
//               padding: '12px',
//               background: '#f8f9fa',
//               borderRadius: '10px',
//               border: '1px solid #e0e0e0'
//             }}>
//               <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
//                 Active Filters:
//               </span>
//               {filters.category_id && (
//                 <span style={{
//                   padding: '4px 8px',
//                   background: '#007bff',
//                   color: 'white',
//                   borderRadius: '12px',
//                   fontSize: '12px',
//                   fontWeight: '500'
//                 }}>
//                   Category: {getCategoryDisplayName(filters.category_id)}
//                 </span>
//               )}
//               {filters.subcategory_id && (
//                 <span style={{
//                   padding: '4px 8px',
//                   background: '#6f42c1',
//                   color: 'white',
//                   borderRadius: '12px',
//                   fontSize: '12px',
//                   fontWeight: '500'
//                 }}>
//                   Subcategory: {getSubcategoryDisplayName(filters.subcategory_id)}
//                 </span>
//               )}
//               {filters.min_price && (
//                 <span style={{
//                   padding: '4px 8px',
//                   background: '#28a745',
//                   color: 'white',
//                   borderRadius: '12px',
//                   fontSize: '12px',
//                   fontWeight: '500'
//                 }}>
//                 </span>
//               )}
//               {filters.max_price && (
//                 <span style={{
//                   padding: '4px 8px',
//                   background: '#dc3545',
//                   color: 'white',
//                   borderRadius: '12px',
//                   fontSize: '12px',
//                   fontWeight: '500'
//                 }}>
//                   Max: ₹{filters.max_price}
//                 </span>
//               )}
//               <button
//                 onClick={() => {
//                   const clearedFilters = {
//                     category_id: '',
//                     subcategory_id: '',
//                     min_price: '',
//                     max_price: '',
//                     sort_by: 'name',
//                     sort_order: 'asc'
//                   }
//                   setFilters(clearedFilters)
//                   setPagination(prev => ({ ...prev, page: 1 }))
//                   // Fetch all products without filters
//                   fetchProducts(clearedFilters, 1)
//                 }}
//                 style={{
//                   padding: '4px 8px',
//                   background: '#6c757d',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '12px',
//                   fontSize: '12px',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   marginLeft: 'auto'
//                 }}
//               >
//                 Clear All ✕
//               </button>
//             </div>
//           )}

//           {/* Products Grid - Full Width */}
//           <ProductGrid
//             products={products}
//             loading={loading}
//             error={error}
//             onAddToCart={handleAddToCart}
//             onViewDetails={handleViewDetails}
//             totalCount={pagination.total_count}
//             currentPage={pagination.page}
//             totalPages={pagination.total_pages}
//             onPageChange={handlePageChange}
//           />
//         </div>

//         {/* Quick Stats Section */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//           gap: '20px',
//           marginTop: '32px'
//         }}>
//           {[
//             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
//             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
//             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
//             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
//           ].map((feature, index) => (
//             <div key={index} style={{
//               background: 'white',
//               padding: '24px',
//               borderRadius: '12px',
//               textAlign: 'center',
//               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//               border: '1px solid #e0e0e0',
//               transition: 'transform 0.2s ease',
//               cursor: 'pointer'
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = 'translateY(-4px)'
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = 'translateY(0)'
//             }}
//             >
//               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
//                 {feature.icon}
//               </div>
//               <h3 style={{
//                 fontSize: '16px',
//                 fontWeight: '600',
//                 color: '#333',
//                 margin: '0 0 8px 0'
//               }}>
//                 {feature.title}
//               </h3>
//               <p style={{
//                 fontSize: '14px',
//                 color: '#666',
//                 margin: '0'
//               }}>
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer style={{
//         background: '#232f3e',
//         color: 'white',
//         padding: '40px 24px 20px',
//         marginTop: '48px',
//         marginLeft: window.innerWidth <= 768 ? '0' : '280px',
//         transition: 'all 0.3s ease'
//       }}>
//         <div style={{
//           maxWidth: '1400px',
//           margin: '0 auto',
//           textAlign: 'center'
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '12px',
//             marginBottom: '16px'
//           }}>
//             <div style={{
//               width: '40px',
//               height: '40px',
//               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
//               borderRadius: '8px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '20px'
//             }}>
//               🛒
//             </div>
//             <h3 style={{
//               fontSize: '24px',
//               fontWeight: 'bold',
//               margin: '0'
//             }}>
//               E-commerce
//             </h3>
//           </div>
//           <p style={{
//             fontSize: '16px',
//             opacity: 0.8,
//             margin: '0 0 20px 0'
//           }}>
//             Your one-stop destination for quality products at amazing prices.
//           </p>
//         </div>
//       </footer>

//       {/* Responsive Styles */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');

//           @media (max-width: 768px) {
//             main {
//               padding: 16px 16px 120px 16px !important;
//               margin-left: 0 !important;
//             }
//             footer {
//               margin-left: 0 !important;
//               padding-bottom: 120px !important;
//             }

//             #all-products {
//               margin-bottom: 20px;
//             }

//             .hero-banner {
//               padding: 20px !important;
//             }
//           }

//           @media (max-width: 480px) {
//             main {
//               padding: 12px 12px 130px 12px !important;
//             }

//             .quick-stats {
//               grid-template-columns: 1fr !important;
//             }
//           }

//           /* Desktop responsive adjustments */
//           @media (min-width: 769px) {
//             main {
//               padding: 24px 24px 24px 304px !important;
//             }
//             footer {
//               margin-left: 280px !important;
//             }
//           }

//           /* Amazon-style search results header */
//           .search-results-header {
//             font-family: 'Amazon Ember', Arial, sans-serif;
//             color: #565959;
//             font-size: 14px;
//             margin-bottom: 16px;
//             padding: 12px 0;
//             border-bottom: 1px solid #e7e7e7;
//           }

//           /* Amazon-style product grid improvements */
//           .amazon-product-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//             gap: 16px;
//             padding: 16px 0;
//           }

//           @media (max-width: 768px) {
//             .amazon-product-grid {
//               grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//               gap: 12px;
//             }
//           }

//           @keyframes slideInRight {
//             from {
//               opacity: 0;
//               transform: translateX(100px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes slideOutRight {
//             from {
//               opacity: 1;
//               transform: translateX(0);
//             }
//             to {
//               opacity: 0;
//               transform: translateX(100px);
//             }
//           }
//         `}
//       </style>
//     </div>
//   )
// }

// export default Homepage













// // ecommerce/src/components/pages/dashboard.jsx - Updated with better price filter handling
// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Header from '../components/homepagecomponent/AppHeaders'
// import HeroBanner from '../components/homepagecomponent/HeroBanner'
// import FeaturedProducts from '../components/homepagecomponent/FeaturedProducts'
// import FixedProductFilters from '../components/homepagecomponent/ProductFilters'
// import ProductGrid from '../components/homepagecomponent/ProductGrid'
// import LoadingSpinner from '../components/ui/LoadingSpinner'

// const Homepage = () => {
//   const navigate = useNavigate()

//   // State management
//   const [products, setProducts] = useState([])
//   console.log('products', products)
//   console.log('products length', products.length)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filters, setFilters] = useState({
//     category_id: '',
//     subcategory_id: '',
//     min_price: '',
//     max_price: '',
//     sort_by: 'name',
//     sort_order: 'asc'
//   })
//   const [pagination, setPagination] = useState({
//     page: 1,
//     per_page: 20,
//     total_count: 0,
//     total_pages: 0
//   })

//   // Fetch products when filters, search, or pagination changes
//   useEffect(() => {
//     fetchProducts()
//   }, [filters, searchQuery, pagination.page])

//   const fetchProducts = async (customFilters = null, page = null) => {
//     try {
//       setLoading(true)
//       setError(null)

//       // Use custom filters if provided, otherwise use current filters
//       const filtersToUse = customFilters || filters
//       const pageToUse = page || pagination.page

//       console.log('Fetching products with filters:', filtersToUse)

//       // Build query parameters
//       const params = new URLSearchParams({
//         page: pageToUse.toString(),
//         per_page: pagination.per_page.toString(),
//         sort_by: filtersToUse.sort_by,
//         sort_order: filtersToUse.sort_order
//       })

//       // Add optional filters - ensure proper data types
//       if (filtersToUse.category_id && filtersToUse.category_id !== '') {
//         params.append('category_id', filtersToUse.category_id.toString())
//       }
//       if (filtersToUse.subcategory_id && filtersToUse.subcategory_id !== '') {
//         params.append('subcategory_id', filtersToUse.subcategory_id.toString())
//       }
//       if (filtersToUse.min_price && filtersToUse.min_price !== '') {
//         // Ensure price is sent as a number
//         const minPrice = parseFloat(filtersToUse.min_price)
//         if (!isNaN(minPrice) && minPrice > 0) {
//           params.append('min_price', minPrice.toString())
//         }
//       }
//       if (filtersToUse.max_price && filtersToUse.max_price !== '') {
//         // Ensure price is sent as a number
//         const maxPrice = parseFloat(filtersToUse.max_price)
//         if (!isNaN(maxPrice) && maxPrice > 0) {
//           params.append('max_price', maxPrice.toString())
//         }
//       }
//       if (searchQuery && searchQuery.trim() !== '') {
//         params.append('search', searchQuery.trim())
//       }

//       const apiUrl = `http://localhost:8000/api/v1/products?${params}`
//       console.log('API URL:', apiUrl)

//       const response = await fetch(apiUrl)

//       if (!response.ok) {
//         const errorText = await response.text()
//         console.error('API Error Response:', errorText)
//         throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
//       }

//       const data = await response.json()
//       console.log('API Response:', data)

//       setProducts(data.products || [])
//       setPagination(prev => ({
//         ...prev,
//         total_count: data.total_count || 0,
//         total_pages: data.total_pages || 0,
//         page: pageToUse
//       }))

//     } catch (error) {
//       console.error('Error fetching products:', error)
//       setError(error.message)
//       setProducts([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Event handlers
//   const handleSearch = (query) => {
//     console.log('Search query changed:', query)
//     setSearchQuery(query)
//     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
//   }

//   const handleFiltersChange = (newFilters, filteredData = null) => {
//     console.log('Filters changed from:', filters, 'to:', newFilters)

//     // Validate and clean filters
//     const cleanedFilters = {
//       ...newFilters,
//       // Ensure category_id and subcategory_id are strings or empty
//       category_id: newFilters.category_id || '',
//       subcategory_id: newFilters.subcategory_id || '',
//       // Ensure prices are valid numbers or empty strings
//       min_price: newFilters.min_price && !isNaN(parseFloat(newFilters.min_price)) ? newFilters.min_price : '',
//       max_price: newFilters.max_price && !isNaN(parseFloat(newFilters.max_price)) ? newFilters.max_price : '',
//       // Ensure sort fields have defaults
//       sort_by: newFilters.sort_by || 'name',
//       sort_order: newFilters.sort_order || 'asc'
//     }

//     console.log('Cleaned filters:', cleanedFilters)
//     setFilters(cleanedFilters)
//     setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page

//     // If filtered data is provided from the filter component, use it directly
//     if (filteredData && filteredData.products) {
//       console.log('Using provided filtered data:', filteredData)
//       setProducts(filteredData.products || [])
//       setPagination(prev => ({
//         ...prev,
//         total_count: filteredData.total_count || 0,
//         total_pages: filteredData.total_pages || 0,
//         page: 1
//       }))
//       setLoading(false)
//     } else {
//       // Otherwise, fetch new data
//       console.log('Fetching new data with cleaned filters')
//       fetchProducts(cleanedFilters, 1)
//     }
//   }

//   const handlePageChange = (newPage) => {
//     console.log('Page changed to:', newPage)
//     setPagination(prev => ({ ...prev, page: newPage }))
//     // Scroll to top of products section
//     const productsSection = document.getElementById('all-products')
//     if (productsSection) {
//       productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }

//   const handleAddToCart = (product) => {
//     console.log('Add to cart:', product)

//     // Create a more sophisticated notification
//     const notification = document.createElement('div')
//     notification.style.cssText = `
//       position: fixed;
//       top: 20px;
//       right: 20px;
//       background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
//       color: white;
//       padding: 16px 20px;
//       border-radius: 12px;
//       box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
//       z-index: 10000;
//       font-family: "Inter", sans-serif;
//       font-weight: 500;
//       animation: slideInRight 0.3s ease-out;
//       max-width: 300px;
//     `

//     notification.innerHTML = `
//       <div style="display: flex; align-items: center; gap: 12px;">
//         <span style="font-size: 20px;">✅</span>
//         <div>
//           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
//           <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
//         </div>
//       </div>
//     `

//     document.body.appendChild(notification)

//     // Remove notification after 3 seconds
//     setTimeout(() => {
//       notification.style.animation = 'slideOutRight 0.3s ease-in'
//       setTimeout(() => {
//         if (notification.parentNode) {
//           notification.parentNode.removeChild(notification)
//         }
//       }, 300)
//     }, 3000)
//   }

//   const handleViewDetails = (product) => {
//     // Navigate to product details page using the product_id
//     navigate(`/product/${product.product_id}`)
//   }

//   const handleShopNow = () => {
//     // Scroll to products section
//     const productsSection = document.getElementById('all-products')
//     if (productsSection) {
//       productsSection.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   // Helper function to format price for display
//   const formatPrice = (priceInCents) => {
//     if (!priceInCents) return '₹0'
//     return `₹${(priceInCents / 100).toFixed(2)}`
//   }

//   // Helper function to get display value for active filters
//   const getFilterDisplayValue = (key, value) => {
//     switch (key) {
//       case 'min_price':
//         return value ? `Min: ₹${value}` : ''
//       case 'max_price':
//         return value ? `Max: ₹${value}` : ''
//       case 'category_id':
//         return value ? `Category: ${value}` : ''
//       case 'subcategory_id':
//         return value ? `Subcategory: ${value}` : ''
//       default:
//         return value
//     }
//   }

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//       fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif'
//     }}>
//       {/* Fixed Filters Sidebar */}
//       <FixedProductFilters 
//         onFiltersChange={handleFiltersChange}
//         filters={filters}
//       />

//       {/* Header */}
//       <Header 
//         onSearch={handleSearch}
//         searchQuery={searchQuery}
//       />

//       {/* Main Content */}
//       <main style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         padding: window.innerWidth <= 768 ? '16px 16px 120px 16px' : '24px 24px 24px 304px',
//         transition: 'all 0.3s ease',
//         fontFamily: 'Amazon Ember, Arial, sans-serif'
//       }}>
//         {/* Hero Banner */}
//         <HeroBanner onShopNow={handleShopNow} />

//         {/* All Products Section */}
//         <div id="all-products" style={{
//           background: 'white',
//           borderRadius: '16px',
//           padding: '24px',
//           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//           border: '1px solid #e0e0e0'
//         }}>
//           {/* Section Header */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             marginBottom: '24px',
//             paddingBottom: '16px',
//             borderBottom: '2px solid #f8f9fa'
//           }}>
//             <span style={{ fontSize: '28px' }}>🛍️</span>
//             <h2 style={{
//               fontSize: '28px',
//               fontWeight: '700',
//               color: '#333',
//               margin: '0'
//             }}>
//               All Products
//             </h2>
//             {searchQuery && (
//               <div style={{
//                 padding: '6px 12px',
//                 background: '#e3f2fd',
//                 color: '#1976d2',
//                 borderRadius: '16px',
//                 fontSize: '14px',
//                 fontWeight: '500'
//               }}>
//                 Results for: "{searchQuery}"
//               </div>
//             )}
//             <div style={{
//               marginLeft: 'auto',
//               padding: '8px 16px',
//               background: '#f8f9fa',
//               borderRadius: '20px',
//               fontSize: '14px',
//               color: '#666',
//               border: '1px solid #e0e0e0'
//             }}>
//               {pagination.total_count} products found
//             </div>
//           </div>

//           {/* Filter Status Bar - Enhanced with better display */}
//           {Object.entries(filters).some(([key, value]) => 
//             value && value !== '' && key !== 'sort_by' && key !== 'sort_order'
//           ) && (
//             <div style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: '8px',
//               marginBottom: '20px',
//               padding: '12px',
//               background: '#f8f9fa',
//               borderRadius: '10px',
//               border: '1px solid #e0e0e0'
//             }}>
//               <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
//                 Active Filters:
//               </span>
//               {Object.entries(filters).map(([key, value]) => {
//                 if (!value || value === '' || key === 'sort_by' || key === 'sort_order') return null

//                 const displayValue = getFilterDisplayValue(key, value)
//                 if (!displayValue) return null

//                 return (
//                   <span key={key} style={{
//                     padding: '4px 8px',
//                     background: key.includes('price') ? '#28a745' : '#007bff',
//                     color: 'white',
//                     borderRadius: '12px',
//                     fontSize: '12px',
//                     fontWeight: '500'
//                   }}>
//                     {displayValue}
//                   </span>
//                 )
//               })}
//               <button
//                 onClick={() => {
//                   const clearedFilters = {
//                     category_id: '',
//                     subcategory_id: '',
//                     min_price: '',
//                     max_price: '',
//                     sort_by: 'name',
//                     sort_order: 'asc'
//                   }
//                   setFilters(clearedFilters)
//                   setPagination(prev => ({ ...prev, page: 1 }))
//                   fetchProducts(clearedFilters, 1)
//                 }}
//                 style={{
//                   padding: '4px 8px',
//                   background: '#6c757d',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '12px',
//                   fontSize: '12px',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   marginLeft: 'auto'
//                 }}
//               >
//                 Clear All ✕
//               </button>
//             </div>
//           )}

//           {/* Products Grid - Full Width */}
//           <ProductGrid
//             products={products}
//             loading={loading}
//             error={error}
//             onAddToCart={handleAddToCart}
//             onViewDetails={handleViewDetails}
//             totalCount={pagination.total_count}
//             currentPage={pagination.page}
//             totalPages={pagination.total_pages}
//             onPageChange={handlePageChange}
//           />
//         </div>

//         {/* Quick Stats Section */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//           gap: '20px',
//           marginTop: '32px'
//         }}>
//           {[
//             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
//             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
//             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
//             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
//           ].map((feature, index) => (
//             <div key={index} style={{
//               background: 'white',
//               padding: '24px',
//               borderRadius: '12px',
//               textAlign: 'center',
//               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//               border: '1px solid #e0e0e0',
//               transition: 'transform 0.2s ease',
//               cursor: 'pointer'
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = 'translateY(-4px)'
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = 'translateY(0)'
//             }}
//             >
//               <div style={{ fontSize: '32px', marginBottom: '12px' }}>
//                 {feature.icon}
//               </div>
//               <h3 style={{
//                 fontSize: '16px',
//                 fontWeight: '600',
//                 color: '#333',
//                 margin: '0 0 8px 0'
//               }}>
//                 {feature.title}
//               </h3>
//               <p style={{
//                 fontSize: '14px',
//                 color: '#666',
//                 margin: '0'
//               }}>
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer style={{
//         background: '#232f3e',
//         color: 'white',
//         padding: '40px 24px 20px',
//         marginTop: '48px',
//         marginLeft: window.innerWidth <= 768 ? '0' : '280px',
//         transition: 'all 0.3s ease'
//       }}>
//         <div style={{
//           maxWidth: '1400px',
//           margin: '0 auto',
//           textAlign: 'center'
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '12px',
//             marginBottom: '16px'
//           }}>
//             <div style={{
//               width: '40px',
//               height: '40px',
//               background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
//               borderRadius: '8px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '20px'
//             }}>
//               🛒
//             </div>
//             <h3 style={{
//               fontSize: '24px',
//               fontWeight: 'bold',
//               margin: '0'
//             }}>
//               E-commerce
//             </h3>
//           </div>
//           <p style={{
//             fontSize: '16px',
//             opacity: 0.8,
//             margin: '0 0 20px 0'
//           }}>
//             Your one-stop destination for quality products at amazing prices.
//           </p>
//         </div>
//       </footer>

//       {/* Responsive Styles */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');

//           @media (max-width: 768px) {
//             main {
//               padding: 16px 16px 120px 16px !important;
//               margin-left: 0 !important;
//             }
//             footer {
//               margin-left: 0 !important;
//               padding-bottom: 120px !important;
//             }

//             #all-products {
//               margin-bottom: 20px;
//             }

//             .hero-banner {
//               padding: 20px !important;
//             }
//           }

//           @media (max-width: 480px) {
//             main {
//               padding: 12px 12px 130px 12px !important;
//             }

//             .quick-stats {
//               grid-template-columns: 1fr !important;
//             }
//           }

//           /* Desktop responsive adjustments */
//           @media (min-width: 769px) {
//             main {
//               padding: 24px 24px 24px 304px !important;
//             }
//             footer {
//               margin-left: 280px !important;
//             }
//           }

//           /* Amazon-style search results header */
//           .search-results-header {
//             font-family: 'Amazon Ember', Arial, sans-serif;
//             color: #565959;
//             font-size: 14px;
//             margin-bottom: 16px;
//             padding: 12px 0;
//             border-bottom: 1px solid #e7e7e7;
//           }

//           /* Amazon-style product grid improvements */
//           .amazon-product-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//             gap: 16px;
//             padding: 16px 0;
//           }

//           @media (max-width: 768px) {
//             .amazon-product-grid {
//               grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//               gap: 12px;
//             }
//           }

//           @keyframes slideInRight {
//             from {
//               opacity: 0;
//               transform: translateX(100px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes slideOutRight {
//             from {
//               opacity: 1;
//               transform: translateX(0);
//             }
//             to {
//               opacity: 0;
//               transform: translateX(100px);
//             }
//           }
//         `}
//       </style>
//     </div>
//   )
// }

// export default Homepage





// ecommerce/src/components/pages/dashboard.jsx - Professional Design with Integrated Sidebar
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/homepagecomponent/AppHeaders'
import HeroBanner from '../components/homepagecomponent/HeroBanner'
import ProductGrid from '../components/homepagecomponent/ProductGrid'
import ProfessionalSidebar from '../components/homepagecomponent/ProfessionalSidebar'

const Homepage = () => {
  const navigate = useNavigate()

  // State management
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [filters, setFilters] = useState({
    category_id: '',
    subcategory_id: '',
    min_price: '',
    max_price: '',
    sort_by: 'name',
    sort_order: 'asc',
    specifications: {}
  })
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 20,
    total_count: 0,
    total_pages: 0
  })

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Fetch products when filters, search, or pagination changes
  useEffect(() => {
    fetchProducts()
  }, [filters, searchQuery, pagination.page])

  const fetchProducts = async (customFilters = null, page = null) => {
    try {
      setLoading(true)
      setError(null)

      const filtersToUse = customFilters || filters
      const pageToUse = page || pagination.page

      console.log('Fetching products with filters:', filtersToUse)

      // Build query parameters
      const params = new URLSearchParams({
        page: pageToUse.toString(),
        per_page: pagination.per_page.toString(),
        sort_by: filtersToUse.sort_by,
        sort_order: filtersToUse.sort_order
      })

      // Add optional filters with proper validation
      if (filtersToUse.category_id && filtersToUse.category_id !== '') {
        params.append('category_id', filtersToUse.category_id.toString())
      }
      if (filtersToUse.subcategory_id && filtersToUse.subcategory_id !== '') {
        params.append('subcategory_id', filtersToUse.subcategory_id.toString())
      }
      if (filtersToUse.min_price && filtersToUse.min_price !== '') {
        const minPrice = parseFloat(filtersToUse.min_price)
        if (!isNaN(minPrice) && minPrice > 0) {
          params.append('min_price', minPrice.toString())
        }
      }
      if (filtersToUse.max_price && filtersToUse.max_price !== '') {
        const maxPrice = parseFloat(filtersToUse.max_price)
        if (!isNaN(maxPrice) && maxPrice > 0) {
          params.append('max_price', maxPrice.toString())
        }
      }

      // Add specifications filter
      if (filtersToUse.specifications && Object.keys(filtersToUse.specifications).length > 0) {
        params.append('filters', JSON.stringify(filtersToUse.specifications))
      }

      if (searchQuery && searchQuery.trim() !== '') {
        params.append('search', searchQuery.trim())
      }

      const apiUrl = `http://localhost:8000/api/v1/products?${params}`
      console.log('API URL:', apiUrl)

      const response = await fetch(apiUrl)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Error Response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)

      setProducts(data.products || [])
      setPagination(prev => ({
        ...prev,
        total_count: data.total_count || 0,
        total_pages: data.total_pages || 0,
        page: pageToUse
      }))

    } catch (error) {
      console.error('Error fetching products:', error)
      setError(error.message)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  // Event handlers
  const handleSearch = (query) => {
    console.log('Search query changed:', query)
    setSearchQuery(query)
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handleFiltersChange = (newFilters, filteredData = null) => {
    console.log('Filters changed:', newFilters)

    const cleanedFilters = {
      ...newFilters,
      category_id: newFilters.category_id || '',
      subcategory_id: newFilters.subcategory_id || '',
      min_price: newFilters.min_price && !isNaN(parseFloat(newFilters.min_price)) ? newFilters.min_price : '',
      max_price: newFilters.max_price && !isNaN(parseFloat(newFilters.max_price)) ? newFilters.max_price : '',
      sort_by: newFilters.sort_by || 'name',
      sort_order: newFilters.sort_order || 'asc',
      specifications: newFilters.specifications || {}
    }

    setFilters(cleanedFilters)
    setPagination(prev => ({ ...prev, page: 1 }))

    if (filteredData && filteredData.products) {
      setProducts(filteredData.products || [])
      setPagination(prev => ({
        ...prev,
        total_count: filteredData.total_count || 0,
        total_pages: filteredData.total_pages || 0,
        page: 1
      }))
      setLoading(false)
    } else {
      fetchProducts(cleanedFilters, 1)
    }
  }

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }))
    const productsSection = document.getElementById('products-section')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product)

    // Enhanced notification
    const notification = document.createElement('div')
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
      color: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
      z-index: 10000;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 500;
      animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 320px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    `

    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="
          width: 32px; 
          height: 32px; 
          background: rgba(255, 255, 255, 0.2); 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          font-size: 16px;
        ">✓</div>
        <div>
          <div style="font-weight: 600; margin-bottom: 2px; font-size: 14px;">Added to Cart</div>
          <div style="font-size: 13px; opacity: 0.9; line-height: 1.3;">${product.name}</div>
        </div>
      </div>
    `

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 400)
    }, 3000)
  }

  const handleViewDetails = (product) => {
    navigate(`/product/${product.product_id}`)
  }

  const handleShopNow = () => {
    const productsSection = document.getElementById('products-section')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const getFilterDisplayValue = (key, value) => {
    switch (key) {
      case 'min_price':
        return value ? `Min: ₹${value}` : ''
      case 'max_price':
        return value ? `Max: ₹${value}` : ''
      case 'category_id':
        return value ? `Category: ${value}` : ''
      case 'subcategory_id':
        return value ? `Subcategory: ${value}` : ''
      default:
        return value
    }
  }

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) =>
    value && value !== '' && key !== 'sort_by' && key !== 'sort_order' && key !== 'specifications'
  ).length + (filters.specifications ? Object.keys(filters.specifications).length : 0)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <Header
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onToggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Layout */}
      <div style={{
        display: 'flex',
        minHeight: 'calc(100vh - 70px)', // Subtract header height
        marginTop: '70px' // Header height
      }}>
        {/* Professional Sidebar */}
        <ProfessionalSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onFiltersChange={handleFiltersChange}
          filters={filters}
        />

        {/* Main Content */}
        <main style={{
          flex: 1,
          marginLeft: sidebarOpen ? '320px' : '0',
          transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: '#F8FAFC',
          minHeight: 'calc(100vh - 70px)'
        }}>
          {/* Content Container */}
          <div style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '24px'
          }}>
            {/* Hero Section */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '16px',
              padding: '40px',
              marginBottom: '32px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.3
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h1 style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.025em'
                }}>
                  Discover Amazing Products
                </h1>
                <p style={{
                  fontSize: '18px',
                  opacity: 0.9,
                  margin: '0 0 24px 0',
                  maxWidth: '600px'
                }}>
                  Find the perfect products from our curated collection of quality items at unbeatable prices.
                </p>
                <button
                  onClick={handleShopNow}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.3)'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>

            {/* Products Section */}
            <div id="products-section" style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}>
              {/* Section Header */}
              <div style={{
                padding: '24px 32px',
                borderBottom: '1px solid #E5E7EB',
                background: 'white'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <h2 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#1F2937',
                      margin: '0'
                    }}>
                      Products
                    </h2>
                    {searchQuery && (
                      <div style={{
                        padding: '6px 12px',
                        background: '#EFF6FF',
                        color: '#1D4ED8',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>
                        "{searchQuery}"
                      </div>
                    )}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <div style={{
                      padding: '8px 16px',
                      background: '#F3F4F6',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#6B7280',
                      fontWeight: '500'
                    }}>
                      {pagination.total_count} products
                    </div>

                    {window.innerWidth <= 1024 && (
                      <button
                        onClick={toggleSidebar}
                        style={{
                          padding: '8px 16px',
                          background: '#6366F1',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        🔍 Filters
                        {activeFiltersCount > 0 && (
                          <span style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '10px',
                            padding: '2px 6px',
                            fontSize: '12px'
                          }}>
                            {activeFiltersCount}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Active Filters Display */}
                {activeFiltersCount > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #F3F4F6'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#6B7280',
                      marginRight: '8px'
                    }}>
                      Active Filters:
                    </span>
                    {Object.entries(filters).map(([key, value]) => {
                      if (!value || value === '' || key === 'sort_by' || key === 'sort_order' || key === 'specifications') return null

                      const displayValue = getFilterDisplayValue(key, value)
                      if (!displayValue) return null

                      return (
                        <span key={key} style={{
                          padding: '4px 12px',
                          background: '#EFF6FF',
                          color: '#1D4ED8',
                          borderRadius: '16px',
                          fontSize: '13px',
                          fontWeight: '500',
                          border: '1px solid #DBEAFE'
                        }}>
                          {displayValue}
                        </span>
                      )
                    })}

                    {/* Specifications Filters Display */}
                    {filters.specifications && Object.entries(filters.specifications).map(([key, value]) => (
                      <span key={`spec-${key}`} style={{
                        padding: '4px 12px',
                        background: '#F0FDF4', // Greenish tint for specs
                        color: '#15803D',
                        borderRadius: '16px',
                        fontSize: '13px',
                        fontWeight: '500',
                        border: '1px solid #DCFCE7'
                      }}>
                        {key}: {value}
                      </span>
                    ))}
                    <button
                      onClick={() => {
                        const clearedFilters = {
                          category_id: '',
                          subcategory_id: '',
                          min_price: '',
                          max_price: '',
                          sort_by: 'name',
                          sort_order: 'asc',
                          specifications: {}
                        }
                        setFilters(clearedFilters)
                        setPagination(prev => ({ ...prev, page: 1 }))
                        fetchProducts(clearedFilters, 1)
                      }}
                      style={{
                        padding: '4px 12px',
                        background: '#FEF2F2',
                        color: '#DC2626',
                        border: '1px solid #FECACA',
                        borderRadius: '16px',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Clear All ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Products Grid */}
              <div style={{ padding: '32px' }}>
                <ProductGrid
                  products={products}
                  loading={loading}
                  error={error}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                  totalCount={pagination.total_count}
                  currentPage={pagination.page}
                  totalPages={pagination.total_pages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>

            {/* Features Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}>
              {[
                { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999', color: '#10B981' },
                { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions', color: '#6366F1' },
                { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy', color: '#F59E0B' },
                { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance', color: '#EF4444' }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid #F3F4F6'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: `${feature.color}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    margin: '0 auto 20px',
                    border: `2px solid ${feature.color}25`
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1F2937',
                    margin: '0 0 8px 0'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && window.innerWidth <= 1024 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideOutRight {
            from {
              opacity: 1;
              transform: translateX(0);
            }
            to {
              opacity: 0;
              transform: translateX(100px);
            }
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #F3F4F6;
          }

          ::-webkit-scrollbar-thumb {
            background: #D1D5DB;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #9CA3AF;
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            main {
              margin-left: 0 !important;
            }
          }

          /* Ensure proper layout on small screens */
          @media (max-width: 1024px) {
            main {
              margin-left: 0 !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Homepage