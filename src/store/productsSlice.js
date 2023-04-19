import { createSlice } from "@reduxjs/toolkit";

const checkforallbrands = {
  _id: "1",
  category: "1",
  country: "1",
  company: "1",
  code: "1",
  brand: "1",
  price: 1,
  capacity: "1",
  image: "1",
  description: "1",
  netWeight: 1,
  grossWeight: 1,
  palatSize: 1,
  bl: [],
  __v: 0,
  stock: 0,
};
const checkforallcountries = {
  _id: "2",
  category: "2",
  country: "2",
  company: "2",
  code: "2",
  brand: "2",
  price: 2,
  capacity: "2",
  image: "2",
  description: "2",
  netWeight: 2,
  grossWeight: 2,
  palatSize: 2,
  bl: [],
  __v: 0,
  stock: 0,
};
const initialState = {
  products: [],
  chosenProducts: [],
  allProducts: [],
  productsForCountries: [],
  condition: 0,
  itemOffset: 0,
};
export const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    deleteProductState: (state, action) => {
      state.products = state.products.filter((item) => {
        return item._id !== action.payload;
      });
    },
    clearProductsState(state) {
      state = initialState;
    },
    setOffset(state, action) {
      state.itemOffset = action.payload;
    },
    fetchAll: (state, action) => {
      const { data, currentPage, numberOfPages } = action.payload;
      // console.log(data, currentPage, numberOfPages);
      state.products = data;
      state.currentPage = currentPage;
      state.numberOfPages = numberOfPages;
    },
    fetchFilterd: (state, action) => {
      //console.log("Setting filtered");
      // console.log(state.products);
      const { data } = action.payload;
      state.products = data;
      for (var i = 0; i < state.products.length; i++) {
        //iterate through each object in an array
        if (JSON.stringify(state.products[i]) === JSON.stringify(checkforallbrands)) {
          state.products = state.products.filter((item) => {
            return item._id !== "1";
          });
          state.allProducts = state.products;
          return;
        } else if (JSON.stringify(state.products[i]) === JSON.stringify(checkforallcountries)) {
          state.products = state.products.filter((item) => {
            return item._id !== "2";
          });
          state.productsForCountries = state.products;
        }
      }
    },
    fetchFilterdUptoBrands: (state, action) => {
      const { data } = action.payload;
      state.allProducts = data;
    },
  },
});

export const { fetchAll, fetchFilterd, fetchFilterdUptoBrands, setOffset, deleteProductState } = productsSlice.actions;

export default productsSlice.reducer;
