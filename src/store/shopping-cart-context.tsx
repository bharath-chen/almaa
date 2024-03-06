// src/context/ShoppingCartContext.tsx
import { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "../data/data";

interface CartItem {
  product: Product;
  quantity: number;
}

// Define the actions that can be dispatched
type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: number; quantity: number };
    };

// Define the initial state
interface ShoppingCartState {
  cart: CartItem[];
}

type CartContextValue = ShoppingCartState & {
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
};

const initialState: ShoppingCartState = {
  cart: [],
};

// Create the context
const ShoppingCartContext = createContext<CartContextValue | null>(null);

type ShoppingCartProviderProps = {
  children: ReactNode;
};

function CartReducer(state: ShoppingCartState, action: CartAction) {
  switch (action.type) {
    case "ADD_TO_CART":
      // eslint-disable-next-line no-case-declarations
      const existingCartItem = state.cart.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { product: action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
}

// Create a provider component
function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, initialState);

  const ctx: CartContextValue = {
    cart: cartState.cart,
    addItemToCart(product) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
    removeItemFromCart(id) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    },
    updateQuantity(productId, quantity = 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
    },
  };

  return (
    <ShoppingCartContext.Provider value={ctx}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

// Custom hook for using the context
function useShoppingCartContext() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCartContext must be used within a ShoppingCartProvider"
    );
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ShoppingCartProvider, useShoppingCartContext };
