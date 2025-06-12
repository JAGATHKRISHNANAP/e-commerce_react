import React from 'react';

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    if (totalPages <= 5) return [...Array(totalPages)].map((_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, 5];
    if (currentPage >= totalPages - 2) return [...Array(5)].map((_, i) => totalPages - 4 + i);
    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '32px',
      padding: '20px 0'
    }}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
      {getPageNumbers().map(num => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          style={{
            background: num === currentPage ? '#007bff' : 'white',
            color: num === currentPage ? 'white' : '#007bff'
          }}
        >
          {num}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>Next</button>
    </div>
  );
};

export default PaginationControls;
