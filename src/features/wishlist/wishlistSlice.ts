import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Wishlist } from "../../models/wishlist";
import apiClient from "../../services/api-client";
import { Product } from "../../models/product";

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
    const response = await apiClient.get<Wishlist>(
      "?gofor=wishlist&customer_id=3"
    );
    return response.data;
  }
);

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItemToWishlist",
  async (item: Product) => {
    const payload = {
      goFor: "addwishlist",
      customer_id: "3",
      product_id: item.product_id,
    };
    const response = await apiClient.post(null, payload);
    return response.data;
  }
);

export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/updateItemToWishlist",
  async (item: Product) => {
    const payload = {
      goFor: "updatewishlist",
      customer_id: "3",
      product_id: item.product_id,
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
