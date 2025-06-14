// // import React, { useState } from 'react';
// // import { Box, Skeleton } from '@mui/material';

// // const CartItemImage = ({ src, alt, size = 120 }) => {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [hasError, setHasError] = useState(false);

// //   const handleImageLoad = () => {
// //     setIsLoading(false);
// //     setHasError(false);
// //   };

// //   const handleImageError = () => {
// //     setIsLoading(false);
// //     setHasError(true);
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         width: size,
// //         height: size,
// //         position: 'relative',
// //         borderRadius: 2,
// //         overflow: 'hidden',
// //         bgcolor: 'grey.50',
// //         border: '1px solid',
// //         borderColor: 'grey.200'
// //       }}
// //     >
// //       {isLoading && (
// //         <Skeleton
// //           variant="rectangular"
// //           width="100%"
// //           height="100%"
// //           sx={{ position: 'absolute' }}
// //         />
// //       )}
      
// //       {!hasError ? (
// //         <Box
// //           component="img"
// //           src={src}
// //           alt={alt}
// //           onLoad={handleImageLoad}
// //           onError={handleImageError}
// //           sx={{
// //             width: '100%',
// //             height: '100%',
// //             objectFit: 'cover',
// //             display: isLoading ? 'none' : 'block'
// //           }}
// //         />
// //       ) : (
// //         <Box
// //           sx={{
// //             width: '100%',
// //             height: '100%',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             bgcolor: 'grey.100',
// //             color: 'text.secondary'
// //           }}
// //         >
// //           <Box sx={{ fontSize: '2rem', mb: 1 }}>📦</Box>
// //           <Box sx={{ fontSize: '0.75rem', textAlign: 'center', px: 1 }}>
// //             No Image
// //           </Box>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default CartItemImage;




// // src/components/cart/CartItemImage.jsx
// import React, { useState } from 'react';
// import { Box, Skeleton } from '@mui/material';

// const CartItemImage = ({ src, alt, size = 120 }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);

//   const handleImageLoad = () => {
//     setIsLoading(false);
//     setHasError(false);
//   };

//   const handleImageError = () => {
//     setIsLoading(false);
//     setHasError(true);
//   };

//   return (
//     <Box
//       sx={{
//         width: size,
//         height: size,
//         position: 'relative',
//         borderRadius: 3,
//         overflow: 'hidden',
//         bgcolor: 'grey.50',
//         border: '1px solid',
//         borderColor: 'grey.200',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//       }}
//     >
//       {isLoading && (
//         <Skeleton
//           variant="rectangular"
//           width="100%"
//           height="100%"
//           sx={{ position: 'absolute' }}
//         />
//       )}
      
//       {!hasError ? (
//         <Box
//           component="img"
//           src={src}
//           alt={alt}
//           onLoad={handleImageLoad}
//           onError={handleImageError}
//           sx={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             display: isLoading ? 'none' : 'block'
//           }}
//         />
//       ) : (
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             bgcolor: 'grey.100',
//             color: 'text.secondary'
//           }}
//         >
//           <Box sx={{ fontSize: '2rem', mb: 1 }}>📦</Box>
//           <Box sx={{ fontSize: '0.75rem', textAlign: 'center', px: 1 }}>
//             No Image
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default CartItemImage;





// src/components/cart/CartItemImage.jsx
import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

const CartItemImage = ({ src, alt, size = 120 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Box
      sx={{
        width: size,
        height: size,
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'grey.50',
        border: '1px solid',
        borderColor: 'grey.200',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: 'absolute' }}
        />
      )}
      
      {!hasError ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: isLoading ? 'none' : 'block'
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.100',
            color: 'text.secondary'
          }}
        >
          <Box sx={{ fontSize: '2rem', mb: 1 }}>📦</Box>
          <Box sx={{ fontSize: '0.75rem', textAlign: 'center', px: 1 }}>
            No Image
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartItemImage;
