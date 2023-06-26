import { Api } from './api'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export const userApi = Api.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    // getUsers: builder.query<any, void>({
    //   query: () => 'user',
    // }),
    registration: builder.mutation({
      query(arg: any) {
        return {
          url: 'auth/registration',
          method: 'POST',
          body: arg,
        }
      },
    }),
    login: builder.mutation({
      query(arg: any) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: arg,
        }
      },
    }),
    getProfile: builder.query<any, void>({
      query: () => 'auth/profile',
    }),
  }),
})

export const { useRegistrationMutation, useLoginMutation, useGetProfileQuery } =
  userApi
