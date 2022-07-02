import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
name: 'journal',
initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: null,
    // active: {
    //     id:'ASD123',
    //     title: '',
    //     body: '',
    //     date: 010720221,
    //     imageURL: [], //https//:foto1.jpg, https//:foto2.jpg, https//:foto3.jpg,
    // },

},
reducers: {
    addNewEmptyNote: (state, action) => {

    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state, action) => {

    },
    setSaving: (state, action) => {

    },
    updateNote: (state, action) => {

    },
    deleteNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    },
}
});
// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNote,
    deleteNoteById
} = journalSlice.actions;