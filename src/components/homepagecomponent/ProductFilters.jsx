// import React, { useState, useEffect } from 'react'

// const ProductFilters = ({ onFiltersChange, filters }) => {
//   const [categories, setCategories] = useState([])
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
//   const [localFilters, setLocalFilters] = useState({
//     category_id: '',
//     min_price: '',
//     max_price: '',
//     sort_by: 'name',
//     sort_order: 'asc',
//     ...filters
//   })
//   const [isExpanded, setIsExpanded] = useState(false)

//   // Fetch categories and price range on component mount
//   useEffect(() => {
//     fetchCategories()
//     fetchPriceRange()
//   }, [])

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/api/categories')
//       if (response.ok) {
//         const data = await response.json()
//         setCategories(data)
//       }
//     } catch (error) {
//       console.error('Error fetching categories:', error)
//     }
//   }

//   const fetchPriceRange = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/api/price-range')
//       if (response.ok) {
//         const data = await response.json()
//         setPriceRange({
//           min: Math.floor(data.min_price),
//           max: Math.ceil(data.max_price)
//         })
//       }
//     } catch (error) {
//       console.error('Error fetching price range:', error)
//     }
//   }

//   const handleFilterChange = (key, value) => {
//     const newFilters = { ...localFilters, [key]: value }
//     setLocalFilters(newFilters)
//     onFiltersChange(newFilters)
//   }

//   const clearFilters = () => {
//     const clearedFilters = {
//       category_id: '',
//       min_price: '',
//       max_price: '',
//       sort_by: 'name',
//       sort_order: 'asc'
//     }
//     setLocalFilters(clearedFilters)
//     onFiltersChange(clearedFilters)
//   }

//   const activeFiltersCount = Object.values(localFilters).filter(value => 
//     value !== '' && value !== 'name' && value !== 'asc'
//   ).length

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '12px',
//       boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//       overflow: 'hidden',
//       border: '1px solid #e0e0e0'
//     }}>
//       {/* Filter Header */}
//       <div style={{
//         padding: '16px 20px',
//         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//         borderBottom: '1px solid #e0e0e0',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         cursor: 'pointer'
//       }}
//       onClick={() => setIsExpanded(!isExpanded)}
//       >
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px'
//         }}>
//           <span style={{ fontSize: '20px' }}>🎛️</span>
//           <h3 style={{
//             margin: '0',
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#333'
//           }}>
//             Filters
//           </h3>
//           {activeFiltersCount > 0 && (
//             <span style={{
//               background: '#007bff',
//               color: 'white',
//               borderRadius: '12px',
//               padding: '4px 8px',
//               fontSize: '12px',
//               fontWeight: '500'
//             }}>
//               {activeFiltersCount}
//             </span>
//           )}
//         </div>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px'
//         }}>
//           {activeFiltersCount > 0 && (
//             <button
//               onClick={(e) => {
//                 e.stopPropagation()
//                 clearFilters()
//               }}
//               style={{
//                 padding: '4px 12px',
//                 background: '#dc3545',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 fontSize: '12px',
//                 cursor: 'pointer'
//               }}
//             >
//               Clear All
//             </button>
//           )}
//           <span style={{
//             fontSize: '16px',
//             transition: 'transform 0.2s ease',
//             transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
//           }}>
//             ▼
//           </span>
//         </div>
//       </div>

