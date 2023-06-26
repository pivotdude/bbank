import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './features/user/user.slice'
import { Api } from './api/api'
import { useDispatch } from 'react-redux'
import { UserState } from './features/user/user.slice'

const reducers = combineReducers({
  user: userReducer,
  [Api.reducerPath]: Api.reducer,
})
export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>

export interface storeI {
  user: UserState
}

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
