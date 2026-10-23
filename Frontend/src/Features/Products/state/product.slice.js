import {createSlice} from "@reduxjs/toolkit"


const productslice = createSlice({
    name:"product",
    initialState:{
        product:"null"
    },
    reducers:{
        setproduct:(state,action)=>{
            state.product = action.payload
        }
    }
})

export const {setproduct}=productslice.actions
export default productslice.reducer