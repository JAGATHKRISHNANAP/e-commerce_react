// src/components/homepagecomponent/FilterSection.jsx
import React from 'react'

const FilterSection = ({ title, icon, isExpanded, onToggle, children, isMobile }) => (
  <div style={{ borderBottom: '1px solid #e7e7e7', marginBottom: isMobile ? '12px' : '0' }}>
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
      onMouseOver={(e) => e.target.style.backgroundColor = '#f7f7f7'}
      onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
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

export default FilterSection
