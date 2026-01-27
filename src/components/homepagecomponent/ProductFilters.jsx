// // src/components/homepagecomponent/ProductFilters.jsx
// import React, { useState, useEffect } from 'react'
// import CategoryFilter from '../FilterSection/CategoryFilter'
// import PriceFilter from '../FilterSection/PriceFilter'
// import SortFilter from '../FilterSection/SortFilter'

// const FixedProductFilters = ({ onFiltersChange, filters }) => {
//   const [categories, setCategories] = useState([])
//   const [subcategories, setSubcategories] = useState([])
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
//   const [localFilters, setLocalFilters] = useState({
//     category_id: '',
//     subcategory_id: '',
//     min_price: '',
//     max_price: '',
//     sort_by: 'name',
//     sort_order: 'asc',
//     ...filters
//   })
//   const [isMinimized, setIsMinimized] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [expandedSections, setExpandedSections] = useState({
//     category: true,
//     subcategory: true,
//     price: true,
//     sort: true
//   })

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const mobile = window.innerWidth <= 768
//       setIsMobile(mobile)
//       if (mobile && !isMinimized) setIsMinimized(true)
//     }
//     checkScreenSize()
//     window.addEventListener('resize', checkScreenSize)
//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [isMinimized])

//   useEffect(() => {
//     fetchCategories()
//     fetchPriceRange()
//   }, [])

//   // Fetch subcategories when category changes
//   useEffect(() => {
//     if (localFilters.category_id && localFilters.category_id !== '') {
//       fetchSubcategories(localFilters.category_id)
//     } else {
//       // Clear subcategories when no category is selected
//       setSubcategories([])
//       // Clear subcategory filter if it was set
//       if (localFilters.subcategory_id && localFilters.subcategory_id !== '') {
//         const clearedFilters = { ...localFilters, subcategory_id: '' }
//         setLocalFilters(clearedFilters)
//         onFiltersChange(clearedFilters)
//         applyFilters(clearedFilters)
//       }
//     }
//   }, [localFilters.category_id])

//   // Apply initial filters on component mount
//   useEffect(() => {
//     if (Object.keys(filters).length > 0) {
//       applyFilters(localFilters)
//     }
//   }, []) // Only run once on mount

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/categories')
//       if (response.ok) {
//         const data = await response.json()
//         setCategories(data)
//       }
//     } catch (error) {
//       console.error('Error fetching categories:', error)
//     }
//   }

//   const fetchSubcategories = async (categoryId) => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/v1/categories/${categoryId}/subcategories`)
//       if (response.ok) {
//         const data = await response.json()
//         setSubcategories(data)
//       }
//     } catch (error) {
//       console.error('Error fetching subcategories:', error)
//       setSubcategories([])
//     }
//   }

//   const fetchPriceRange = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/price-range')
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
//     // Clean and validate the value
//     let cleanValue = value

//     if (key === 'subcategory_id' || key === 'category_id') {
//       // Ensure IDs are proper integers or empty strings
//       if (value === '' || value === null || value === undefined) {
//         cleanValue = ''
//       } else if (value === 'on' || isNaN(value)) {
//         cleanValue = '' // Reset invalid values
//       } else {
//         cleanValue = parseInt(value, 10).toString()
//       }
//     }

//     const newFilters = { ...localFilters, [key]: cleanValue }

//     // If category changes, clear subcategory
//     if (key === 'category_id' && cleanValue !== localFilters.category_id) {
//       newFilters.subcategory_id = ''
//     }

//     console.log('Filter change:', key, 'from', localFilters[key], 'to', cleanValue)
//     console.log('New filters:', newFilters)

//     setLocalFilters(newFilters)
//     onFiltersChange(newFilters)

//     // Apply filters immediately
//     applyFilters(newFilters)
//   }

//   const applyFilters = async (filters) => {
//     try {
//       // Build query parameters
//       const params = new URLSearchParams()

//       // Add pagination (always start from page 1 when filters change)
//       params.append('page', '1')
//       params.append('per_page', '20')

