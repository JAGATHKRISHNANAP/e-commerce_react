// src/components/homepagecomponent/SpecificationFilter.jsx
import React from 'react'

const SpecificationFilter = ({ name, options, selectedValue, onChange, expanded, toggle }) => {
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
                    {name}
                </span>
                <span style={{ fontSize: '12px', color: '#565959' }}>
                    {expanded ? '−' : '+'}
                </span>
            </div>

            {expanded && (
                <div style={{ padding: '8px 20px 16px' }}>
                    {/* Clear option */}
                    <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                        <input
                            type="radio"
                            name={`spec-${name}`}
                            value=""
                            checked={!selectedValue}
                            onChange={() => onChange(name, '')}
                            style={{ marginRight: '8px' }}
                        />
                        <span style={{ fontSize: '13px', color: '#0f1111' }}>
                            All {name}s
                        </span>
                    </label>

                    {options.map((option) => (
                        <label key={option} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                            <input
                                type="radio"
                                name={`spec-${name}`}
                                value={option}
                                checked={selectedValue === option}
                                onChange={() => onChange(name, option)}
                                style={{ marginRight: '8px' }}
                            />
                            <span style={{ fontSize: '13px', color: '#0f1111' }}>
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SpecificationFilter
