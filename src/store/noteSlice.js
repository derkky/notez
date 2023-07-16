import {createSlice} from "@reduxjs/toolkit"

const noteSlice = createSlice({
    name: "notes",
    initialState: {value: [{title: "test title", content: "test content", id: 1}]},
    reducers: {
        upsertNote: (state, action) => {
            if (action.payload.id) {
                // Update existing note
                const selectedNote = state.value.filter(note => note.id == action.payload.id)[0]
                selectedNote.title = action.payload.title
                selectedNote.content = action.payload.content
            } else {
                // Insert new note
                const newId = Math.max(...state.value.map(note => note.id)) + 1
                action.payload.id = newId
                state.value.push(action.payload)
            }
        },
        deleteNote: (state, action) => {}
    }
})

export default noteSlice.reducer

export const {upsertNote, deleteNote} = noteSlice.actions