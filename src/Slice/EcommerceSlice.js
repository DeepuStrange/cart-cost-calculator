import { createSlice } from "@reduxjs/toolkit";
function setTotalAmount(cart){
    // console.log(cart,"SetTO")
    // return cart.reduce((acc,cur)=> acc + Number(cur.price)*cur.qty,0)
    return cart.reduce((acc,cur)=> acc + Math.floor(cur.price)*cur.qty,0)
}
const EcommerceSlice = createSlice({
    name:"Ecommerce",
    initialState:{
        Products :[],
        cart:[],
        TotalAmount:0,
    },
    reducers:{
        GetProducts:(state,Param)=>{
            console.log(state);
            console.log(Param);
            const {payload} = Param;
            state.Products = [...state.Products,...payload];
        },
        ToCart:(state,Param)=>{
            console.log(state,"CartState");
            console.log(Param,"CartParm");
            const {payload} = Param;
            state.cart = [...state.cart,{...payload,qty:1}];
            state.TotalAmount = setTotalAmount(state.cart)
        },
        RemovFromCart:(state,Param)=>{
            console.log(state,"RemoveState");
            console.log(Param,"RemoParam");
            const {payload} = Param;
            state.cart = state.cart.filter((R)=>R.id !== payload.id);
            state.TotalAmount = setTotalAmount(state.cart)
        },
        IncreaseByDecrease:(state,Param)=>{
            console.log(state,Param);
            const {payload} = Param;
            state.cart  = state.cart.filter((Prod)=>
                Prod.id === payload.id ? (Prod.qty = payload.qty) : Prod.qty
            );
            state.TotalAmount = setTotalAmount(state.cart);
        }
    }
});
export default EcommerceSlice.reducer;
export const {GetProducts,ToCart,RemovFromCart,IncreaseByDecrease} = EcommerceSlice.actions;