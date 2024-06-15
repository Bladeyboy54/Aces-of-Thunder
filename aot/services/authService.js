import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export const handleLogin = ( email, password ) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Logged In User - " + user.email)
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
    });
}

export const handleRegester = (email, password ) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const getCurrentUser = () => {
    const user = auth.currentUser
    return user ? user.uid : null
}