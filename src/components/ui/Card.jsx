// components/ui/Card.jsx
import React from 'react'

const Card = ({ 
  children,
  onClick,
  className = '',
  style = {},
  variant = 'default',
  hover = false,
  padding = '1.5rem',
  borderColor = null,
  borderPosition = 'none' // 'left', 'right', 'top', 'bottom', 'none'
}) => {
  
  const variants = {
    default: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    elevated: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    outlined: {
      backgroundColor: 'white',
      border: '2px solid #e5e7eb',
      boxShadow: 'none'
    },
    ghost: {
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  }

  const baseStyles = {
    borderRadius: '8px',
    padding: padding,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    transform: 'translateY(0)',
    ...variants[variant],
    ...style
  }

  // Add border color based on position
  if (borderColor && borderPosition !== 'none') {
    switch (borderPosition) {
      case 'left':
        baseStyles.borderLeft = `4px solid ${borderColor}`
        break
      case 'right':
        baseStyles.borderRight = `4px solid ${borderColor}`
        break
      case 'top':
        baseStyles.borderTop = `4px solid ${borderColor}`
        break
      case 'bottom':
        baseStyles.borderBottom = `4px solid ${borderColor}`
        break
      default:
        break
    }
  }

  const handleMouseOver = (e) => {
    if (hover && onClick) {
      e.currentTarget.style.transform = 'translateY(-2px)'
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
    } else if (hover) {
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)'
    }
  }

  const handleMouseOut = (e) => {
    if (hover) {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = variants[variant].boxShadow
    }
  }

  return (
    <div
      className={className}
      style={baseStyles}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </div>
  )
}

// Card Header Component
const CardHeader = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={className}
      style={{
        marginBottom: '1rem',
        ...style
      }}
    >
      {children}
    </div>
  )
}

// Card Title Component
const CardTitle = ({ children, className = '', style = {} }) => {
  return (
    <h3 
      className={className}
      style={{
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 0.5rem 0',
        letterSpacing: '0.5px',
        ...style
      }}
    >
      {children}
    </h3>
  )
}

// Card Description Component
const CardDescription = ({ children, className = '', style = {} }) => {
  return (
    <p 
      className={className}
      style={{
        fontSize: '0.9rem',
        color: '#6b7280',
        margin: '0',
        lineHeight: '1.4',
        ...style
      }}
    >
      {children}
    </p>
  )
}

// Card Content Component
const CardContent = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={className}
      style={{
        ...style
      }}
    >
      {children}
    </div>
  )
}

// Card Footer Component
const CardFooter = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={className}
      style={{
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #f3f4f6',
        ...style
      }}
    >
      {children}
    </div>
  )
}

// Icon Card Component (specialized for your use case)
const IconCard = ({ 
  icon, 
  title, 
  description, 
  onClick, 
  color = '#6b7280',
  showArrow = true,
  ...props 
}) => {
  return (
    <Card 
      onClick={onClick} 
      hover={!!onClick}
      borderColor={color}
      borderPosition="left"
      {...props}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
        {/* Icon */}
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          backgroundColor: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          flexShrink: 0
        }}>
          {icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        {/* Arrow */}
        {showArrow && (
          <div style={{
            fontSize: '1.2rem',
            color: '#9ca3af',
            transition: 'color 0.2s ease'
          }}>
            →
          </div>
        )}
      </div>
    </Card>
  )
}

// Export all components
Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter
Card.Icon = IconCard

export default Card