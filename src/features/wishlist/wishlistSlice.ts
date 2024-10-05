import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Wishlist } from "../../models/wishlist";
import apiClient from "../../services/api-client";

interface WishlistState {
  wishlist: Wishlist;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
  success: string;
}

const initialState: WishlistState = {
  wishlist: { wishlist: [], productdetail: [] },
  status: "idle",
  error: null,
  success: null,
};

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishList",
  async () => {
    const authInfo = JSON.parse(localStorage.getItem("authState"));

    const response = await apiClient.get<Wishlist>(
      `?gofor=wishlist&customer_id=${authInfo?.customer_id}`
    );
    return response.data;
  }
);

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItemToWishlist",
  async (productId: string) => {
    const authInfo = JSON.parse(localStorage.getItem("authState"));
    const payload = {
      gofor: "addwishlist",
      customer_id: authInfo?.customer_id,
      product_id: productId,
    };
    const response = await apiClient.post(null, payload);
    return response.data;
  }
);

export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/updateItemToWishlist",
  async (productId: string) => {
    const authInfo = JSON.parse(localStorage.getItem("authState"));
    const payload = {
      gofor: "updatewishlist",
      customer_id: authInfo?.customer_id,
      product_id: productId,
    };
    const response = await apiClient.post(null, payload);
    return response.data;
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wishlist = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItemToWishlist.fulfilled, (state, action) => {
        // Optionally handle any additional logic here
        state.success = action.payload.response || null;
      })
      .addCase(removeItemFromWishlist.fulfilled, (state, action) => {
        // Optionally handle any additional logic here
        state.success = action.payload.response || null;
      });
  },
});

export default wishlistSlice.reducer;
