import React, { useState, useEffect } from 'react'

const ProductDetailsModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [loading, setLoading] = useState(false)

  // Reset quantity when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuantity(1)
      setSelectedImage(0)
    }
  }, [isOpen, product])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !product) return null

  const handleAddToCart = async () => {
    setLoading(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500))
      onAddToCart({ ...product, quantity })
      
      // Show success animation
      const button = document.getElementById('add-to-cart-btn')
      if (button) {
        button.style.transform = 'scale(0.95)'
        setTimeout(() => {
          button.style.transform = 'scale(1)'
        }, 150)
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stock_quantity) {
      setQuantity(newQuantity)
    }
  }

  // Sample images array (you can replace with actual product images)
  const productImages = [
    product.image_url || '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600'
  ].filter(Boolean)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const getStockStatus = () => {
    if (product.stock_quantity === 0) return { text: 'Out of Stock', color: '#dc3545', bg: '#ffebee' }
    if (product.stock_quantity <= 10) return { text: 'Low Stock', color: '#ff9800', bg: '#fff3e0' }
    return { text: 'In Stock', color: '#4caf50', bg: '#e8f5e9' }
  }

  const stockStatus = getStockStatus()

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(4px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { 
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to { 
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .modal-content {
            animation: slideIn 0.4s ease-out;
          }
        `}
      </style>

      <div 
        className="modal-content"
        style={{
          background: 'white',
          borderRadius: '20px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10,
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#f5f5f5'
            e.target.style.transform = 'scale(1.1)'
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)'
            e.target.style.transform = 'scale(1)'
          }}
        >
          ✕
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          height: '90vh',
          overflow: 'hidden'
        }}>
          {/* Left Side - Product Images */}
          <div style={{
            padding: '24px',
            background: '#f8f9fa',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Main Image */}
            <div style={{
              flex: 1,
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #e0e0e0'
            }}>
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  maxHeight: '400px',
                  borderRadius: '12px'
                }}
                onError={(e) => {
                  e.target.src = '/api/placeholder/400/400'
                }}
              />
            </div>

            {/* Thumbnail Images */}
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '12px',
                    border: selectedImage === index ? '3px solid #007bff' : '2px solid #e0e0e0',
                    background: 'white',
                    padding: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                    onError={(e) => {
                      e.target.src = '/api/placeholder/80/80'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div style={{
            padding: '32px',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Product Title & Category */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <span style={{
                  background: '#e3f2fd',
                  color: '#1976d2',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {product.category?.name || 'Product'}
                </span>
                <div style={{
                  background: stockStatus.bg,
                  color: stockStatus.color,
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {stockStatus.text}
                </div>
              </div>
              
              <h1 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#333',
                margin: '0 0 8px 0',
                lineHeight: '1.3'
              }}>
                {product.name}
              </h1>

              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#007bff',
                marginBottom: '16px'
              }}>
                {formatPrice(product.price)}
              </div>
            </div>

            {/* Product Details */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Description */}
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  📝 Description
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {product.description || 'No description available for this product.'}
                </p>
              </div>

              {/* Product Specifications */}
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  ⚙️ Specifications
                </h3>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '16px'
                }}>
                  {[
                    { label: 'Product ID', value: `#${product.product_id}` },
                    { label: 'Stock Available', value: `${product.stock_quantity} units` },
                    ...(product.storage_capacity ? [{ label: 'Storage', value: product.storage_capacity }] : []),
                    { label: 'Category', value: product.category?.name || 'General' }
                  ].map((spec, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: index === 3 ? '0' : '8px',
                      marginBottom: index === 3 ? '0' : '8px',
                      borderBottom: index === 3 ? 'none' : '1px solid #e0e0e0'
                    }}>
                      <span style={{ fontWeight: '500', color: '#555' }}>{spec.label}:</span>
                      <span style={{ color: '#333' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Add to Cart */}
              <div style={{
                marginTop: 'auto',
                padding: '20px 0'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    Quantity:
                  </span>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      style={{
                        width: '40px',
                        height: '40px',
                        border: 'none',
                        background: quantity <= 1 ? '#f5f5f5' : '#007bff',
                        color: quantity <= 1 ? '#ccc' : 'white',
                        cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}
                    >
                      −
                    </button>
                    <span style={{
                      minWidth: '60px',
                      textAlign: 'center',
                      padding: '0 12px',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock_quantity}
                      style={{
                        width: '40px',
                        height: '40px',
                        border: 'none',
                        background: quantity >= product.stock_quantity ? '#f5f5f5' : '#007bff',
                        color: quantity >= product.stock_quantity ? '#ccc' : 'white',
                        cursor: quantity >= product.stock_quantity ? 'not-allowed' : 'pointer',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  id="add-to-cart-btn"
                  onClick={handleAddToCart}
                  disabled={product.stock_quantity === 0 || loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: product.stock_quantity === 0 ? '#ccc' : 
                               loading ? '#6c757d' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: product.stock_quantity === 0 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    if (product.stock_quantity > 0 && !loading) {
                      e.target.style.background = '#0056b3'
                      e.target.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (product.stock_quantity > 0 && !loading) {
                      e.target.style.background = '#007bff'
                      e.target.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid transparent',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Adding...
                    </>
                  ) : product.stock_quantity === 0 ? (
                    '❌ Out of Stock'
                  ) : (
                    <>
                      🛒 Add to Cart ({formatPrice(product.price * quantity)})
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

export default ProductDetailsModal