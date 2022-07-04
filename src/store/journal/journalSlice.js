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
    setSaving: (state) => {
        state.isSaving = true;
    },
    updateNote: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map( note => {

            if (note.id === action.payload.id) {
                return action.payload;
            }

            return note;

        })
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