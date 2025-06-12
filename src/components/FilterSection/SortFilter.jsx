// // src/components/homepagecomponent/SortFilter.jsx
// import React from 'react'

// const SortFilter = ({ selectedSortBy, selectedSortOrder, onChange }) => {
//   const options = [
//     { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
//     { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
//     { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
//     { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
//     { label: 'In Stock First', sort_by: 'stock_quantity', sort_order: 'desc' }
//   ]

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//       {options.map((option, index) => (
//         <label key={index} style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
//           <input
//             type="radio"
//             name="sort"
//             checked={selectedSortBy === option.sort_by && selectedSortOrder === option.sort_order}
//             onChange={() => {
//               onChange('sort_by', option.sort_by)
//               onChange('sort_order', option.sort_order)
//             }}
//             style={{ marginRight: '8px' }}
//           />
//           {option.label}
//         </label>
//       ))}
//     </div>
//   )
// }

// export default SortFilter



// src/components/homepagecomponent/SortFilter.jsx
import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const SortFilter = ({ selectedSortBy, selectedSortOrder, onChange }) => {
  const options = [
    { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
    { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
    { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
    { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
    { label: 'In Stock First', sort_by: 'stock_quantity', sort_order: 'desc' }
  ];

  const selectedValue = `${selectedSortBy}-${selectedSortOrder}`;

  const handleChange = (event) => {
    const [sort_by, sort_order] = event.target.value.split('-');
    onChange('sort_by', sort_by);
    onChange('sort_order', sort_order);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" sx={{ fontSize: 14, color: '#333', mb: 1 }}>
        Sort By
      </FormLabel>
      <RadioGroup
        value={selectedValue}
        onChange={handleChange}
        name="sort-options"
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={`${option.sort_by}-${option.sort_order}`}
            control={<Radio size="small" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SortFilter;
