import { createSlice } from "@reduxjs/toolkit";
import { dataPost } from "./DataPost";

export const postSlice = createSlice({
    name:"users",
    initialState:{value: dataPost },
    reducers:{
        addPost :(state,action)=>{
            state.value.push(action.payload)
        },
        deletePost:(state,action)=>{
            state.value= state.value.filter((user)=> user.id !== action.payload.id)
        },
        updateDiscriptionPost:(state,action)=>{
            state.value.map((user)=>{
                if (user.id === action.payload.id) {
                     user.discription = action.payload.discription;
                }
            })
        },
        
    }
});
export const {addPost ,deletePost ,updateDiscriptionPost} = postSlice.actions;
export default postSlice.reducer;