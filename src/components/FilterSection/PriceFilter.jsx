// PriceFilter.jsx - Complete implementation
import React from 'react';

const PriceFilter = ({ expanded, toggle, localFilters, onChange, priceRange }) => {
  const handlePriceChange = (key, value) => {
    // Validate price input
    if (value === '' || (!isNaN(value) && parseFloat(value) >= 0)) {
      onChange(key, value)
    }
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
          Price Range
        </span>
        <span style={{ fontSize: '12px', color: '#565959' }}>
          {expanded ? '−' : '+'}
        </span>
      </div>
      
      {expanded && (
        <div style={{ padding: '16px 20px' }}>
          {/* Price Range Display */}
          <div style={{ marginBottom: '12px', fontSize: '12px', color: '#565959' }}>
            ₹{priceRange.min} - ₹{priceRange.max}
          </div>

          {/* Price Input Fields */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#565959', marginBottom: '4px' }}>
                Min Price
              </label>
              <input
                type="number"
                value={localFilters.min_price}
                onChange={(e) => handlePriceChange('min_price', e.target.value)}
                placeholder={`₹${priceRange.min}`}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#565959', marginBottom: '4px' }}>
                Max Price
              </label>
              <input
                type="number"
                value={localFilters.max_price}
                onChange={(e) => handlePriceChange('max_price', e.target.value)}
                placeholder={`₹${priceRange.max}`}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}
              />
            </div>
          </div>

          {/* Predefined Price Ranges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '12px', color: '#565959', marginBottom: '4px' }}>
              Quick Select:
            </span>
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
                  onChange('min_price', range.min)
                  onChange('max_price', range.max)
                }}
                style={{
                  padding: '6px 8px',
                  background: 
                    localFilters.min_price === range.min && localFilters.max_price === range.max 
                      ? '#007185' : '#f8f9fa',
                  color: 
                    localFilters.min_price === range.min && localFilters.max_price === range.max 
                      ? 'white' : '#0f1111',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Clear Price Filter */}
          {(localFilters.min_price || localFilters.max_price) && (
            <button
              onClick={() => {
                onChange('min_price', '')
                onChange('max_price', '')
              }}
              style={{
                marginTop: '8px',
                padding: '6px 12px',
                background: 'none',
                border: 'none',
                color: '#007185',
                fontSize: '12px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Clear Price Filter
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceFilter;