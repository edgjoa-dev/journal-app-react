import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async( uid = '' ) => {

    if(!uid) throw new Error('El ID del usuario no existe y deberia ser');

    const collectionRef = collection ( FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs( collectionRef );

    const notes = [];
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    })
    console.log(notes);
    return notes;

}