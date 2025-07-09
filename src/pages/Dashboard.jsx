// ecommerce/src/components/pages/dashboard.jsx - Professional Design with Integrated Sidebar
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/homepagecomponent/AppHeaders'
import HeroBanner from '../components/homepagecomponent/HeroBanner'
import ProductGrid from '../components/homepagecomponent/ProductGrid'
import ProfessionalSidebar from '../components/homepagecomponent/ProfessionalSidebar'

const Homepage = () => {
  const navigate = useNavigate()
  
  // State management
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [filters, setFilters] = useState({
    category_id: '',
    subcategory_id: '',
    min_price: '',
    max_price: '',
    sort_by: 'name',
    sort_order: 'asc'
  })
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 20,
    total_count: 0,
    total_pages: 0
  })

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Fetch products when filters, search, or pagination changes
  useEffect(() => {
    fetchProducts()
  }, [filters, searchQuery, pagination.page])

  const fetchProducts = async (customFilters = null, page = null) => {
    try {
      setLoading(true)
      setError(null)

      const filtersToUse = customFilters || filters
      const pageToUse = page || pagination.page

      console.log('Fetching products with filters:', filtersToUse)

      // Build query parameters
      const params = new URLSearchParams({
        page: pageToUse.toString(),
        per_page: pagination.per_page.toString(),
        sort_by: filtersToUse.sort_by,
        sort_order: filtersToUse.sort_order
      })

      // Add optional filters with proper validation
      if (filtersToUse.category_id && filtersToUse.category_id !== '') {
        params.append('category_id', filtersToUse.category_id.toString())
      }
      if (filtersToUse.subcategory_id && filtersToUse.subcategory_id !== '') {
        params.append('subcategory_id', filtersToUse.subcategory_id.toString())
      }
      if (filtersToUse.min_price && filtersToUse.min_price !== '') {
        const minPrice = parseFloat(filtersToUse.min_price)
        if (!isNaN(minPrice) && minPrice > 0) {
          params.append('min_price', minPrice.toString())
        }
      }
      if (filtersToUse.max_price && filtersToUse.max_price !== '') {
        const maxPrice = parseFloat(filtersToUse.max_price)
        if (!isNaN(maxPrice) && maxPrice > 0) {
          params.append('max_price', maxPrice.toString())
        }
      }
      if (searchQuery && searchQuery.trim() !== '') {
        params.append('search', searchQuery.trim())
      }

      const apiUrl = `http://localhost:8000/api/v1/products?${params}`
      console.log('API URL:', apiUrl)

      const response = await fetch(apiUrl)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Error Response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)
      
      setProducts(data.products || [])
      setPagination(prev => ({
        ...prev,
        total_count: data.total_count || 0,
        total_pages: data.total_pages || 0,
        page: pageToUse
      }))

    } catch (error) {
      console.error('Error fetching products:', error)
      setError(error.message)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  // Event handlers
  const handleSearch = (query) => {
    console.log('Search query changed:', query)
    setSearchQuery(query)
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handleFiltersChange = (newFilters, filteredData = null) => {
    console.log('Filters changed:', newFilters)
    
    const cleanedFilters = {
      ...newFilters,
      category_id: newFilters.category_id || '',
      subcategory_id: newFilters.subcategory_id || '',
      min_price: newFilters.min_price && !isNaN(parseFloat(newFilters.min_price)) ? newFilters.min_price : '',
      max_price: newFilters.max_price && !isNaN(parseFloat(newFilters.max_price)) ? newFilters.max_price : '',
      sort_by: newFilters.sort_by || 'name',
      sort_order: newFilters.sort_order || 'asc'
    }
    
    setFilters(cleanedFilters)
    setPagination(prev => ({ ...prev, page: 1 }))
    
    if (filteredData && filteredData.products) {
      setProducts(filteredData.products || [])
      setPagination(prev => ({
        ...prev,
        total_count: filteredData.total_count || 0,
        total_pages: filteredData.total_pages || 0,
        page: 1
      }))
      setLoading(false)
    } else {
      fetchProducts(cleanedFilters, 1)
    }
  }

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }))
    const productsSection = document.getElementById('products-section')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product)
    
    // Enhanced notification
    const notification = document.createElement('div')
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
      color: white;
      padding: 16px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
      z-index: 10000;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 500;
      animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 320px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    `
    
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="
          width: 32px; 
          height: 32px; 
          background: rgba(255, 255, 255, 0.2); 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          font-size: 16px;
        ">✓</div>
        <div>
          <div style="font-weight: 600; margin-bottom: 2px; font-size: 14px;">Added to Cart</div>
          <div style="font-size: 13px; opacity: 0.9; line-height: 1.3;">${product.name}</div>
        </div>
      </div>
    `
    
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 400)
    }, 3000)
  }

  const handleViewDetails = (product) => {
    navigate(`/product/${product.product_id}`)
  }

  const handleShopNow = () => {
    const productsSection = document.getElementById('products-section')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const getFilterDisplayValue = (key, value) => {
    switch (key) {
      case 'min_price':
        return value ? `Min: ₹${value}` : ''
      case 'max_price':
        return value ? `Max: ₹${value}` : ''
      case 'category_id':
        return value ? `Category: ${value}` : ''
      case 'subcategory_id':
        return value ? `Subcategory: ${value}` : ''
      default:
        return value
    }
  }

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => 
    value && value !== '' && key !== 'sort_by' && key !== 'sort_order'
  ).length

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <Header 
        onSearch={handleSearch}
        searchQuery={searchQuery}
        onToggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />

      {/* Main Layout */}
      <div style={{
        display: 'flex',
        minHeight: 'calc(100vh - 70px)', // Subtract header height
        marginTop: '70px' // Header height
      }}>
        {/* Professional Sidebar */}
        <ProfessionalSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onFiltersChange={handleFiltersChange}
          filters={filters}
        />

        {/* Main Content */}
        <main style={{
          flex: 1,
          marginLeft: sidebarOpen ? '320px' : '0',
          transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: '#F8FAFC',
          minHeight: 'calc(100vh - 70px)'
        }}>
          {/* Content Container */}
          <div style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '24px'
          }}>
            {/* Hero Section */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '16px',
              padding: '40px',
              marginBottom: '32px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.3
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h1 style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.025em'
                }}>
                  Discover Amazing Products
                </h1>
                <p style={{
                  fontSize: '18px',
                  opacity: 0.9,
                  margin: '0 0 24px 0',
                  maxWidth: '600px'
                }}>
                  Find the perfect products from our curated collection of quality items at unbeatable prices.
                </p>
                <button
                  onClick={handleShopNow}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.3)'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>

            {/* Products Section */}
            <div id="products-section" style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}>
              {/* Section Header */}
              <div style={{
                padding: '24px 32px',
                borderBottom: '1px solid #E5E7EB',
                background: 'white'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <h2 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#1F2937',
                      margin: '0'
                    }}>
                      Products
                    </h2>
                    {searchQuery && (
                      <div style={{
                        padding: '6px 12px',
                        background: '#EFF6FF',
                        color: '#1D4ED8',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>
                        "{searchQuery}"
                      </div>
                    )}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <div style={{
                      padding: '8px 16px',
                      background: '#F3F4F6',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: '#6B7280',
                      fontWeight: '500'
                    }}>
                      {pagination.total_count} products
                    </div>
                    
                    {window.innerWidth <= 1024 && (
                      <button
                        onClick={toggleSidebar}
                        style={{
                          padding: '8px 16px',
                          background: '#6366F1',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        🔍 Filters
                        {activeFiltersCount > 0 && (
                          <span style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '10px',
                            padding: '2px 6px',
                            fontSize: '12px'
                          }}>
                            {activeFiltersCount}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Active Filters Display */}
                {activeFiltersCount > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #F3F4F6'
                  }}>
                    <span style={{ 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      color: '#6B7280',
                      marginRight: '8px'
                    }}>
                      Active Filters:
                    </span>
                    {Object.entries(filters).map(([key, value]) => {
                      if (!value || value === '' || key === 'sort_by' || key === 'sort_order') return null
                      
                      const displayValue = getFilterDisplayValue(key, value)
                      if (!displayValue) return null
                      
                      return (
                        <span key={key} style={{
                          padding: '4px 12px',
                          background: '#EFF6FF',
                          color: '#1D4ED8',
                          borderRadius: '16px',
                          fontSize: '13px',
                          fontWeight: '500',
                          border: '1px solid #DBEAFE'
                        }}>
                          {displayValue}
                        </span>
                      )
                    })}
                    <button
                      onClick={() => {
                        const clearedFilters = {
                          category_id: '',
                          subcategory_id: '',
                          min_price: '',
                          max_price: '',
                          sort_by: 'name',
                          sort_order: 'asc'
                        }
                        setFilters(clearedFilters)
                        setPagination(prev => ({ ...prev, page: 1 }))
                        fetchProducts(clearedFilters, 1)
                      }}
                      style={{
                        padding: '4px 12px',
                        background: '#FEF2F2',
                        color: '#DC2626',
                        border: '1px solid #FECACA',
                        borderRadius: '16px',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Clear All ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Products Grid */}
              <div style={{ padding: '32px' }}>
                <ProductGrid
                  products={products}
                  loading={loading}
                  error={error}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                  totalCount={pagination.total_count}
                  currentPage={pagination.page}
                  totalPages={pagination.total_pages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>

            {/* Features Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}>
              {[
                { icon: '🚚', title: 'Free Shipping', desc: 'On orders over ₹999', color: '#10B981' },
                { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions', color: '#6366F1' },
                { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy', color: '#F59E0B' },
                { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance', color: '#EF4444' }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid #F3F4F6'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: `${feature.color}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    margin: '0 auto 20px',
                    border: `2px solid ${feature.color}25`
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1F2937',
                    margin: '0 0 8px 0'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && window.innerWidth <= 1024 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
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

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #F3F4F6;
          }

          ::-webkit-scrollbar-thumb {
            background: #D1D5DB;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #9CA3AF;
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            main {
              margin-left: 0 !important;
            }
          }

          /* Ensure proper layout on small screens */
          @media (max-width: 1024px) {
            main {
              margin-left: 0 !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Homepage