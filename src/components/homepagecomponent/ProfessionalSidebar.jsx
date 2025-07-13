// // src/components/homepagecomponent/ProfessionalSidebar.jsx - Updated with nested category structure
// import React, { useState, useEffect } from 'react'

// const ProfessionalSidebar = ({ isOpen, onClose, onFiltersChange, filters }) => {
//   const [categories, setCategories] = useState([])
//   const [subcategoriesByCategory, setSubcategoriesByCategory] = useState({})
//   const [expandedCategories, setExpandedCategories] = useState({})
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
//   const [expandedSections, setExpandedSections] = useState({
//     categories: true,
//     price: true,
//     sort: true
//   })

//   useEffect(() => {
//     fetchCategories()
//     fetchPriceRange()
//   }, [])

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
//         setSubcategoriesByCategory(prev => ({
//           ...prev,
//           [categoryId]: data
//         }))
//       }
//     } catch (error) {
//       console.error('Error fetching subcategories:', error)
//       setSubcategoriesByCategory(prev => ({
//         ...prev,
//         [categoryId]: []
//       }))
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
//       setPriceRange({ min: 0, max: 10000 })
//     }
//   }

//   const handleCategoryClick = async (categoryId) => {
//     const categoryIdStr = categoryId.toString()
    
//     // If clicking the same category that's already selected, deselect it
//     if (localFilters.category_id === categoryIdStr) {
//       const newFilters = { 
//         ...localFilters, 
//         category_id: '', 
//         subcategory_id: '' 
//       }
//       setLocalFilters(newFilters)
//       onFiltersChange(newFilters)
//       setExpandedCategories(prev => ({
//         ...prev,
//         [categoryIdStr]: false
//       }))
//       return
//     }

//     // Select new category and clear subcategory
//     const newFilters = { 
//       ...localFilters, 
//       category_id: categoryIdStr, 
//       subcategory_id: '' 
//     }
//     setLocalFilters(newFilters)
//     onFiltersChange(newFilters)

//     // Expand the category to show subcategories
//     setExpandedCategories(prev => ({
//       ...prev,
//       [categoryIdStr]: true
//     }))

//     // Fetch subcategories if not already fetched
//     if (!subcategoriesByCategory[categoryIdStr]) {
//       await fetchSubcategories(categoryIdStr)
//     }
//   }

//   const handleSubcategoryClick = (subcategoryId) => {
//     const subcategoryIdStr = subcategoryId.toString()
    
//     // If clicking the same subcategory, deselect it
//     if (localFilters.subcategory_id === subcategoryIdStr) {
//       const newFilters = { ...localFilters, subcategory_id: '' }
//       setLocalFilters(newFilters)
//       onFiltersChange(newFilters)
//     } else {
//       // Select new subcategory
//       const newFilters = { ...localFilters, subcategory_id: subcategoryIdStr }
//       setLocalFilters(newFilters)
//       onFiltersChange(newFilters)
//     }
//   }

//   const handleFilterChange = (key, value) => {
//     console.log(`Filter change: ${key} = ${value}`)
    
//     let cleanValue = value
    
//     if (key === 'min_price' || key === 'max_price') {
//       if (value === '' || value === null || value === undefined) {
//         cleanValue = ''
//       } else {
//         const numValue = parseFloat(value)
//         if (isNaN(numValue) || numValue < 0) {
//           cleanValue = ''
//         } else {
//           cleanValue = numValue.toString()
//         }
//       }
//     }
    
//     const newFilters = { ...localFilters, [key]: cleanValue }
//     setLocalFilters(newFilters)
    
//     // Debounce price changes
//     if (key === 'min_price' || key === 'max_price') {
//       if (window.priceFilterTimeout) {
//         clearTimeout(window.priceFilterTimeout)
//       }
      
//       window.priceFilterTimeout = setTimeout(() => {
//         onFiltersChange(newFilters)
//       }, 800)
//     } else {
//       onFiltersChange(newFilters)
//     }
//   }

//   const clearAllFilters = () => {
//     const clearedFilters = {
//       category_id: '',
//       subcategory_id: '',
//       min_price: '',
//       max_price: '',
//       sort_by: 'name',
//       sort_order: 'asc'
//     }
    
//     setExpandedCategories({})
    
//     if (window.priceFilterTimeout) {
//       clearTimeout(window.priceFilterTimeout)
//     }
    
//     setLocalFilters(clearedFilters)
//     onFiltersChange(clearedFilters)
//   }

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }))
//   }

//   const toggleCategoryExpansion = (categoryId) => {
//     const categoryIdStr = categoryId.toString()
//     setExpandedCategories(prev => ({
//       ...prev,
//       [categoryIdStr]: !prev[categoryIdStr]
//     }))
    
