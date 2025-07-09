// SortFilter.jsx - Complete implementation
import React from 'react';

const SortFilter = ({ expanded, toggle, localFilters, onChange }) => {
  const handleSortChange = (sortBy, sortOrder) => {
    onChange('sort_by', sortBy)
    onChange('sort_order', sortOrder)
  }

  const sortOptions = [
    { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
    { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
    { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
    { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
    { label: 'Newest First', sort_by: 'created_at', sort_order: 'desc' },
    { label: 'Oldest First', sort_by: 'created_at', sort_order: 'asc' }
  ]

  const getCurrentSortLabel = () => {
    const current = sortOptions.find(
      option => option.sort_by === localFilters.sort_by && option.sort_order === localFilters.sort_order
    )
    return current ? current.label : 'Name: A to Z'
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
          Sort By
        </span>
        <span style={{ fontSize: '12px', color: '#565959' }}>
          {expanded ? '−' : '+'}
        </span>
      </div>
      
      {expanded && (
        <div style={{ padding: '8px 20px 16px' }}>
          {/* Current Selection Display */}
          <div style={{ 
            marginBottom: '12px', 
            padding: '8px', 
            background: '#f8f9fa', 
            borderRadius: '4px',
            fontSize: '12px',
            color: '#0f1111'
          }}>
            Current: {getCurrentSortLabel()}
          </div>

          {/* Sort Options */}
          {sortOptions.map((option, index) => (
            <label key={index} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="sort"
                checked={localFilters.sort_by === option.sort_by && localFilters.sort_order === option.sort_order}
                onChange={() => handleSortChange(option.sort_by, option.sort_order)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ fontSize: '13px', color: '#0f1111' }}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortFilter;