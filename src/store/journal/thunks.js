import { doc } from 'firebase/firestore/lite';
import { collection, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from './journalSlice';

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
        // dispatch(newNote)
        // dispatch(activarNota)
    }
}