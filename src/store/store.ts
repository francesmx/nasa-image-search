import { configureStore } from '@reduxjs/toolkit';
import { nasaApiSlice } from '../api/nasaApiSlice';

export const store = configureStore({
  reducer: {
    [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(nasaApiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
