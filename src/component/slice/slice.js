import {createSlice} from "@reduxjs/toolkit";

const myUserSlice= createSlice({
    name:"usersInfo",
    initialState: [],
    reducers:{
        myUserInfo:(state, action)=>{
        }
    }
})

export default myUserSlice.reducer;

export const {myUserInfo}= myUserSlice.actions;

