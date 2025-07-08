// src/pages/SearchResults.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchAPI } from '../services/api/searchAPI';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Search filters state
  const [filters, setFilters] = useState({
    query: searchParams.get('q') || '',
    categoryId: searchParams.get('category_id') || '',
    subcategoryId: searchParams.get('subcategory_id') || '',
    minPrice: searchParams.get('min_price') || '',
    maxPrice: searchParams.get('max_price') || '',
    brand: searchParams.get('brand') || '',
    sortBy: searchParams.get('sort_by') || 'relevance',
    inStockOnly: searchParams.get('in_stock_only') !== 'false',
    page: parseInt(searchParams.get('page')) || 1,
    size: parseInt(searchParams.get('size')) || 20
  });

  // Perform search
  const performSearch = async (searchFilters = filters) => {
    if (!searchFilters.query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await searchAPI.searchProducts({
        query: searchFilters.query,
        categoryId: searchFilters.categoryId || undefined,
        subcategoryId: searchFilters.subcategoryId || undefined,
        minPrice: searchFilters.minPrice ? parseFloat(searchFilters.minPrice) : undefined,
        maxPrice: searchFilters.maxPrice ? parseFloat(searchFilters.maxPrice) : undefined,
        brand: searchFilters.brand || undefined,
        sortBy: searchFilters.sortBy,
        inStockOnly: searchFilters.inStockOnly,
        page: searchFilters.page,
        size: searchFilters.size
      });

      setSearchResults(results);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Update URL params when filters change
  const updateURL = (newFilters) => {
    const params = new URLSearchParams();
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== '' && value !== false) {
        if (key === 'inStockOnly' && value === true) {
          // Only add if explicitly false
          return;
        }
        params.set(key === 'query' ? 'q' : key, value.toString());
      }
    });

    setSearchParams(params);
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value, page: 1 }; // Reset to page 1 when filtering
    setFilters(newFilters);
    updateURL(newFilters);
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    const newFilters = { ...filters, page: newPage };
    setFilters(newFilters);
    updateURL(newFilters);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle sort change
  const handleSortChange = (sortBy) => {
    const newFilters = { ...filters, sortBy, page: 1 };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  // Initial search and search when filters change
  useEffect(() => {
    if (filters.query) {
      performSearch();
    }
  }, [searchParams]);

  // Handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Loading state
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '400px',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <LoadingSpinner size="large" />
        <p style={{ color: '#666', fontSize: '16px' }}>Searching products...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px',
        color: '#d73027',
        fontSize: '16px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
        <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#d73027' }}>
          Search Error
        </h3>
        <p style={{ marginBottom: '20px' }}>{error}</p>
        <button 
          onClick={() => performSearch()}
          style={{
            padding: '12px 24px',
            background: '#ff9900',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  // No query state
  if (!filters.query) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px',
        fontSize: '16px',
        color: '#666',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
        <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#333' }}>
          Start Your Search
        </h3>
        <p>Enter a search query in the header to find products</p>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '1400px', 
      margin: '0 auto', 
      padding: '20px',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {/* Filters Sidebar */}
        <div style={{ 
          width: '280px', 
          background: '#fff', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          height: 'fit-content',
          position: 'sticky',
          top: '100px'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#333',
            borderBottom: '2px solid #ff9900',
            paddingBottom: '8px'
          }}>
            Filters
          </h3>

          {/* Price Range Filter */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              marginBottom: '12px',
              color: '#555'
            }}>
              Price Range
            </h4>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <span style={{ color: '#999', fontSize: '14px' }}>to</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* In Stock Filter */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              fontSize: '14px',
              cursor: 'pointer',
              padding: '8px 0'
            }}>
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => handleFilterChange('inStockOnly', e.target.checked)}
                style={{ transform: 'scale(1.1)' }}
              />
              <span>Only show in-stock items</span>
            </label>
          </div>

          {/* Category Facets */}
          {searchResults?.facets?.categories && searchResults.facets.categories.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: '#555'
              }}>
                Categories
              </h4>
              {searchResults.facets.categories.slice(0, 8).map((category) => (
                <label key={category.name} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  fontSize: '14px',
                  marginBottom: '8px',
                  cursor: 'pointer',
                  padding: '4px 0'
                }}>
                  <input
                    type="radio"
                    name="category"
                    checked={filters.categoryId === category.name}
                    onChange={() => handleFilterChange('categoryId', category.name)}
                  />
                  <span style={{ flex: 1 }}>{category.name}</span>
                  <span style={{ 
                    color: '#666', 
                    fontSize: '12px',
                    background: '#f0f0f0',
                    padding: '2px 6px',
                    borderRadius: '10px'
                  }}>
                    {category.count}
                  </span>
                </label>
              ))}
            </div>
          )}

          {/* Brand Facets */}
          {searchResults?.facets?.brands && searchResults.facets.brands.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: '#555'
              }}>
                Brands
              </h4>
              {searchResults.facets.brands.slice(0, 8).map((brand) => (
                <label key={brand.name} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  fontSize: '14px',
                  marginBottom: '8px',
                  cursor: 'pointer',
                  padding: '4px 0'
                }}>
                  <input
                    type="radio"
                    name="brand"
                    checked={filters.brand === brand.name}
                    onChange={() => handleFilterChange('brand', brand.name)}
                  />
                  <span style={{ flex: 1 }}>{brand.name}</span>
                  <span style={{ 
                    color: '#666', 
                    fontSize: '12px',
                    background: '#f0f0f0',
                    padding: '2px 6px',
                    borderRadius: '10px'
                  }}>
                    {brand.count}
                  </span>
                </label>
              ))}
            </div>
          )}

          {/* Clear Filters Button */}
          <button
            onClick={() => {
              const clearedFilters = {
                ...filters,
                categoryId: '',
                subcategoryId: '',
                minPrice: '',
                maxPrice: '',
                brand: '',
                page: 1
              };
              setFilters(clearedFilters);
              updateURL(clearedFilters);
            }}
            style={{
              width: '100%',
              padding: '12px',
              background: '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#666',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#e9ecef';
              e.target.style.borderColor = '#adb5bd';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#f8f9fa';
              e.target.style.borderColor = '#ddd';
            }}
          >
            Clear All Filters
          </button>
        </div>

        {/* Main Results Area */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Search Header */}
          <div style={{ 
            marginBottom: '20px',
            padding: '20px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h2 style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '24px', 
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Search Results for "{filters.query}"
                </h2>
                {searchResults && (
                  <p style={{ 
                    margin: 0, 
                    color: '#666', 
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>{searchResults.total.toLocaleString()} results found</span>
                    {searchResults.took && (
                      <>
                        <span>•</span>
                        <span>{searchResults.took}ms</span>
                      </>
                    )}
                  </p>
                )}
              </div>

              {/* Sort Options */}
              <select
                value={filters.sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                style={{
                  padding: '10px 14px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  background: '#fff',
                  cursor: 'pointer',
                  outline: 'none',
                  minWidth: '180px'
                }}
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {searchResults && searchResults.products.length > 0 ? (
            <>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '20px',
                marginBottom: '40px'
              }}>
                {searchResults.products.map((product) => (
                  <div
                    key={product.product_id}
                    onClick={() => handleProductClick(product.product_id)}
                    style={{
                      background: '#fff',
                      borderRadius: '8px',
                      padding: '16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      border: '1px solid #f0f0f0'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                      e.currentTarget.style.borderColor = '#ff9900';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = '#f0f0f0';
                    }}
                  >
                    {/* Product Image */}
                    <div style={{ 
                      width: '100%', 
                      height: '200px', 
                      background: '#f8f9fa',
                      borderRadius: '6px',
                      marginBottom: '12px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      {product.primary_image_url ? (
                        <img
                          src={product.primary_image_url}
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = '<div style="color: #999; font-size: 40px;">📦</div>';
                          }}
                        />
                      ) : (
                        <div style={{ color: '#999', fontSize: '40px' }}>📦</div>
                      )}
                      
                      {/* Stock badge */}
                      {product.stock_quantity <= 0 && (
                        <div style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: '#dc3545',
                          color: '#fff',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '600'
                        }}>
                          Out of Stock
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        margin: '0 0 8px 0',
                        lineHeight: '1.4',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        color: '#333'
                      }}>
                        {product.name}
                      </h3>

                      {product.brand && (
                        <p style={{ 
                          fontSize: '14px', 
                          color: '#666', 
                          margin: '0 0 8px 0',
                          fontWeight: '500'
                        }}>
                          {product.brand}
                        </p>
                      )}

                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '12px'
                      }}>
                        <span style={{ 
                          fontSize: '20px', 
                          fontWeight: '700', 
                          color: '#ff9900' 
                        }}>
                          ${product.price?.toFixed(2) || '0.00'}
                        </span>
                        
                        {product.stock_quantity > 0 ? (
                          <span style={{ 
                            fontSize: '12px', 
                            color: '#28a745',
                            fontWeight: '600',
                            background: '#d4edda',
                            padding: '2px 8px',
                            borderRadius: '12px'
                          }}>
                            In Stock ({product.stock_quantity})
                          </span>
                        ) : (
                          <span style={{ 
                            fontSize: '12px', 
                            color: '#dc3545',
                            fontWeight: '600',
                            background: '#f8d7da',
                            padding: '2px 8px',
                            borderRadius: '12px'
                          }}>
                            Out of Stock
                          </span>
                        )}
                      </div>

                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        {product.category_name && (
                          <span style={{ 
                            fontSize: '12px', 
                            color: '#666',
                            background: '#f8f9fa',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontWeight: '500'
                          }}>
                            {product.category_name}
                          </span>
                        )}
                        
                        {product.score && (
                          <span style={{ 
                            fontSize: '11px', 
                            color: '#999',
                            fontWeight: '500'
                          }}>
                            Relevance: {product.score.toFixed(1)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {searchResults.total_pages > 1 && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  gap: '8px',
                  padding: '20px',
                  background: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <button
                    onClick={() => handlePageChange(filters.page - 1)}
                    disabled={filters.page === 1}
                    style={{
                      padding: '10px 16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      background: filters.page === 1 ? '#f8f9fa' : '#fff',
                      cursor: filters.page === 1 ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: filters.page === 1 ? '#6c757d' : '#333'
                    }}
                  >
                    ← Previous
                  </button>

                  <div style={{ 
                    display: 'flex',
                    gap: '4px',
                    margin: '0 16px'
                  }}>
                    {Array.from({ length: Math.min(5, searchResults.total_pages) }, (_, i) => {
                      const pageNum = Math.max(1, Math.min(
                        searchResults.total_pages - 4,
                        filters.page - 2
                      )) + i;
                      
                      if (pageNum > searchResults.total_pages) return null;
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          style={{
                            padding: '8px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            background: pageNum === filters.page ? '#ff9900' : '#fff',
                            color: pageNum === filters.page ? '#fff' : '#333',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: pageNum === filters.page ? '600' : '400'
                          }}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <span style={{ 
                    padding: '0 8px', 
                    fontSize: '14px',
                    color: '#666'
                  }}>
                    Page {filters.page} of {searchResults.total_pages}
                  </span>

                  <button
                    onClick={() => handlePageChange(filters.page + 1)}
                    disabled={filters.page === searchResults.total_pages}
                    style={{
                      padding: '10px 16px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      background: filters.page === searchResults.total_pages ? '#f8f9fa' : '#fff',
                      cursor: filters.page === searchResults.total_pages ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: filters.page === searchResults.total_pages ? '#6c757d' : '#333'
                    }}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          ) : searchResults ? (
            /* No Results Found */
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🔍</div>
              <h3 style={{ 
                fontSize: '24px', 
                marginBottom: '12px', 
                color: '#333',
                fontWeight: '600'
              }}>
                No products found
              </h3>
              <p style={{ 
                color: '#666', 
                fontSize: '16px', 
                marginBottom: '24px',
                lineHeight: '1.5'
              }}>
                We couldn't find any products matching your search criteria.<br/>
                Try adjusting your filters or search terms.
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '12px', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={() => {
                    const clearedFilters = {
                      ...filters,
                      categoryId: '',
                      subcategoryId: '',
                      minPrice: '',
                      maxPrice: '',
                      brand: '',
                      page: 1
                    };
                    setFilters(clearedFilters);
                    updateURL(clearedFilters);
                  }}
                  style={{
                    padding: '12px 24px',
                    background: '#ff9900',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Clear Filters
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  style={{
                    padding: '12px 24px',
                    background: '#f8f9fa',
                    color: '#333',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Browse All Products
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;