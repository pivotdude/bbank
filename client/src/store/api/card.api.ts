import { Api } from './api'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export const userApi = Api.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    // getUsers: builder.query<any, void>({
    //   query: () => 'user',
    // }),
    createCard: builder.mutation({
      query(arg: any) {
        return {
          url: 'card',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: arg }),
        }
      },
    }),
    getCards: builder.query<any, void>({
      query: () => 'card',
    }),
  }),
})

export const { useCreateCardMutation, useGetCardsQuery } = userApi
