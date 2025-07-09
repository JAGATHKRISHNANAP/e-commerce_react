// src/pages/ProductDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/homepagecomponent/AppHeaders';
import { addToCart, selectCartIsUpdating } from '../redux/slices/cartSlice';
import { selectIsAuthenticated } from '../redux/slices/authSlices';
import { showToast } from '../components/ui/Toast';
import { ShoppingCart, Check, Loader } from 'lucide-react';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Redux selectors
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isCartUpdating = useSelector(selectCartIsUpdating);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('product details ID:', product);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`http://localhost:8000/api/v1/products/${productId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Product not found');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);
      
      // Set first image as selected if images exist
      if (data.images && data.images.length > 0) {
        const primaryIndex = data.images.findIndex(img => img.is_primary);
        setSelectedImageIndex(primaryIndex >= 0 ? primaryIndex : 0);
      }

    } catch (error) {
      console.error('Error fetching product details:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    // Check authentication
    if (!isAuthenticated) {
      showToast('Please login to add items to cart', 'warning');
      navigate('/login');
      return;
    }

    setIsAdding(true);
    
    try {
      // Dispatch add to cart action
      await dispatch(addToCart({ 
        productId: parseInt(productId), 
        quantity: quantity 
      })).unwrap();
      
      setIsAdded(true);
      showToast(`${quantity} × ${product.name} added to cart!`, 'success');
      
      // Reset the added state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
      
    } catch (error) {
      console.error('Failed to add to cart:', error);
      showToast(error || 'Failed to add to cart', 'error');
    } finally {
      setIsAdding(false);
    }
  };

  const getSelectedImage = () => {
    if (!product?.images || product.images.length === 0) {
      return null;
    }
    return product.images[selectedImageIndex]?.image_url;
  };

  const ProductImage = ({ src, alt, style = {}, onError }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleImageLoad = () => {
      setIsLoading(false);
      setHasError(false);
    };

    const handleImageError = () => {
      console.error(`Failed to load image: ${imageSrc}`);
      setIsLoading(false);
      setHasError(true);
      
      if (onError) {
        onError();
      }
    };

    return (
      <div style={{ position: 'relative', ...style }}>
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #e3e3e3',
              borderTop: '4px solid #007bff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          </div>
        )}
        
        <img
          src={imageSrc}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: isLoading ? 'none' : 'block',
            borderRadius: '8px'
          }}
        />
        
        {hasError && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            color: '#6c757d',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '24px', marginBottom: '8px' }}>📷</span>
            <span style={{ fontSize: '12px' }}>Image not available</span>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #e3e3e3',
            borderTop: '4px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <p style={{ color: '#666', fontSize: '16px' }}>Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px 20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>😞</div>
          <h2 style={{ color: '#333', marginBottom: '12px' }}>Product Not Found</h2>
          <p style={{ color: '#666', marginBottom: '24px' }}>{error}</p>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              padding: '12px 24px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
     <Header /> 
      {/* Breadcrumb */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontSize: '14px',
        color: '#666'
      }}>
        <span 
          onClick={() => navigate('/dashboard')}
          style={{ cursor: 'pointer', color: '#007bff' }}
        >
          Dashboard
        </span>
        {product.category && (
          <>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#007bff' }}>{product.category.name}</span>
          </>
        )}
        <span style={{ margin: '0 8px' }}>›</span>
        <span>{product.name}</span>
      </div>

      {/* Main Product Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 40px',
        display: 'grid',
        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
        gap: '40px'
      }}>
        
        {/* Image Gallery */}
        <div>
          {/* Main Image */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
<div style={{ height: '700px', position: 'relative' }}>
  <img
    src={getSelectedImage()}
    alt={product.name}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover', // or 'contain' based on your need
      borderRadius: '12px'
    }}
  />

  {/* Zoom indicator */}
  <div style={{
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '6px 10px',
    borderRadius: '16px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  }}>
    🔍 Click to zoom
  </div>
</div>

          </div>

          {/* Thumbnail Gallery */}
          {product.images && product.images.length > 1 && (
            <div style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              padding: '8px'
            }}>
              {product.images.map((image, index) => (
                <div
                  key={image.image_id}
                  onClick={() => setSelectedImageIndex(index)}
                  style={{
                    minWidth: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: selectedImageIndex === index ? '3px solid #007bff' : '2px solid #e0e0e0',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ProductImage
                    src={image.image_url}
                    alt={`${product.name} - Image ${index + 1}`}
                    style={{ height: '100%' }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Image Count */}
          {product.images && product.images.length > 0 && (
            <div style={{
              textAlign: 'center',
              marginTop: '12px',
              fontSize: '14px',
              color: '#666'
            }}>
              {selectedImageIndex + 1} of {product.images.length} images
            </div>
          )}
        </div>

        {/* Product Information */}
        <div>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            
            {/* Product Title */}
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#333',
              margin: '0 0 16px 0',
              lineHeight: '1.3'
            }}>
              {product.name}
            </h1>

            {/* Category Badge */}
            {product.category && (
              <div style={{
                display: 'inline-block',
                background: '#e3f2fd',
                color: '#1976d2',
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '20px'
              }}>
                {product.category.name}
              </div>
            )}

            {/* Price */}
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#e74c3c',
              marginBottom: '20px'
            }}>
              ₹{(product.base_price / 100).toFixed(2)}


              {/* ₹{parseFloat(product.price).toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })} */}
            </div>

            {/* Stock Status */}
            <div style={{ marginBottom: '24px' }}>
              {product.stock_quantity > 0 ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#28a745',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  <span style={{ fontSize: '20px' }}>✅</span>
                  In Stock ({product.stock_quantity} available)
                </div>
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#dc3545',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  <span style={{ fontSize: '20px' }}>❌</span>
                  Out of Stock
                </div>
              )}
            </div>

            {/* Storage Capacity */}
            {product.storage_capacity && (
              <div style={{
                background: '#f8f9fa',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #e9ecef'
              }}>
                <span style={{ fontWeight: '600', color: '#333' }}>Storage: </span>
                <span style={{ color: '#666' }}>{product.storage_capacity}</span>
              </div>
            )}

            {/* Quantity Selector */}
            {product.stock_quantity > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Quantity:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={isAdding || isCartUpdating}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #007bff',
                      background: 'white',
                      color: '#007bff',
                      borderRadius: '8px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: isAdding || isCartUpdating ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: isAdding || isCartUpdating ? 0.5 : 1
                    }}
                  >
                    -
                  </button>
                  <span style={{
                    padding: '8px 16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                    disabled={isAdding || isCartUpdating}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #007bff',
                      background: 'white',
                      color: '#007bff',
                      borderRadius: '8px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: isAdding || isCartUpdating ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: isAdding || isCartUpdating ? 0.5 : 1
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '32px'
            }}>
              <button
                onClick={handleAddToCart}
                disabled={product.stock_quantity <= 0 || isAdding || isCartUpdating}
                style={{
                  flex: 1,
                  padding: '16px 24px',
                  background: product.stock_quantity <= 0 
                    ? '#ccc' 
                    : isAdded 
                      ? 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)'
                      : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: product.stock_quantity <= 0 || isAdding || isCartUpdating ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: product.stock_quantity > 0 && !isAdding ? '0 4px 15px rgba(40, 167, 69, 0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  if (product.stock_quantity > 0 && !isAdding && !isCartUpdating) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.5)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = product.stock_quantity > 0 && !isAdding ? '0 4px 15px rgba(40, 167, 69, 0.4)' : 'none';
                }}
              >
                {isAdding ? (
                  <>
                    <Loader 
                      style={{ 
                        width: '20px', 
                        height: '20px',
                        animation: 'spin 1s linear infinite'
                      }} 
                    />
                    <span>Adding...</span>
                  </>
                ) : product.stock_quantity <= 0 ? (
                  'Out of Stock'
                ) : isAdded ? (
                  <>
                    <Check style={{ width: '20px', height: '20px' }} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart style={{ width: '20px', height: '20px' }} />
                    <span>Add {quantity} to Cart</span>
                  </>
                )}
              </button>

              <button
                style={{
                  padding: '16px 24px',
                  background: 'transparent',
                  border: '2px solid #007bff',
                  color: '#007bff',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                ❤️ Wishlist
              </button>
            </div>

            {/* Product Details */}
            <div style={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{
                background: '#f8f9fa',
                padding: '16px',
                borderBottom: '1px solid #e0e0e0'
              }}>
                <h3 style={{
                  margin: '0',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Product Details
                </h3>
              </div>
              <div style={{ padding: '20px' }}>
                {product.description && (
                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px'
                    }}>
                      Description
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#555',
                      margin: '0',
                      maxHeight: showFullDescription ? 'none' : '100px',
                      overflow: 'hidden'
                    }}>
                      {product.description}
                    </p>
                    {product.description.length > 200 && (
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#007bff',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          marginTop: '8px',
                          padding: '0'
                        }}
                      >
                        {showFullDescription ? 'Show less' : 'Show more'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
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

        @media (max-width: 768px) {
          .product-content {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetailsPage;