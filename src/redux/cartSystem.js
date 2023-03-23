import { configureStore, createSlice } from "@reduxjs/toolkit";
import Products from "../containers/Products";

const initialState={
    cart:[],
    quantity:0,
}

const cartSystem= createSlice({
    name:'cart',
    initialState,
    reducers:{
        AddCart:(state,action)=>{
            const find=state.cart.findIndex(products=>products.id===action.payload.id)
            if(find>=0){
                state.cart[find].quantity+=1;

            }
            else{
                const tempvar={...action.payload,quantity:1}
                state.cart.push(tempvar)
            }
            
        }
    }
})

export const {AddCart}=cartSystem.actions;
export default cartSystem.reducer;