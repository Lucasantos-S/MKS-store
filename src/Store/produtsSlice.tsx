import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

const produtsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default produtsSlice.reducer;