//       {/* Filter Content */}
//       <div style={{
//         maxHeight: isExpanded ? '800px' : '0',
//         overflow: 'hidden',
//         transition: 'max-height 0.3s ease'
//       }}>
//         <div style={{ padding: '20px' }}>
//           {/* Category Filter */}
//           <div style={{ marginBottom: '24px' }}>
//             <label style={{
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#333',
//               marginBottom: '8px'
//             }}>
//               📂 Category
//             </label>
//             <select
//               value={localFilters.category_id}
//               onChange={(e) => handleFilterChange('category_id', e.target.value)}
//               style={{
//                 width: '100%',
//                 padding: '10px 12px',
//                 border: '2px solid #e0e0e0',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 background: 'white',
//                 cursor: 'pointer',
//                 outline: 'none'
//               }}
//               onFocus={(e) => {
//                 e.target.style.borderColor = '#007bff'
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = '#e0e0e0'
//               }}
//             >
//               <option value="">All Categories</option>
//               {categories.map(category => (
//                 <option key={category.category_id} value={category.category_id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Price Range Filter */}
//           <div style={{ marginBottom: '24px' }}>
//             <label style={{
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#333',
//               marginBottom: '8px'
//             }}>
//               💰 Price Range
//             </label>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '12px',
//               marginBottom: '12px'
//             }}>
//               <div>
//                 <label style={{
//                   fontSize: '12px',
//                   color: '#666',
//                   marginBottom: '4px',
//                   display: 'block'
//                 }}>
//                   Min Price
//                 </label>
//                 <input
//                   type="number"
//                   placeholder={`₹${priceRange.min}`}
//                   value={localFilters.min_price}
//                   onChange={(e) => handleFilterChange('min_price', e.target.value)}
//                   style={{
//                     width: '100%',
//                     padding: '8px 10px',
//                     border: '2px solid #e0e0e0',
//                     borderRadius: '6px',
//                     fontSize: '14px',
//                     outline: 'none'
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#007bff'
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#e0e0e0'
//                   }}
//                 />
//               </div>
//               <div>
//                 <label style={{
//                   fontSize: '12px',
//                   color: '#666',
//                   marginBottom: '4px',
//                   display: 'block'
//                 }}>
//                   Max Price
//                 </label>
//                 <input
//                   type="number"
//                   placeholder={`₹${priceRange.max}`}
//                   value={localFilters.max_price}
//                   onChange={(e) => handleFilterChange('max_price', e.target.value)}
//                   style={{
//                     width: '100%',
//                     padding: '8px 10px',
//                     border: '2px solid #e0e0e0',
//                     borderRadius: '6px',
//                     fontSize: '14px',
//                     outline: 'none'
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = '#007bff'
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = '#e0e0e0'
//                   }}
//                 />
//               </div>
//             </div>
//             <div style={{
//               fontSize: '12px',
//               color: '#666',
//               textAlign: 'center'
//             }}>
//               Range: ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
//             </div>
//           </div>

//           {/* Sort Options */}
//           <div style={{ marginBottom: '20px' }}>
//             <label style={{
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#333',
//               marginBottom: '8px'
//             }}>
//               🔄 Sort By
//             </label>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '2fr 1fr',
//               gap: '12px'
//             }}>
//               <select
//                 value={localFilters.sort_by}
//                 onChange={(e) => handleFilterChange('sort_by', e.target.value)}
//                 style={{
//                   padding: '10px 12px',
//                   border: '2px solid #e0e0e0',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   background: 'white',
//                   cursor: 'pointer',
//                   outline: 'none'
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.borderColor = '#007bff'
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.borderColor = '#e0e0e0'
//                 }}
//               >
//                 <option value="name">Name</option>
//                 <option value="price">Price</option>
//                 <option value="stock_quantity">Stock</option>
//               </select>
//               <select
//                 value={localFilters.sort_order}
//                 onChange={(e) => handleFilterChange('sort_order', e.target.value)}
//                 style={{
//                   padding: '10px 12px',
//                   border: '2px solid #e0e0e0',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   background: 'white',
//                   cursor: 'pointer',
//                   outline: 'none'
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.borderColor = '#007bff'
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.borderColor = '#e0e0e0'
//                 }}
//               >
//                 <option value="asc">↑ Asc</option>
//                 <option value="desc">↓ Desc</option>
//               </select>
//             </div>
//           </div>

