// src/components/auth/SSOLogin.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginWithSSO } from '../../redux/slices/authSlices'
import ErrorMessage from '../ui/ErrorMessage'
import LoadingSpinner from '../ui/LoadingSpinner'

const SSOLogin = () => {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(state => state.auth)

  const handleSSOLogin = (provider) => {
    dispatch(loginWithSSO(provider))
  }

  const ssoProviders = [
    {
      name: 'Google',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#00BCF2" d="M0 0h11.377v11.372H0z"/>
          <path fill="#00BCF2" d="M12.623 0H24v11.372H12.623z"/>
          <path fill="#00BCF2" d="M0 12.623h11.377V24H0z"/>
          <path fill="#00BCF2" d="M12.623 12.623H24V24H12.623z"/>
        </svg>
      )
    },
    {
      name: 'Apple',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )
    }
  ]

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Simple Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#1a1a1a',
          margin: '0 0 0.5rem 0'
        }}>
          Sign in to your account
        </h2>
        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          margin: '0'
        }}>
          Choose your preferred sign-in method
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div style={{ marginBottom: '1.5rem' }}>
          <ErrorMessage message={error} />
        </div>
      )}
      
      {/* Clean SSO Buttons */}
      <div style={{ marginBottom: '1.5rem' }}>
        {ssoProviders.map((provider, index) => (
          <button
            key={provider.name}
            onClick={() => handleSSOLogin(provider.name)}
            disabled={isLoading}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1rem',
              marginBottom: index < ssoProviders.length - 1 ? '0.75rem' : '0',
              background: '#fff',
              color: '#374151',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              fontSize: '0.95rem',
              fontWeight: '500',
              fontFamily: 'inherit',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.15s ease',
              opacity: isLoading ? 0.6 : 1,
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#f9fafb'
                e.target.style.borderColor = '#9ca3af'
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff'
              e.target.style.borderColor = '#d1d5db'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6'
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db'
              e.target.style.boxShadow = 'none'
            }}
          >
            {isLoading ? (
              <LoadingSpinner size="small" />
            ) : (
              provider.icon
            )}
            <span>Continue with {provider.name}</span>
          </button>
        ))}
      </div>
      
      {/* Clean Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '1.5rem 0',
        gap: '1rem'
      }}>
        <div style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#e5e7eb'
        }}></div>
        <span style={{
          fontSize: '0.85rem',
          color: '#6b7280',
          fontWeight: '500'
        }}>
          or
        </span>
        <div style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#e5e7eb'
        }}></div>
      </div>
      
      {/* Email Login Button */}
      <button
        onClick={() => {/* Add email login logic */}}
        disabled={isLoading}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '0.875rem 1rem',
          background: '#fff',
          color: '#374151',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          fontSize: '0.95rem',
          fontWeight: '500',
          fontFamily: 'inherit',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'all 0.15s ease',
          opacity: isLoading ? 0.6 : 1,
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.target.style.backgroundColor = '#f9fafb'
            e.target.style.borderColor = '#9ca3af'
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#fff'
          e.target.style.borderColor = '#d1d5db'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#3b82f6'
          e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#d1d5db'
          e.target.style.boxShadow = 'none'
        }}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Continue with Email</span>
      </button>
      
      {/* Simple Security Note */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f8fafc',
        borderRadius: '0.5rem',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#10b981' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151'
          }}>
            Secure & Private
          </span>
        </div>
        <p style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          margin: '0',
          lineHeight: '1.4'
        }}>
          Your login is protected with industry-standard security. We never store your social media passwords.
        </p>
      </div>
    </div>
  )
}

export default SSOLogin