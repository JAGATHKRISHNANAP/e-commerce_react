// // src/components/homepagecomponent/CategoryFilter.jsx
// import React from 'react';
// import { Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';

// const CategoryFilter = ({ categories, selectedCategories, onChange }) => {
//   const handleCheckboxChange = (categoryId) => {
//     const newSelected = selectedCategories.includes(categoryId)
//       ? selectedCategories.filter((id) => id !== categoryId)
//       : [...selectedCategories, categoryId];
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



import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategories, onChange }) => {
  const handleCheckboxChange = (categoryId) => {
    // If already selected, uncheck it; otherwise, select only the clicked one
    const newSelected = selectedCategories.includes(categoryId)
      ? []
      : [categoryId]; // Only allow one at a time
    onChange(newSelected);
  };

  const clearSelection = () => {
    onChange([]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <FormGroup>
        {categories.map((category) => (
          <FormControlLabel
            key={category.category_id}
            control={
              <Checkbox
                checked={selectedCategories.includes(category.category_id)}
                onChange={() => handleCheckboxChange(category.category_id)}
              />
            }
            label={category.name}
          />
        ))}
      </FormGroup>
      {selectedCategories.length > 0 && (
        <Button
          onClick={clearSelection}
          variant="text"
          size="small"
          style={{ alignSelf: 'flex-start', textTransform: 'none' }}
        >
          Clear category filter
        </Button>
      )}
    </div>
  );
};

export default CategoryFilter;
