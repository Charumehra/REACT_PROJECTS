import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const addToCart = createSlice({
    name:"cart",
    initialState,
    reducer:{
        addItem:(state)=>{
            state.value +=1
        }
    }
})

export const {addItem}= addToCart.actions
export default addToCart.reducer