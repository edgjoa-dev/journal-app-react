import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
name: 'journal',
initialState: {
    isSaving: false,
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
    savingNewNote: (state) => {
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;
    },
    setActiveNote: (state, action) => {
        state.active = action.payload
    },
    setNotes: (state, action) => {
        state.notes = action.payload
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
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNote,
    deleteNoteById
} = journalSlice.actions;