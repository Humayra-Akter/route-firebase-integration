import { useEffect, useState } from "react"
import app from "../../firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const useFirebase = () => {
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      const [user, setUser] = useState({});

      const SignInWithGoogle = () => {
            signInWithPopup(auth, googleProvider)
                  .then(result => {
                        const user = result.user;
                        setUser(user);
                        console.log(user);
                  })
      }

      const handleSignOut = () => {
            signOut(auth)
                  .then(() => { })
      }

      useEffect(() => {
            onAuthStateChanged(auth, user => {
                  setUser(user)
            })
      }, [])

      return {
            user,
            SignInWithGoogle,
            handleSignOut
      };
}
export default useFirebase;