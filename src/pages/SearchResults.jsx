// src/pages/SearchResults.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchAPI } from '../services/api/searchAPI';
import Header from '../components/homepagecomponent/AppHeaders';
import ProfessionalSidebar from '../components/homepagecomponent/ProfessionalSidebar';
import ProductGrid from '../components/homepagecomponent/ProductGrid';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Parse initial state from URL
  const initialQuery = searchParams.get('q') || '';
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const initialSize = parseInt(searchParams.get('size')) || 20;

  // Filter state for ProfessionalSidebar
  const [sidebarFilters, setSidebarFilters] = useState({
    category_id: searchParams.get('category_id') || '',
    subcategory_id: searchParams.get('subcategory_id') || '',
    min_price: searchParams.get('min_price') || '',
    max_price: searchParams.get('max_price') || '',
    sort_by: 'relevance', // Default internal sort
    sort_order: '',
    specifications: {}
  });

  // Check screen size for sidebar
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Update sidebar filters from URL when URL changes
  useEffect(() => {
    const sortByParam = searchParams.get('sort_by');
    let mappedSortBy = 'relevance';
    let mappedSortOrder = '';

    // Map URL sort param to sidebar state
    if (sortByParam === 'price_low') {
      mappedSortBy = 'price';
      mappedSortOrder = 'asc';
    } else if (sortByParam === 'price_high') {
      mappedSortBy = 'price';
      mappedSortOrder = 'desc';
    } else if (sortByParam === 'newest') {
      mappedSortBy = 'created_at';
      mappedSortOrder = 'desc';
    } else if (sortByParam === 'popularity') {
      mappedSortBy = 'popularity';
    }

    setSidebarFilters(prev => ({
      ...prev,
      category_id: searchParams.get('category_id') || '',
      subcategory_id: searchParams.get('subcategory_id') || '',
      min_price: searchParams.get('min_price') || '',
      max_price: searchParams.get('max_price') || '',
      sort_by: mappedSortBy,
      sort_order: mappedSortOrder
    }));

    if (initialQuery) {
      performSearch();
    }
  }, [searchParams]);

  // Construct API params from sidebar filters
  const getSearchParams = () => {
    let sortBy = sidebarFilters.sort_by;

    // Map sidebar sort to API sort string
    if (sidebarFilters.sort_by === 'price') {
      sortBy = sidebarFilters.sort_order === 'asc' ? 'price_low' : 'price_high';
    } else if (sidebarFilters.sort_by === 'created_at') {
      sortBy = 'newest';
    } else if (sidebarFilters.sort_by === 'popularity') {
      sortBy = 'popularity';
    } else {
      sortBy = 'relevance';
    }

    return {
      query: initialQuery,
      categoryId: sidebarFilters.category_id || undefined,
      subcategoryId: sidebarFilters.subcategory_id || undefined,
      minPrice: sidebarFilters.min_price ? parseFloat(sidebarFilters.min_price) : undefined,
      maxPrice: sidebarFilters.max_price ? parseFloat(sidebarFilters.max_price) : undefined,
      sortBy: sortBy,
      page: initialPage,
      size: initialSize,
      inStockOnly: true // Default behavior
    };
  };

  const performSearch = async () => {
    if (!initialQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const apiParams = getSearchParams();
      const results = await searchAPI.searchProducts(apiParams);

      // Transform results for ProductGrid if necessary
      if (results && results.products) {
        results.products = results.products.map(p => ({
          ...p,
          image_url: p.primary_image_url || p.image_url, // Map image url
          // Ensure category object exists for ProductGrid
          category: p.category_name ? { name: p.category_name } : undefined,
          base_price: (p.price || 0) * 100 // Map price to base_price (ProductCard expects cents)
        }));
      }

      setSearchResults(results);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSidebarFiltersChange = (newLocalFilters) => {
    const params = new URLSearchParams(searchParams);

    // Update params based on new filters
    if (newLocalFilters.category_id) params.set('category_id', newLocalFilters.category_id);
    else params.delete('category_id');

    if (newLocalFilters.subcategory_id) params.set('subcategory_id', newLocalFilters.subcategory_id);
    else params.delete('subcategory_id');

    if (newLocalFilters.min_price) params.set('min_price', newLocalFilters.min_price);
    else params.delete('min_price');

    if (newLocalFilters.max_price) params.set('max_price', newLocalFilters.max_price);
    else params.delete('max_price');

    // Handle Sort Mapping for URL
    let urlSort = 'relevance';
    if (newLocalFilters.sort_by === 'price') {
      urlSort = newLocalFilters.sort_order === 'asc' ? 'price_low' : 'price_high';
    } else if (newLocalFilters.sort_by === 'created_at') {
      urlSort = 'newest';
    } else if (newLocalFilters.sort_by === 'popularity') {
      urlSort = 'popularity';
    }

    if (urlSort !== 'relevance') params.set('sort_by', urlSort);
    else params.delete('sort_by');

    // Reset page on filter change
    params.set('page', '1');

    setSearchParams(params);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query) => {
    // If search query changes, update URL and reset page
    const params = new URLSearchParams(searchParams);
    params.set('q', query);
    params.set('page', '1');
    setSearchParams(params);
  };

  const handleAddToCart = (product) => {
    // Re-implement notification logic from Dashboard
    console.log('Added to cart', product);
    // NOTE: For brevity, I'll use a simple alert or reuse the notification logic if it was a reusable component.
    // Since it was inline in Dashboard, I'll copy a simplified version.
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 80px; right: 20px; background: #10B981; color: white;
        padding: 16px 20px; border-radius: 12px; z-index: 10000; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
      `;
    notification.textContent = `Added ${product.name} to Cart`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const handleViewDetails = (product) => {
    navigate(`/product/${product.product_id}`);
  };

  const sortOptions = [
    { label: 'Relevance', sort_by: 'relevance', sort_order: '' },
    { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
    { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
    { label: 'Newest Arrivals', sort_by: 'created_at', sort_order: 'desc' },
    { label: 'Best Sellers', sort_by: 'popularity', sort_order: '' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <Header
        onSearch={handleSearch}
        searchQuery={initialQuery}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <div style={{
        display: 'flex',
        minHeight: 'calc(100vh - 70px)',
        marginTop: '70px'
      }}>
        <ProfessionalSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onFiltersChange={handleSidebarFiltersChange}
          filters={sidebarFilters}
          sortOptions={sortOptions}
        />

        <main style={{
          flex: 1,
          marginLeft: sidebarOpen ? '320px' : '0',
          transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: '#F8FAFC',
          minHeight: 'calc(100vh - 70px)'
        }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '24px' }}>
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              marginBottom: '24px'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1F2937', marginBottom: '8px' }}>
                Search Results for "{initialQuery}"
              </h2>
              {searchResults && (
                <p style={{ color: '#6B7280' }}>
                  Found {searchResults.total} results
                  {searchResults.took ? ` (${searchResults.took}ms)` : ''}
                </p>
              )}
            </div>

            <ProductGrid
              products={searchResults ? searchResults.products : []}
              loading={loading}
              error={error}
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
              totalCount={searchResults ? searchResults.total : 0}
              currentPage={initialPage}
              totalPages={searchResults ? searchResults.total_pages : 0}
              onPageChange={handlePageChange}
            />
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
    </div>
  );
};

export default SearchResults;