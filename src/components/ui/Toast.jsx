// src/components/ui/Toast.jsx
import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle style={{ width: '20px', height: '20px' }} />;
      case 'error':
        return <XCircle style={{ width: '20px', height: '20px' }} />;
      case 'warning':
        return <AlertCircle style={{ width: '20px', height: '20px' }} />;
      default:
        return <Info style={{ width: '20px', height: '20px' }} />;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success':
        return { bg: '#4caf50', border: '#45a049' };
      case 'error':
        return { bg: '#f44336', border: '#da190b' };
      case 'warning':
        return { bg: '#ff9800', border: '#e68900' };
      default:
        return { bg: '#2196f3', border: '#0b7dda' };
    }
  };

  const colors = getColors();

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: colors.bg,
        color: 'white',
        padding: '16px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        minWidth: '300px',
        maxWidth: '500px',
        zIndex: 9999,
        border: `1px solid ${colors.border}`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'all 0.3s ease'
      }}
    >
      {getIcon()}
      <span style={{ flex: 1, fontSize: '14px', fontWeight: '500' }}>
        {message}
      </span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.8,
          transition: 'opacity 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
      >
        <X style={{ width: '18px', height: '18px' }} />
      </button>
    </div>
  );
};

// Toast Container to manage multiple toasts
export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Listen for custom toast events
    const handleToast = (event) => {
      const { message, type, duration } = event.detail;
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, type, duration }]);
    };

    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{
            marginTop: index > 0 ? '12px' : 0,
            transform: `translateY(${index * 72}px)`
          }}
        >
          <Toast
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};

// Helper function to show toast
export const showToast = (message, type = 'info', duration = 3000) => {
  window.dispatchEvent(new CustomEvent('show-toast', {
    detail: { message, type, duration }
  }));
};

export default Toast;