// // pages/ProductDetailsPage.jsx
// import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import AppHeader from '../components/homepagecomponent/AppHeaders'
// import LoadingSpinner from '../components/ui/LoadingSpinner'
// import Card from '../components/ui/Card'

// const ProductDetailsPage = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const [product, setProduct] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [quantity, setQuantity] = useState(1)

//   useEffect(() => {
//     fetchProduct()
//   }, [id])

//   const fetchProduct = async () => {
//     try {
//       setLoading(true)
//       setError(null)
      
//       const response = await fetch(`http://localhost:8000/api/v1/products/${id}`)
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }
      
//       const data = await response.json()
//       setProduct(data)
//     } catch (error) {
//       console.error('Error fetching product:', error)
//       setError(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleAddToCart = () => {
//     console.log('Add to cart:', { product, quantity })
    
//     // Create notification
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
//           <div style="font-size: 14px; opacity: 0.9;">${product.name} (${quantity})</div>
//         </div>
//       </div>
//     `
    
//     document.body.appendChild(notification)
    
//     // Remove notification after 3 seconds
//     setTimeout(() => {
//       if (notification.parentNode) {
//         notification.parentNode.removeChild(notification)
//       }
//     }, 3000)
//   }

//   const handleBuyNow = () => {
//     // Navigate to checkout or cart page
//     console.log('Buy now:', { product, quantity })
//     // You can navigate to checkout page
//     // navigate('/checkout', { state: { product, quantity } })
//   }

//   if (loading) {
//     return (
//       <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
//         <AppHeader />
//         <div style={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center', 
//           height: '50vh' 
//         }}>
//           <LoadingSpinner size="large" />
//         </div>
//       </div>
//     )
//   }

//   if (error || !product) {
//     return (
//       <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
//         <AppHeader />
//         <div style={{ 
//           maxWidth: '1200px', 
//           margin: '0 auto', 
//           padding: '2rem',
//           textAlign: 'center'
//         }}>
//           <Card style={{ padding: '3rem' }}>
//             <div style={{ fontSize: '64px', marginBottom: '1rem' }}>😞</div>
//             <h1 style={{ fontSize: '2rem', color: '#dc3545', marginBottom: '1rem' }}>
//               Product Not Found
//             </h1>
//             <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
//               {error || 'The product you are looking for does not exist.'}
//             </p>
//             <button
//               onClick={() => navigate('/dashboard')}
//               style={{
//                 padding: '12px 24px',
//                 backgroundColor: '#ff9900',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 fontSize: '16px',
//                 cursor: 'pointer'
//               }}
//             >
//               ← Back to Products
//             </button>
//           </Card>
//         </div>
//       </div>
//     )
//   }

//   // Mock images if not available
//   const productImages = product.images && product.images.length > 0 
//     ? product.images 
//     : [
//         `https://via.placeholder.com/500x500/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`,
//         `https://via.placeholder.com/500x500/e5e7eb/6b7280?text=View+2`,
//         `https://via.placeholder.com/500x500/d1d5db/4b5563?text=View+3`
//       ]

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
//       <AppHeader />
      
//       <div style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         padding: '2rem'
//       }}>
//         {/* Breadcrumb */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           marginBottom: '2rem',
//           fontSize: '14px',
//           color: '#6b7280'
//         }}>
//           <button
//             onClick={() => navigate('/dashboard')}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: '#3b82f6',
//               cursor: 'pointer',
//               textDecoration: 'underline'
//             }}
//           >
//             Home
//           </button>
//           <span>›</span>
//           <span>{product.category || 'Products'}</span>
//           <span>›</span>
//           <span style={{ color: '#1f2937' }}>{product.name}</span>
//         </div>

//         <Card>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
//             gap: '3rem'
//           }}>
//             {/* Product Images */}
//             <div>
//               {/* Main Image */}
//               <div style={{
//                 marginBottom: '1rem',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 overflow: 'hidden',
//                 aspectRatio: '1/1'
//               }}>
//                 <img
//                   src={productImages[selectedImage]}
//                   alt={product.name}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover'
//                   }}
//                 />
//               </div>

//               {/* Thumbnail Images */}
//               <div style={{
//                 display: 'flex',
//                 gap: '0.5rem',
//                 flexWrap: 'wrap'
//               }}>
//                 {productImages.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     style={{
//                       width: '80px',
//                       height: '80px',
//                       border: selectedImage === index ? '2px solid #ff9900' : '1px solid #e5e7eb',
//                       borderRadius: '6px',
//                       overflow: 'hidden',
//                       cursor: 'pointer',
//                       background: 'none',
//                       padding: '0'
//                     }}
//                   >
//                     <img
//                       src={image}
//                       alt={`${product.name} view ${index + 1}`}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover'
//                       }}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Product Information */}
//             <div>
//               <h1 style={{
//                 fontSize: '2rem',
//                 fontWeight: 'bold',
//                 color: '#1f2937',
//                 marginBottom: '1rem',
//                 lineHeight: '1.2'
//               }}>
//                 {product.name}
//               </h1>

//               {/* Rating (if available) */}
//               {product.rating && (
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                   marginBottom: '1rem'
//                 }}>
//                   <div style={{ color: '#fbbf24' }}>
//                     {'★'.repeat(Math.floor(product.rating))}
//                     {'☆'.repeat(5 - Math.floor(product.rating))}
//                   </div>
//                   <span style={{ color: '#6b7280' }}>
//                     ({product.rating}/5)
//                   </span>
//                 </div>
//               )}

