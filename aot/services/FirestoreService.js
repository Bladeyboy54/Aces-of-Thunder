import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, limit, getFirestore, where } from "firebase/firestore";
import { db } from "../firebase";
import { getCurrentUser } from "./authService";

// const firestore = getFirestore(db);

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

    querySnapshot.forEach((scores) => {
        // console.log("<======User ID========>", doc.id, "<======User Data========>",  doc.data());
        var user = {...scores.data(), id: scores.id}
        usersData.push(user)
    })

    return usersData
}

export const getRecentScores = async () => {

    const userId = getCurrentUser()

    try {
        const scoresRef = collection(db, "users", userId, "scores");
        const scoresQuery = query(scoresRef, orderBy('timestamp', 'desc'), limit(3));
        const scoresSnapshot = await getDocs(scoresQuery);
        
        const scores = scoresSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        // console.log('===>', scores)
        return scores;
    } catch (e) {
        console.error("Error getting recent scores:", e);
        return [];
    }
};

export const getFilteredScores = async (battleType, battleRating) => {
    try {
        const userId = getCurrentUser();
        const scoresRef = collection(db, "users", userId, "scores");

        let scoresQuery = query(scoresRef);

        if (battleType) {
            scoresQuery = query(scoresQuery, where('battleType', '==', battleType));
        }

        if (battleRating) {
            scoresQuery = query(scoresQuery, where('battleRating', '==', battleRating));
        }

        scoresQuery = query(scoresQuery, orderBy('score', 'desc'));

        const scoresSnapshot = await getDocs(scoresQuery);

        const scores = scoresSnapshot.docs.map(doc => ({
            ...doc.data(), id: doc.id
        }));
        console.log('====>', scores)
        return scores;
        
    } catch (e) {
        console.error("Error getting filtered scores:", e);
        return [];
    }
    
};