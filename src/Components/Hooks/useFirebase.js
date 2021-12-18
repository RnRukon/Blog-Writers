import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

//initialize Firebase app-----
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})


    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();





    // Google sing in----------------------

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                console.log(error)

            }).finally(() => {
                setIsLoading(false)

            });
    }

    // logout ----------------
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => {
            setIsLoading(false)
        })
    }

    //observer user state change------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {

                // const uid = user.uid;
                setUser(user)


            } else {
                // setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth])




    return {
        user,
        logout,
        isLoading,
        signInWithGoogle,




    }
}
export default useFirebase;