//     // Fetch subcategories if expanding and not already fetched
//     if (!expandedCategories[categoryIdStr] && !subcategoriesByCategory[categoryIdStr]) {
//       fetchSubcategories(categoryIdStr)
//     }
//   }

//   const activeFiltersCount = Object.values(localFilters).filter(
//     value => value !== '' && value !== 'name' && value !== 'asc'
//   ).length

//   return (
//     <>
//       {/* Sidebar */}
//       <div style={{
//         position: 'fixed',
//         top: '70px', // Below header
//         left: isOpen ? '0' : '-320px',
//         width: '320px',
//         height: 'calc(100vh - 70px)',
//         background: 'white',
//         borderRight: '1px solid #E5E7EB',
//         transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//         zIndex: 999,
//         display: 'flex',
//         flexDirection: 'column',
//         boxShadow: isOpen ? '4px 0 10px rgba(0, 0, 0, 0.1)' : 'none',
//         fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
//       }}>
//         {/* Sidebar Header */}


//         {/* Scrollable Content */}
//         <div style={{
//           flex: 1,
//           overflowY: 'auto',
//           overflowX: 'hidden'
//         }}>
//           {/* Categories with Nested Subcategories */}
//           <FilterSection
//             title="Categories"
//             icon="📂"
//             expanded={expandedSections.categories}
//             onToggle={() => toggleSection('categories')}
//           >
//             <div style={{ padding: '8px 0' }}>
//               {/* All Categories Option */}
//               <div
//                 onClick={() => {
//                   if (localFilters.category_id !== '') {
//                     const newFilters = { ...localFilters, category_id: '', subcategory_id: '' }
//                     setLocalFilters(newFilters)
//                     onFiltersChange(newFilters)
//                     setExpandedCategories({})
//                   }
//                 }}
//                 style={{
//                   padding: '12px 24px',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: localFilters.category_id === '' ? '#EFF6FF' : 'transparent',
//                   borderLeft: localFilters.category_id === '' ? '4px solid #3B82F6' : '4px solid transparent',
//                   transition: 'all 0.2s ease'
//                 }}
//                 onMouseOver={(e) => {
//                   if (localFilters.category_id !== '') {
//                     e.target.style.background = '#F9FAFB'
//                   }
//                 }}
//                 onMouseOut={(e) => {
//                   if (localFilters.category_id !== '') {
//                     e.target.style.background = 'transparent'
//                   }
//                 }}
//               >
//                 <span style={{ 
//                   fontSize: '14px', 
//                   color: localFilters.category_id === '' ? '#1D4ED8' : '#374151',
//                   fontWeight: localFilters.category_id === '' ? '600' : '400'
//                 }}>
//                   All Categories
//                 </span>
//               </div>

//               {/* Category List */}
//               {categories.map((category) => {
//                 const categoryId = category.category_id || category.id
//                 const isSelected = localFilters.category_id === categoryId.toString()
//                 const isExpanded = expandedCategories[categoryId.toString()]
//                 const subcategories = subcategoriesByCategory[categoryId.toString()] || []

//                 return (
//                   <div key={categoryId}>
//                     {/* Category Item */}
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       background: isSelected ? '#EFF6FF' : 'transparent',
//                       borderLeft: isSelected ? '4px solid #3B82F6' : '4px solid transparent',
//                       transition: 'all 0.2s ease'
//                     }}>
//                       <div
//                         onClick={() => handleCategoryClick(categoryId)}
//                         style={{
//                           flex: 1,
//                           padding: '12px 24px',
//                           cursor: 'pointer',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '8px'
//                         }}
//                         onMouseOver={(e) => {
//                           if (!isSelected) {
//                             e.target.closest('div').style.background = '#F9FAFB'
//                           }
//                         }}
//                         onMouseOut={(e) => {
//                           if (!isSelected) {
//                             e.target.closest('div').style.background = 'transparent'
//                           }
//                         }}
//                       >
//                         <span style={{ 
//                           fontSize: '14px', 
//                           color: isSelected ? '#1D4ED8' : '#374151',
//                           fontWeight: isSelected ? '600' : '400'
//                         }}>
//                           {category.name}
//                           {category.product_count && (
//                             <span style={{ 
//                               color: isSelected ? '#60A5FA' : '#9CA3AF', 
//                               fontSize: '13px', 
//                               fontWeight: '400',
//                               marginLeft: '4px'
//                             }}>
//                               ({category.product_count})
//                             </span>
//                           )}
//                         </span>
//                       </div>
                      
