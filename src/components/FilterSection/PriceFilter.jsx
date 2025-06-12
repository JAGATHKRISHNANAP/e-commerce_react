// // src/components/homepagecomponent/PriceFilter.jsx
// import React from 'react'

// const PriceFilter = ({ localFilters, priceRange, onChange, onApply }) => {
//   const { min_price, max_price } = localFilters
//   const applyEnabled = min_price && max_price

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '10px', alignItems: 'center' }}>
//         <input
//           type="number"
//           placeholder="Min"
//           value={min_price}
//           onChange={(e) => onChange('min_price', e.target.value)}
//           style={{ padding: '6px 1px', border: '1px solid #d5d9d9', borderRadius: '4px', fontSize: '14px' }}
//         />
//         <span style={{ color: '#565959', fontSize: '12px' }}>to</span>
//         <input
//           type="number"
//           placeholder="Max"
//           value={max_price}
//           onChange={(e) => onChange('max_price', e.target.value)}
//           style={{ padding: '6px 1px', border: '1px solid #d5d9d9', borderRadius: '4px', fontSize: '14px' }}
//         />
//       </div>

//       <button
//         onClick={onApply}
//         disabled={!applyEnabled}
//         style={{
//           padding: '6px 12px',
//           background: applyEnabled ? '#ff9900' : '#f7f7f7',
//           color: applyEnabled ? 'white' : '#999',
//           borderRadius: '4px',
//           fontSize: '12px',
//           cursor: applyEnabled ? 'pointer' : 'not-allowed'
//         }}
//       >
//         Go
//       </button>

//       <div style={{
//         fontSize: '11px', color: '#565959', textAlign: 'center',
//         padding: '8px', background: '#f7f7f7', borderRadius: '4px'
//       }}>
//         ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
//       </div>
//     </div>
//   )
// }

// export default PriceFilter



// src/components/homepagecomponent/PriceFilter.jsx
import React, { useState, useEffect } from 'react';
import { Slider, Button, Typography, Box } from '@mui/material';

const PriceFilter = ({ localFilters, priceRange, onChange, onApply }) => {
  const { min_price, max_price } = localFilters;
  const [value, setValue] = useState([min_price || 0, max_price ]);

  useEffect(() => {
    setValue([
      localFilters.min_price !== '' ? Number(localFilters.min_price) : priceRange.min,
      localFilters.max_price !== '' ? Number(localFilters.max_price) : priceRange.max,
    ]);
  }, [localFilters]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleApply = () => {
    onChange('min_price', value[0]);
    onChange('max_price', value[1]);
    onApply();
  };

  const applyEnabled = value[0] < value[1];

  return (
    <Box display="flex" flexDirection="column" gap={2} sx={{ padding: 2, border: '1px solid #d5d9d9', borderRadius: 1 }}>
      <Typography fontSize={14} fontWeight={500}>
        Price Range: ₹{value[0]} - ₹{value[1]}
      </Typography>

      <Slider
        value={value}
        min={0}
        max={1000}
        step={10}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        getAriaLabel={() => 'Price range'}
      />

      <Button
        onClick={handleApply}
        disabled={!applyEnabled}
        variant="contained"
        size="small"
        sx={{
          bgcolor: applyEnabled ? '#ff9900' : '#f0f0f0',
          color: applyEnabled ? '#fff' : '#999',
          cursor: applyEnabled ? 'pointer' : 'not-allowed',
          textTransform: 'none',
          fontSize: 12,
          alignSelf: 'flex-center',
            '&:hover': {
                bgcolor: applyEnabled ? '#e68a00' : '#f0f0f0',
            },
        }}
      >
        Go
      </Button>

      <Typography
        variant="caption"
        sx={{
          backgroundColor: '#f7f7f7',
          padding: '6px',
          borderRadius: '4px',
          textAlign: 'center',
          fontSize: '11px',
        }}
      >
        ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default PriceFilter;
