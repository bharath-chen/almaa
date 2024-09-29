import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/product";

// Define CartProduct interface that extends Product and makes properties optional
export type CartProduct = Partial<Product> & {
  quantity?: number;
};

interface CartState {
  items: CartProduct[];
}

// Load cart items from localStorage
const loadCartFromLocalStorage = (): CartProduct[] => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
};

// Save cart items to localStorage
const saveCartToLocalStorage = (items: CartProduct[]) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

// Initialize state with items from localStorage
const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.product_id === action.payload.product_id
      );
      if (existingProductIndex >= 0) {
        // If product already exists, increase quantity
        state.items[existingProductIndex].quantity += action.payload.quantity;
      } else {
        // If product doesn't exist, add it to the cart
        state.items.push(action.payload);
      }
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // Remove product by product_id
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload
      );
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ product_id: string; quantity: number }>
    ) => {
      const { product_id, quantity } = action.payload;
      const existingProduct = state.items.find(
        (item) => item.product_id === product_id
      );
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      // Clear all items in the cart
      state.items = [];
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
    setItems: (state, action: PayloadAction<CartProduct[]>) => {
      // Set items in the cart
      state.items = action.payload;
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
    addItemToCartWithQuantity: (
      state,
      action: PayloadAction<{ product: CartProduct; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.items.findIndex(
        (item) => item.product_id === product.product_id
      );

      if (existingProductIndex >= 0) {
        // If product exists, increase its quantity by the specified amount
        state.items[existingProductIndex].quantity += quantity;
      } else {
        // If product does not exist, add it with the specified quantity
        state.items.push({
          ...product,
          quantity, // set the initial quantity
        });
      }
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  setItems,
  addItemToCartWithQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selector to compute the total price
export const selectCartTotal = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => {
    const sellingPrice = parseFloat(item.selling_price || "0");
    return total + sellingPrice * item.quantity;
  }, 0);
};

// New selector to calculate the total count of items based on quantity
export const selectCartItemCount = (state: { cart: CartState }) => {
  return state.cart.items.reduce((count, item) => {
    return count + (item.quantity || 0);
  }, 0);
};
