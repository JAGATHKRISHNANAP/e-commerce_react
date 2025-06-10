import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../services/api/authAPI'
// import toast from 'react-hot-toast'

// Async Thunks
export const updateUserProfile = createAsyncThunk(
  'user/updateProfile',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authAPI.updateUserProfile(userData)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await authAPI.changePassword(currentPassword, newPassword)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)

export const deleteAccount = createAsyncThunk(
  'user/deleteAccount',
  async (password, { rejectWithValue }) => {
    try {
      const response = await authAPI.deleteAccount(password)
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)

export const getActiveSessions = createAsyncThunk(
  'user/getActiveSessions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.getActiveSessions()
      return response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)

export const revokeSession = createAsyncThunk(
  'user/revokeSession',
  async (sessionId, { rejectWithValue }) => {
    try {
      const response = await authAPI.revokeSession(sessionId)
      return { sessionId, ...response }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message)
    }
  }
)

// Initial State
const initialState = {
  profile: null,
  preferences: {
    theme: 'light', // 'light' | 'dark' | 'system'
    language: 'en',
    notifications: {
      email: true,
      sms: true,
      push: true,
      marketing: false
    },
    privacy: {
      profileVisibility: 'public', // 'public' | 'private' | 'friends'
      showOnlineStatus: true,
      allowDataCollection: false
    }
  },
  settings: {
    twoFactorEnabled: false,
    emailVerified: false,
    phoneVerified: false,
    lastLoginAt: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  },
  sessions: [],
  isLoading: false,
  error: null,
  lastUpdated: null
}

// User Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload }
      state.lastUpdated = new Date().toISOString()
    },
    
    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload }
      state.lastUpdated = new Date().toISOString()
    },
    
    updateNotificationSettings: (state, action) => {
      state.preferences.notifications = { 
        ...state.preferences.notifications, 
        ...action.payload 
      }
      state.lastUpdated = new Date().toISOString()
    },
    
    updatePrivacySettings: (state, action) => {
      state.preferences.privacy = { 
        ...state.preferences.privacy, 
        ...action.payload 
      }
      state.lastUpdated = new Date().toISOString()
    },
    
    setTheme: (state, action) => {
      state.preferences.theme = action.payload
      state.lastUpdated = new Date().toISOString()
    },
    
    setLanguage: (state, action) => {
      state.preferences.language = action.payload
      state.lastUpdated = new Date().toISOString()
    },
    
    clearUserData: (state) => {
      return {
        ...initialState,
        preferences: {
          ...initialState.preferences,
          theme: state.preferences.theme, // Keep theme preference
          language: state.preferences.language // Keep language preference
        }
      }
    },
    
    clearError: (state) => {
      state.error = null
    },
    
    setLastLoginAt: (state, action) => {
      state.settings.lastLoginAt = action.payload
    }
  },
  
  extraReducers: (builder) => {
    builder
      // Update Profile
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.profile = { ...state.profile, ...action.payload.user }
        state.lastUpdated = new Date().toISOString()
        // toast.success('Profile updated successfully!')
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        // toast.error(action.payload || 'Failed to update profile')
      })
      
      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.isLoading = false
        // toast.success('Password changed successfully!')
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        // toast.error(action.payload || 'Failed to change password')
      })
      
      // Delete Account
      .addCase(deleteAccount.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.isLoading = false
        // toast.success('Account deleted successfully')
        // Clear all user data
        return initialState
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        // toast.error(action.payload || 'Failed to delete account')
      })
      
      // Get Active Sessions
      .addCase(getActiveSessions.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getActiveSessions.fulfilled, (state, action) => {
        state.isLoading = false
        state.sessions = action.payload.sessions || []
      })
      .addCase(getActiveSessions.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      
      // Revoke Session
      .addCase(revokeSession.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(revokeSession.fulfilled, (state, action) => {
        state.isLoading = false
        state.sessions = state.sessions.filter(
          session => session.id !== action.payload.sessionId
        )
        // toast.success('Session revoked successfully')
      })
      .addCase(revokeSession.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        // toast.error(action.payload || 'Failed to revoke session')
      })
  }
})

// Export actions
export const {
  updatePreferences,
  updateSettings,
  updateNotificationSettings,
  updatePrivacySettings,
  setTheme,
  setLanguage,
  clearUserData,
  clearError,
  setLastLoginAt
} = userSlice.actions

// Selectors
export const selectUser = (state) => state.user
export const selectUserProfile = (state) => state.user.profile
export const selectUserPreferences = (state) => state.user.preferences
export const selectUserSettings = (state) => state.user.settings
export const selectUserSessions = (state) => state.user.sessions
export const selectUserTheme = (state) => state.user.preferences.theme
export const selectUserLanguage = (state) => state.user.preferences.language
export const selectUserIsLoading = (state) => state.user.isLoading
export const selectUserError = (state) => state.user.error

export default userSlice.reducer