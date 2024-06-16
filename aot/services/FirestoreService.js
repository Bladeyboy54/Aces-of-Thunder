import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, limit, getFirestore } from "firebase/firestore";
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

    querySnapshot.forEach((doc) => {
        // console.log("<======User ID========>", doc.id, "<======User Data========>",  doc.data());
        var user = {...doc.data(), id: doc.id}
        usersData.push(user)
    })

    return usersData
}

// export const getAllUserData = async () => {
//     const collectionRef = collection(db, "users");
//     const querySnapshot = await getDocs(collectionRef);
  
//     const usersData = querySnapshot.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
  
//     return usersData;
//   }

export const getRecentScores = async () => {
    try {
        const userId = getCurrentUser()
        // const scoresRef = collection(db, "users", userId, "scores");
        // const scoresQuery = query(scoresRef, orderBy('timestamp', 'desc'), limit(3));
        // const scoresSnapshot = await getDocs(scoresQuery);
        
        // const scores = scoresSnapshot.docs.map(doc => doc.data());
        // console.log(scores)
        // return scores;
        const scores = await getDocs(collection(db, "users", userId, "scores"))
        scores.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            
        });
        return scores
      } catch (e) {
        console.error("Error getting recent scores:", e);
        return [];
      }
};