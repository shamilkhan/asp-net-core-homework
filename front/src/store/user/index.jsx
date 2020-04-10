import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  username: null,
  email: null,
  token: null,
};

const slice = createSlice({
  name: "username",
  initialState,
  reducers: {
    login: (store, action) => {
      return { ...store, ...action.payload };
    },
    logout: (store) => {
      return { ...store, token: null };
    },
  },
});

export const {
  reducer,
  actions: { login, logout },
} = slice;
