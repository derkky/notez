import {createSlice} from "@reduxjs/toolkit"

const noteSlice = createSlice({
    name: "notes",
    initialState: {value: [{title: "test title", content: "test content", id: 1, date: Date.now(), category: "Personal"}]},
    reducers: {
        upsertNote: (state, action) => {
            console.log(action.payload)
            if (action.payload.id) {
                // Update existing note
                const selectedNote = state.value.filter(note => note.id == action.payload.id)[0]
                selectedNote.title = action.payload.title
                selectedNote.content = action.payload.content
                selectedNote.category = action.payload.category
            } else {
                // Insert new note
                console.log("yo")
                const newId = Math.max(...state.value.map(note => note.id)) + 1
                action.payload.id = newId
                action.payload.date = Date.now()
                state.value.push(action.payload)
                console.log(state.value)
            }
        },
        deleteNote: (state, action) => {}
    }
})

export default noteSlice.reducer

export const {upsertNote, deleteNote} = noteSlice.actions