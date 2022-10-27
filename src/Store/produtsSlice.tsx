import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface PostStats {
  error: null | unknown;
  items: [];
  status: null | string;
}

const initialState: PostStats = {
  items: [],
  status: null,
  error: null,
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id= null, { rejectWithValue }) => {
   
    try {
      const response = await axios(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
      );
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const produtsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default produtsSlice.reducer;
