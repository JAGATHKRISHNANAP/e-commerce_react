import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlices'
import LoadingSpinner from './ui/LoadingSpinner'

const Header = ({ onSearch, searchQuery }) => {
  const dispatch = useDispatch()
  const { user, isLoading } = useSelector(state => state.auth)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [searchInput, setSearchInput] = useState(searchQuery || '')
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const dropdownRef = useRef(null)
  const searchRef = useRef(null)

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout())
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      onSearch(searchInput.trim())
      setShowSuggestions(false)
    }
  }

  const handleSearchInputChange = async (e) => {
    const value = e.target.value
    setSearchInput(value)

    if (value.length >= 2) {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/api/search/suggestions?q=${encodeURIComponent(value)}`)
        if (response.ok) {
          const suggestions = await response.json()
          setSearchSuggestions(suggestions)
          setShowSuggestions(true)
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion)
    setShowSuggestions(false)
    onSearch(suggestion)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          minWidth: 'fit-content'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
          }}>
            🛒
          </div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            margin: '0',
            background: 'linear-gradient(45deg, #fff, #f0f8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            ShopEasy
          </h1>
        </div>

        {/* Search Bar */}
        <div ref={searchRef} style={{
          flex: 1,
          position: 'relative',
          maxWidth: '600px'
        }}>
          <form onSubmit={handleSearch} style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            padding: '2px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchInput}
              onChange={handleSearchInputChange}
              style={{
                flex: 1,
                padding: '12px 20px',
                border: 'none',
                borderRadius: '25px',
                fontSize: '16px',
                outline: 'none',
                background: 'transparent'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '22px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                margin: '2px'
              }}
            >
              🔍 Search
            </button>
          </form>

          {/* Search Suggestions */}
          {showSuggestions && searchSuggestions.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              marginTop: '4px',
              zIndex: 1001,
              maxHeight: '300px',
              overflowY: 'auto'
            }}>
              {searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    padding: '12px 20px',
                    cursor: 'pointer',
                    borderBottom: index < searchSuggestions.length - 1 ? '1px solid #eee' : 'none',
                    fontSize: '14px',
                    color: '#333'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#f8f9fa'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent'
                  }}
                >
                  🔍 {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User Profile and Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          minWidth: 'fit-content'
        }}>
          {/* Cart Icon */}
          <button style={{
            padding: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}>
            🛒
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: '#ff6b6b',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              0
            </span>
          </button>

          {/* Profile Dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '25px',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  {user?.name || 'User'}
                </p>
                <p style={{
                  fontSize: '12px',
                  opacity: 0.8,
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  View Profile
                </p>
              </div>
              <span style={{
                fontSize: '12px',
                marginLeft: '4px'
              }}>
                {showProfileDropdown ? '▲' : '▼'}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showProfileDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                marginTop: '8px',
                minWidth: '200px',
                zIndex: 1001,
                border: '1px solid rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  padding: '16px',
                  borderBottom: '1px solid #eee'
                }}>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#333',
                    margin: '0 0 4px 0'
                  }}>
                    {user?.name || 'User'}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: '0'
                  }}>
                    {user?.email || user?.phoneNumber || 'user@example.com'}
                  </p>
                </div>

                <div style={{ padding: '8px 0' }}>
                  {[
                    { icon: '👤', label: 'My Profile', action: () => { } },
                    { icon: '📦', label: 'My Orders', action: () => { } },
                    { icon: '❤️', label: 'Wishlist', action: () => { } },
                    { icon: '⚙️', label: 'Settings', action: () => { } }
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={item.action}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '14px',
                        color: '#333'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#f8f9fa'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'none'
                      }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}

                  <div style={{
                    height: '1px',
                    background: '#eee',
                    margin: '8px 0'
                  }} />

                  <button
                    onClick={handleLogout}
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '14px',
                      color: '#ff6b6b',
                      opacity: isLoading ? 0.7 : 1
                    }}
                    onMouseOver={(e) => {
                      if (!isLoading) {
                        e.target.style.background = '#fff5f5'
                      }
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'none'
                    }}
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner size="small" color="#ff6b6b" />
                        <span>Logging out...</span>
                      </>
                    ) : (
                      <>
                        <span>🚪</span>
                        <span>Logout</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header