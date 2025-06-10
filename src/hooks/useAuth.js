import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import {
  sendOTP,
  verifyOTP,
  loginWithSSO,
  logout,
  checkAuthStatus,
  clearError,
  setLoginMethod,
  selectAuth,
  selectIsAuthenticated,
  selectUser,
  selectIsLoading,
  selectError
} from '../redux/slices/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  // Selectors
  const auth = useSelector(selectAuth)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  // Actions
  const login = useCallback(async (credentials) => {
    if (credentials.phoneNumber && credentials.otp) {
      return await dispatch(verifyOTP(credentials)).unwrap()
    } else if (credentials.phoneNumber) {
      return await dispatch(sendOTP(credentials)).unwrap()
    } else if (credentials.provider) {
      return await dispatch(loginWithSSO(credentials.provider)).unwrap()
    }
    throw new Error('Invalid credentials')
  }, [dispatch])

  const logoutUser = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap()
    } catch (error) {
      // Even if logout fails, redirect to login
      console.error('Logout error:', error)
    } finally {
      navigate('/login')
    }
  }, [dispatch, navigate])

  const sendOTPCode = useCallback(async (phoneNumber, countryCode = '+1') => {
    return await dispatch(sendOTP({ phoneNumber, countryCode })).unwrap()
  }, [dispatch])

  const verifyOTPCode = useCallback(async (phoneNumber, otp) => {
    return await dispatch(verifyOTP({ phoneNumber, otp })).unwrap()
  }, [dispatch])

  const loginWithProvider = useCallback(async (provider) => {
    return await dispatch(loginWithSSO(provider)).unwrap()
  }, [dispatch])

  const clearAuthError = useCallback(() => {
    dispatch(clearError())
  }, [dispatch])

  const changeLoginMethod = useCallback((method) => {
    dispatch(setLoginMethod(method))
  }, [dispatch])

  const checkAuth = useCallback(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  // Auto-check auth status on mount
  useEffect(() => {
    if (!auth.isInitialized) {
      checkAuth()
    }
  }, [auth.isInitialized, checkAuth])

  // Redirect logic
  useEffect(() => {
    if (isAuthenticated && window.location.pathname === '/login') {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  // Helper functions
  const hasRole = useCallback((role) => {
    return user?.roles?.includes(role) || false
  }, [user])

  const hasPermission = useCallback((permission) => {
    return user?.permissions?.includes(permission) || false
  }, [user])

  const isEmailVerified = useCallback(() => {
    return user?.emailVerified || false
  }, [user])

  const isPhoneVerified = useCallback(() => {
    return user?.phoneVerified || false
  }, [user])

  const getInitials = useCallback(() => {
    if (!user?.name) return 'U'
    return user.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }, [user])

  const getDisplayName = useCallback(() => {
    return user?.name || user?.email || user?.phoneNumber || 'User'
  }, [user])

  return {
    // State
    auth,
    isAuthenticated,
    user,
    isLoading,
    error,
    
    // Actions
    login,
    logout: logoutUser,
    sendOTP: sendOTPCode,
    verifyOTP: verifyOTPCode,
    loginWithProvider,
    clearError: clearAuthError,
    changeLoginMethod,
    checkAuth,
    
    // Helpers
    hasRole,
    hasPermission,
    isEmailVerified,
    isPhoneVerified,
    getInitials,
    getDisplayName,
  }
}