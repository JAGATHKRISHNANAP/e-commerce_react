// Example usage of the common Card component across your application

import React from 'react'
import Card from '../components/ui/Card'

const CardUsageExamples = () => {
  return (
    <div style={{ padding: '2rem', gap: '2rem', display: 'flex', flexDirection: 'column' }}>
      
      {/* Basic Card */}
      <Card>
        <h3>Basic Card</h3>
        <p>This is a simple card with default styling.</p>
      </Card>

      {/* Card with different variants */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <Card variant="default">
          <Card.Title>Default Card</Card.Title>
          <Card.Description>Standard card styling</Card.Description>
        </Card>

        <Card variant="elevated">
          <Card.Title>Elevated Card</Card.Title>
          <Card.Description>Card with more shadow</Card.Description>
        </Card>

        <Card variant="outlined">
          <Card.Title>Outlined Card</Card.Title>
          <Card.Description>Card with thick border</Card.Description>
        </Card>

        <Card variant="ghost">
          <Card.Title>Ghost Card</Card.Title>
          <Card.Description>Transparent card</Card.Description>
        </Card>
      </div>

      {/* Clickable Card with hover */}
      <Card 
        onClick={() => alert('Card clicked!')} 
        hover={true}
        style={{ cursor: 'pointer' }}
      >
        <Card.Title>Clickable Card</Card.Title>
        <Card.Description>This card has hover effects and is clickable</Card.Description>
      </Card>

      {/* Card with colored borders */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <Card borderColor="#ff9900" borderPosition="left">
          <Card.Title>Left Border</Card.Title>
          <Card.Description>Orange left border</Card.Description>
        </Card>

        <Card borderColor="#146eb4" borderPosition="top">
          <Card.Title>Top Border</Card.Title>
          <Card.Description>Blue top border</Card.Description>
        </Card>

        <Card borderColor="#0f7b0f" borderPosition="right">
          <Card.Title>Right Border</Card.Title>
          <Card.Description>Green right border</Card.Description>
        </Card>

        <Card borderColor="#dc2626" borderPosition="bottom">
          <Card.Title>Bottom Border</Card.Title>
          <Card.Description>Red bottom border</Card.Description>
        </Card>
      </div>

      {/* Card with Header and Footer */}
      <Card>
        <Card.Header>
          <Card.Title>Card with Header & Footer</Card.Title>
          <Card.Description>This card demonstrates header and footer usage</Card.Description>
        </Card.Header>
        
        <Card.Content>
          <p>This is the main content area of the card. You can put any content here.</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </Card.Content>

        <Card.Footer>
          <button style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Action Button
          </button>
        </Card.Footer>
      </Card>

      {/* Icon Cards Grid */}
      <div>
        <h2 style={{ marginBottom: '1rem' }}>Icon Cards (like your Account Page)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <Card.Icon
            icon="🛍️"
            title="SHOPPING"
            description="Browse and purchase items"
            color="#e91e63"
            onClick={() => alert('Shopping clicked')}
          />
          
          <Card.Icon
            icon="⭐"
            title="FAVORITES"
            description="View your favorite items"
            color="#ff9800"
            onClick={() => alert('Favorites clicked')}
          />
          
          <Card.Icon
            icon="🎯"
            title="DEALS"
            description="Check out today's deals"
            color="#4caf50"
            onClick={() => alert('Deals clicked')}
          />
        </div>
      </div>

      {/* Product Cards Example */}
      <div>
        <h2 style={{ marginBottom: '1rem' }}>Product Cards Example</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <Card hover={true} onClick={() => alert('Product clicked')}>
            <div style={{ 
              width: '100%', 
              height: '150px', 
              backgroundColor: '#f3f4f6', 
              borderRadius: '4px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              📱
            </div>
            <Card.Title>iPhone 15 Pro</Card.Title>
            <Card.Description>Latest iPhone with advanced features</Card.Description>
            <Card.Footer style={{ borderTop: 'none', paddingTop: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1f2937' }}>$999</span>
                <button style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ff9900',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Add to Cart
                </button>
              </div>
            </Card.Footer>
          </Card>

          <Card hover={true} onClick={() => alert('Product clicked')}>
            <div style={{ 
              width: '100%', 
              height: '150px', 
              backgroundColor: '#f3f4f6', 
              borderRadius: '4px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              💻
            </div>
            <Card.Title>MacBook Pro</Card.Title>
            <Card.Description>Powerful laptop for professionals</Card.Description>
            <Card.Footer style={{ borderTop: 'none', paddingTop: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1f2937' }}>$1,999</span>
                <button style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ff9900',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Add to Cart
                </button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default CardUsageExamples