//           {/* Quick Filter Buttons */}
//           <div>
//             <label style={{
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#333',
//               marginBottom: '8px'
//             }}>
//               ⚡ Quick Filters
//             </label>
//             <div style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: '8px'
//             }}>
//               {[
//                 { label: 'Low to High Price', sort_by: 'price', sort_order: 'asc' },
//                 { label: 'High to Low Price', sort_by: 'price', sort_order: 'desc' },
//                 { label: 'A-Z', sort_by: 'name', sort_order: 'asc' },
//                 { label: 'In Stock', sort_by: 'stock_quantity', sort_order: 'desc' }
//               ].map((quickFilter, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     handleFilterChange('sort_by', quickFilter.sort_by)
//                     handleFilterChange('sort_order', quickFilter.sort_order)
//                   }}
//                   style={{
//                     padding: '6px 12px',
//                     background: localFilters.sort_by === quickFilter.sort_by && 
//                                localFilters.sort_order === quickFilter.sort_order 
//                                ? '#007bff' : '#f8f9fa',
//                     color: localFilters.sort_by === quickFilter.sort_by && 
//                            localFilters.sort_order === quickFilter.sort_order 
//                            ? 'white' : '#333',
//                     border: '1px solid #e0e0e0',
//                     borderRadius: '20px',
//                     fontSize: '12px',
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease',
//                     fontWeight: '500'
//                   }}
//                   onMouseOver={(e) => {
//                     if (!(localFilters.sort_by === quickFilter.sort_by && 
//                           localFilters.sort_order === quickFilter.sort_order)) {
//                       e.target.style.background = '#e9ecef'
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (!(localFilters.sort_by === quickFilter.sort_by && 
//                           localFilters.sort_order === quickFilter.sort_order)) {
//                       e.target.style.background = '#f8f9fa'
//                     }
//                   }}
//                 >
//                   {quickFilter.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductFilters



import React, { useState, useEffect } from 'react'

const FixedProductFilters = ({ onFiltersChange, filters }) => {
  const [categories, setCategories] = useState([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [localFilters, setLocalFilters] = useState({
    category_id: '',
    min_price: '',
    max_price: '',
    sort_by: 'name',
    sort_order: 'asc',
    ...filters
  })
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    sort: true
  })

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile && !isMinimized) {
        setIsMinimized(true)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [isMinimized])

  // Fetch categories and price range
  useEffect(() => {
    fetchCategories()
    fetchPriceRange()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/categories')
      if (response.ok) {
        const data = await response.json()
        setCategories(data)
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const fetchPriceRange = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/price-range')
      if (response.ok) {
        const data = await response.json()
        setPriceRange({
          min: Math.floor(data.min_price),
          max: Math.ceil(data.max_price)
        })
      }
    } catch (error) {
      console.error('Error fetching price range:', error)
    }
  }

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      category_id: '',
      min_price: '',
      max_price: '',
      sort_by: 'name',
      sort_order: 'asc'
    }
    setLocalFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const activeFiltersCount = Object.values(localFilters).filter(value => 
    value !== '' && value !== 'name' && value !== 'asc'
  ).length

  // Amazon-style responsive positioning
  const getResponsiveStyles = () => {
    const baseStyles = {
      position: 'fixed',
      zIndex: 1000,
      background: '#fff',
      border: '1px solid #d5d9d9',
      borderRadius: isMobile ? '8px' : '0',
      boxShadow: isMobile ? '0 4px 16px rgba(0,0,0,0.15)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fontFamily: 'Amazon Ember, Arial, sans-serif'
    }

    if (isMobile) {
      return {
        ...baseStyles,
        bottom: isMinimized ? '20px' : '0',
        left: isMinimized ? '20px' : '0',
        right: isMinimized ? 'auto' : '0',
        width: isMinimized ? '56px' : '100vw',
        height: isMinimized ? '56px' : '80vh',
        borderRadius: isMinimized ? '28px' : '8px 8px 0 0'
      }
    } else {
      return {
        ...baseStyles,
        left: '0',
        top: '0',
        width: isMinimized ? '4px' : '280px',
        height: '100vh',
        borderRight: isMinimized ? 'none' : '1px solid #d5d9d9',
        borderRadius: '0'
      }
    }
  }

  // Amazon-style section component
  const FilterSection = ({ title, icon, isExpanded, onToggle, children }) => (
    <div style={{
      borderBottom: '1px solid #e7e7e7',
      marginBottom: isMobile ? '12px' : '0'
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: isMobile ? '12px 16px' : '16px 20px',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: '700',
          color: '#0F1111',
          transition: 'background-color 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#f7f7f7'
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: isMobile ? '16px' : '18px' }}>{icon}</span>
          {title}
        </span>
        <span style={{
          fontSize: '12px',
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease'
        }}>
          ▼
        </span>
      </button>
      
      {isExpanded && (
        <div style={{
          padding: isMobile ? '0 16px 16px 16px' : '0 20px 20px 20px',
          animation: 'expandSection 0.2s ease-out'
        }}>
          {children}
        </div>
      )}
    </div>
  )

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;500;700&display=swap');
          
          @keyframes expandSection {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          @keyframes slideFromLeft {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }

          .amazon-filter-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .amazon-filter-scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .amazon-filter-scroll::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 3px;
          }
          .amazon-filter-scroll::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }

          .amazon-checkbox {
            appearance: none;
            width: 16px;
            height: 16px;
            border: 1px solid #d5d9d9;
            border-radius: 2px;
            margin-right: 8px;
            position: relative;
            cursor: pointer;
          }
          
          .amazon-checkbox:checked {
            background-color: #ff9900;
            border-color: #ff9900;
          }
          
          .amazon-checkbox:checked::after {
            content: '✓';
            position: absolute;
            left: 2px;
            top: -2px;
            color: white;
            font-size: 12px;
            font-weight: bold;
          }
        `}
      </style>

      <div 
        style={getResponsiveStyles()}
        className={!isMinimized ? (isMobile ? 'slideUp' : 'slideFromLeft') : ''}
      >
        {/* Minimize/Expand Toggle */}
        {!isMobile && (
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            style={{
              position: 'absolute',
              right: isMinimized ? '-20px' : '8px',
              top: '20px',
              width: '20px',
              height: '40px',
              background: '#ff9900',
              border: 'none',
              borderRadius: isMinimized ? '0 8px 8px 0' : '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              zIndex: 1001,
              boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
            }}
          >
            {isMinimized ? '▶' : '◀'}
          </button>
        )}

        {/* Mobile Toggle Button */}
        {isMobile && isMinimized && (
          <button
            onClick={() => setIsMinimized(false)}
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)',
              border: 'none',
              borderRadius: '28px',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(255, 153, 0, 0.3)'
            }}
          >
            🔍
          </button>
        )}

        {/* Filter Content */}
        {!isMinimized && (
          <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              padding: isMobile ? '16px 16px 12px 16px' : '20px 20px 16px 20px',
              borderBottom: '2px solid #e7e7e7',
              background: '#f7f7f7'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <h3 style={{
                  margin: '0',
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '700',
                  color: '#0F1111'
                }}>
                  Filters
                </h3>
                
                {isMobile && (
                  <button
                    onClick={() => setIsMinimized(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '18px',
                      cursor: 'pointer',
                      color: '#666',
                      padding: '4px'
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {activeFiltersCount > 0 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    fontSize: '12px',
                    color: '#565959',
                    fontWeight: '400'
                  }}>
                    {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied
                  </span>
                  <button
                    onClick={clearFilters}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#007185',
                      fontSize: '12px',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      padding: '0'
                    }}
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Scrollable Filter Content */}
            <div 
              className="amazon-filter-scroll"
              style={{
                flex: 1,
                overflow: 'auto',
                paddingBottom: isMobile ? '20px' : '0'
              }}
            >
              {/* Category Filter */}
              <FilterSection
                title="Category"
                icon="📂"
                isExpanded={expandedSections.category}
                onToggle={() => toggleSection('category')}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {categories.map(category => (
                    <label key={category.category_id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#0F1111',
                      padding: '4px 0'
                    }}>
                      <input
                        type="radio"
                        name="category"
                        value={category.category_id}
                        checked={localFilters.category_id === category.category_id.toString()}
                        onChange={(e) => handleFilterChange('category_id', e.target.value)}
                        className="amazon-checkbox"
                        style={{ marginRight: '8px' }}
                      />
                      {category.name}
                    </label>
                  ))}
                  {localFilters.category_id && (
                    <button
                      onClick={() => handleFilterChange('category_id', '')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#007185',
                        fontSize: '12px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        padding: '4px 0',
                        textDecoration: 'underline'
                      }}
                    >
                      Clear category filter
                    </button>
                  )}
                </div>
              </FilterSection>

              {/* Price Filter */}
              <FilterSection
                title="Price"
                icon="💰"
                isExpanded={expandedSections.price}
                onToggle={() => toggleSection('price')}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                    <div>
                      <input
                        type="number"
                        placeholder="Min"
                        value={localFilters.min_price}
                        onChange={(e) => handleFilterChange('min_price', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          border: '1px solid #d5d9d9',
                          borderRadius: '4px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#ff9900'
                          e.target.style.boxShadow = '0 0 0 2px rgba(255, 153, 0, 0.2)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#d5d9d9'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                    <span style={{ color: '#565959', fontSize: '14px' }}>to</span>
                    <div>
                      <input
                        type="number"
                        placeholder="Max"
                        value={localFilters.max_price}
                        onChange={(e) => handleFilterChange('max_price', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          border: '1px solid #d5d9d9',
                          borderRadius: '4px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#ff9900'
                          e.target.style.boxShadow = '0 0 0 2px rgba(255, 153, 0, 0.2)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#d5d9d9'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      // Apply price range if both values are set
                      if (localFilters.min_price && localFilters.max_price) {
                        onFiltersChange(localFilters)
                      }
                    }}
                    disabled={!localFilters.min_price || !localFilters.max_price}
                    style={{
                      padding: '6px 12px',
                      background: (!localFilters.min_price || !localFilters.max_price) ? '#f7f7f7' : '#ff9900',
                      color: (!localFilters.min_price || !localFilters.max_price) ? '#999' : 'white',
                      border: '1px solid #d5d9d9',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: (!localFilters.min_price || !localFilters.max_price) ? 'not-allowed' : 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    Go
                  </button>

                  <div style={{
                    fontSize: '11px',
                    color: '#565959',
                    textAlign: 'center',
                    padding: '8px',
                    background: '#f7f7f7',
                    borderRadius: '4px'
                  }}>
                    ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
                  </div>
                </div>
              </FilterSection>

              {/* Sort Options */}
              <FilterSection
                title="Sort by"
                icon="🔄"
                isExpanded={expandedSections.sort}
                onToggle={() => toggleSection('sort')}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
                    { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
                    { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
                    { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
                    { label: 'In Stock First', sort_by: 'stock_quantity', sort_order: 'desc' }
                  ].map((option, index) => (
                    <label key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#0F1111',
                      padding: '4px 0'
                    }}>
                      <input
                        type="radio"
                        name="sort"
                        checked={localFilters.sort_by === option.sort_by && localFilters.sort_order === option.sort_order}
                        onChange={() => {
                          handleFilterChange('sort_by', option.sort_by)
                          handleFilterChange('sort_order', option.sort_order)
                        }}
                        className="amazon-checkbox"
                        style={{ marginRight: '8px' }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FixedProductFilters