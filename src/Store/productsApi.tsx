import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mks-frontend-challenge-api.herokuapp.com/api/v1",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (id) => "products?page=1&rows=8&sortBy=id&orderBy=ASC",
    }),
    
  }),
});

export const { useGetAllProductsQuery } = productsApi;
