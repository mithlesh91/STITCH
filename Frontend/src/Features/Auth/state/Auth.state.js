import {createSlice} from "@reduxjs/toolkit"

const Authslice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        loading:false,
        error:null
    },
    reducers:{
        setuser:(state,action)=>{
            state.user = action.payload
        },
        seterror:(state,action)=>{
            state.error = action.payload
        },
        setloading:(state,action)=>{
            state.loading = action.payload
        }
    }
})

export const {seterror,setloading,setuser} = Authslice.actions

export default Authslice.reducer