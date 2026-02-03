// import React from 'react'
// import AppHeader from '../components/homepagecomponent/AppHeaders'
// const AdressPage = () => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       backgroundColor: '#f9fafb'
//     }}>
//       <AppHeader />
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">Your Adress</h1>
//         <p className="text-gray-700">This is your Adress page.</p>
//         </div>

//     </div>
//   )
// }

// export default AdressPage




















// // product insert code 


// import React, { useState, useEffect } from 'react';

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category_id: '',
//     stock_quantity: 0,
//     image_url: '',
//     storage_capacity: ''
//   });
  
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState('');

//   const API_BASE_URL = 'http://65.1.248.179:8000/api/v1';

//   // Load categories when component mounts
//   useEffect(() => {
//     loadCategories();
//   }, []);

//   const loadCategories = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/categories`);
//       if (response.ok) {
//         const data = await response.json();
//         setCategories(data);
//       }
//     } catch (error) {
//       console.error('Failed to load categories:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validation
//     if (!formData.name.trim()) {
//       showMessage('Product name is required', 'error');
//       return;
//     }
//     if (!formData.price || parseFloat(formData.price) <= 0) {
//       showMessage('Valid price is required', 'error');
//       return;
//     }
//     if (!formData.category_id) {
//       showMessage('Please select a category', 'error');
//       return;
//     }

//     setLoading(true);
//     setMessage('');

//     try {
//       const submitData = {
//         ...formData,
//         price: parseFloat(formData.price),
//         category_id: parseInt(formData.category_id),
//         stock_quantity: parseInt(formData.stock_quantity) || 0
//       };

//       const response = await fetch(`${API_BASE_URL}/products`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(submitData)
//       });

//       const result = await response.json();

//       if (response.ok) {
//         showMessage(`Product "${formData.name}" created successfully!`, 'success');
//         // Reset form
//         setFormData({
//           name: '',
//           description: '',
//           price: '',
//           category_id: '',
//           stock_quantity: 0,
//           image_url: '',
//           storage_capacity: ''
//         });
//       } else {
//         const errorMessage = result.detail || `HTTP ${response.status}`;
//         showMessage(`Failed to create product: ${errorMessage}`, 'error');
//       }

//     } catch (error) {
//       showMessage(`Network error: ${error.message}`, 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showMessage = (text, type) => {
//     setMessage(text);
//     setMessageType(type);
    
//     if (type === 'success') {
//       setTimeout(() => {
//         setMessage('');
//         setMessageType('');
//       }, 4000);
//     }
//   };

//   const styles = {
//     container: {
//       maxWidth: '600px',
//       margin: '30px auto',
//       padding: '30px',
//       border: '1px solid #ddd',
//       borderRadius: '12px',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//       backgroundColor: '#fff',
//       fontFamily: 'Arial, sans-serif'
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: '30px',
//       color: '#333',
//       fontSize: '28px',
//       fontWeight: '600'
//     },
//     form: {
//       display: 'grid',
//       gap: '20px'
//     },
//     formGroup: {
//       display: 'flex',
//       flexDirection: 'column'
//     },
//     label: {
//       marginBottom: '5px',
//       fontWeight: '600',
//       color: '#555',
//       fontSize: '14px'
//     },
//     input: {
//       padding: '12px 15px',
//       border: '2px solid #ddd',
//       borderRadius: '8px',
//       fontSize: '16px',
//       outline: 'none',
//       transition: 'border-color 0.3s ease'
//     },
//     textarea: {
//       padding: '12px 15px',
//       border: '2px solid #ddd',
//       borderRadius: '8px',
//       fontSize: '16px',
//       outline: 'none',
//       resize: 'vertical',
//       minHeight: '80px',
//       fontFamily: 'Arial, sans-serif'
//     },
//     select: {
//       padding: '12px 15px',
//       border: '2px solid #ddd',
//       borderRadius: '8px',
//       fontSize: '16px',
//       outline: 'none',
//       backgroundColor: 'white',
//       cursor: 'pointer'
//     },
//     twoColumn: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '15px'
//     },
//     button: {
//       padding: '15px 20px',
//       backgroundColor: '#667eea',
//       color: 'white',
//       border: 'none',
//       borderRadius: '8px',
//       fontSize: '16px',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       marginTop: '10px',
//       opacity: loading ? 0.7 : 1
//     },
//     message: {
//       padding: '15px',
//       borderRadius: '8px',
//       textAlign: 'center',
//       fontWeight: '500',
//       marginBottom: '20px'
//     },
//     successMessage: {
//       backgroundColor: '#d4edda',
//       color: '#155724',
//       border: '1px solid #c3e6cb'
//     },
//     errorMessage: {
//       backgroundColor: '#f8d7da',
//       color: '#721c24',
//       border: '1px solid #f5c6cb'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>📦 Add New Product</h2>
      
