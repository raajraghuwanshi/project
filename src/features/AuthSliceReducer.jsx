import { createSlice } from "@reduxjs/toolkit";

const AuthSliceReducer = createSlice({
    name:"auth",
    initialState:{
        users:localStorage.getItem("registeredUsers")?JSON.parse(localStorage.getItem("registeredUsers")):[],
        loggedInUser:localStorage.getItem("loggedInUser")?JSON.parse(localStorage.getItem("loggedINUser")):null
    },
    reducers:{
        setUsers:(state,action)=>{
          state.users = [...state.users,action.payload]
        },
        logInUser:(state,action)=>{
            let user = state.users.find((elem)=> elem.email === action.payload.email && elem.password === action.payload.password)
            if(user){
                state.loggedInUser = user
                localStorage.setItem("loggedInUser",JSON.stringify(action.payload))
            }
            else{
                alert("invalid credentials")
            }
        },
        logOut:(state)=>{
            state.loggedInUser = null
            localStorage.removeItem("loggedInUser")
        }
    }
})

export const {setUsers,logInUser,logOut} = AuthSliceReducer.actions
export default AuthSliceReducer.reducer