//                       {/* Expand/Collapse Button for Subcategories */}
//                       {isSelected && (
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation()
//                             toggleCategoryExpansion(categoryId)
//                           }}
//                           style={{
//                             background: 'none',
//                             border: 'none',
//                             padding: '8px 16px',
//                             cursor: 'pointer',
//                             color: '#3B82F6',
//                             fontSize: '14px',
//                             fontWeight: '600'
//                           }}
//                         >
//                           {isExpanded ? '−' : '+'}
//                         </button>
//                       )}
//                     </div>

//                     {/* Subcategories */}
//                     {isSelected && isExpanded && subcategories.length > 0 && (
//                       <div style={{ 
//                         background: '#F8FAFC', 
//                         borderLeft: '4px solid #3B82F6',
//                         marginLeft: '0'
//                       }}>
//                         {/* All Subcategories Option */}
//                         <div
//                           onClick={() => {
//                             if (localFilters.subcategory_id !== '') {
//                               const newFilters = { ...localFilters, subcategory_id: '' }
//                               setLocalFilters(newFilters)
//                               onFiltersChange(newFilters)
//                             }
//                           }}
//                           style={{
//                             padding: '10px 44px',
//                             cursor: 'pointer',
//                             background: localFilters.subcategory_id === '' ? '#DBEAFE' : 'transparent',
//                             transition: 'all 0.2s ease'
//                           }}
//                           onMouseOver={(e) => {
//                             if (localFilters.subcategory_id !== '') {
//                               e.target.style.background = '#E2E8F0'
//                             }
//                           }}
//                           onMouseOut={(e) => {
//                             if (localFilters.subcategory_id !== '') {
//                               e.target.style.background = 'transparent'
//                             }
//                           }}
//                         >
//                           <span style={{ 
//                             fontSize: '13px', 
//                             color: localFilters.subcategory_id === '' ? '#1E40AF' : '#64748B',
//                             fontWeight: localFilters.subcategory_id === '' ? '600' : '400'
//                           }}>
//                             All Subcategories
//                           </span>
//                         </div>

//                         {subcategories.map((subcategory) => {
//                           const subcategoryId = subcategory.subcategory_id || subcategory.id
//                           const isSubSelected = localFilters.subcategory_id === subcategoryId.toString()

//                           return (
//                             <div
//                               key={subcategoryId}
//                               onClick={() => handleSubcategoryClick(subcategoryId)}
//                               style={{
//                                 padding: '10px 44px',
//                                 cursor: 'pointer',
//                                 background: isSubSelected ? '#DBEAFE' : 'transparent',
//                                 transition: 'all 0.2s ease'
//                               }}
//                               onMouseOver={(e) => {
//                                 if (!isSubSelected) {
//                                   e.target.style.background = '#E2E8F0'
//                                 }
//                               }}
//                               onMouseOut={(e) => {
//                                 if (!isSubSelected) {
//                                   e.target.style.background = 'transparent'
//                                 }
//                               }}
//                             >
//                               <span style={{ 
//                                 fontSize: '13px', 
//                                 color: isSubSelected ? '#1E40AF' : '#64748B',
//                                 fontWeight: isSubSelected ? '600' : '400'
//                               }}>
//                                 {subcategory.name}
//                                 {subcategory.product_count && (
//                                   <span style={{ 
//                                     color: isSubSelected ? '#60A5FA' : '#94A3B8', 
//                                     fontSize: '12px', 
//                                     fontWeight: '400',
//                                     marginLeft: '4px'
//                                   }}>
//                                     ({subcategory.product_count})
//                                   </span>
//                                 )}
//                               </span>
//                             </div>
//                           )
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 )
//               })}
//             </div>
//           </FilterSection>

//           {/* Price Filter */}
//           <FilterSection
//             title="Price Range"
//             icon="💰"
//             expanded={expandedSections.price}
//             onToggle={() => toggleSection('price')}
//           >
//             <div style={{ padding: '0 24px 16px' }}>
//               {/* Price Range Display */}
//               <div style={{
//                 fontSize: '12px',
//                 color: '#6B7280',
//                 marginBottom: '16px',
//                 padding: '8px 12px',
//                 background: '#F9FAFB',
//                 borderRadius: '6px',
//                 border: '1px solid #E5E7EB'
//               }}>
//                 Available: ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
//               </div>