//       // Add filters only if they have valid values
//       if (filters.category_id && filters.category_id !== '' && !isNaN(filters.category_id)) {
//         params.append('category_id', filters.category_id)
//       }
//       if (filters.subcategory_id && filters.subcategory_id !== '' && !isNaN(filters.subcategory_id)) {
//         params.append('subcategory_id', filters.subcategory_id)
//       }
//       if (filters.min_price && filters.min_price !== '') {
//         params.append('min_price', filters.min_price)
//       }
//       if (filters.max_price && filters.max_price !== '') {
//         params.append('max_price', filters.max_price)
//       }
//       if (filters.sort_by) {
//         params.append('sort_by', filters.sort_by)
//       }
//       if (filters.sort_order) {
//         params.append('sort_order', filters.sort_order)
//       }

//       const apiUrl = `http://localhost:8000/api/v1/products?${params.toString()}`
//       console.log('API call:', apiUrl)

//       // Make API call to fetch filtered products
//       const response = await fetch(apiUrl)

//       if (response.ok) {
//         const data = await response.json()
//         console.log('API response:', data)
//         // Call parent component's callback with filtered data
//         if (onFiltersChange) {
//           onFiltersChange(filters, data)
//         }
//       } else {
//         console.error('Filter API error:', response.status, response.statusText)
//         const errorText = await response.text()
//         console.error('Error details:', errorText)
//         // Still call the callback to update filters even if API fails
//         if (onFiltersChange) {
//           onFiltersChange(filters)
//         }
//       }
//     } catch (error) {
//       console.error('Error applying filters:', error)
//       // Still call the callback to update filters even if API fails
//       if (onFiltersChange) {
//         onFiltersChange(filters)
//       }
//     }
//   }

//   const clearFilters = () => {
//     const clearedFilters = {
//       category_id: '',
//       subcategory_id: '',
//       min_price: '',
//       max_price: '',
//       sort_by: 'name',
//       sort_order: 'asc'
//     }

//     // Clear subcategories list
//     setSubcategories([])

//     setLocalFilters(clearedFilters)
//     onFiltersChange(clearedFilters)

//     // Apply cleared filters
//     applyFilters(clearedFilters)
//   }

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }))
//   }

//   const activeFiltersCount = Object.values(localFilters).filter(
//     value => value !== '' && value !== 'name' && value !== 'asc'
//   ).length

//   const getResponsiveStyles = () => {
//     const baseStyles = {
//       position: 'fixed', zIndex: 1000, background: '#fff',
//       border: '1px solid #d5d9d9',
//       borderRadius: isMobile ? '8px' : '0',
//       boxShadow: isMobile ? '0 4px 16px rgba(0,0,0,0.15)' : 'none',
//       transition: 'all 0.3s ease',
//       fontFamily: 'Amazon Ember, Arial, sans-serif'
//     }
//     return isMobile ? {
//       ...baseStyles,
//       bottom: isMinimized ? '20px' : '0',
//       left: isMinimized ? '20px' : '0',
//       right: isMinimized ? 'auto' : '0',
//       width: isMinimized ? '56px' : '100vw',
//       height: isMinimized ? '56px' : '80vh',
//       borderRadius: isMinimized ? '28px' : '8px 8px 0 0'
//     } : {
//       ...baseStyles,
//       left: '0', top: '0',
//       width: isMinimized ? '4px' : '280px',
//       height: '100vh',
//       borderRight: isMinimized ? 'none' : '1px solid #d5d9d9'
//     }
//   }

//   return (
//     <div style={getResponsiveStyles()} className={!isMinimized ? (isMobile ? 'slideUp' : 'slideFromLeft') : ''}>
//       {!isMobile && (
//         <button
//           onClick={() => setIsMinimized(!isMinimized)}
//           style={{
//             position: 'absolute', right: isMinimized ? '-20px' : '8px', top: '20px',
//             width: '20px', height: '40px', background: '#ff9900',
//             border: 'none', borderRadius: isMinimized ? '0 8px 8px 0' : '4px',
//             cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
//             color: 'white', fontSize: '12px', zIndex: 1001
//           }}
//         >{isMinimized ? '▶' : '◀'}</button>
//       )}

