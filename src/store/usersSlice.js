import {createSlice} from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        name: "",

    },
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload]

        },
        changeInput(state, action) {
            state.name = action.payload;

        },
        cleaRInput(state) {
            state.name = ""
        },
        deleteUsers(state, action) {
            state.users = []

        },

    }

})

export const {addUser, changeInput, cleaRInput, deleteUsers} = usersSlice.actions;

export default usersSlice.reducer