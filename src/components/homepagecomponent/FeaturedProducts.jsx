// import React, { useState, useEffect } from 'react'
// import ProductCard from './ProductCard'
// import LoadingSpinner from '../ui/LoadingSpinner'

// const FeaturedProducts = ({ onAddToCart, onViewDetails }) => {
//   const [featuredProducts, setFeaturedProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetchFeaturedProducts()
//   }, [])

//   const fetchFeaturedProducts = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch('http://localhost:8000/api/v1/products/featured?limit=8')
      
//       if (response.ok) {
//         const data = await response.json()
//         setFeaturedProducts(data)
//       } else {
//         throw new Error('Failed to fetch featured products')
//       }
//     } catch (error) {
//       console.error('Error fetching featured products:', error)
//       setError(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (loading) {
//     return (
//       <section style={{
//         background: 'white',
//         borderRadius: '12px',
//         padding: '24px',
//         marginBottom: '32px',
//         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
//       }}>
//         <h2 style={{
//           fontSize: '24px',
//           fontWeight: '600',
//           color: '#333',
//           margin: '0 0 20px 0',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px'
//         }}>
//           ⭐ Featured Products
//         </h2>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           minHeight: '200px'
//         }}>
//           <div style={{ textAlign: 'center' }}>
//             <LoadingSpinner size="large" />
//             <p style={{
//               marginTop: '16px',
//               fontSize: '16px',
//               color: '#666'
//             }}>
//               Loading featured products...
//             </p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   if (error) {
//     return (
//       <section style={{
//         background: 'white',
//         borderRadius: '12px',
//         padding: '24px',
//         marginBottom: '32px',
//         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//         textAlign: 'center'
//       }}>
//         <h2 style={{
//           fontSize: '24px',
//           fontWeight: '600',
//           color: '#333',
//           margin: '0 0 20px 0',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           gap: '12px'
//         }}>
//           ⭐ Featured Products
//         </h2>
//         <div style={{ color: '#dc3545' }}>
//           <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
//           <p>Failed to load featured products: {error}</p>
//           <button
//             onClick={fetchFeaturedProducts}
//             style={{
//               marginTop: '16px',
//               padding: '10px 20px',
//               background: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               cursor: 'pointer'
//             }}
//           >
//             Try Again
//           </button>
//         </div>
//       </section>
//     )
//   }

//   if (!featuredProducts || featuredProducts.length === 0) {
//     return null // Don't show the section if no products
//   }

//   return (
//     <section style={{
//       background: 'white',
//       borderRadius: '12px',
//       padding: '24px',
//       marginBottom: '32px',
//       boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
//     }}>
//       {/* Section Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '24px'
//       }}>
//         <h2 style={{
//           fontSize: '24px',
//           fontWeight: '600',
//           color: '#333',
//           margin: '0',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px'
//         }}>
//           ⭐ Featured Products
//         </h2>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px'
//         }}>
//           <span style={{
//             fontSize: '14px',
//             color: '#666'
//           }}>
//             {featuredProducts.length} items
//           </span>
//           <button
//             onClick={fetchFeaturedProducts}
//             style={{
//               padding: '6px 12px',
//               background: '#f8f9fa',
//               color: '#007bff',
//               border: '1px solid #e9ecef',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '12px',
//               fontWeight: '500'
//             }}
//           >
//             🔄 Refresh
//           </button>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//         gap: '20px'
//       }}>
//         {featuredProducts.map(product => (
//           <ProductCard
//             key={product.product_id}
//             product={product}
//             onAddToCart={onAddToCart}
//             onViewDetails={onViewDetails}
//           />
//         ))}
//       </div>

//       {/* View All Products Link */}
//       <div style={{
//         textAlign: 'center',
//         marginTop: '24px',
//         paddingTop: '20px',
//         borderTop: '1px solid #e9ecef'
//       }}>
//         <button
//           onClick={() => {
//             // This would typically navigate to all products page
//             // For now, we'll scroll to the main products section
//             const productsSection = document.getElementById('all-products')
//             if (productsSection) {
//               productsSection.scrollIntoView({ behavior: 'smooth' })
//             }
//           }}
//           style={{
//             padding: '12px 24px',
//             background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             margin: '0 auto',
//             transition: 'all 0.2s ease'
//           }}
//           onMouseOver={(e) => {
//             e.target.style.transform = 'translateY(-2px)'
//             e.target.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)'
//           }}
//           onMouseOut={(e) => {
//             e.target.style.transform = 'translateY(0)'
//             e.target.style.boxShadow = 'none'
//           }}
//         >
//           <span>👀</span>
//           <span>View All Products</span>
//         </button>
//       </div>
//     </section>
//   )
// }

// export default FeaturedProducts













import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import LoadingSpinner from '../ui/LoadingSpinner'

// Global base URL variable
const API_BASE_URL = 'http://localhost:8000'

const FeaturedProducts = ({ onAddToCart, onViewDetails }) => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.get(`${API_BASE_URL}/api/v1/products/featured?limit=8`)
      
      setFeaturedProducts(response.data)
    } catch (error) {
      console.error('Error fetching featured products:', error)
      setError(error.response?.data?.detail || error.message || 'Failed to fetch featured products')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '32px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#333',
          margin: '0 0 20px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          ⭐ Featured Products
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <LoadingSpinner size="large" />
            <p style={{
              marginTop: '16px',
              fontSize: '16px',
              color: '#666'
            }}>
              Loading featured products...
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '32px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#333',
          margin: '0 0 20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          ⭐ Featured Products
        </h2>
        <div style={{ color: '#dc3545' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
          <p>Failed to load featured products: {error}</p>
          <button
            onClick={fetchFeaturedProducts}
            style={{
              marginTop: '16px',
              padding: '10px 20px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      </section>
    )
  }

  if (!featuredProducts || featuredProducts.length === 0) {
    return null // Don't show the section if no products
  }

  return (
    <section style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
    }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#333',
          margin: '0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          ⭐ Featured Products
        </h2>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            fontSize: '14px',
            color: '#666'
          }}>
            {featuredProducts.length} items
          </span>
          <button
            onClick={fetchFeaturedProducts}
            style={{
              padding: '6px 12px',
              background: '#f8f9fa',
              color: '#007bff',
              border: '1px solid #e9ecef',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '500'
            }}
          >
            🔄 Refresh
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {featuredProducts.map(product => (
          <ProductCard
            key={product.product_id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>

      {/* View All Products Link */}
      <div style={{
        textAlign: 'center',
        marginTop: '24px',
        paddingTop: '20px',
        borderTop: '1px solid #e9ecef'
      }}>
        <button
          onClick={() => {
            // This would typically navigate to all products page
            // For now, we'll scroll to the main products section
            const productsSection = document.getElementById('all-products')
            if (productsSection) {
              productsSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: '0 auto',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          <span>👀</span>
          <span>View All Products</span>
        </button>
      </div>
    </section>
  )
}

export default FeaturedProducts