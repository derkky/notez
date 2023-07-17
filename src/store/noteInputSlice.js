import {createSlice} from "@reduxjs/toolkit"

const noteInputSlice = createSlice({
    name: "noteInput",
    initialState: {value: {title: "", content: "", category: ""}},
    reducers: {
        editTitle: (state, action) => {state.value.title = action.payload},
        editContent: (state, action) => {state.value.content = action.payload},
        editCategory: (state, action) => {state.value.category = action.payload},
        loadNote: (state, action) => {state.value = action.payload}
    }
})

export default noteInputSlice.reducer

export const {editTitle, editContent, editCategory, loadNote} = noteInputSlice.actions