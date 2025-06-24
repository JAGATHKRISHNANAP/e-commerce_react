import React, { useState, useEffect } from 'react'
import CategoryFilter from '../FilterSection/CategoryFilter'
import PriceFilter from '../FilterSection/PriceFilter'
import SortFilter from '../FilterSection/SortFilter'

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
            <CategoryFilter
  categories={categories}
  selectedCategories={localFilters.category_id}
  onChange={(newSelected) => handleFilterChange('category_id', newSelected)}
/>
            <PriceFilter
              expanded={expandedSections.price}
              toggle={() => toggleSection('price')}
              localFilters={localFilters}
              onChange={handleFilterChange}
              priceRange={priceRange}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default FixedProductFilters
