// src/components/ui/ProductImage.jsx
import React, { useState } from 'react';

const ProductImage = ({
  src,
  alt,
  className = "",
  style = {},
  fallbackSrc = "/api/placeholder/300/300",
  onError,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setIsLoading(false);
    setHasError(true);

    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }

    if (onError) {
      onError();
    }
  };

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #e3e3e3',
            borderTop: '4px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
        </div>
      )}

      <img
        src={imageSrc}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          display: isLoading ? 'none' : 'block',
          borderRadius: '8px'
        }}
        {...props}
      />

      {hasError && imageSrc === fallbackSrc && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          color: '#6c757d',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '24px', marginBottom: '8px' }}>📷</span>
          <span style={{ fontSize: '12px' }}>Image not available</span>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ProductImage;