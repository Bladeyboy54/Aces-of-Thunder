import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../firebase";


export const addScore = async (userId, scoreData) => {
    try {
        const userRef = doc(db, "users", userId)
        const scoreRef = collection(userRef, "scores")
        const docRef = await addDoc(scoreRef, scoreData)
        console.log("Successfully added score =>" + docRef)
        return true
    } catch (e) {
        console.error('Something whent wrong adding a new score => ' + e);
        return false
    }
}