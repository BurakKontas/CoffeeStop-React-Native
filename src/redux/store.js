import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './reducers/theme'
import cartReducer from './reducers/cart'

export default configureStore({
    reducer:{
        theme:themeReducer,
        cart:cartReducer,
    },
})