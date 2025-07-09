// src/components/homepagecomponent/ProductFilters.jsx - Updated with better price filter handling
import React, { useState, useEffect } from 'react'
import CategoryFilter from '../FilterSection/CategoryFilter'
import PriceFilter from '../FilterSection/PriceFilter'
import SortFilter from '../FilterSection/SortFilter'

const FixedProductFilters = ({ onFiltersChange, filters }) => {
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
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
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    subcategory: true,
    price: true,
    sort: true
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
  }, [])

  // Fetch subcategories when category changes
  useEffect(() => {
    if (localFilters.category_id && localFilters.category_id !== '') {
      fetchSubcategories(localFilters.category_id)
    } else {
      setSubcategories([])
      if (localFilters.subcategory_id && localFilters.subcategory_id !== '') {
        const clearedFilters = { ...localFilters, subcategory_id: '' }
        setLocalFilters(clearedFilters)
        onFiltersChange(clearedFilters)
      }
    }
  }, [localFilters.category_id])

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
        console.log('Price range fetched:', data)
      }
    } catch (error) {
      console.error('Error fetching price range:', error)
      // Set default values if API fails
      setPriceRange({ min: 0, max: 10000 })
    }
  }

  const handleFilterChange = (key, value) => {
    console.log(`Filter change: ${key} = ${value}`)
    
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
      // Handle price values
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
    
    // If category changes, clear subcategory
    if (key === 'category_id' && cleanValue !== localFilters.category_id) {
      newFilters.subcategory_id = ''
    }
    
    console.log('New filters:', newFilters)
    
    setLocalFilters(newFilters)
    
    // Don't call the parent onChange immediately for price fields to avoid too many API calls
    if (key === 'min_price' || key === 'max_price') {
      // Use a timeout to debounce price changes
      if (window.priceFilterTimeout) {
        clearTimeout(window.priceFilterTimeout)
      }
      
      window.priceFilterTimeout = setTimeout(() => {
        console.log('Applying price filter after debounce')
        onFiltersChange(newFilters)
      }, 800) // 800ms delay
    } else {
      // Apply other filters immediately
      onFiltersChange(newFilters)
    }
  }

  const clearFilters = () => {
    const clearedFilters = {
      category_id: '',
      subcategory_id: '',
      min_price: '',
      max_price: '',
      sort_by: 'name',
      sort_order: 'asc'
    }
    
    // Clear subcategories list
    setSubcategories([])
    
    // Clear any pending price filter timeout
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

  const activeFiltersCount = Object.values(localFilters).filter(
    value => value !== '' && value !== 'name' && value !== 'asc'
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

            {/* Subcategory Filter - Only show if category is selected AND subcategories exist */}
            {localFilters.category_id && localFilters.category_id !== '' && subcategories.length > 0 && (
              <SubcategoryFilter
                subcategories={subcategories}
                selectedSubcategory={localFilters.subcategory_id}
                onChange={(newSelected) => handleFilterChange('subcategory_id', newSelected)}
                expanded={expandedSections.subcategory}
                toggle={() => toggleSection('subcategory')}
              />
            )}

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