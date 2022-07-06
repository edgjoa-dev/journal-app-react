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
        state.messageSaved = '';
    },
    setNotes: (state, action) => {
        state.notes = action.payload
    },
    setSaving: (state) => {
        state.isSaving = true;
        state.messageSaved = '';
    },
    updateNote: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map( note => {
            if (note.id === action.payload.id) {
                return action.payload;
            }
            return note;
        })
        state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
    },

    setPhotosToActive: ( state, action )=> {
        state.active.imageURL= [ ...state.active.imageURL, ...action.payload ]
        state.isSaving = false;
    },

    clearNotesLogout: (state) => {
        state.isSaving = false;
        state.messageSaved = '';
        state.notes = [];
        state.active = null;
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
    clearNotesLogout,
    updateNote,
    deleteNote,
    deleteNoteById,
    setPhotosToActive,
} = journalSlice.actions;