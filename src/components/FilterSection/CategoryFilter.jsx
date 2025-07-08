

// import React from 'react';
// import { Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';

// const CategoryFilter = ({ categories, selectedCategories, onChange }) => {
//   const handleCheckboxChange = (categoryId) => {
//     // If already selected, uncheck it; otherwise, select only the clicked one
//     const newSelected = selectedCategories.includes(categoryId)
//       ? []
//       : [categoryId]; // Only allow one at a time
//     onChange(newSelected);
//   };

//   const clearSelection = () => {
//     onChange([]);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//       <FormGroup>
//         {categories.map((category) => (
//           <FormControlLabel
//             key={category.category_id}
//             control={
//               <Checkbox
//                 checked={selectedCategories.includes(category.category_id)}
//                 onChange={() => handleCheckboxChange(category.category_id)}
//               />
//             }
//             label={category.name}
//           />
//         ))}
//       </FormGroup>
//       {selectedCategories.length > 0 && (
//         <Button
//           onClick={clearSelection}
//           variant="text"
//           size="small"
//           style={{ alignSelf: 'flex-start', textTransform: 'none' }}
//         >
//           Clear category filter
//         </Button>
//       )}
//     </div>
//   );
// };

// export default CategoryFilter;




// CategoryFilter.jsx - Complete implementation
import React from 'react';

const CategoryFilter = ({ categories, selectedCategories, onChange, expanded, toggle }) => {
  const handleCategoryChange = (value) => {
    // Ensure we only pass valid integer IDs or empty string
    const cleanValue = value === '' ? '' : parseInt(value, 10)
    console.log('Category change:', value, '->', cleanValue)
    onChange(cleanValue)
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
          Category
        </span>
        <span style={{ fontSize: '12px', color: '#565959' }}>
          {expanded ? '−' : '+'}
        </span>
      </div>
      
      {expanded && (
        <div style={{ padding: '8px 20px 16px' }}>
          {/* All Categories option */}
          <label style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategories === '' || selectedCategories === null || selectedCategories === undefined}
              onChange={(e) => handleCategoryChange(e.target.value)}
              style={{ marginRight: '8px' }}
            />
            <span style={{ fontSize: '13px', color: '#0f1111' }}>
              All Categories
            </span>
          </label>

          {/* Category options */}
          {categories.map((category) => (
            <label key={category.category_id || category.id} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="category"
                value={category.category_id || category.id}
                checked={selectedCategories == (category.category_id || category.id)}
                onChange={(e) => handleCategoryChange(e.target.value)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ fontSize: '13px', color: '#0f1111' }}>
                {category.name}
                {category.product_count && (
                  <span style={{ color: '#565959', fontSize: '12px' }}>
                    {' '}({category.product_count})
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;