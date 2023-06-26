import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userApi } from '../../api/user.api'
import { getProfile, loginInAccount } from './user.actions'
import { storeI } from '../../store'
import { ErrorResponse } from '../../../models'

interface BaseState {
  errors: ErrorResponse | null
  success: {} | null
  isLoading: boolean
}
export interface UserState {
  authUser: BaseState
  registration: BaseState
  login: BaseState
}

const initialState: UserState = {
  authUser: {
    errors: null,
    success: null,
    isLoading: false,
  },
  registration: {
    errors: null,
    success: null,
    isLoading: false,
  },
  login: {
    errors: null,
    success: null,
    isLoading: false,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutAuth: (state: UserState, action: PayloadAction) => {
      localStorage.removeItem('token')
      state.authUser.success = null
      state.authUser.errors = null
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProfile.fulfilled, (state: UserState, action) => {
      console.log('action', action)
      state.authUser.isLoading = true
      // state.authUser.success = null;
      // state.authUser.errors = null;

      if (action.payload.message) {
        // console.log('Сообщение', user.authUser.message)
        state.authUser.errors = action.payload
      } else {
        state.authUser.success = action.payload
      }
      state.authUser.isLoading = false
    })
    builder.addCase(loginInAccount.fulfilled, (state: UserState, action) => {
      console.log('action', action)
      state.login.isLoading = true
      state.login.success = null
      state.login.errors = null

      if (action.payload.message) {
        console.log('О нет')
        state.login.errors = action.payload
      } else {
        console.log('Ура')
        console.log(action.payload)
        localStorage.setItem('token', action.payload.access_token)
        state.login.success = action.payload
        state.authUser.success = action.payload.user
      }
      state.login.isLoading = false
    })
  },
})

// Action creators are generated for each case reducer function
export const { logoutAuth } = userSlice.actions

export default userSlice.reducer
