// import React from 'react'
// import AppHeader from '../components/homepagecomponent/AppHeaders'
// const AccountPage = () => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       backgroundColor: '#f9fafb'
//     }}>
//       <AppHeader />
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
//         <p className="text-gray-700">This is your orders page.</p>
//         </div>

//     </div>
//   )
// }

// export default AccountPage





// catagory creation page
import React, { useState } from 'react';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const API_BASE_URL = 'http://localhost:8000/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!categoryName.trim()) {
      showMessage('Please enter a category name', 'error');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: categoryName.trim() })
      });

      const result = await response.json();

      if (response.ok) {
        showMessage(`Category "${categoryName}" created successfully!`, 'success');
        setCategoryName(''); // Clear the input
      } else {
        const errorMessage = result.detail || `HTTP ${response.status}`;
        showMessage(`Failed to create category: ${errorMessage}`, 'error');
      }

    } catch (error) {
      showMessage(`Network error: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    
    // Auto-hide success messages after 3 seconds
    if (type === 'success') {
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333',
      fontSize: '24px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    input: {
      padding: '12px 15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    inputFocus: {
      borderColor: '#667eea'
    },
    button: {
      padding: '12px 20px',
      backgroundColor: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      opacity: loading ? 0.7 : 1
    },
    buttonHover: {
      backgroundColor: '#5a67d8',
      transform: 'translateY(-2px)'
    },
    message: {
      padding: '12px 15px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: '500',
      marginTop: '15px',
      animation: 'fadeIn 0.3s ease'
    },
    successMessage: {
      backgroundColor: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb'
    },
    errorMessage: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📁 Add Category</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name (e.g., Electronics, Clothing)"
          style={styles.input}
          disabled={loading}
          maxLength={100}
          required
        />
        
        <button 
          type="submit" 
          style={styles.button}
          disabled={loading}
        >
          {loading ? '⏳ Creating...' : '➕ Create Category'}
        </button>
      </form>

      {message && (
        <div 
          style={{
            ...styles.message,
            ...(messageType === 'success' ? styles.successMessage : styles.errorMessage)
          }}
        >
          {messageType === 'success' ? '✅ ' : '❌ '}{message}
        </div>
      )}
    </div>
  );
};

export default AddCategory;