//       {isMobile && isMinimized ? (
//         <button
//           onClick={() => setIsMinimized(false)}
//           style={{
//             width: '100%', height: '100%',
//             background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)',
//             border: 'none', borderRadius: '28px', color: 'white',
//             fontSize: '20px', cursor: 'pointer', display: 'flex',
//             alignItems: 'center', justifyContent: 'center'
//           }}
//         >🔍</button>
//       ) : (
//         <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//           <div style={{ padding: isMobile ? '16px' : '20px', borderBottom: '2px solid #e7e7e7', background: '#f7f7f7' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <h3 style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', fontWeight: '700' }}>Filters</h3>
//               {isMobile && (
//                 <button
//                   onClick={() => setIsMinimized(true)}
//                   style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#666' }}
//                 >✕</button>
//               )}
//             </div>
//             {activeFiltersCount > 0 && (
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                 <span style={{ fontSize: '12px', color: '#565959' }}>{activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied</span>
//                 <button
//                   onClick={clearFilters}
//                   style={{ background: 'none', border: 'none', color: '#007185', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
//                 >Clear all</button>
//               </div>
//             )}
//           </div>

//           <div style={{ flex: 1, overflow: 'auto', paddingBottom: isMobile ? '20px' : '0' }}>
//             {/* Category Filter */}
//             <CategoryFilter
//               categories={categories}
//               selectedCategories={localFilters.category_id}
//               onChange={(newSelected) => handleFilterChange('category_id', newSelected)}
//               expanded={expandedSections.category}
//               toggle={() => toggleSection('category')}
//             />

//             {/* Subcategory Filter - Only show if category is selected AND subcategories exist */}
//             {localFilters.category_id && localFilters.category_id !== '' && subcategories.length > 0 && (
//               <SubcategoryFilter
//                 subcategories={subcategories}
//                 selectedSubcategory={localFilters.subcategory_id}
//                 onChange={(newSelected) => handleFilterChange('subcategory_id', newSelected)}
//                 expanded={expandedSections.subcategory}
//                 toggle={() => toggleSection('subcategory')}
//               />
//             )}

//             {/* Price Filter */}
//             <PriceFilter
//               expanded={expandedSections.price}
//               toggle={() => toggleSection('price')}
//               localFilters={localFilters}
//               onChange={handleFilterChange}
//               priceRange={priceRange}
//             />

//             {/* Sort Filter */}
//             <SortFilter
//               expanded={expandedSections.sort}
//               toggle={() => toggleSection('sort')}
//               localFilters={localFilters}
//               onChange={handleFilterChange}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// // New SubcategoryFilter Component
// const SubcategoryFilter = ({ subcategories, selectedSubcategory, onChange, expanded, toggle }) => {
//   const handleSubcategoryChange = (value) => {
//     // Ensure we only pass valid integer IDs or empty string
//     const cleanValue = value === '' ? '' : parseInt(value, 10)
//     onChange(cleanValue)
//   }

//   return (
//     <div style={{ borderBottom: '1px solid #e7e7e7' }}>
//       <div
//         onClick={toggle}
//         style={{
//           padding: '16px 20px',
//           cursor: 'pointer',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           background: '#fff',
//           borderBottom: expanded ? '1px solid #e7e7e7' : 'none'
//         }}
//       >
//         <span style={{ fontSize: '14px', fontWeight: '600', color: '#0f1111' }}>
//           Subcategory
//         </span>
//         <span style={{ fontSize: '12px', color: '#565959' }}>
//           {expanded ? '−' : '+'}
//         </span>
//       </div>

//       {expanded && (
//         <div style={{ padding: '8px 20px 16px' }}>
//           {/* Clear subcategory option */}
//           <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
//             <input
//               type="radio"
//               name="subcategory"
//               value=""
//               checked={selectedSubcategory === '' || selectedSubcategory === null || selectedSubcategory === undefined}
//               onChange={(e) => handleSubcategoryChange(e.target.value)}
//               style={{ marginRight: '8px' }}
//             />
//             <span style={{ fontSize: '13px', color: '#0f1111' }}>
//               All Subcategories
//             </span>
//           </label>

//           {/* Subcategory options */}
//           {subcategories.map((subcategory) => (
//             <label key={subcategory.subcategory_id || subcategory.id} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
//               <input
//                 type="radio"
//                 name="subcategory"
//                 value={subcategory.subcategory_id || subcategory.id}
//                 checked={selectedSubcategory == (subcategory.subcategory_id || subcategory.id)}
//                 onChange={(e) => handleSubcategoryChange(e.target.value)}
//                 style={{ marginRight: '8px' }}
//               />
//               <span style={{ fontSize: '13px', color: '#0f1111' }}>
//                 {subcategory.name}
//                 {subcategory.product_count && (
//                   <span style={{ color: '#565959', fontSize: '12px' }}>
//                     {' '}({subcategory.product_count})
//                   </span>
//                 )}
//               </span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default FixedProductFilters



// src/components/homepagecomponent/ProductFilters.jsx - Updated with better price filter handling
import React, { useState, useEffect } from 'react'
import CategoryFilter from '../FilterSection/CategoryFilter'
import PriceFilter from '../FilterSection/PriceFilter'
import SortFilter from '../FilterSection/SortFilter'
import SpecificationFilter from './SpecificationFilter'

const FixedProductFilters = ({ onFiltersChange, filters }) => {
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [specificationFilters, setSpecificationFilters] = useState({})
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [localFilters, setLocalFilters] = useState({
    category_id: '',
    subcategory_id: '',
    min_price: '',
    max_price: '',
    sort_by: 'name',
    sort_order: 'asc',
    specifications: {}, // New state for dynamic filters
    ...filters
  })
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    subcategory: true,
    price: true,
    sort: true,
    specs: {} // Expand state for dynamic specs
  })

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile && !isMinimized) setIsMinimized(true)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [isMinimized])

  useEffect(() => {
    fetchCategories()
    fetchPriceRange()
    fetchSpecificationFilters() // Fetch dynamic filters
  }, [])

  // Fetch subcategories when category changes
  useEffect(() => {
    if (localFilters.category_id && localFilters.category_id !== '') {
      fetchSubcategories(localFilters.category_id)
      fetchSpecificationFilters(localFilters.category_id, null)
    } else {
      setSubcategories([])
      fetchSpecificationFilters(null, null) // Fetch globally if no category
      if (localFilters.subcategory_id && localFilters.subcategory_id !== '') {
        const clearedFilters = { ...localFilters, subcategory_id: '' }
        setLocalFilters(clearedFilters)
        onFiltersChange(clearedFilters)
      }
    }
  }, [localFilters.category_id])

  // When subcategory changes, re-fetch specs
  useEffect(() => {
    if (localFilters.subcategory_id) {
      fetchSpecificationFilters(localFilters.category_id, localFilters.subcategory_id)
    }
  }, [localFilters.subcategory_id])

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

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/categories/${categoryId}/subcategories`)
      if (response.ok) {
        const data = await response.json()
        setSubcategories(data)
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error)
      setSubcategories([])
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

  const fetchSpecificationFilters = async (catId = null, subcatId = null) => {
    try {
      const params = new URLSearchParams()
      if (catId) params.append('category_id', catId)
      if (subcatId) params.append('subcategory_id', subcatId)

      const response = await fetch(`http://localhost:8000/api/v1/products/filters?${params}`)
      if (response.ok) {
        const data = await response.json()
        setSpecificationFilters(data)
        // Initialize expanded state for new specs
        setExpandedSections(prev => ({
          ...prev,
          specs: Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: true }), {})
        }))
      }
    } catch (error) {
      console.error('Error fetching specifications:', error)
    }
  }

  const handleFilterChange = (key, value) => {
    // Clean and validate the value
    let cleanValue = value

    if (key === 'subcategory_id' || key === 'category_id') {
      // Ensure IDs are proper integers or empty strings
      if (value === '' || value === null || value === undefined) {
        cleanValue = ''
      } else if (value === 'on' || isNaN(value)) {
        cleanValue = '' // Reset invalid values
      } else {
        cleanValue = parseInt(value, 10).toString()
      }
    } else if (key === 'min_price' || key === 'max_price') {
      if (value === '' || value === null || value === undefined) {
        cleanValue = ''
      } else {
        const numValue = parseFloat(value)
        cleanValue = (isNaN(numValue) || numValue < 0) ? '' : numValue.toString()
      }
    }

    const newFilters = { ...localFilters, [key]: cleanValue }

    // If category changes, clear subcategory and specs
    if (key === 'category_id' && cleanValue !== localFilters.category_id) {
      newFilters.subcategory_id = ''
      newFilters.specifications = {}
    }

    setLocalFilters(newFilters)

    if (key === 'min_price' || key === 'max_price') {
      if (window.priceFilterTimeout) clearTimeout(window.priceFilterTimeout)
      window.priceFilterTimeout = setTimeout(() => onFiltersChange(newFilters), 800)
    } else {
      onFiltersChange(newFilters)
    }
  }

  const handleSpecificationChange = (specName, value) => {
    const newSpecs = { ...localFilters.specifications }
    if (value) {
      newSpecs[specName] = value
    } else {
      delete newSpecs[specName]
    }

    const newFilters = { ...localFilters, specifications: newSpecs }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      category_id: '',
      subcategory_id: '',
      min_price: '',
      max_price: '',
      sort_by: 'name',
      sort_order: 'asc',
      specifications: {}
    }

    setSubcategories([])
    fetchSpecificationFilters(null, null) // Reset detailed filters

    if (window.priceFilterTimeout) clearTimeout(window.priceFilterTimeout)

    setLocalFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const toggleSpecSection = (specName) => {
    setExpandedSections(prev => ({
      ...prev,
      specs: {
        ...prev.specs,
        [specName]: !prev.specs[specName]
      }
    }))
  }

  const activeFiltersCount = Object.values(localFilters).filter(
    value => value !== '' && value !== 'name' && value !== 'asc' && (typeof value !== 'object' || Object.keys(value).length > 0)
  ).length

  const getResponsiveStyles = () => {
    const baseStyles = {
      position: 'fixed', zIndex: 1000, background: '#fff',
      border: '1px solid #d5d9d9',
      borderRadius: isMobile ? '8px' : '0',
      boxShadow: isMobile ? '0 4px 16px rgba(0,0,0,0.15)' : 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'Amazon Ember, Arial, sans-serif'
    }
    return isMobile ? {
      ...baseStyles,
      bottom: isMinimized ? '20px' : '0',
      left: isMinimized ? '20px' : '0',
      right: isMinimized ? 'auto' : '0',
      width: isMinimized ? '56px' : '100vw',
      height: isMinimized ? '56px' : '80vh',
      borderRadius: isMinimized ? '28px' : '8px 8px 0 0'
    } : {
      ...baseStyles,
      left: '0', top: '0',
      width: isMinimized ? '4px' : '280px',
      height: '100vh',
      borderRight: isMinimized ? 'none' : '1px solid #d5d9d9'
    }
  }

  return (
    <div style={getResponsiveStyles()} className={!isMinimized ? (isMobile ? 'slideUp' : 'slideFromLeft') : ''}>
      {!isMobile && (
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          style={{
            position: 'absolute', right: isMinimized ? '-20px' : '8px', top: '20px',
            width: '20px', height: '40px', background: '#ff9900',
            border: 'none', borderRadius: isMinimized ? '0 8px 8px 0' : '4px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontSize: '12px', zIndex: 1001
          }}
        >{isMinimized ? '▶' : '◀'}</button>
      )}

      {isMobile && isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #ff9900 0%, #ffad33 100%)',
            border: 'none', borderRadius: '28px', color: 'white',
            fontSize: '20px', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}
        >🔍</button>
      ) : (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: isMobile ? '16px' : '20px', borderBottom: '2px solid #e7e7e7', background: '#f7f7f7' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: isMobile ? '16px' : '18px', fontWeight: '700' }}>Filters</h3>
              {isMobile && (
                <button
                  onClick={() => setIsMinimized(true)}
                  style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#666' }}
                >✕</button>
              )}
            </div>
            {activeFiltersCount > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: '#565959' }}>{activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied</span>
                <button
                  onClick={clearFilters}
                  style={{ background: 'none', border: 'none', color: '#007185', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
                >Clear all</button>
              </div>
            )}
          </div>

          <div style={{ flex: 1, overflow: 'auto', paddingBottom: isMobile ? '20px' : '0' }}>
            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              selectedCategories={localFilters.category_id}
              onChange={(newSelected) => handleFilterChange('category_id', newSelected)}
              expanded={expandedSections.category}
              toggle={() => toggleSection('category')}
            />

            {/* Subcategory Filter */}
            {localFilters.category_id && localFilters.category_id !== '' && subcategories.length > 0 && (
              <SubcategoryFilter
                subcategories={subcategories}
                selectedSubcategory={localFilters.subcategory_id}
                onChange={(newSelected) => handleFilterChange('subcategory_id', newSelected)}
                expanded={expandedSections.subcategory}
                toggle={() => toggleSection('subcategory')}
              />
            )}

            {/* Dynamic Specification Filters */}
            {Object.entries(specificationFilters).map(([specName, options]) => (
              <SpecificationFilter
                key={specName}
                name={specName}
                options={options}
                selectedValue={localFilters.specifications?.[specName] || ''}
                onChange={handleSpecificationChange}
                expanded={expandedSections.specs?.[specName]}
                toggle={() => toggleSpecSection(specName)}
              />
            ))}

            {/* Price Filter */}
            <PriceFilter
              expanded={expandedSections.price}
              toggle={() => toggleSection('price')}
              localFilters={localFilters}
              onChange={handleFilterChange}
              priceRange={priceRange}
            />

            {/* Sort Filter */}
            <SortFilter
              expanded={expandedSections.sort}
              toggle={() => toggleSection('sort')}
              localFilters={localFilters}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// SubcategoryFilter Component (unchanged)
const SubcategoryFilter = ({ subcategories, selectedSubcategory, onChange, expanded, toggle }) => {
  const handleSubcategoryChange = (value) => {
    const cleanValue = value === '' ? '' : parseInt(value, 10)
    onChange(cleanValue)
  }

  return (
    <div style={{ borderBottom: '1px solid #e7e7e7' }}>
      <div
        onClick={toggle}
        style={{
          padding: '16px 20px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fff',
          borderBottom: expanded ? '1px solid #e7e7e7' : 'none'
        }}
      >
        <span style={{ fontSize: '14px', fontWeight: '600', color: '#0f1111' }}>
          Subcategory
        </span>
        <span style={{ fontSize: '12px', color: '#565959' }}>
          {expanded ? '−' : '+'}
        </span>
      </div>

      {expanded && (
        <div style={{ padding: '8px 20px 16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="subcategory"
              value=""
              checked={selectedSubcategory === '' || selectedSubcategory === null || selectedSubcategory === undefined}
              onChange={(e) => handleSubcategoryChange(e.target.value)}
              style={{ marginRight: '8px' }}
            />
            <span style={{ fontSize: '13px', color: '#0f1111' }}>
              All Subcategories
            </span>
          </label>

          {subcategories.map((subcategory) => (
            <label key={subcategory.subcategory_id || subcategory.id} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="subcategory"
                value={subcategory.subcategory_id || subcategory.id}
                checked={selectedSubcategory == (subcategory.subcategory_id || subcategory.id)}
                onChange={(e) => handleSubcategoryChange(e.target.value)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ fontSize: '13px', color: '#0f1111' }}>
                {subcategory.name}
                {subcategory.product_count && (
                  <span style={{ color: '#565959', fontSize: '12px' }}>
                    {' '}({subcategory.product_count})
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default FixedProductFilters