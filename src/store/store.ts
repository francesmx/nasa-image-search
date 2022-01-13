import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../components/search/searchSlice';
import { nasaApiSlice } from '../api/NasaApiSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
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
