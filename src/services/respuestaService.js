import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { db } from '../firebase/index'

export async function saveAnswer(respuesta) {

    try {
        const docRef = await addDoc(collection(db, "respuestas"), respuesta);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

export async function getAnswers() {
    const q = query(collection(db, "respuestas"), orderBy("created_at"))
    const res = await getDocs(q)
    let respuestas = []

    res.docs.forEach(doc => respuestas = [...respuestas, doc.data()])
    return respuestas.reverse()
}