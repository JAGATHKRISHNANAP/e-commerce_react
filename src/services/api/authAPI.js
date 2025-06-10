// authAPI.js
import api from './baseAPI'
export const authAPI = {
  // Phone Authentication
  sendOTP: async (phoneNumber, countryCode = '+1') => {
    const response = await api.post('/auth/send-otp', {
      phoneNumber,
      countryCode
    })
    return response.data
  },

  verifyOTP: async (phoneNumber, otp) => {
    const response = await api.post('/auth/verify-otp', {
      phoneNumber,
      otp
    })
    return response.data
  },

  resendOTP: async (phoneNumber, countryCode = '+1') => {
    const response = await api.post('/auth/resend-otp', {
      phoneNumber,
      countryCode
    })
    return response.data
  },

  // SSO Authentication
  initiateGoogleSSO: async () => {
    const response = await api.post('/auth/google/initiate')
    return response.data
  },

  initiateMicrosoftSSO: async () => {
    const response = await api.post('/auth/microsoft/initiate')
    return response.data
  },

  initiateAppleSSO: async () => {
    const response = await api.post('/auth/apple/initiate')
    return response.data
  },

  initiateGitHubSSO: async () => {
    const response = await api.post('/auth/github/initiate')
    return response.data
  },

  initiateLinkedInSSO: async () => {
    const response = await api.post('/auth/linkedin/initiate')
    return response.data
  },

  handleSSOCallback: async (provider, code, state) => {
    const response = await api.post(`/auth/${provider}/callback`, {
      code,
      state
    })
    return response.data
  },

  // Email Authentication (if you want to add this later)
  loginWithEmail: async (email, password) => {
    const response = await api.post('/auth/email/login', {
      email,
      password
    })
    return response.data
  },

  registerWithEmail: async (email, password, userData) => {
    const response = await api.post('/auth/email/register', {
      email,
      password,
      ...userData
    })
    return response.data
  },

  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', {
      email
    })
    return response.data
  },

  resetPassword: async (token, newPassword) => {
    const response = await api.post('/auth/reset-password', {
      token,
      newPassword
    })
    return response.data
  },

  // Token Management
  refreshToken: async (refreshToken) => {
    const response = await api.post('/auth/refresh', {
      refreshToken
    })
    return response.data
  },

  logout: async () => {
    const response = await api.post('/auth/logout')
    return response.data
  },

  logoutAllDevices: async () => {
    const response = await api.post('/auth/logout-all')
    return response.data
  },

  // User Profile
  getUserProfile: async () => {
    const response = await api.get('/user/profile')
    return response.data
  },

  updateUserProfile: async (userData) => {
    const response = await api.put('/user/profile', userData)
    return response.data
  },

  changePassword: async (currentPassword, newPassword) => {
    const response = await api.put('/user/change-password', {
      currentPassword,
      newPassword
    })
    return response.data
  },

  // Account Management
  deleteAccount: async (password) => {
    const response = await api.delete('/user/account', {
      data: { password }
    })
    return response.data
  },

  // Security
  enable2FA: async () => {
    const response = await api.post('/user/security/2fa/enable')
    return response.data
  },

  disable2FA: async (code) => {
    const response = await api.post('/user/security/2fa/disable', {
      code
    })
    return response.data
  },

  verify2FA: async (code) => {
    const response = await api.post('/user/security/2fa/verify', {
      code
    })
    return response.data
  },

  // Sessions
  getActiveSessions: async () => {
    const response = await api.get('/user/sessions')
    return response.data
  },

  revokeSession: async (sessionId) => {
    const response = await api.delete(`/user/sessions/${sessionId}`)
    return response.data
  },

  // Account Linking
  linkSocialAccount: async (provider, accessToken) => {
    const response = await api.post('/user/link-account', {
      provider,
      accessToken
    })
    return response.data
  },

  unlinkSocialAccount: async (provider) => {
    const response = await api.delete(`/user/unlink-account/${provider}`)
    return response.data
  },

  // Admin/Analytics (if needed)
  getLoginAnalytics: async (dateRange) => {
    const response = await api.get('/analytics/login', {
      params: dateRange
    })
    return response.data
  }
}