// //src/components/ProductGridDetails/ProductCard.jsx
// import React from 'react';
// import ProductImage from '../ui/ProductImage';


// const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
//   const getImage = () => {
//     if (product.primary_image) return product.primary_image;
//     if (product.images?.length > 0) {
//       const primary = product.images.find(img => img.is_primary);
//       return primary?.image_url || product.images[0].image_url;
//     }
//     return product.image_url || null;
//   };

//   const imageUrl = getImage();

//   return (
//     <div
//       onClick={() => onViewDetails(product)}
//       style={{
//         background: 'white',
//         borderRadius: '16px',
//         overflow: 'hidden',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//         transition: '0.3s',
//         border: '1px solid #e0e0e0',
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%',
//         cursor: 'pointer'
//       }}
//     >
//       <div style={{ height: '240px', position: 'relative' }}>
//         <ProductImage src={imageUrl} alt={product.name} style={{ height: '100%' }} />
//         {product.stock_quantity <= 0 && (
//           <Badge text="Out of Stock" color="#dc3545" />
//         )}
//         {product.stock_quantity > 0 && product.stock_quantity <= 5 && (
//           <Badge text={`Only ${product.stock_quantity} left`} color="#ffc107" textColor="#333" />
//         )}
//       </div>

//       <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//         <h3 style={{
//           fontSize: '18px', fontWeight: '600', margin: '0 0 4px 0',
//           display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'
//         }}>{product.name}</h3>

//         <p style={{
//           fontSize: '14px', color: '#666', margin: '0 0 12px 0',
//           display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
//           overflow: 'hidden', minHeight: '3em'
//         }}>{product.description || '\u00A0'}</p>

//         {product.category && (
//           <div style={{
//             background: '#e3f2fd', color: '#1976d2', padding: '4px 8px',
//             borderRadius: '12px', fontSize: '12px', fontWeight: '500', marginBottom: '12px'
//           }}>{product.category.name}</div>
//         )}

//         <div style={{
//           fontSize: '24px', fontWeight: '700', color: '#e74c3c', marginBottom: '16px'
//         }}>₹{parseFloat(product.price).toFixed(2)}</div>

//         <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
//           <button
//             onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
//             style={{
//               flex: 1, padding: '12px', border: '2px solid #007bff',
//               borderRadius: '8px', background: 'transparent',
//               color: '#007bff', fontWeight: '600', cursor: 'pointer'
//             }}
//           >View Details</button>
//           <button
//             onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
//             disabled={product.stock_quantity <= 0}
//             style={{
//               flex: 1, padding: '12px',
//               background: product.stock_quantity <= 0 ? '#ccc' : '#28a745',
//               color: 'white', border: 'none', borderRadius: '8px',
//               fontWeight: '600', cursor: product.stock_quantity <= 0 ? 'not-allowed' : 'pointer'
//             }}
//           >{product.stock_quantity <= 0 ? 'Out of Stock' : 'Add to Cart'}</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Badge = ({ text, color, textColor = 'white' }) => (
//   <div style={{
//     position: 'absolute', top: '12px', right: '12px',
//     background: color, color: textColor,
//     padding: '4px 8px', borderRadius: '12px',
//     fontSize: '12px', fontWeight: '600'
//   }}>{text}</div>
// );

// export default ProductCard;




// src/components/ProductGridDetails/ProductCard.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductImage from '../ui/ProductImage';
import { addToCart, selectCartIsUpdating } from '../../redux/slices/cartSlice';
import { selectIsAuthenticated } from '../../redux/slices/authSlices';
import { ShoppingCart, Check, Loader } from 'lucide-react';

const ProductCard = ({ product, onViewDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isUpdating = useSelector(selectCartIsUpdating);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const getImage = () => {
    if (product.primary_image) return product.primary_image;
    if (product.images?.length > 0) {
      const primary = product.images.find(img => img.is_primary);
      return primary?.image_url || product.images[0].image_url;
    }
    return product.image_url || null;
  };

  const imageUrl = getImage();

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    
    // Check if user is authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setIsAdding(true);
    
    try {
      // Dispatch add to cart action
      await dispatch(addToCart({ 
        productId: product.product_id, 
        quantity: 1 
      })).unwrap();
      
      setIsAdded(true);
      // Reset the added state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      // You can show an error toast here
    } finally {
      setIsAdding(false);
    }
  };

  const isOutOfStock = product.stock_quantity <= 0;
  const isLowStock = product.stock_quantity > 0 && product.stock_quantity <= 5;

  return (
    <div
      onClick={() => onViewDetails(product)}
      style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ height: '240px', position: 'relative' }}>
        <ProductImage src={imageUrl} alt={product.name} style={{ height: '100%' }} />
        
        {/* Stock Badges */}
        {isOutOfStock && (
          <Badge text="Out of Stock" color="#dc3545" />
        )}
        {isLowStock && (
          <Badge text={`Only ${product.stock_quantity} left`} color="#ffc107" textColor="#333" />
        )}
        
        {/* Added to Cart Badge */}
        {isAdded && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(76, 175, 80, 0.95)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <Check style={{ width: '20px', height: '20px' }} />
            Added to Cart!
          </div>
        )}
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontSize: '18px', 
          fontWeight: '600', 
          margin: '0 0 4px 0',
          display: '-webkit-box', 
          WebkitLineClamp: 1, 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden'
        }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: '14px', 
          color: '#666', 
          margin: '0 0 12px 0',
          display: '-webkit-box', 
          WebkitLineClamp: 2, 
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden', 
          minHeight: '3em'
        }}>
          {product.description || '\u00A0'}
        </p>

        {product.category && (
          <div style={{
            background: '#e3f2fd', 
            color: '#1976d2', 
            padding: '4px 8px',
            borderRadius: '12px', 
            fontSize: '12px', 
            fontWeight: '500', 
            marginBottom: '12px',
            display: 'inline-block',
            alignSelf: 'flex-start'
          }}>
            {product.category.name}
          </div>
        )}

        {/* Price and Storage */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div style={{
            fontSize: '24px', 
            fontWeight: '700', 
            color: '#e74c3c'
          }}>
            ₹{parseFloat(product.price).toFixed(2)}
          </div>
          {product.storage_capacity && (
            <span style={{
              fontSize: '14px',
              color: '#666',
              background: '#f5f5f5',
              padding: '4px 8px',
              borderRadius: '4px'
            }}>
              {product.storage_capacity}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <button
            onClick={(e) => { 
              e.stopPropagation(); 
              onViewDetails(product); 
            }}
            style={{
              flex: 1, 
              padding: '12px', 
              border: '2px solid #007bff',
              borderRadius: '8px', 
              background: 'transparent',
              color: '#007bff', 
              fontWeight: '600', 
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#007bff';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#007bff';
            }}
          >
            View Details
          </button>
          
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock || isAdding || isUpdating}
            style={{
              flex: 1, 
              padding: '12px',
              background: isOutOfStock 
                ? '#ccc' 
                : isAdded 
                  ? '#4caf50'
                  : '#28a745',
              color: 'white', 
              border: 'none', 
              borderRadius: '8px',
              fontWeight: '600', 
              cursor: isOutOfStock || isAdding ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              if (!isOutOfStock && !isAdding) {
                e.currentTarget.style.background = '#218838';
              }
            }}
            onMouseOut={(e) => {
              if (!isOutOfStock && !isAdding) {
                e.currentTarget.style.background = isAdded ? '#4caf50' : '#28a745';
              }
            }}
          >
            {isAdding ? (
              <>
                <Loader 
                  style={{ 
                    width: '16px', 
                    height: '16px',
                    animation: 'spin 1s linear infinite'
                  }} 
                />
                <span>Adding...</span>
              </>
            ) : isOutOfStock ? (
              'Out of Stock'
            ) : isAdded ? (
              <>
                <Check style={{ width: '16px', height: '16px' }} />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart style={{ width: '16px', height: '16px' }} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const Badge = ({ text, color, textColor = 'white' }) => (
  <div style={{
    position: 'absolute', 
    top: '12px', 
    right: '12px',
    background: color, 
    color: textColor,
    padding: '4px 8px', 
    borderRadius: '12px',
    fontSize: '12px', 
    fontWeight: '600',
    zIndex: 1
  }}>
    {text}
  </div>
);

export default ProductCard;