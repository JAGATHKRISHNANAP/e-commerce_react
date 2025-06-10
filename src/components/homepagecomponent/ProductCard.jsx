import React, { useState } from 'react'

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const getStockStatus = (quantity) => {
    if (quantity === 0) return { text: 'Out of Stock', color: '#dc3545', bg: '#f8d7da' }
    if (quantity < 10) return { text: 'Low Stock', color: '#fd7e14', bg: '#fff3cd' }
    return { text: 'In Stock', color: '#28a745', bg: '#d4edda' }
  }

  const stockStatus = getStockStatus(product.stock_quantity)

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: isHovered ? '0 8px 25px rgba(0, 0, 0, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        border: '1px solid #e0e0e0',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(product)}
    >
      {/* Product Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        background: '#f8f9fa'
      }}>
        {!imageError && product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            fontSize: '48px',
            color: '#6c757d'
          }}>
            📦
          </div>
        )}

        {/* Stock Status Badge */}
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          padding: '4px 8px',
          background: stockStatus.bg,
          color: stockStatus.color,
          borderRadius: '12px',
          fontSize: '10px',
          fontWeight: '600',
          border: `1px solid ${stockStatus.color}20`
        }}>
          {stockStatus.text}
        </div>

        {/* Category Badge */}
        {product.category && (
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            padding: '4px 8px',
            background: 'rgba(0, 123, 255, 0.9)',
            color: 'white',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: '600'
          }}>
            {product.category.name}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: '16px' }}>
        {/* Product Name */}
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#333',
          margin: '0 0 8px 0',
          lineHeight: '1.3',
          height: '40px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {product.name}
        </h3>

        {/* Product Description */}
        {product.description && (
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0 0 12px 0',
            lineHeight: '1.4',
            height: '42px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical'
          }}>
            {product.description}
          </p>
        )}

        {/* Storage Capacity */}
        {product.storage_capacity && (
          <div style={{
            display: 'inline-block',
            padding: '2px 8px',
            background: '#e7f3ff',
            color: '#0066cc',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '500',
            marginBottom: '12px'
          }}>
            💾 {product.storage_capacity}
          </div>
        )}

        {/* Price and Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto'
        }}>
          <div>
            <div style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#007bff'
            }}>
              {formatPrice(product.price)}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Stock: {product.stock_quantity}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart(product)
            }}
            disabled={product.stock_quantity === 0}
            style={{
              padding: '8px 16px',
              background: product.stock_quantity === 0 
                ? '#6c757d' 
                : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: product.stock_quantity === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease',
              opacity: product.stock_quantity === 0 ? 0.6 : 1
            }}
            onMouseOver={(e) => {
              if (product.stock_quantity > 0) {
                e.target.style.transform = 'scale(1.05)'
              }
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)'
            }}
          >
            <span>🛒</span>
            <span>{product.stock_quantity === 0 ? 'Unavailable' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 123, 255, 0.05)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }} />
    </div>
  )
}

export default ProductCard