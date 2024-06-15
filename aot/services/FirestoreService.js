import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { getCurrentUser } from "./authService";


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



export const getCurrentUserData = async () => {
    const userId = getCurrentUser()

    if (!userId) {
        console.error("No user is logged in");
        return null;
    }

    const docRef = doc(db, "users", userId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        // console.log('User data:', docSnap.data());
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;
    }
}

export const getAllUserData = async () => {
    
    const collectionRef = collection(db, "users");

    const querySnapshot = await getDocs(collectionRef);

    var usersData = []

    querySnapshot.forEach((doc) => {
        console.log("<======User ID========>", doc.id, "<======User Data========>",  doc.data());
        var user = {...doc.data(), id: doc.id}
        usersData.push(user)
    })

    return usersData
}