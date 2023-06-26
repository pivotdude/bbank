// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState'

interface User {
  id: number
  name: string
  email: string
  phone: string
  password: string
}

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: 'api',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    // headers: {"Authorization": localStorage.getItem(('token'))}
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token')
      if (token !== null) {
        // Проверяем accessToken на null
        headers.set('Authorization', `Bearer ${token}`) // Используем accessToken
      }
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<void, void>({
      query: () => `pokemon/`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = Api
