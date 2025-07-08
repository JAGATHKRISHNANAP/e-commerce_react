// // // src/components/homepagecomponent/PriceFilter.jsx
// // import React from 'react'

// // const PriceFilter = ({ localFilters, priceRange, onChange, onApply }) => {
// //   const { min_price, max_price } = localFilters
// //   const applyEnabled = min_price && max_price

// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
// //       <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '10px', alignItems: 'center' }}>
// //         <input
// //           type="number"
// //           placeholder="Min"
// //           value={min_price}
// //           onChange={(e) => onChange('min_price', e.target.value)}
// //           style={{ padding: '6px 1px', border: '1px solid #d5d9d9', borderRadius: '4px', fontSize: '14px' }}
// //         />
// //         <span style={{ color: '#565959', fontSize: '12px' }}>to</span>
// //         <input
// //           type="number"
// //           placeholder="Max"
// //           value={max_price}
// //           onChange={(e) => onChange('max_price', e.target.value)}
// //           style={{ padding: '6px 1px', border: '1px solid #d5d9d9', borderRadius: '4px', fontSize: '14px' }}
// //         />
// //       </div>

// //       <button
// //         onClick={onApply}
// //         disabled={!applyEnabled}
// //         style={{
// //           padding: '6px 12px',
// //           background: applyEnabled ? '#ff9900' : '#f7f7f7',
// //           color: applyEnabled ? 'white' : '#999',
// //           borderRadius: '4px',
// //           fontSize: '12px',
// //           cursor: applyEnabled ? 'pointer' : 'not-allowed'
// //         }}
// //       >
// //         Go
// //       </button>

// //       <div style={{
// //         fontSize: '11px', color: '#565959', textAlign: 'center',
// //         padding: '8px', background: '#f7f7f7', borderRadius: '4px'
// //       }}>
// //         ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
// //       </div>
// //     </div>
// //   )
// // }

// // export default PriceFilter



// // src/components/homepagecomponent/PriceFilter.jsx
// import React, { useState, useEffect } from 'react';
// import { Slider, Button, Typography, Box } from '@mui/material';

// const PriceFilter = ({ localFilters, priceRange, onChange, onApply }) => {
//   const { min_price, max_price } = localFilters;
//   const [value, setValue] = useState([min_price || 0, max_price ]);

//   useEffect(() => {
//     setValue([
//       localFilters.min_price !== '' ? Number(localFilters.min_price) : priceRange.min,
//       localFilters.max_price !== '' ? Number(localFilters.max_price) : priceRange.max,
//     ]);
//   }, [localFilters]);

//   const handleSliderChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleApply = () => {
//     onChange('min_price', value[0]);
//     onChange('max_price', value[1]);
//     onApply();
//   };

//   const applyEnabled = value[0] < value[1];

//   return (
//     <Box display="flex" flexDirection="column" gap={2} sx={{ padding: 2, border: '1px solid #d5d9d9', borderRadius: 1 }}>
//       <Typography fontSize={14} fontWeight={500}>
//         Price Range: ₹{value[0]} - ₹{value[1]}
//       </Typography>

//       <Slider
//         value={value}
//         min={0}
//         max={1000}
//         step={10}
//         onChange={handleSliderChange}
//         valueLabelDisplay="auto"
//         getAriaLabel={() => 'Price range'}
//       />

//       <Button
//         onClick={handleApply}
//         disabled={!applyEnabled}
//         variant="contained"
//         size="small"
//         sx={{
//           bgcolor: applyEnabled ? '#ff9900' : '#f0f0f0',
//           color: applyEnabled ? '#fff' : '#999',
//           cursor: applyEnabled ? 'pointer' : 'not-allowed',
//           textTransform: 'none',
//           fontSize: 12,
//           alignSelf: 'flex-center',
//             '&:hover': {
//                 bgcolor: applyEnabled ? '#e68a00' : '#f0f0f0',
//             },
//         }}
//       >
//         Go
//       </Button>

//       <Typography
//         variant="caption"
//         sx={{
//           backgroundColor: '#f7f7f7',
//           padding: '6px',
//           borderRadius: '4px',
//           textAlign: 'center',
//           fontSize: '11px',
//         }}
//       >
//         ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
//       </Typography>
//     </Box>
//   );
// };

// export default PriceFilter;





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