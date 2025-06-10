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
//         <h1 className="text-2xl font-bold mb-4">Your Account</h1>
//         <p className="text-gray-700">This is your account page.</p>
//         </div>

//     </div>
//   )
// }

// export default AccountPage








import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppHeader from '../components/homepagecomponent/AppHeaders'
import Card from '../components/ui/Card' // Import the common Card component
import { Settings } from 'lucide-react';


const AccountPage = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  const accountCards = [
    {
      id: 1,
      title: 'YOUR ORDERS',
      description: 'Track, return, or buy things again',
      icon: '📦',
    //   path: '/common-card-example',
      path: '/orders',
      color: '#ff9900'
    },
    {
      id: 2,
      title: 'YOUR ADDRESS',
      description: 'Edit addresses for orders and gifts',
      icon: '📍',
      path: '/address',
      color: '#146eb4'
    },
    {
      id: 3,
      title: 'SECURITY AND LOGIN',
      description: 'Edit login, name, and mobile number',
      icon: '🔒',
      path: '/security',
      color: '#0f7b0f'
    },

{
  id: 3,
  title: 'Settings',
  description: 'Edit login, name, and mobile number',
  icon: <Settings size={24} />,
  path: '/security',
  color: '#0f7b0f'
}

  ]

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <AppHeader />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Page Header */}
        <div style={{
          marginBottom: '2rem'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            Your Account
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280'
          }}>
            Manage your account settings and preferences
          </p>
        </div>

        {/* Cards Grid using Common Card Component */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px'
        }}>
          {accountCards.map((card) => (
            <Card.Icon
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
              onClick={() => handleNavigation(card.path)}
            />
          ))}
        </div>

        {/* Help Section using Common Card */}
        <Card style={{ marginTop: '3rem' }}>
          <Card.Header>
            <Card.Title>Need Help?</Card.Title>
          </Card.Header>
          <Card.Content>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <button
                onClick={() => handleNavigation('/help')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e5e7eb'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#f3f4f6'
                }}
              >
                📞 Contact Support
              </button>
              <button
                onClick={() => handleNavigation('/faq')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e5e7eb'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#f3f4f6'
                }}
              >
                ❓ FAQ
              </button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}

export default AccountPage