//               {/* Price Input Fields */}
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '12px',
//                 marginBottom: '20px'
//               }}>
//                 <div>
//                   <label style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     fontWeight: '500',
//                     color: '#374151',
//                     marginBottom: '6px'
//                   }}>
//                     Min Price
//                   </label>
//                   <input
//                     type="number"
//                     value={localFilters.min_price}
//                     onChange={(e) => handleFilterChange('min_price', e.target.value)}
//                     placeholder={`₹${priceRange.min}`}
//                     style={{
//                       width: '100%',
//                       padding: '10px 12px',
//                       border: '1px solid #D1D5DB',
//                       borderRadius: '8px',
//                       fontSize: '14px',
//                       fontFamily: 'inherit',
//                       transition: 'border-color 0.2s ease',
//                       outline: 'none'
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = '#6366F1'}
//                     onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
//                   />
//                 </div>
//                 <div>
//                   <label style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     fontWeight: '500',
//                     color: '#374151',
//                     marginBottom: '6px'
//                   }}>
//                     Max Price
//                   </label>
//                   <input
//                     type="number"
//                     value={localFilters.max_price}
//                     onChange={(e) => handleFilterChange('max_price', e.target.value)}
//                     placeholder={`₹${priceRange.max}`}
//                     style={{
//                       width: '100%',
//                       padding: '10px 12px',
//                       border: '1px solid #D1D5DB',
//                       borderRadius: '8px',
//                       fontSize: '14px',
//                       fontFamily: 'inherit',
//                       transition: 'border-color 0.2s ease',
//                       outline: 'none'
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = '#6366F1'}
//                     onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
//                   />
//                 </div>
//               </div>

//               {/* Quick Price Ranges */}
//               <div>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '12px',
//                   fontWeight: '500',
//                   color: '#374151',
//                   marginBottom: '8px'
//                 }}>
//                   Quick Select:
//                 </label>
//                 <div style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '6px'
//                 }}>
//                   {[
//                     { label: 'Under ₹500', min: '', max: '500' },
//                     { label: '₹500 - ₹1,000', min: '500', max: '1000' },
//                     { label: '₹1,000 - ₹5,000', min: '1000', max: '5000' },
//                     { label: '₹5,000 - ₹10,000', min: '5000', max: '10000' },
//                     { label: 'Over ₹10,000', min: '10000', max: '' }
//                   ].map((range, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         handleFilterChange('min_price', range.min)
//                         handleFilterChange('max_price', range.max)
//                       }}
//                       style={{
//                         padding: '8px 12px',
//                         background: localFilters.min_price === range.min && localFilters.max_price === range.max 
//                           ? '#EFF6FF' : '#F9FAFB',
//                         color: localFilters.min_price === range.min && localFilters.max_price === range.max 
//                           ? '#1D4ED8' : '#374151',
//                         border: `1px solid ${localFilters.min_price === range.min && localFilters.max_price === range.max 
//                           ? '#DBEAFE' : '#E5E7EB'}`,
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         fontWeight: '500',
//                         cursor: 'pointer',
//                         textAlign: 'left',
//                         transition: 'all 0.2s ease',
//                         fontFamily: 'inherit'
//                       }}
//                       onMouseOver={(e) => {
//                         if (!(localFilters.min_price === range.min && localFilters.max_price === range.max)) {
//                           e.target.style.background = '#F3F4F6'
//                         }
//                       }}
//                       onMouseOut={(e) => {
//                         if (!(localFilters.min_price === range.min && localFilters.max_price === range.max)) {
//                           e.target.style.background = '#F9FAFB'
//                         }
//                       }}
//                     >
//                       {range.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Clear Price Filter */}
//               {(localFilters.min_price || localFilters.max_price) && (
//                 <button
//                   onClick={() => {
//                     handleFilterChange('min_price', '')
//                     handleFilterChange('max_price', '')
//                   }}
//                   style={{
//                     marginTop: '12px',
//                     padding: '6px 12px',
//                     background: 'none',
//                     border: 'none',
//                     color: '#DC2626',
//                     fontSize: '13px',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     textDecoration: 'underline',
//                     fontFamily: 'inherit'
//                   }}
//                 >
//                   Clear Price Filter
//                 </button>
//               )}
//             </div>
//           </FilterSection>

//           {/* Sort Filter */}
//           <FilterSection
//             title="Sort By"
//             icon="🔄"
//             expanded={expandedSections.sort}
//             onToggle={() => toggleSection('sort')}
//           >
//             <div style={{ padding: '0 24px 16px' }}>
//               {[
//                 { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
//                 { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
//                 { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
//                 { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
//                 { label: 'Newest First', sort_by: 'created_at', sort_order: 'desc' },
//                 { label: 'Oldest First', sort_by: 'created_at', sort_order: 'asc' }
//               ].map((option, index) => (
//                 <FilterOption
//                   key={index}
//                   checked={localFilters.sort_by === option.sort_by && localFilters.sort_order === option.sort_order}
//                   onChange={() => {
//                     handleFilterChange('sort_by', option.sort_by)
//                     handleFilterChange('sort_order', option.sort_order)
//                   }}
//                   label={option.label}
//                 />
//               ))}
//             </div>
//           </FilterSection>
//         </div>
//       </div>
//     </>
//   )
// }