//       {message && (
//         <div 
//           style={{
//             ...styles.message,
//             ...(messageType === 'success' ? styles.successMessage : styles.errorMessage)
//           }}
//         >
//           {messageType === 'success' ? '✅ ' : '❌ '}{message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Product Name *</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter product name"
//             style={styles.input}
//             required
//             disabled={loading}
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             placeholder="Product description (optional)"
//             style={styles.textarea}
//             disabled={loading}
//           />
//         </div>

//         <div style={styles.twoColumn}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Price *</label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleInputChange}
//               placeholder="0.00"
//               step="0.01"
//               min="0"
//               style={styles.input}
//               required
//               disabled={loading}
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label style={styles.label}>Category *</label>
//             <select
//               name="category_id"
//               value={formData.category_id}
//               onChange={handleInputChange}
//               style={styles.select}
//               required
//               disabled={loading}
//             >
//               <option value="">Select Category</option>
//               {categories.map(category => (
//                 <option key={category.category_id} value={category.category_id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div style={styles.twoColumn}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Stock Quantity</label>
//             <input
//               type="number"
//               name="stock_quantity"
//               value={formData.stock_quantity}
//               onChange={handleInputChange}
//               placeholder="0"
//               min="0"
//               style={styles.input}
//               disabled={loading}
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label style={styles.label}>Storage Capacity</label>
//             <input
//               type="text"
//               name="storage_capacity"
//               value={formData.storage_capacity}
//               onChange={handleInputChange}
//               placeholder="e.g., 64GB, 128GB"
//               style={styles.input}
//               disabled={loading}
//             />
//           </div>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Image URL</label>
//           <input
//             type="url"
//             name="image_url"
//             value={formData.image_url}
//             onChange={handleInputChange}
//             placeholder="https://example.com/image.jpg"
//             style={styles.input}
//             disabled={loading}
//           />
//         </div>

//         <button 
//           type="submit" 
//           style={styles.button}
//           disabled={loading}
//         >
//           {loading ? '⏳ Creating Product...' : '📦 Create Product'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;



























import React, { useState, useEffect } from 'react';

const AddProductWithImages = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category_id: '',
    stock_quantity: 0,
    storage_capacity: '',
    sales_user: ''
  });
  
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const API_BASE_URL = 'http://65.1.248.179:8000/api/v1';

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Validate file types and sizes
    const validFiles = [];
    const previews = [];
    
    files.forEach(file => {
      // Check file type
      if (!file.type.startsWith('image/')) {
        showMessage(`${file.name} is not an image file`, 'error');
        return;
      }
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        showMessage(`${file.name} is too large (max 5MB)`, 'error');
        return;
      }
      
      validFiles.push(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push({
          file: file,
          preview: e.target.result,
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
        });
        
        if (previews.length === validFiles.length) {
          setImagePreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    });
    
    setSelectedImages(validFiles);
  };

  const removeImage = (index) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setSelectedImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      showMessage('Product name is required', 'error');
      return;
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      showMessage('Valid price is required', 'error');
      return;
    }
    if (!formData.category_id) {
      showMessage('Please select a category', 'error');
      return;
    }
    if (!formData.sales_user.trim()) {
      showMessage('Sales user is required', 'error');
      return;
    }
    if (selectedImages.length === 0) {
      showMessage('Please select at least one image', 'error');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      // Create FormData for multipart upload
      const formDataToSend = new FormData();
      
      // Add text fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description || '');
      formDataToSend.append('price', parseFloat(formData.price));
      formDataToSend.append('category_id', parseInt(formData.category_id));
      formDataToSend.append('stock_quantity', parseInt(formData.stock_quantity) || 0);
      formDataToSend.append('storage_capacity', formData.storage_capacity || '');
      formDataToSend.append('sales_user', formData.sales_user);
      
      // Add image files
      selectedImages.forEach((image, index) => {
        formDataToSend.append('images', image);
      });

      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        body: formDataToSend // Don't set Content-Type header, let browser set it
      });

      const result = await response.json();

      if (response.ok) {
        showMessage(`Product "${formData.name}" created successfully with ${result.upload_summary.total_uploaded} images!`, 'success');
        
        // Reset form
        setFormData({
          name: '',
          description: '',
          price: '',
          category_id: '',
          stock_quantity: 0,
          storage_capacity: '',
          sales_user: ''
        });
        setSelectedImages([]);
        setImagePreviews([]);
        
        // Reset file input
        const fileInput = document.getElementById('images');
        if (fileInput) fileInput.value = '';
        
        // Show upload summary if there were any failed uploads
        if (result.upload_summary.total_failed > 0) {
          console.log('Failed uploads:', result.upload_summary.failed_files);
        }
        
      } else {
        const errorMessage = result.detail || `HTTP ${response.status}`;
        showMessage(`Failed to create product: ${errorMessage}`, 'error');
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
    
    if (type === 'success') {
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    }
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '30px auto',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333',
      fontSize: '28px',
      fontWeight: '600'
    },
    form: {
      display: 'grid',
      gap: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      marginBottom: '5px',
      fontWeight: '600',
      color: '#555',
      fontSize: '14px'
    },
    input: {
      padding: '12px 15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      padding: '12px 15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      resize: 'vertical',
      minHeight: '80px',
      fontFamily: 'Arial, sans-serif'
    },
    select: {
      padding: '12px 15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px'
    },
    threeColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '15px'
    },
    fileInput: {
      padding: '12px 15px',
      border: '2px dashed #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#f9f9f9',
      transition: 'border-color 0.3s ease'
    },
    imagePreviewContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '15px',
      marginTop: '15px'
    },
    imagePreview: {
      position: 'relative',
      border: '2px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#f9f9f9'
    },
    previewImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover'
    },
    imageInfo: {
      padding: '8px',
      fontSize: '12px',
      color: '#666',
      backgroundColor: '#f1f1f1'
    },
    removeButton: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      background: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '25px',
      height: '25px',
      cursor: 'pointer',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      padding: '15px 20px',
      backgroundColor: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '10px',
      opacity: loading ? 0.7 : 1
    },
    message: {
      padding: '15px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: '500',
      marginBottom: '20px'
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
    },
    imageCounter: {
      textAlign: 'center',
      color: '#666',
      fontSize: '14px',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📦 Add Product with Images</h2>
      
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

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            style={styles.input}
            required
            disabled={loading}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Product description (optional)"
            style={styles.textarea}
            disabled={loading}
          />
        </div>

        <div style={styles.threeColumn}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Price *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              style={styles.input}
              required
              disabled={loading}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Category *</label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleInputChange}
              style={styles.select}
              required
              disabled={loading}
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category.category_id} value={category.category_id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Stock Quantity</label>
            <input
              type="number"
              name="stock_quantity"
              value={formData.stock_quantity}
              onChange={handleInputChange}
              placeholder="0"
              min="0"
              style={styles.input}
              disabled={loading}
            />
          </div>
        </div>

        <div style={styles.twoColumn}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Storage Capacity</label>
            <input
              type="text"
              name="storage_capacity"
              value={formData.storage_capacity}
              onChange={handleInputChange}
              placeholder="e.g., 64GB, 128GB"
              style={styles.input}
              disabled={loading}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Sales User *</label>
            <input
              type="text"
              name="sales_user"
              value={formData.sales_user}
              onChange={handleInputChange}
              placeholder="Enter sales user ID"
              style={styles.input}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Product Images * (Max 10 images, 5MB each)</label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            style={styles.fileInput}
            disabled={loading}
          />
          
          {selectedImages.length > 0 && (
            <div style={styles.imageCounter}>
              {selectedImages.length} image(s) selected
            </div>
          )}
        </div>

        {imagePreviews.length > 0 && (
          <div style={styles.imagePreviewContainer}>
            {imagePreviews.map((preview, index) => (
              <div key={index} style={styles.imagePreview}>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  style={styles.removeButton}
                  disabled={loading}
                >
                  ×
                </button>
                <img
                  src={preview.preview}
                  alt={preview.name}
                  style={styles.previewImage}
                />
                <div style={styles.imageInfo}>
                  <div>{preview.name}</div>
                  <div>{preview.size}</div>
                  {index === 0 && <div style={{color: '#28a745', fontWeight: 'bold'}}>Primary</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        <button 
          type="submit" 
          style={styles.button}
          disabled={loading || selectedImages.length === 0}
        >
          {loading ? '⏳ Creating Product...' : '📦 Create Product with Images'}
        </button>
      </form>

      <div style={{marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', fontSize: '14px', color: '#666'}}>
        <strong>📁 File Organization:</strong>
        <ul style={{marginTop: '5px', paddingLeft: '20px'}}>
          <li>Images will be stored in: <code>uploads/sales_users/[sales_user]/products/product_[id]/</code></li>
          <li>Supported formats: JPG, JPEG, PNG, GIF, WEBP</li>
          <li>Images are automatically resized if too large</li>
          <li>First image becomes the primary product image</li>
        </ul>
      </div>
    </div>
  );
};

export default AddProductWithImages;





// import React, { useState, useEffect } from 'react';

// const ProductCard = ({ product }) => {
//   const styles = {
//     card: {
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       padding: '15px',
//       backgroundColor: '#fff',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//       cursor: 'pointer'
//     },
//     cardHover: {
//       transform: 'translateY(-2px)',
//       boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
//     },
//     imageContainer: {
//       width: '100%',
//       height: '200px',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: '12px',
//       overflow: 'hidden'
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover'
//     },
//     noImage: {
//       color: '#666',
//       fontSize: '14px',
//       textAlign: 'center'
//     },
//     productName: {
//       fontSize: '16px',
//       fontWeight: '600',
//       color: '#333',
//       marginBottom: '8px',
//       overflow: 'hidden',
//       textOverflow: 'ellipsis',
//       whiteSpace: 'nowrap'
//     },
//     price: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       color: '#667eea',
//       marginBottom: '8px'
//     },
//     details: {
//       fontSize: '14px',
//       color: '#666',
//       marginBottom: '4px'
//     },
//     salesUser: {
//       fontSize: '12px',
//       color: '#999',
//       fontStyle: 'italic'
//     }
//   };

//   return (
//     <div style={styles.card}>
//       <div style={styles.imageContainer}>
//         {product.primary_image_url ? (
//           <img 
//             src={`http://65.1.248.179:8000${product.primary_image_url}`}
//             alt={product.name}
//             style={styles.image}
//             onError={(e) => {
//               e.target.style.display = 'none';
//               e.target.nextSibling.style.display = 'block';
//             }}
//           />
//         ) : null}
//         {!product.primary_image_url && (
//           <div style={styles.noImage}>
//             📷 No Image Available
//           </div>
//         )}
//         {product.primary_image_url && (
//           <div style={{...styles.noImage, display: 'none'}}>
//             📷 Image Not Found
//           </div>
//         )}
//       </div>
      
//       <div style={styles.productName} title={product.name}>
//         {product.name}
//       </div>
      
//       <div style={styles.price}>
//         ${product.price}
//       </div>
      
//       <div style={styles.details}>
//         Stock: {product.stock_quantity} units
//       </div>
      
//       <div style={styles.salesUser}>
//         By: {product.created_by}
//       </div>
//     </div>
//   );
// };

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [pagination, setPagination] = useState({
//     page: 1,
//     per_page: 12,
//     total_pages: 0,
//     total_count: 0
//   });

//   const API_BASE_URL = 'http://65.1.248.179:8000/api/v1';

//   useEffect(() => {
//     loadProducts();
//   }, [pagination.page]);

//   const loadProducts = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `${API_BASE_URL}/products/quick-list?page=${pagination.page}&per_page=${pagination.per_page}`
//       );
      
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data.products);
//         setPagination(prev => ({
//           ...prev,
//           total_pages: data.total_pages,
//           total_count: data.total_count
//         }));
//       } else {
//         setError('Failed to load products');
//       }
//     } catch (error) {
//       setError(`Network error: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePageChange = (newPage) => {
//     setPagination(prev => ({ ...prev, page: newPage }));
//   };

//   const styles = {
//     container: {
//       maxWidth: '1200px',
//       margin: '30px auto',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif'
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: '30px',
//       color: '#333',
//       fontSize: '28px'
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//       gap: '20px',
//       marginBottom: '30px'
//     },
//     loading: {
//       textAlign: 'center',
//       padding: '50px',
//       color: '#666'
//     },
//     error: {
//       textAlign: 'center',
//       padding: '20px',
//       color: '#dc3545',
//       backgroundColor: '#f8d7da',
//       border: '1px solid #f5c6cb',
//       borderRadius: '8px'
//     },
//     pagination: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '10px',
//       marginTop: '30px'
//     },
//     pageButton: {
//       padding: '8px 12px',
//       border: '1px solid #ddd',
//       borderRadius: '4px',
//       backgroundColor: 'white',
//       cursor: 'pointer',
//       fontSize: '14px'
//     },
//     pageButtonActive: {
//       backgroundColor: '#667eea',
//       color: 'white',
//       borderColor: '#667eea'
//     },
//     pageInfo: {
//       fontSize: '14px',
//       color: '#666',
//       textAlign: 'center',
//       marginTop: '10px'
//     }
//   };

//   if (loading) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.loading}>🔄 Loading products...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.error}>❌ {error}</div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>🛍️ Product Catalog</h1>
      
//       {products.length === 0 ? (
//         <div style={styles.loading}>No products found</div>
//       ) : (
//         <>
//           <div style={styles.grid}>
//             {products.map(product => (
//               <ProductCard key={product.product_id} product={product} />
//             ))}
//           </div>
          
//           {pagination.total_pages > 1 && (
//             <div style={styles.pagination}>
//               <button
//                 style={styles.pageButton}
//                 onClick={() => handlePageChange(pagination.page - 1)}
//                 disabled={pagination.page === 1}
//               >
//                 ← Previous
//               </button>
              
//               {[...Array(pagination.total_pages)].map((_, i) => (
//                 <button
//                   key={i + 1}
//                   style={{
//                     ...styles.pageButton,
//                     ...(pagination.page === i + 1 ? styles.pageButtonActive : {})
//                   }}
//                   onClick={() => handlePageChange(i + 1)}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
              
//               <button
//                 style={styles.pageButton}
//                 onClick={() => handlePageChange(pagination.page + 1)}
//                 disabled={pagination.page === pagination.total_pages}
//               >
//                 Next →
//               </button>
//             </div>
//           )}
          
//           <div style={styles.pageInfo}>
//             Showing {products.length} of {pagination.total_count} products
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductList;