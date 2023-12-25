import React, { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
     const navigate = useNavigate();
    
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validation of the data
        
        const message = validation(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //signup logic
            createUserWithEmailAndPassword(auth,
                email.current.value, password.current.value)
       .then((userCredential) => {
       // Signed up 
           const user = userCredential.user;
           updateProfile( user ,{
               displayName: fullName.current.value,
               photoURL: "https://avatars.githubusercontent.com/u/116485764?v=4"
}).then(() => {
  navigate("/broswe");
}).catch((error) => {
   setErrorMessage(error.message);
});
           
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage +"  "+errorCode)
      });

            
        } else {
            //signin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log(user);
       navigate("/broswe");
 
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
  });
            
        }
      
    };
    const ToggleSignupForm = () => {
        setSignInForm(!isSignInForm);
    };
    return (
        <div>
       <Header/>
        <div className="absolute">   
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='homepage'
        />  
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-90">
                <h1 className="font-bold text-3xl py-4 px-4 ">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                 {!isSignInForm && (
                    <input
                        ref={fullName}
                        type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700"
                    />
            )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
               
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <p className="text-red-500 font-bold">
                    {errorMessage}
                </p>
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}>
                   {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-2 cursor-pointer" onClick={ToggleSignupForm}>
                    {isSignInForm ? " New to Netflix? Sign Up Now" : "Already registered? Singn In now."}
                   
                </p>
            </form>
                 </div>
    )
}
export default Login;