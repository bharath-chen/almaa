import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../features/loader/loaderSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
