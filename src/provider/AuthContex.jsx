import React, { Children, useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthenticationContex = createContext(null)
const auth = getAuth(app)
const AuthContex = ({ children }) => {
    const googleProvider=new GoogleAuthProvider()
    const [user, setUser] = useState("")
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser=()=>{
        signOut(auth)
    }
    const googleLogin=()=>{
      return  signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        
        return() =>{
            return unsubscribe();
        } 
    },[])
    const authinfo = {
        user,
        createUser,
        setUser,
        logOutUser,
        loginUser,
        googleLogin,
        loading

    }
    return (
        <AuthenticationContex.Provider value={authinfo} >
            {
                children
            }

        </AuthenticationContex.Provider>
    );
};

export default AuthContex;