import {createSlice} from "@reduxjs/toolkit"
// todo setup async storage here

const categorySlice = createSlice({
    name: "categories",
    initialState: {value: [
            {category: "Personal", color: "red"},
            {category: "Work", color: "gray"},
            {category: "Study", color: "blue"},
        ]},
    reducers: {
        insertCategory: (state, action) => {

        },
        deleteCategory: (state, action) => {}
    }
})

export default categorySlice.reducer

export const {insertCategory, deleteCategory} = categorySlice.actions