import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../features/loader/loaderSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
