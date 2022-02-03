import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    pending: false,
    error: false,
  },
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
