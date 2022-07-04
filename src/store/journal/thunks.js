import { doc } from 'firebase/firestore/lite';
import { collection, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';
import { loadNotes } from '../../helpers';

export const startNewNotes = () => {

    return async( dispatch, getState) => {

        dispatch(savingNewNote())
        //uid
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection( FirebaseDB, `${uid}/journal/notes` ))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id;

        // dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;

        if(!uid) throw new Error('El ID del usuario no existe y deberia ser');

        const notes = await loadNotes(uid);
        console.log({uid});

        dispatch(setNotes(notes));
    }
}