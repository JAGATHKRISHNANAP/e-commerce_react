// pages/ProductDetailsPage.jsx
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AppHeader from '../components/homepagecomponent/AppHeaders'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import Card from '../components/ui/Card'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`http://localhost:8000/api/v1/products/${id}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    console.log('Add to cart:', { product, quantity })
    
    // Create notification
    const notification = document.createElement('div')
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
      color: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
      z-index: 10000;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      animation: slideInRight 0.3s ease-out;
      max-width: 300px;
    `
    
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 20px;">✅</span>
        <div>
          <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
          <div style="font-size: 14px; opacity: 0.9;">${product.name} (${quantity})</div>
        </div>
      </div>
    `
    
    document.body.appendChild(notification)
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 3000)
  }

  const handleBuyNow = () => {
    // Navigate to checkout or cart page
    console.log('Buy now:', { product, quantity })
    // You can navigate to checkout page
    // navigate('/checkout', { state: { product, quantity } })
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <AppHeader />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh' 
        }}>
          <LoadingSpinner size="large" />
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <AppHeader />
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '2rem',
          textAlign: 'center'
        }}>
          <Card style={{ padding: '3rem' }}>
            <div style={{ fontSize: '64px', marginBottom: '1rem' }}>😞</div>
            <h1 style={{ fontSize: '2rem', color: '#dc3545', marginBottom: '1rem' }}>
              Product Not Found
            </h1>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
              {error || 'The product you are looking for does not exist.'}
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                padding: '12px 24px',
                backgroundColor: '#ff9900',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              ← Back to Products
            </button>
          </Card>
        </div>
      </div>
    )
  }

  // Mock images if not available
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [
        `https://via.placeholder.com/500x500/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`,
        `https://via.placeholder.com/500x500/e5e7eb/6b7280?text=View+2`,
        `https://via.placeholder.com/500x500/d1d5db/4b5563?text=View+3`
      ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <AppHeader />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '2rem',
          fontSize: '14px',
          color: '#6b7280'
        }}>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              background: 'none',
              border: 'none',
              color: '#3b82f6',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Home
          </button>
          <span>›</span>
          <span>{product.category || 'Products'}</span>
          <span>›</span>
          <span style={{ color: '#1f2937' }}>{product.name}</span>
        </div>

        <Card>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
            gap: '3rem'
          }}>
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div style={{
                marginBottom: '1rem',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '1/1'
              }}>
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Thumbnail Images */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    style={{
                      width: '80px',
                      height: '80px',
                      border: selectedImage === index ? '2px solid #ff9900' : '1px solid #e5e7eb',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: 'none',
                      padding: '0'
                    }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {product.name}
              </h1>

              {/* Rating (if available) */}
              {product.rating && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ color: '#fbbf24' }}>
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span style={{ color: '#6b7280' }}>
                    ({product.rating}/5)
                  </span>
                </div>
              )}

              {/* Price */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#dc2626'
                }}>
                  ₹{product.price?.toLocaleString()}
                </div>
                {product.original_price && product.original_price > product.price && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '0.5rem'
                  }}>
                    <span style={{
                      textDecoration: 'line-through',
                      color: '#6b7280',
                      fontSize: '1.1rem'
                    }}>
                      ₹{product.original_price.toLocaleString()}
                    </span>
                    <span style={{
                      color: '#059669',
                      fontWeight: '600'
                    }}>
                      {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% off
                    </span>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div style={{
                marginBottom: '2rem',
                padding: '0.75rem 1rem',
                backgroundColor: product.stock_quantity > 0 ? '#f0fdf4' : '#fef2f2',
                border: `1px solid ${product.stock_quantity > 0 ? '#bbf7d0' : '#fecaca'}`,
                borderRadius: '6px'
              }}>
                <span style={{
                  color: product.stock_quantity > 0 ? '#059669' : '#dc2626',
                  fontWeight: '600'
                }}>
                  {product.stock_quantity > 0 
                    ? `✅ In Stock (${product.stock_quantity} available)`
                    : '❌ Out of Stock'
                  }
                </span>
              </div>

              {/* Quantity Selector */}
              {product.stock_quantity > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#1f2937'
                  }}>
                    Quantity:
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '6px' }}>
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        style={{
                          padding: '0.5rem 0.75rem',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '18px'
                        }}
                      >
                        −
                      </button>
                      <span style={{
                        padding: '0.5rem 1rem',
                        borderLeft: '1px solid #d1d5db',
                        borderRight: '1px solid #d1d5db',
                        fontWeight: '600'
                      }}>
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                        style={{
                          padding: '0.5rem 0.75rem',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '18px'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock_quantity === 0}
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    padding: '1rem 2rem',
                    backgroundColor: product.stock_quantity > 0 ? '#ff9900' : '#9ca3af',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: product.stock_quantity > 0 ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    if (product.stock_quantity > 0) {
                      e.target.style.backgroundColor = '#e68900'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (product.stock_quantity > 0) {
                      e.target.style.backgroundColor = '#ff9900'
                    }
                  }}
                >
                  🛒 Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={product.stock_quantity === 0}
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    padding: '1rem 2rem',
                    backgroundColor: product.stock_quantity > 0 ? '#146eb4' : '#9ca3af',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: product.stock_quantity > 0 ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    if (product.stock_quantity > 0) {
                      e.target.style.backgroundColor = '#0d5aa7'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (product.stock_quantity > 0) {
                      e.target.style.backgroundColor = '#146eb4'
                    }
                  }}
                >
                  ⚡ Buy Now
                </button>
              </div>

              {/* Product Description */}
              {product.description && (
                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: '#1f2937'
                  }}>
                    Product Description
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {product.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Additional Product Information */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <Card>
            <Card.Header>
              <Card.Title>🚚 Delivery Information</Card.Title>
            </Card.Header>
            <Card.Content>
              <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                <p>• Free delivery on orders above ₹999</p>
                <p>• Standard delivery: 3-5 business days</p>
                <p>• Express delivery: 1-2 business days</p>
                <p>• Cash on delivery available</p>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>↩️ Return Policy</Card.Title>
            </Card.Header>
            <Card.Content>
              <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                <p>• 30-day return policy</p>
                <p>• Easy returns and exchanges</p>
                <p>• Full refund on defective items</p>
                <p>• Free return pickup</p>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>🔒 Security & Support</Card.Title>
            </Card.Header>
            <Card.Content>
              <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
                <p>• 100% secure payment</p>
                <p>• 24/7 customer support</p>
                <p>• Quality guarantee</p>
                <p>• Trusted by thousands</p>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>

      <style>
        {`
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
        `}
      </style>
    </div>
  )
}

export default ProductDetailsPage