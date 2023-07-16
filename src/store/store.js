import {configureStore} from "@reduxjs/toolkit"

import noteSlice from "./noteSlice"
import noteInputSlice from "./noteInputSlice"


const store = configureStore({
    reducer: {
        notes: noteSlice,
        noteInput: noteInputSlice
    }
})

export default store