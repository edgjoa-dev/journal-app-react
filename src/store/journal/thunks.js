import { deleteDoc, doc } from 'firebase/firestore/lite';
import { collection, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActive, setSaving, updateNote } from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';

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

export const startSaveNote = () => {

    return async( dispatch, getState ) => {

        dispatch( setSaving() )

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote( note ) );
    }
}

export const startUpLoadingFiles = ( files = [] ) => {

    return async(dispatch) => {
        dispatch(setSaving());

        //await fileUpload(files[0]);
        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) )
        }
        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch(setPhotosToActive(photosUrls));
    }
}


export const startDeleteNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth
        const { active:note } = getState().journal

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${ note.id }`);
        const resp = await deleteDoc( docRef )
        console.log({resp});
    }
}