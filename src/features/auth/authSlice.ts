import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../state/store";

interface AuthState {
  customer_id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobilenumber: string;
  registration_type: string;
  status: string;
  otp_status: string;
  created_date: string | null;
  modified_date: string;
}

const initialState: AuthState = {
  customer_id: "",
  first_name: "",
  last_name: "",
  email: "",
  mobilenumber: "",
  registration_type: "",
  status: "",
  otp_status: "",
  created_date: null,
  modified_date: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("authState")
    ? JSON.parse(localStorage.getItem("authState") as string)
    : initialState,
  reducers: {
    login(state, action: PayloadAction<AuthState>) {
      state.customer_id = action.payload.customer_id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.mobilenumber = action.payload.mobilenumber;
      state.registration_type = action.payload.registration_type;
      state.status = action.payload.status;
      state.otp_status = action.payload.otp_status;
      state.created_date = action.payload.created_date;
      state.modified_date = action.payload.modified_date;

      // Save auth state to local storage
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout(state) {
      state.customer_id = "";
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.mobilenumber = "";
      state.registration_type = "";
      state.status = "";
      state.otp_status = "";
      state.created_date = null;
      state.modified_date = "";

      // Remove auth state from local storage
      localStorage.removeItem("authState");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectIsLoggedIn = (state: RootState): boolean => {
  return !!state.auth.customer_id && !!state.auth.email;
};