// // Reusable Filter Section Component
// const FilterSection = ({ title, icon, expanded, onToggle, children }) => (
//   <div style={{ borderBottom: '1px solid #F3F4F6' }}>
//     <button
//       onClick={onToggle}
//       style={{
//         width: '100%',
//         padding: '20px 24px',
//         background: 'white',
//         border: 'none',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         fontSize: '15px',
//         fontWeight: '600',
//         color: '#1F2937',
//         fontFamily: 'inherit',
//         transition: 'background-color 0.2s ease'
//       }}
//       onMouseOver={(e) => e.target.style.backgroundColor = '#F9FAFB'}
//       onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
//     >
//       <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//         <span style={{ fontSize: '16px' }}>{icon}</span>
//         {title}
//       </div>
//       <span style={{
//         fontSize: '14px',
//         color: '#9CA3AF',
//         transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
//         transition: 'transform 0.2s ease'
//       }}>
//         ▼
//       </span>
//     </button>
    
//     {expanded && (
//       <div style={{
//         background: '#FAFBFC',
//         borderTop: '1px solid #F3F4F6'
//       }}>
//         {children}
//       </div>
//     )}
//   </div>
// )

// // Reusable Filter Option Component for Sort
// const FilterOption = ({ checked, onChange, label }) => (
//   <label style={{
//     display: 'flex',
//     alignItems: 'center',
//     padding: '8px 0',
//     cursor: 'pointer',
//     fontSize: '14px',
//     color: '#374151',
//     transition: 'color 0.2s ease'
//   }}>
//     <input
//       type="radio"
//       name="sort"
//       checked={checked}
//       onChange={onChange}
//       style={{
//         marginRight: '12px',
//         width: '16px',
//         height: '16px',
//         accentColor: '#6366F1'
//       }}
//     />
//     <span style={{ flex: 1 }}>
//       {label}
//     </span>
//   </label>
// )

// export default ProfessionalSidebar















// src/components/homepagecomponent/ProfessionalSidebar.jsx - Updated with nested category structure
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Global base URL variable
const API_BASE_URL = 'http://localhost:8000'

const ProfessionalSidebar = ({ isOpen, onClose, onFiltersChange, filters }) => {
  const [categories, setCategories] = useState([])
  const [subcategoriesByCategory, setSubcategoriesByCategory] = useState({})
  const [expandedCategories, setExpandedCategories] = useState({})
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [localFilters, setLocalFilters] = useState({
    category_id: '',
    subcategory_id: '',
    min_price: '',
    max_price: '',
    sort_by: 'name',
    sort_order: 'asc',
    ...filters
  })
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    sort: true
  })

  useEffect(() => {
    fetchCategories()
    fetchPriceRange()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/categories`)
      setCategories(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/categories/${categoryId}/subcategories`)
      setSubcategoriesByCategory(prev => ({
        ...prev,
        [categoryId]: response.data
      }))
    } catch (error) {
      console.error('Error fetching subcategories:', error)
      setSubcategoriesByCategory(prev => ({
        ...prev,
        [categoryId]: []
      }))
    }
  }

  const fetchPriceRange = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/price-range`)
      setPriceRange({
        min: Math.floor(response.data.min_price),
        max: Math.ceil(response.data.max_price)
      })
    } catch (error) {
      console.error('Error fetching price range:', error)
      setPriceRange({ min: 0, max: 10000 })
    }
  }

  const handleCategoryClick = async (categoryId) => {
    const categoryIdStr = categoryId.toString()
    
    // If clicking the same category that's already selected, deselect it
    if (localFilters.category_id === categoryIdStr) {
      const newFilters = { 
        ...localFilters, 
        category_id: '', 
        subcategory_id: '' 
      }
      setLocalFilters(newFilters)
      onFiltersChange(newFilters)
      setExpandedCategories(prev => ({
        ...prev,
        [categoryIdStr]: false
      }))
      return
    }

    // Select new category and clear subcategory
    const newFilters = { 
      ...localFilters, 
      category_id: categoryIdStr, 
      subcategory_id: '' 
    }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)

    // Expand the category to show subcategories
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIdStr]: true
    }))

    // Fetch subcategories if not already fetched
    if (!subcategoriesByCategory[categoryIdStr]) {
      await fetchSubcategories(categoryIdStr)
    }
  }

  const handleSubcategoryClick = (subcategoryId) => {
    const subcategoryIdStr = subcategoryId.toString()
    
    // If clicking the same subcategory, deselect it
    if (localFilters.subcategory_id === subcategoryIdStr) {
      const newFilters = { ...localFilters, subcategory_id: '' }
      setLocalFilters(newFilters)
      onFiltersChange(newFilters)
    } else {
      // Select new subcategory
      const newFilters = { ...localFilters, subcategory_id: subcategoryIdStr }
      setLocalFilters(newFilters)
      onFiltersChange(newFilters)
    }
  }

  const handleFilterChange = (key, value) => {
    console.log(`Filter change: ${key} = ${value}`)
    
    let cleanValue = value
    
    if (key === 'min_price' || key === 'max_price') {
      if (value === '' || value === null || value === undefined) {
        cleanValue = ''
      } else {
        const numValue = parseFloat(value)
        if (isNaN(numValue) || numValue < 0) {
          cleanValue = ''
        } else {
          cleanValue = numValue.toString()
        }
      }
    }
    
    const newFilters = { ...localFilters, [key]: cleanValue }
    setLocalFilters(newFilters)
    
    // Debounce price changes
    if (key === 'min_price' || key === 'max_price') {
      if (window.priceFilterTimeout) {
        clearTimeout(window.priceFilterTimeout)
      }
      
      window.priceFilterTimeout = setTimeout(() => {
        onFiltersChange(newFilters)
      }, 800)
    } else {
      onFiltersChange(newFilters)
    }
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      category_id: '',
      subcategory_id: '',
      min_price: '',
      max_price: '',
      sort_by: 'name',
      sort_order: 'asc'
    }
    
    setExpandedCategories({})
    
    if (window.priceFilterTimeout) {
      clearTimeout(window.priceFilterTimeout)
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

  const toggleCategoryExpansion = (categoryId) => {
    const categoryIdStr = categoryId.toString()
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIdStr]: !prev[categoryIdStr]
    }))
    
    // Fetch subcategories if expanding and not already fetched
    if (!expandedCategories[categoryIdStr] && !subcategoriesByCategory[categoryIdStr]) {
      fetchSubcategories(categoryIdStr)
    }
  }

  const activeFiltersCount = Object.values(localFilters).filter(
    value => value !== '' && value !== 'name' && value !== 'asc'
  ).length

  return (
    <>
      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        top: '70px', // Below header
        left: isOpen ? '0' : '-320px',
        width: '320px',
        height: 'calc(100vh - 70px)',
        background: 'white',
        borderRight: '1px solid #E5E7EB',
        transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isOpen ? '4px 0 10px rgba(0, 0, 0, 0.1)' : 'none',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        {/* Sidebar Header */}


        {/* Scrollable Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden'
        }}>
          {/* Categories with Nested Subcategories */}
          <FilterSection
            title="Categories"
            icon="📂"
            expanded={expandedSections.categories}
            onToggle={() => toggleSection('categories')}
          >
            <div style={{ padding: '8px 0' }}>
              {/* All Categories Option */}
              <div
                onClick={() => {
                  if (localFilters.category_id !== '') {
                    const newFilters = { ...localFilters, category_id: '', subcategory_id: '' }
                    setLocalFilters(newFilters)
                    onFiltersChange(newFilters)
                    setExpandedCategories({})
                  }
                }}
                style={{
                  padding: '12px 24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: localFilters.category_id === '' ? '#EFF6FF' : 'transparent',
                  borderLeft: localFilters.category_id === '' ? '4px solid #3B82F6' : '4px solid transparent',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  if (localFilters.category_id !== '') {
                    e.target.style.background = '#F9FAFB'
                  }
                }}
                onMouseOut={(e) => {
                  if (localFilters.category_id !== '') {
                    e.target.style.background = 'transparent'
                  }
                }}
              >
                <span style={{ 
                  fontSize: '14px', 
                  color: localFilters.category_id === '' ? '#1D4ED8' : '#374151',
                  fontWeight: localFilters.category_id === '' ? '600' : '400'
                }}>
                  All Categories
                </span>
              </div>

              {/* Category List */}
              {categories.map((category) => {
                const categoryId = category.category_id || category.id
                const isSelected = localFilters.category_id === categoryId.toString()
                const isExpanded = expandedCategories[categoryId.toString()]
                const subcategories = subcategoriesByCategory[categoryId.toString()] || []

                return (
                  <div key={categoryId}>
                    {/* Category Item */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: isSelected ? '#EFF6FF' : 'transparent',
                      borderLeft: isSelected ? '4px solid #3B82F6' : '4px solid transparent',
                      transition: 'all 0.2s ease'
                    }}>
                      <div
                        onClick={() => handleCategoryClick(categoryId)}
                        style={{
                          flex: 1,
                          padding: '12px 24px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                        onMouseOver={(e) => {
                          if (!isSelected) {
                            e.target.closest('div').style.background = '#F9FAFB'
                          }
                        }}
                        onMouseOut={(e) => {
                          if (!isSelected) {
                            e.target.closest('div').style.background = 'transparent'
                          }
                        }}
                      >
                        <span style={{ 
                          fontSize: '14px', 
                          color: isSelected ? '#1D4ED8' : '#374151',
                          fontWeight: isSelected ? '600' : '400'
                        }}>
                          {category.name}
                          {category.product_count && (
                            <span style={{ 
                              color: isSelected ? '#60A5FA' : '#9CA3AF', 
                              fontSize: '13px', 
                              fontWeight: '400',
                              marginLeft: '4px'
                            }}>
                              ({category.product_count})
                            </span>
                          )}
                        </span>
                      </div>
                      
                      {/* Expand/Collapse Button for Subcategories */}
                      {isSelected && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleCategoryExpansion(categoryId)
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            color: '#3B82F6',
                            fontSize: '14px',
                            fontWeight: '600'
                          }}
                        >
                          {isExpanded ? '−' : '+'}
                        </button>
                      )}
                    </div>

                    {/* Subcategories */}
                    {isSelected && isExpanded && subcategories.length > 0 && (
                      <div style={{ 
                        background: '#F8FAFC', 
                        borderLeft: '4px solid #3B82F6',
                        marginLeft: '0'
                      }}>
                        {/* All Subcategories Option */}
                        <div
                          onClick={() => {
                            if (localFilters.subcategory_id !== '') {
                              const newFilters = { ...localFilters, subcategory_id: '' }
                              setLocalFilters(newFilters)
                              onFiltersChange(newFilters)
                            }
                          }}
                          style={{
                            padding: '10px 44px',
                            cursor: 'pointer',
                            background: localFilters.subcategory_id === '' ? '#DBEAFE' : 'transparent',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            if (localFilters.subcategory_id !== '') {
                              e.target.style.background = '#E2E8F0'
                            }
                          }}
                          onMouseOut={(e) => {
                            if (localFilters.subcategory_id !== '') {
                              e.target.style.background = 'transparent'
                            }
                          }}
                        >
                          <span style={{ 
                            fontSize: '13px', 
                            color: localFilters.subcategory_id === '' ? '#1E40AF' : '#64748B',
                            fontWeight: localFilters.subcategory_id === '' ? '600' : '400'
                          }}>
                            All Subcategories
                          </span>
                        </div>

                        {subcategories.map((subcategory) => {
                          const subcategoryId = subcategory.subcategory_id || subcategory.id
                          const isSubSelected = localFilters.subcategory_id === subcategoryId.toString()

                          return (
                            <div
                              key={subcategoryId}
                              onClick={() => handleSubcategoryClick(subcategoryId)}
                              style={{
                                padding: '10px 44px',
                                cursor: 'pointer',
                                background: isSubSelected ? '#DBEAFE' : 'transparent',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseOver={(e) => {
                                if (!isSubSelected) {
                                  e.target.style.background = '#E2E8F0'
                                }
                              }}
                              onMouseOut={(e) => {
                                if (!isSubSelected) {
                                  e.target.style.background = 'transparent'
                                }
                              }}
                            >
                              <span style={{ 
                                fontSize: '13px', 
                                color: isSubSelected ? '#1E40AF' : '#64748B',
                                fontWeight: isSubSelected ? '600' : '400'
                              }}>
                                {subcategory.name}
                                {subcategory.product_count && (
                                  <span style={{ 
                                    color: isSubSelected ? '#60A5FA' : '#94A3B8', 
                                    fontSize: '12px', 
                                    fontWeight: '400',
                                    marginLeft: '4px'
                                  }}>
                                    ({subcategory.product_count})
                                  </span>
                                )}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </FilterSection>

          {/* Price Filter */}
          <FilterSection
            title="Price Range"
            icon="💰"
            expanded={expandedSections.price}
            onToggle={() => toggleSection('price')}
          >
            <div style={{ padding: '0 24px 16px' }}>
              {/* Price Range Display */}
              <div style={{
                fontSize: '12px',
                color: '#6B7280',
                marginBottom: '16px',
                padding: '8px 12px',
                background: '#F9FAFB',
                borderRadius: '6px',
                border: '1px solid #E5E7EB'
              }}>
                Available: ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
              </div>

              {/* Price Input Fields */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    Min Price
                  </label>
                  <input
                    type="number"
                    value={localFilters.min_price}
                    onChange={(e) => handleFilterChange('min_price', e.target.value)}
                    placeholder={`₹${priceRange.min}`}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6366F1'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    Max Price
                  </label>
                  <input
                    type="number"
                    value={localFilters.max_price}
                    onChange={(e) => handleFilterChange('max_price', e.target.value)}
                    placeholder={`₹${priceRange.max}`}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6366F1'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>

              {/* Quick Price Ranges */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Quick Select:
                </label>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  {[
                    { label: 'Under ₹500', min: '', max: '500' },
                    { label: '₹500 - ₹1,000', min: '500', max: '1000' },
                    { label: '₹1,000 - ₹5,000', min: '1000', max: '5000' },
                    { label: '₹5,000 - ₹10,000', min: '5000', max: '10000' },
                    { label: 'Over ₹10,000', min: '10000', max: '' }
                  ].map((range, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleFilterChange('min_price', range.min)
                        handleFilterChange('max_price', range.max)
                      }}
                      style={{
                        padding: '8px 12px',
                        background: localFilters.min_price === range.min && localFilters.max_price === range.max 
                          ? '#EFF6FF' : '#F9FAFB',
                        color: localFilters.min_price === range.min && localFilters.max_price === range.max 
                          ? '#1D4ED8' : '#374151',
                        border: `1px solid ${localFilters.min_price === range.min && localFilters.max_price === range.max 
                          ? '#DBEAFE' : '#E5E7EB'}`,
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        fontFamily: 'inherit'
                      }}
                      onMouseOver={(e) => {
                        if (!(localFilters.min_price === range.min && localFilters.max_price === range.max)) {
                          e.target.style.background = '#F3F4F6'
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!(localFilters.min_price === range.min && localFilters.max_price === range.max)) {
                          e.target.style.background = '#F9FAFB'
                        }
                      }}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Price Filter */}
              {(localFilters.min_price || localFilters.max_price) && (
                <button
                  onClick={() => {
                    handleFilterChange('min_price', '')
                    handleFilterChange('max_price', '')
                  }}
                  style={{
                    marginTop: '12px',
                    padding: '6px 12px',
                    background: 'none',
                    border: 'none',
                    color: '#DC2626',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontFamily: 'inherit'
                  }}
                >
                  Clear Price Filter
                </button>
              )}
            </div>
          </FilterSection>

          {/* Sort Filter */}
          <FilterSection
            title="Sort By"
            icon="🔄"
            expanded={expandedSections.sort}
            onToggle={() => toggleSection('sort')}
          >
            <div style={{ padding: '0 24px 16px' }}>
              {[
                { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
                { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
                { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
                { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
                { label: 'Newest First', sort_by: 'created_at', sort_order: 'desc' },
                { label: 'Oldest First', sort_by: 'created_at', sort_order: 'asc' }
              ].map((option, index) => (
                <FilterOption
                  key={index}
                  checked={localFilters.sort_by === option.sort_by && localFilters.sort_order === option.sort_order}
                  onChange={() => {
                    handleFilterChange('sort_by', option.sort_by)
                    handleFilterChange('sort_order', option.sort_order)
                  }}
                  label={option.label}
                />
              ))}
            </div>
          </FilterSection>
        </div>
      </div>
    </>
  )
}

// Reusable Filter Section Component
const FilterSection = ({ title, icon, expanded, onToggle, children }) => (
  <div style={{ borderBottom: '1px solid #F3F4F6' }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        padding: '20px 24px',
        background: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '15px',
        fontWeight: '600',
        color: '#1F2937',
        fontFamily: 'inherit',
        transition: 'background-color 0.2s ease'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#F9FAFB'}
      onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '16px' }}>{icon}</span>
        {title}
      </div>
      <span style={{
        fontSize: '14px',
        color: '#9CA3AF',
        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease'
      }}>
        ▼
      </span>
    </button>
    
    {expanded && (
      <div style={{
        background: '#FAFBFC',
        borderTop: '1px solid #F3F4F6'
      }}>
        {children}
      </div>
    )}
  </div>
)

// Reusable Filter Option Component for Sort
const FilterOption = ({ checked, onChange, label }) => (
  <label style={{
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#374151',
    transition: 'color 0.2s ease'
  }}>
    <input
      type="radio"
      name="sort"
      checked={checked}
      onChange={onChange}
      style={{
        marginRight: '12px',
        width: '16px',
        height: '16px',
        accentColor: '#6366F1'
      }}
    />
    <span style={{ flex: 1 }}>
      {label}
    </span>
  </label>
)

export default ProfessionalSidebar