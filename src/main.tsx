import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
configureStore;

import produtsReducer, { productsFetch } from "./Store/produtsSlice";

import { productsApi } from "./Store/productsApi";
import cartReduce, { totalValue } from "./Store/cartSlice";

const store: any = configureStore({
  reducer: {
    products: produtsReducer,
    cart: cartReduce,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getReducerMiddleware) =>
    getReducerMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(totalValue());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
