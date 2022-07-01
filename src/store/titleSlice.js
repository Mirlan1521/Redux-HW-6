import {createSlice} from "@reduxjs/toolkit";


const  titleSlice = createSlice({
    name: "titleSlice",
    initialState: {
        title: " old title",
        input: ""
    },
    reducers:{
        changeTitle(state,action){
            state.title="New title"
        },
        clearTitle(state){
            state.title= ""
        },
        inputChange (state,action){
            state.input= action.payload
        },
        addTitleFromInput (state,action){
            state.title = action.payload
            state.input = ""
        },

    }
})


export  const {changeTitle, clearTitle,inputChange, addTitleFromInput} = titleSlice.actions;
export default titleSlice.reducer