import { createSlice } from "@reduxjs/toolkit";
import { users } from "../utility/userData";



const UserSlicereducer = createSlice({
    name:"users",
    initialState:{
       users:users
    },
    reducers:{
        
    }
})

export default UserSlicereducer.reducer 