import React from 'react'
import AppHeader from '../components/homepagecomponent/AppHeaders'
const AddToCart = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <AppHeader />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Add to Cart</h1>
        <p className="text-gray-700">This is your Add to Cart page.</p>
        </div>

    </div>
  )
}

export default AddToCart