//               {/* Price */}
//               <div style={{ marginBottom: '2rem' }}>
//                 <div style={{
//                   fontSize: '2rem',
//                   fontWeight: 'bold',
//                   color: '#dc2626'
//                 }}>
//                   ₹{product.price?.toLocaleString()}
//                 </div>
//                 {product.original_price && product.original_price > product.price && (
//                   <div style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '0.5rem',
//                     marginTop: '0.5rem'
//                   }}>
//                     <span style={{
//                       textDecoration: 'line-through',
//                       color: '#6b7280',
//                       fontSize: '1.1rem'
//                     }}>
//                       ₹{product.original_price.toLocaleString()}
//                     </span>
//                     <span style={{
//                       color: '#059669',
//                       fontWeight: '600'
//                     }}>
//                       {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% off
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {/* Stock Status */}
//               <div style={{
//                 marginBottom: '2rem',
//                 padding: '0.75rem 1rem',
//                 backgroundColor: product.stock_quantity > 0 ? '#f0fdf4' : '#fef2f2',
//                 border: `1px solid ${product.stock_quantity > 0 ? '#bbf7d0' : '#fecaca'}`,
//                 borderRadius: '6px'
//               }}>
//                 <span style={{
//                   color: product.stock_quantity > 0 ? '#059669' : '#dc2626',
//                   fontWeight: '600'
//                 }}>
//                   {product.stock_quantity > 0 
//                     ? `✅ In Stock (${product.stock_quantity} available)`
//                     : '❌ Out of Stock'
//                   }
//                 </span>
//               </div>

//               {/* Quantity Selector */}
//               {product.stock_quantity > 0 && (
//                 <div style={{ marginBottom: '2rem' }}>
//                   <label style={{
//                     display: 'block',
//                     fontWeight: '600',
//                     marginBottom: '0.5rem',
//                     color: '#1f2937'
//                   }}>
//                     Quantity:
//                   </label>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//                     <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '6px' }}>
//                       <button
//                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                         style={{
//                           padding: '0.5rem 0.75rem',
//                           background: 'none',
//                           border: 'none',
//                           cursor: 'pointer',
//                           fontSize: '18px'
//                         }}
//                       >
//                         −
//                       </button>
//                       <span style={{
//                         padding: '0.5rem 1rem',
//                         borderLeft: '1px solid #d1d5db',
//                         borderRight: '1px solid #d1d5db',
//                         fontWeight: '600'
//                       }}>
//                         {quantity}
//                       </span>
//                       <button
//                         onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
//                         style={{
//                           padding: '0.5rem 0.75rem',
//                           background: 'none',
//                           border: 'none',
//                           cursor: 'pointer',
//                           fontSize: '18px'
//                         }}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Action Buttons */}
//               <div style={{
//                 display: 'flex',
//                 gap: '1rem',
//                 marginBottom: '2rem',
//                 flexWrap: 'wrap'
//               }}>
//                 <button
//                   onClick={handleAddToCart}
//                   disabled={product.stock_quantity === 0}
//                   style={{
//                     flex: 1,
//                     minWidth: '200px',
//                     padding: '1rem 2rem',
//                     backgroundColor: product.stock_quantity > 0 ? '#ff9900' : '#9ca3af',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     cursor: product.stock_quantity > 0 ? 'pointer' : 'not-allowed',
//                     transition: 'background-color 0.2s ease'
//                   }}
//                   onMouseOver={(e) => {
//                     if (product.stock_quantity > 0) {
//                       e.target.style.backgroundColor = '#e68900'
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (product.stock_quantity > 0) {
//                       e.target.style.backgroundColor = '#ff9900'
//                     }
//                   }}
//                 >
//                   🛒 Add to Cart
//                 </button>

//                 <button
//                   onClick={handleBuyNow}
//                   disabled={product.stock_quantity === 0}
//                   style={{
//                     flex: 1,
//                     minWidth: '200px',
//                     padding: '1rem 2rem',
//                     backgroundColor: product.stock_quantity > 0 ? '#146eb4' : '#9ca3af',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     cursor: product.stock_quantity > 0 ? 'pointer' : 'not-allowed',
//                     transition: 'background-color 0.2s ease'
//                   }}
//                   onMouseOver={(e) => {
//                     if (product.stock_quantity > 0) {
//                       e.target.style.backgroundColor = '#0d5aa7'
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (product.stock_quantity > 0) {
//                       e.target.style.backgroundColor = '#146eb4'
//                     }
//                   }}
//                 >
//                   ⚡ Buy Now
//                 </button>
//               </div>

//               {/* Product Description */}
//               {product.description && (
//                 <div style={{
//                   padding: '1.5rem',
//                   backgroundColor: '#f9fafb',
//                   borderRadius: '8px',
//                   border: '1px solid #e5e7eb'
//                 }}>
//                   <h3 style={{
//                     fontSize: '1.2rem',
//                     fontWeight: '600',
//                     marginBottom: '0.75rem',
//                     color: '#1f2937'
//                   }}>
//                     Product Description
//                   </h3>
//                   <p style={{
//                     color: '#4b5563',
//                     lineHeight: '1.6',
//                     margin: 0
//                   }}>
//                     {product.description}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </Card>

//         {/* Additional Product Information */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '1.5rem',
//           marginTop: '2rem'
//         }}>
//           <Card>
//             <Card.Header>
//               <Card.Title>🚚 Delivery Information</Card.Title>
//             </Card.Header>
//             <Card.Content>
//               <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
//                 <p>• Free delivery on orders above ₹999</p>
//                 <p>• Standard delivery: 3-5 business days</p>
//                 <p>• Express delivery: 1-2 business days</p>
//                 <p>• Cash on delivery available</p>
//               </div>
//             </Card.Content>
//           </Card>

//           <Card>
//             <Card.Header>
//               <Card.Title>↩️ Return Policy</Card.Title>
//             </Card.Header>
//             <Card.Content>
//               <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
//                 <p>• 30-day return policy</p>
//                 <p>• Easy returns and exchanges</p>
//                 <p>• Full refund on defective items</p>
//                 <p>• Free return pickup</p>
//               </div>
//             </Card.Content>
//           </Card>

//           <Card>
//             <Card.Header>
//               <Card.Title>🔒 Security & Support</Card.Title>
//             </Card.Header>
//             <Card.Content>
//               <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>
//                 <p>• 100% secure payment</p>
//                 <p>• 24/7 customer support</p>
//                 <p>• Quality guarantee</p>
//                 <p>• Trusted by thousands</p>
//               </div>
//             </Card.Content>
//           </Card>
//         </div>
//       </div>

//       <style>
//         {`
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
//         `}
//       </style>
//     </div>
//   )
// }

// export default ProductDetailsPage












// // src/components/pages/ProductDetails.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from '../components/homepagecomponent/AppHeaders';
// import ProductImage from '../components/ui/ProductImage';
// // import LoadingSpinner from '../ui/LoadingSpinner';
// // import AppHeader from '../components/homepagecomponent/AppHeaders'
// import LoadingSpinner from '../components/ui/LoadingSpinner'

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
  
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [productId]);

//   const fetchProductDetails = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(`http://localhost:8000/api/v1/products/${productId}`);
      
//       if (!response.ok) {
//         if (response.status === 404) {
//           throw new Error('Product not found');
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       setProduct(data);
      
//       // Set first image as selected if images exist
//       if (data.images && data.images.length > 0) {
//         const primaryIndex = data.images.findIndex(img => img.is_primary);
//         setSelectedImageIndex(primaryIndex >= 0 ? primaryIndex : 0);
//       }

//     } catch (error) {
//       console.error('Error fetching product details:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddToCart = () => {
//     console.log('Add to cart:', { product, quantity });
    
//     // Create notification
//     const notification = document.createElement('div');
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
//       max-width: 350px;
//     `;
    
//     notification.innerHTML = `
//       <div style="display: flex; align-items: center; gap: 12px;">
//         <span style="font-size: 20px;">✅</span>
//         <div>
//           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
//           <div style="font-size: 14px; opacity: 0.9;">${product.name} (Qty: ${quantity})</div>
//         </div>
//       </div>
//     `;
    
//     document.body.appendChild(notification);
    
//     setTimeout(() => {
//       notification.style.animation = 'slideOutRight 0.3s ease-in';
//       setTimeout(() => {
//         if (notification.parentNode) {
//           notification.parentNode.removeChild(notification);
//         }
//       }, 300);
//     }, 3000);
//   };

//   const getSelectedImage = () => {
//     if (!product?.images || product.images.length === 0) {
//       return null;
//     }
//     return product.images[selectedImageIndex]?.image_url;
//   };

//   if (loading) {
//     return (
//       <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
//         <Header />
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           minHeight: '60vh'
//         }}>
//           <LoadingSpinner size="large" />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
//         <Header />
//         <div style={{
//           maxWidth: '800px',
//           margin: '0 auto',
//           padding: '40px 20px',
//           textAlign: 'center'
//         }}>
//           <div style={{ fontSize: '64px', marginBottom: '20px' }}>😞</div>
//           <h2 style={{ color: '#333', marginBottom: '12px' }}>Product Not Found</h2>
//           <p style={{ color: '#666', marginBottom: '24px' }}>{error}</p>
//           <button
//             onClick={() => navigate('/')}
//             style={{
//               padding: '12px 24px',
//               background: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '16px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }}
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!product) {
//     return null;
//   }

//   return (
//     <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
//       <Header />
      
//       {/* Breadcrumb */}
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '20px',
//         fontSize: '14px',
//         color: '#666'
//       }}>
//         <span 
//           onClick={() => navigate('/')}
//           style={{ cursor: 'pointer', color: '#007bff' }}
//         >
//           Home
//         </span>
//         {product.category && (
//           <>
//             <span style={{ margin: '0 8px' }}>›</span>
//             <span style={{ color: '#007bff' }}>{product.category.name}</span>
//           </>
//         )}
//         <span style={{ margin: '0 8px' }}>›</span>
//         <span>{product.name}</span>
//       </div>

//       {/* Main Product Content */}
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 20px 40px',
//         display: 'grid',
//         gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
//         gap: '40px'
//       }}>
        
//         {/* Image Gallery */}
//         <div>
//           {/* Main Image */}
//           <div style={{
//             background: 'white',
//             borderRadius: '16px',
//             padding: '20px',
//             marginBottom: '20px',
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
//           }}>
//             <div style={{ height: '400px', position: 'relative' }}>
//               <ProductImage
//                 src={getSelectedImage()}
//                 alt={product.name}
//                 style={{ height: '100%', borderRadius: '12px' }}
//               />
              
//               {/* Zoom indicator */}
//               <div style={{
//                 position: 'absolute',
//                 bottom: '12px',
//                 right: '12px',
//                 background: 'rgba(0, 0, 0, 0.7)',
//                 color: 'white',
//                 padding: '6px 10px',
//                 borderRadius: '16px',
//                 fontSize: '12px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px'
//               }}>
//                 🔍 Click to zoom
//               </div>
//             </div>
//           </div>

//           {/* Thumbnail Gallery */}
//           {product.images && product.images.length > 1 && (
//             <div style={{
//               display: 'flex',
//               gap: '12px',
//               overflowX: 'auto',
//               padding: '8px'
//             }}>
//               {product.images.map((image, index) => (
//                 <div
//                   key={image.image_id}
//                   onClick={() => setSelectedImageIndex(index)}
//                   style={{
//                     minWidth: '80px',
//                     height: '80px',
//                     borderRadius: '8px',
//                     overflow: 'hidden',
//                     cursor: 'pointer',
//                     border: selectedImageIndex === index ? '3px solid #007bff' : '2px solid #e0e0e0',
//                     transition: 'all 0.2s ease'
//                   }}
//                 >
//                   <ProductImage
//                     src={image.image_url}
//                     alt={`${product.name} - Image ${index + 1}`}
//                     style={{ height: '100%' }}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Image Count */}
//           {product.images && product.images.length > 0 && (
//             <div style={{
//               textAlign: 'center',
//               marginTop: '12px',
//               fontSize: '14px',
//               color: '#666'
//             }}>
//               {selectedImageIndex + 1} of {product.images.length} images
//             </div>
//           )}
//         </div>

//         {/* Product Information */}
//         <div>
//           <div style={{
//             background: 'white',
//             borderRadius: '16px',
//             padding: '32px',
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
//           }}>
            
//             {/* Product Title */}
//             <h1 style={{
//               fontSize: '32px',
//               fontWeight: '700',
//               color: '#333',
//               margin: '0 0 16px 0',
//               lineHeight: '1.3'
//             }}>
//               {product.name}
//             </h1>

//             {/* Category Badge */}
//             {product.category && (
//               <div style={{
//                 display: 'inline-block',
//                 background: '#e3f2fd',
//                 color: '#1976d2',
//                 padding: '6px 12px',
//                 borderRadius: '16px',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 marginBottom: '20px'
//               }}>
//                 {product.category.name}
//               </div>
//             )}

//             {/* Price */}
//             <div style={{
//               fontSize: '36px',
//               fontWeight: '700',
//               color: '#e74c3c',
//               marginBottom: '20px'
//             }}>
//               ₹{parseFloat(product.price).toLocaleString('en-IN', {
//                 minimumFractionDigits: 2,
//                 maximumFractionDigits: 2
//               })}
//             </div>

//             {/* Stock Status */}
//             <div style={{ marginBottom: '24px' }}>
//               {product.stock_quantity > 0 ? (
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   color: '#28a745',
//                   fontSize: '16px',
//                   fontWeight: '500'
//                 }}>
//                   <span style={{ fontSize: '20px' }}>✅</span>
//                   In Stock ({product.stock_quantity} available)
//                 </div>
//               ) : (
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   color: '#dc3545',
//                   fontSize: '16px',
//                   fontWeight: '500'
//                 }}>
//                   <span style={{ fontSize: '20px' }}>❌</span>
//                   Out of Stock
//                 </div>
//               )}
//             </div>

//             {/* Storage Capacity */}
//             {product.storage_capacity && (
//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 marginBottom: '20px',
//                 border: '1px solid #e9ecef'
//               }}>
//                 <span style={{ fontWeight: '600', color: '#333' }}>Storage: </span>
//                 <span style={{ color: '#666' }}>{product.storage_capacity}</span>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             {product.stock_quantity > 0 && (
//               <div style={{ marginBottom: '24px' }}>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   color: '#333',
//                   marginBottom: '8px'
//                 }}>
//                   Quantity:
//                 </label>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       border: '2px solid #007bff',
//                       background: 'white',
//                       color: '#007bff',
//                       borderRadius: '8px',
//                       fontSize: '18px',
//                       fontWeight: 'bold',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}
//                   >
//                     -
//                   </button>
//                   <span style={{
//                     padding: '8px 16px',
//                     border: '2px solid #e0e0e0',
//                     borderRadius: '8px',
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     minWidth: '60px',
//                     textAlign: 'center'
//                   }}>
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       border: '2px solid #007bff',
//                       background: 'white',
//                       color: '#007bff',
//                       borderRadius: '8px',
//                       fontSize: '18px',
//                       fontWeight: 'bold',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div style={{
//               display: 'flex',
//               gap: '12px',
//               marginBottom: '32px'
//             }}>
//               <button
//                 onClick={handleAddToCart}
//                 disabled={product.stock_quantity <= 0}
//                 style={{
//                   flex: 1,
//                   padding: '16px 24px',
//                   background: product.stock_quantity <= 0 ? '#ccc' : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '12px',
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   cursor: product.stock_quantity <= 0 ? 'not-allowed' : 'pointer',
//                   transition: 'all 0.3s ease',
//                   boxShadow: product.stock_quantity > 0 ? '0 4px 15px rgba(40, 167, 69, 0.4)' : 'none'
//                 }}
//                 onMouseEnter={(e) => {
//                   if (product.stock_quantity > 0) {
//                     e.target.style.transform = 'translateY(-2px)';
//                     e.target.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.6)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (product.stock_quantity > 0) {
//                     e.target.style.transform = 'translateY(0)';
//                     e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.4)';
//                   }
//                 }}
//               >
//                 {product.stock_quantity <= 0 ? 'Out of Stock' : `Add ${quantity} to Cart`}
//               </button>

//               <button
//                 style={{
//                   padding: '16px 24px',
//                   background: 'transparent',
//                   border: '2px solid #007bff',
//                   color: '#007bff',
//                   borderRadius: '12px',
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = '#007bff';
//                   e.target.style.color = 'white';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'transparent';
//                   e.target.style.color = '#007bff';
//                 }}
//               >
//                 ❤️ Wishlist
//               </button>
//             </div>

//             {/* Product Details */}
//             <div style={{
//               border: '1px solid #e0e0e0',
//               borderRadius: '12px',
//               overflow: 'hidden'
//             }}>
//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '16px',
//                 borderBottom: '1px solid #e0e0e0'
//               }}>
//                 <h3 style={{
//                   margin: '0',
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   color: '#333'
//                 }}>
//                   Product Details
//                 </h3>
//               </div>
//               <div style={{ padding: '20px' }}>
//                 {product.description && (
//                   <div style={{ marginBottom: '16px' }}>
//                     <h4 style={{
//                       fontSize: '16px',
//                       fontWeight: '600',
//                       color: '#333',
//                       marginBottom: '8px'
//                     }}>
//                       Description
//                     </h4>
//                     <p style={{
//                       fontSize: '15px',
//                       lineHeight: '1.6',
//                       color: '#555',
//                       margin: '0',
//                       maxHeight: showFullDescription ? 'none' : '100px',
//                       overflow: 'hidden'
//                     }}>
//                       {product.description}
//                     </p>
//                     {product.description.length > 200 && (
//                       <button
//                         onClick={() => setShowFullDescription(!showFullDescription)}
//                         style={{
//                           background: 'none',
//                           border: 'none',
//                           color: '#007bff',
//                           fontSize: '14px',
//                           fontWeight: '500',
//                           cursor: 'pointer',
//                           marginTop: '8px',
//                           padding: '0'
//                         }}
//                       >
//                         {showFullDescription ? 'Show less' : 'Show more'}
//                       </button>
//                     )}
//                   </div>
//                 )}

//                 {/* Specifications */}
//                 <div>
//                   <h4 style={{
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     color: '#333',
//                     marginBottom: '12px'
//                   }}>
//                     Specifications
//                   </h4>
//                   <div style={{ display: 'grid', gap: '8px' }}>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       padding: '8px 0',
//                       borderBottom: '1px solid #f0f0f0'
//                     }}>
//                       <span style={{ color: '#666' }}>Product ID</span>
//                       <span style={{ fontWeight: '500' }}>{product.product_id}</span>
//                     </div>
//                     {product.storage_capacity && (
//                       <div style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         padding: '8px 0',
//                         borderBottom: '1px solid #f0f0f0'
//                       }}>
//                         <span style={{ color: '#666' }}>Storage</span>
//                         <span style={{ fontWeight: '500' }}>{product.storage_capacity}</span>
//                       </div>
//                     )}
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       padding: '8px 0',
//                       borderBottom: '1px solid #f0f0f0'
//                     }}>
//                       <span style={{ color: '#666' }}>Stock</span>
//                       <span style={{ fontWeight: '500' }}>{product.stock_quantity} units</span>
//                     </div>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       padding: '8px 0'
//                     }}>
//                       <span style={{ color: '#666' }}>Seller</span>
//                       <span style={{ fontWeight: '500' }}>{product.created_by}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div style={{
//         background: 'white',
//         padding: '40px 20px',
//         marginTop: '40px'
//       }}>
//         <div style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//           gap: '24px'
//         }}>
//           {[
//             { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
//             { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
//             { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
//             { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
//           ].map((feature, index) => (
//             <div key={index} style={{
//               textAlign: 'center',
//               padding: '24px'
//             }}>
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
//       </div>

//       <style jsx>{`
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(100px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slideOutRight {
//           from {
//             opacity: 1;
//             transform: translateX(0);
//           }
//           to {
//             opacity: 0;
//             transform: translateX(100px);
//           }
//         }

//         @media (max-width: 768px) {
//           .product-content {
//             grid-template-columns: 1fr !important;
//             gap: 20px !important;
//           }
          
//           .thumbnail-gallery {
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductDetails;





// src/components/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/homepagecomponent/AppHeaders';
import ProductImage from '../components/ui/ProductImage';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

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
      console.log('Product data received:', data); // Debug log
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

  const handleAddToCart = () => {
    const totalPrice = calculateTotalPrice();
    console.log('Add to cart:', { 
      product, 
      quantity, 
      unitPrice: product.price,
      totalPrice: totalPrice
    });
    
    // Create notification
    const notification = document.createElement('div');
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
      max-width: 350px;
    `;
    
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 20px;">✅</span>
        <div>
          <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
          <div style="font-size: 14px; opacity: 0.9;">${product.name}</div>
          <div style="font-size: 12px; opacity: 0.8;">Qty: ${quantity} | Total: ₹${totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-in';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  // Calculate total price based on quantity
  const calculateTotalPrice = () => {
    if (!product) return 0;
    return parseFloat(product.price) * quantity;
  };

  // Get selected image with better fallback handling
  const getSelectedImage = () => {
    console.log('Getting selected image, index:', selectedImageIndex); // Debug log
    console.log('Available images:', product?.images); // Debug log
    
    if (!product?.images || product.images.length === 0) {
      console.log('No images available');
      return null;
    }
    
    const selectedImage = product.images[selectedImageIndex];
    console.log('Selected image:', selectedImage); // Debug log
    
    return selectedImage?.image_url || null;
  };

  // Enhanced ProductImage component with better error handling
  const EnhancedProductImage = ({ src, alt, style = {}, onError, className = "" }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      setImageSrc(src);
      setIsLoading(true);
      setHasError(false);
    }, [src]);

    const handleImageLoad = () => {
      console.log('Image loaded successfully:', imageSrc);
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
      <div style={{ position: 'relative', ...style }} className={className}>
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
            borderRadius: '8px',
            zIndex: 1
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
        
        {src && (
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
        )}
        
        {(hasError || !src) && !isLoading && (
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
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <Header />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh'
        }}>
          <LoadingSpinner size="large" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <Header />
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

  const totalPrice = calculateTotalPrice();

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
            <div style={{ height: '400px', position: 'relative' }}>
              <EnhancedProductImage
                src={getSelectedImage()}
                alt={product.name}
                style={{ height: '100%', borderRadius: '12px' }}
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
                  key={image.image_id || index}
                  onClick={() => {
                    console.log('Thumbnail clicked, setting index to:', index);
                    setSelectedImageIndex(index);
                  }}
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
                  <EnhancedProductImage
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

            {/* Price Section */}
            <div style={{ marginBottom: '20px' }}>
              {/* Unit Price */}
              <div style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#666',
                marginBottom: '8px'
              }}>
                Unit Price: ₹{parseFloat(product.price).toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </div>

              {/* Total Price */}
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#e74c3c',
                marginBottom: '8px'
              }}>
                Total: ₹{totalPrice.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </div>

              {/* Savings indicator */}
              {quantity > 1 && (
                <div style={{
                  fontSize: '14px',
                  color: '#28a745',
                  fontWeight: '500'
                }}>
                  💰 {quantity} items × ₹{parseFloat(product.price).toLocaleString('en-IN', { minimumFractionDigits: 2 })} each
                </div>
              )}
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
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #007bff',
                      background: 'white',
                      color: '#007bff',
                      borderRadius: '8px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
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
                    disabled={quantity >= product.stock_quantity}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #007bff',
                      background: 'white',
                      color: quantity >= product.stock_quantity ? '#ccc' : '#007bff',
                      borderColor: quantity >= product.stock_quantity ? '#ccc' : '#007bff',
                      borderRadius: '8px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: quantity >= product.stock_quantity ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    +
                  </button>
                </div>
                {quantity >= product.stock_quantity && (
                  <div style={{
                    fontSize: '12px',
                    color: '#dc3545',
                    marginTop: '4px'
                  }}>
                    Maximum available quantity selected
                  </div>
                )}
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
                disabled={product.stock_quantity <= 0}
                style={{
                  flex: 1,
                  padding: '16px 24px',
                  background: product.stock_quantity <= 0 ? '#ccc' : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: product.stock_quantity <= 0 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: product.stock_quantity > 0 ? '0 4px 15px rgba(40, 167, 69, 0.4)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (product.stock_quantity > 0) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (product.stock_quantity > 0) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.4)';
                  }
                }}
              >
                {product.stock_quantity <= 0 ? 'Out of Stock' : `Add ${quantity} to Cart - ₹${totalPrice.toLocaleString('en-IN')}`}
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
                onMouseEnter={(e) => {
                  e.target.style.background = '#007bff';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#007bff';
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

                {/* Specifications */}
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    Specifications
                  </h4>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <span style={{ color: '#666' }}>Product ID</span>
                      <span style={{ fontWeight: '500' }}>{product.product_id}</span>
                    </div>
                    {product.storage_capacity && (
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '8px 0',
                        borderBottom: '1px solid #f0f0f0'
                      }}>
                        <span style={{ color: '#666' }}>Storage</span>
                        <span style={{ fontWeight: '500' }}>{product.storage_capacity}</span>
                      </div>
                    )}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <span style={{ color: '#666' }}>Stock</span>
                      <span style={{ fontWeight: '500' }}>{product.stock_quantity} units</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0'
                    }}>
                      <span style={{ color: '#666' }}>Seller</span>
                      <span style={{ fontWeight: '500' }}>{product.created_by}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        background: 'white',
        padding: '40px 20px',
        marginTop: '40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {[
            { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999' },
            { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
            { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
            { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
          ].map((feature, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '24px'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                margin: '0 0 8px 0'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#666',
                margin: '0'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
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
          
          .thumbnail-gallery {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;


























































// // src/pages/ProductDetailsPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const ProductDetailsPage = () => {
//   const { productId } = useParams(); // This matches :productId in the route
//   const navigate = useNavigate();
  
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [productId]);

//   const fetchProductDetails = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(`http://localhost:8000/api/v1/products/${productId}`);
      
//       if (!response.ok) {
//         if (response.status === 404) {
//           throw new Error('Product not found');
//         }
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       setProduct(data);
      
//       // Set first image as selected if images exist
//       if (data.images && data.images.length > 0) {
//         const primaryIndex = data.images.findIndex(img => img.is_primary);
//         setSelectedImageIndex(primaryIndex >= 0 ? primaryIndex : 0);
//       }

//     } catch (error) {
//       console.error('Error fetching product details:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddToCart = () => {
//     console.log('Add to cart:', { product, quantity });
    
//     // Create notification
//     const notification = document.createElement('div');
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
//       max-width: 350px;
//     `;
    
//     notification.innerHTML = `
//       <div style="display: flex; align-items: center; gap: 12px;">
//         <span style="font-size: 20px;">✅</span>
//         <div>
//           <div style="font-weight: 600; margin-bottom: 4px;">Added to Cart!</div>
//           <div style="font-size: 14px; opacity: 0.9;">${product.name} (Qty: ${quantity})</div>
//         </div>
//       </div>
//     `;
    
//     document.body.appendChild(notification);
    
//     setTimeout(() => {
//       notification.style.animation = 'slideOutRight 0.3s ease-in';
//       setTimeout(() => {
//         if (notification.parentNode) {
//           notification.parentNode.removeChild(notification);
//         }
//       }, 300);
//     }, 3000);
//   };

//   const getSelectedImage = () => {
//     if (!product?.images || product.images.length === 0) {
//       return null;
//     }
//     return product.images[selectedImageIndex]?.image_url;
//   };

//   const ProductImage = ({ src, alt, style = {}, onError }) => {
//     const [imageSrc, setImageSrc] = useState(src);
//     const [isLoading, setIsLoading] = useState(true);
//     const [hasError, setHasError] = useState(false);

//     const handleImageLoad = () => {
//       setIsLoading(false);
//       setHasError(false);
//     };

//     const handleImageError = () => {
//       console.error(`Failed to load image: ${imageSrc}`);
//       setIsLoading(false);
//       setHasError(true);
      
//       if (onError) {
//         onError();
//       }
//     };

//     return (
//       <div style={{ position: 'relative', ...style }}>
//         {isLoading && (
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: '#f8f9fa',
//             borderRadius: '8px'
//           }}>
//             <div style={{
//               width: '40px',
//               height: '40px',
//               border: '4px solid #e3e3e3',
//               borderTop: '4px solid #007bff',
//               borderRadius: '50%',
//               animation: 'spin 1s linear infinite'
//             }} />
//           </div>
//         )}
        
//         <img
//           src={imageSrc}
//           alt={alt}
//           onLoad={handleImageLoad}
//           onError={handleImageError}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             display: isLoading ? 'none' : 'block',
//             borderRadius: '8px'
//           }}
//         />
        
//         {hasError && (
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: '#f8f9fa',
//             color: '#6c757d',
//             borderRadius: '8px',
//             padding: '20px',
//             textAlign: 'center'
//           }}>
//             <span style={{ fontSize: '24px', marginBottom: '8px' }}>📷</span>
//             <span style={{ fontSize: '12px' }}>Image not available</span>
//           </div>
//         )}
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <div style={{ 
//         minHeight: '100vh', 
//         background: '#f8f9fa',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}>
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '16px'
//         }}>
//           <div style={{
//             width: '60px',
//             height: '60px',
//             border: '4px solid #e3e3e3',
//             borderTop: '4px solid #007bff',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite'
//           }} />
//           <p style={{ color: '#666', fontSize: '16px' }}>Loading product details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
//         <div style={{
//           maxWidth: '800px',
//           margin: '0 auto',
//           padding: '40px 20px',
//           textAlign: 'center'
//         }}>
//           <div style={{ fontSize: '64px', marginBottom: '20px' }}>😞</div>
//           <h2 style={{ color: '#333', marginBottom: '12px' }}>Product Not Found</h2>
//           <p style={{ color: '#666', marginBottom: '24px' }}>{error}</p>
//           <button
//             onClick={() => navigate('/dashboard')}
//             style={{
//               padding: '12px 24px',
//               background: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '16px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }}
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!product) {
//     return null;
//   }

//   return (
//     <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      
//       {/* Breadcrumb */}
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '20px',
//         fontSize: '14px',
//         color: '#666'
//       }}>
//         <span 
//           onClick={() => navigate('/dashboard')}
//           style={{ cursor: 'pointer', color: '#007bff' }}
//         >
//           Dashboard
//         </span>
//         {product.category && (
//           <>
//             <span style={{ margin: '0 8px' }}>›</span>
//             <span style={{ color: '#007bff' }}>{product.category.name}</span>
//           </>
//         )}
//         <span style={{ margin: '0 8px' }}>›</span>
//         <span>{product.name}</span>
//       </div>

//       {/* Main Product Content */}
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 20px 40px',
//         display: 'grid',
//         gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
//         gap: '40px'
//       }}>
        
//         {/* Image Gallery */}
//         <div>
//           {/* Main Image */}
//           <div style={{
//             background: 'white',
//             borderRadius: '16px',
//             padding: '20px',
//             marginBottom: '20px',
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
//           }}>
//             <div style={{ height: '400px', position: 'relative' }}>
//               <ProductImage
//                 src={getSelectedImage()}
//                 alt={product.name}
//                 style={{ height: '100%', borderRadius: '12px' }}
//               />
              
//               {/* Zoom indicator */}
//               <div style={{
//                 position: 'absolute',
//                 bottom: '12px',
//                 right: '12px',
//                 background: 'rgba(0, 0, 0, 0.7)',
//                 color: 'white',
//                 padding: '6px 10px',
//                 borderRadius: '16px',
//                 fontSize: '12px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px'
//               }}>
//                 🔍 Click to zoom
//               </div>
//             </div>
//           </div>

//           {/* Thumbnail Gallery */}
//           {product.images && product.images.length > 1 && (
//             <div style={{
//               display: 'flex',
//               gap: '12px',
//               overflowX: 'auto',
//               padding: '8px'
//             }}>
//               {product.images.map((image, index) => (
//                 <div
//                   key={image.image_id}
//                   onClick={() => setSelectedImageIndex(index)}
//                   style={{
//                     minWidth: '80px',
//                     height: '80px',
//                     borderRadius: '8px',
//                     overflow: 'hidden',
//                     cursor: 'pointer',
//                     border: selectedImageIndex === index ? '3px solid #007bff' : '2px solid #e0e0e0',
//                     transition: 'all 0.2s ease'
//                   }}
//                 >
//                   <ProductImage
//                     src={image.image_url}
//                     alt={`${product.name} - Image ${index + 1}`}
//                     style={{ height: '100%' }}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Image Count */}
//           {product.images && product.images.length > 0 && (
//             <div style={{
//               textAlign: 'center',
//               marginTop: '12px',
//               fontSize: '14px',
//               color: '#666'
//             }}>
//               {selectedImageIndex + 1} of {product.images.length} images
//             </div>
//           )}
//         </div>

//         {/* Product Information */}
//         <div>
//           <div style={{
//             background: 'white',
//             borderRadius: '16px',
//             padding: '32px',
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
//           }}>
            
//             {/* Product Title */}
//             <h1 style={{
//               fontSize: '32px',
//               fontWeight: '700',
//               color: '#333',
//               margin: '0 0 16px 0',
//               lineHeight: '1.3'
//             }}>
//               {product.name}
//             </h1>

//             {/* Category Badge */}
//             {product.category && (
//               <div style={{
//                 display: 'inline-block',
//                 background: '#e3f2fd',
//                 color: '#1976d2',
//                 padding: '6px 12px',
//                 borderRadius: '16px',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 marginBottom: '20px'
//               }}>
//                 {product.category.name}
//               </div>
//             )}

//             {/* Price */}
//             <div style={{
//               fontSize: '36px',
//               fontWeight: '700',
//               color: '#e74c3c',
//               marginBottom: '20px'
//             }}>
//               ₹{parseFloat(product.price).toLocaleString('en-IN', {
//                 minimumFractionDigits: 2,
//                 maximumFractionDigits: 2
//               })}
//             </div>

//             {/* Stock Status */}
//             <div style={{ marginBottom: '24px' }}>
//               {product.stock_quantity > 0 ? (
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   color: '#28a745',
//                   fontSize: '16px',
//                   fontWeight: '500'
//                 }}>
//                   <span style={{ fontSize: '20px' }}>✅</span>
//                   In Stock ({product.stock_quantity} available)
//                 </div>
//               ) : (
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   color: '#dc3545',
//                   fontSize: '16px',
//                   fontWeight: '500'
//                 }}>
//                   <span style={{ fontSize: '20px' }}>❌</span>
//                   Out of Stock
//                 </div>
//               )}
//             </div>

//             {/* Storage Capacity */}
//             {product.storage_capacity && (
//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 marginBottom: '20px',
//                 border: '1px solid #e9ecef'
//               }}>
//                 <span style={{ fontWeight: '600', color: '#333' }}>Storage: </span>
//                 <span style={{ color: '#666' }}>{product.storage_capacity}</span>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             {product.stock_quantity > 0 && (
//               <div style={{ marginBottom: '24px' }}>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   color: '#333',
//                   marginBottom: '8px'
//                 }}>
//                   Quantity:
//                 </label>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       border: '2px solid #007bff',
//                       background: 'white',
//                       color: '#007bff',
//                       borderRadius: '8px',
//                       fontSize: '18px',
//                       fontWeight: 'bold',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}
//                   >
//                     -
//                   </button>
//                   <span style={{
//                     padding: '8px 16px',
//                     border: '2px solid #e0e0e0',
//                     borderRadius: '8px',
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     minWidth: '60px',
//                     textAlign: 'center'
//                   }}>
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       border: '2px solid #007bff',
//                       background: 'white',
//                       color: '#007bff',
//                       borderRadius: '8px',
//                       fontSize: '18px',
//                       fontWeight: 'bold',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div style={{
//               display: 'flex',
//               gap: '12px',
//               marginBottom: '32px'
//             }}>
//               <button
//                 onClick={handleAddToCart}
//                 disabled={product.stock_quantity <= 0}
//                 style={{
//                   flex: 1,
//                   padding: '16px 24px',
//                   background: product.stock_quantity <= 0 ? '#ccc' : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '12px',
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   cursor: product.stock_quantity <= 0 ? 'not-allowed' : 'pointer',
//                   transition: 'all 0.3s ease',
//                   boxShadow: product.stock_quantity > 0 ? '0 4px 15px rgba(40, 167, 69, 0.4)' : 'none'
//                 }}
//               >
//                 {product.stock_quantity <= 0 ? 'Out of Stock' : `Add ${quantity} to Cart`}
//               </button>

//               <button
//                 style={{
//                   padding: '16px 24px',
//                   background: 'transparent',
//                   border: '2px solid #007bff',
//                   color: '#007bff',
//                   borderRadius: '12px',
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 ❤️ Wishlist
//               </button>
//             </div>

//             {/* Product Details */}
//             <div style={{
//               border: '1px solid #e0e0e0',
//               borderRadius: '12px',
//               overflow: 'hidden'
//             }}>
//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '16px',
//                 borderBottom: '1px solid #e0e0e0'
//               }}>
//                 <h3 style={{
//                   margin: '0',
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   color: '#333'
//                 }}>
//                   Product Details
//                 </h3>
//               </div>
//               <div style={{ padding: '20px' }}>
//                 {product.description && (
//                   <div style={{ marginBottom: '16px' }}>
//                     <h4 style={{
//                       fontSize: '16px',
//                       fontWeight: '600',
//                       color: '#333',
//                       marginBottom: '8px'
//                     }}>
//                       Description
//                     </h4>
//                     <p style={{
//                       fontSize: '15px',
//                       lineHeight: '1.6',
//                       color: '#555',
//                       margin: '0',
//                       maxHeight: showFullDescription ? 'none' : '100px',
//                       overflow: 'hidden'
//                     }}>
//                       {product.description}
//                     </p>
//                     {product.description.length > 200 && (
//                       <button
//                         onClick={() => setShowFullDescription(!showFullDescription)}
//                         style={{
//                           background: 'none',
//                           border: 'none',
//                           color: '#007bff',
//                           fontSize: '14px',
//                           fontWeight: '500',
//                           cursor: 'pointer',
//                           marginTop: '8px',
//                           padding: '0'
//                         }}
//                       >
//                         {showFullDescription ? 'Show less' : 'Show more'}
//                       </button>
//                     )}
//                   </div>
//                 )}

//                 {/* Specifications */}
//                 <div>
//                   <h4 style={{
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     color: '#333',
//                     marginBottom: '12px'
//                   }}>
//                     Specifications
//                   </h4>
//                   <div style={{ display: 'grid', gap: '8px' }}>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       padding: '8px 0',
//                       borderBottom: '1px solid #f0f0f0'
//                     }}>
//                       <span style={{ color: '#666' }}>Product ID</span>
//                       <span style={{ fontWeight: '500' }}>{product.product_id}</span>
//                     </div>
//                     {product.storage_capacity && (
//                       <div style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         padding: '8px 0',
//                         borderBottom: '1px solid #f0f0f0'
//                       }}>
//                         <span style={{ color: '#666' }}>Storage</span>
//                         <span style={{ fontWeight: '500' }}>{product.storage_capacity}</span>
//                       </div>
//                     )}
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       padding: '8px 0',
//                       borderBottom: '1px solid #f0f0f0'
//                     }}>
//                       <span style={{ color: '#666' }}>Stock</span>
//                       <span style={{ fontWeight: '500' }}>{product.stock_quantity} units</span>
//                     </div>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       padding: '8px 0'
//                     }}>
//                       <span style={{ color: '#666' }}>Seller</span>
//                       <span style={{ fontWeight: '500' }}>{product.created_by}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
        
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(100px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slideOutRight {
//           from {
//             opacity: 1;
//             transform: translateX(0);
//           }
//           to {
//             opacity: 0;
//             transform: translateX(100px);
//           }
//         }

//         @media (max-width: 768px) {
//           .product-content {
//             grid-template-columns: 1fr !important;
//             gap: 20px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductDetailsPage;