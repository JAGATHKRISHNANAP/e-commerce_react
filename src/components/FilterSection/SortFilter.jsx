// // // src/components/homepagecomponent/SortFilter.jsx
// // import React from 'react'

// // const SortFilter = ({ selectedSortBy, selectedSortOrder, onChange }) => {
// //   const options = [
// //     { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
// //     { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
// //     { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
// //     { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
// //     { label: 'In Stock First', sort_by: 'stock_quantity', sort_order: 'desc' }
// //   ]

// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// //       {options.map((option, index) => (
// //         <label key={index} style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
// //           <input
// //             type="radio"
// //             name="sort"
// //             checked={selectedSortBy === option.sort_by && selectedSortOrder === option.sort_order}
// //             onChange={() => {
// //               onChange('sort_by', option.sort_by)
// //               onChange('sort_order', option.sort_order)
// //             }}
// //             style={{ marginRight: '8px' }}
// //           />
// //           {option.label}
// //         </label>
// //       ))}
// //     </div>
// //   )
// // }

// // export default SortFilter



// // src/components/homepagecomponent/SortFilter.jsx
// import React from 'react';
// import {
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from '@mui/material';

// const SortFilter = ({ selectedSortBy, selectedSortOrder, onChange }) => {
//   const options = [
//     { label: 'Price: Low to High', sort_by: 'price', sort_order: 'asc' },
//     { label: 'Price: High to Low', sort_by: 'price', sort_order: 'desc' },
//     { label: 'Name: A to Z', sort_by: 'name', sort_order: 'asc' },
//     { label: 'Name: Z to A', sort_by: 'name', sort_order: 'desc' },
//     { label: 'In Stock First', sort_by: 'stock_quantity', sort_order: 'desc' }
//   ];

//   const selectedValue = `${selectedSortBy}-${selectedSortOrder}`;

//   const handleChange = (event) => {
//     const [sort_by, sort_order] = event.target.value.split('-');
//     onChange('sort_by', sort_by);
//     onChange('sort_order', sort_order);
//   };

//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend" sx={{ fontSize: 14, color: '#333', mb: 1 }}>
//         Sort By
//       </FormLabel>
//       <RadioGroup
//         value={selectedValue}
//         onChange={handleChange}
//         name="sort-options"
//       >
//         {options.map((option, index) => (
//           <FormControlLabel
//             key={index}
//             value={`${option.sort_by}-${option.sort_order}`}
//             control={<Radio size="small" />}
//             label={option.label}
//           />
//         ))}
//       </RadioGroup>
//     </FormControl>
//   );
// };

// export default SortFilter;



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