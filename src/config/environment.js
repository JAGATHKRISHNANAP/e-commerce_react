// Environment configuration
export const config = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://65.1.248.179:8000/api/v1/api/v1',
  
  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || 'MyAuthApp',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  NODE_ENV: import.meta.env.MODE || 'development',
  
  // Debug Configuration
  DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true' || import.meta.env.MODE === 'development',
  
  // OAuth Configuration
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  MICROSOFT_CLIENT_ID: import.meta.env.VITE_MICROSOFT_CLIENT_ID || '',
  APPLE_CLIENT_ID: import.meta.env.VITE_APPLE_CLIENT_ID || '',
  
  // Storage Keys
  TOKEN_STORAGE_KEY: import.meta.env.VITE_TOKEN_STORAGE_KEY || 'authToken',
  REFRESH_TOKEN_STORAGE_KEY: import.meta.env.VITE_REFRESH_TOKEN_STORAGE_KEY || 'refreshToken',
  USER_STORAGE_KEY: import.meta.env.VITE_USER_STORAGE_KEY || 'userData',
  
  // Feature Flags
  ENABLE_2FA: import.meta.env.VITE_ENABLE_2FA === 'true' || true,
  ENABLE_SSO: import.meta.env.VITE_ENABLE_SSO === 'true' || true,
  ENABLE_PHONE_AUTH: import.meta.env.VITE_ENABLE_PHONE_AUTH === 'true' || true,
  
  // API Timeouts
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 15000,
  REFRESH_TOKEN_TIMEOUT: parseInt(import.meta.env.VITE_REFRESH_TOKEN_TIMEOUT) || 5000,
}

// Environment helpers
export const isDevelopment = config.NODE_ENV === 'development'
export const isProduction = config.NODE_ENV === 'production'
export const isTest = config.NODE_ENV === 'test'

// API endpoints configuration
export const API_ENDPOINTS = {
  // Auth endpoints
  SEND_OTP: '/auth/send-otp',
  VERIFY_OTP: '/auth/verify-otp',
  RESEND_OTP: '/auth/resend-otp',
  
  // SSO endpoints
  GOOGLE_SSO: '/auth/google/initiate',
  MICROSOFT_SSO: '/auth/microsoft/initiate',
  APPLE_SSO: '/auth/apple/initiate',
  GITHUB_SSO: '/auth/github/initiate',
  LINKEDIN_SSO: '/auth/linkedin/initiate',
  
  // Token management
  REFRESH_TOKEN: '/auth/refresh',
  LOGOUT: '/auth/logout',
  LOGOUT_ALL: '/auth/logout-all',
  
  // User management
  USER_PROFILE: '/user/profile',
  UPDATE_PROFILE: '/user/profile',
  CHANGE_PASSWORD: '/user/change-password',
  DELETE_ACCOUNT: '/user/account',
  
  // Security
  ENABLE_2FA: '/user/security/2fa/enable',
  DISABLE_2FA: '/user/security/2fa/disable',
  VERIFY_2FA: '/user/security/2fa/verify',
  
  // Sessions
  ACTIVE_SESSIONS: '/user/sessions',
  REVOKE_SESSION: '/user/sessions',
}

// Default values
export const DEFAULTS = {
  PHONE_COUNTRY_CODE: '+1',
  OTP_LENGTH: 6,
  OTP_RESEND_TIMEOUT: 60, // seconds
  PASSWORD_MIN_LENGTH: 8,
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes in milliseconds
}

// Validation rules
export const VALIDATION_RULES = {
  PHONE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 15,
    REGEX: /^[0-9]{10,15}$/
  },
  EMAIL: {
    REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MAX_LENGTH: 254
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL_CHAR: true
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    REGEX: /^[a-zA-Z\s\-']+$/
  }
}

export default config