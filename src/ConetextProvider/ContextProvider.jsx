import { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../Firebase/firebase.config';



export const AuthContext = new createContext(null)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()


const ContextProvider = ({children}) => {
const [user,setUser] = useState({})
const [loading,setLoading] = useState(true)



const emailSignUp = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const emailSignIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}
const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
}

const logOut = () => {
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false);
    })
    return () => unsubscribe()
 },[])

    const authInfo = {
      user,
      emailSignUp,
      emailSignIn,
      googleSignIn,
      facebookSignIn,
      logOut,
      loading
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export default ContextProvider;







