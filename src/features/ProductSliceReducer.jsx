import { createSlice } from "@reduxjs/toolkit";
import { products } from "../utility/productData";

const ProductSlicereducer = createSlice({
    name: "products",
    initialState: {
        products: products,
        allproduct: products
    },
    reducers: {
        brandFilter: (state, action) => {
            state.products = state.allproduct.filter(
                (product) => product.brand === action.payload
            );

        }
    }
})
export const { brandFilter } = ProductSlicereducer.actions
export default ProductSlicereducer.reducer 