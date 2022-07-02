import { doc } from 'firebase/firestore/lite';
import { collection, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const startNewNotes = () => {

    return async( dispatch, getState) => {
        //uid
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection( FirebaseDB, `${uid}/journal/notes` ))
        await setDoc(newDoc, newNote)

        // dispatch
        // dispatch(newNote)
        // dispatch(activarNota)
    }
}