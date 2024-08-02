import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('/products.json');
  return response.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => action.payload);
  },
});

export default productsSlice.reducer;
