import { createAsyncThunk } from '@reduxjs/toolkit'
import { userApi } from '../../api/user.api'

const fetched = async (URL: string, options: any = {}) => {
  console.log(process.env)
  console.log(URL)
  const resp = await fetch(process.env.REACT_APP_API_URL + URL, {
    ...options,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  })
  console.log(resp)
  return resp.json()
}
export const getProfile = createAsyncThunk(
  'auth/profile',
  async (_, thunkAPI) => {
    const profileInfo = await fetched('auth/profile')
    return profileInfo
  }
)

export const loginInAccount = createAsyncThunk(
  'auth/login',
  async (body: any, thunkAPI) => {
    const loginInfo = await fetched('auth/login', {
      method: 'POST',
      body: JSON.stringify(body),
    })
    return loginInfo
  }
)
