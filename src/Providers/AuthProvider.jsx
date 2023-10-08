import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.config';



export const AuthContext= createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
      return  signOut(auth);
    }


    // observe auth state changes 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log("observing current user inside useEffect of AuthProvider",currentUser)
        });

        return ()=>{unsubscribe()}


    },[])





    const AuthInfo={user,createUser, signInUser,logOut}



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes  ={
    children: PropTypes.node 
}
