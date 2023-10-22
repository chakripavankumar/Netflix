import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const[isSignInForm,setSignInForm]=useState(true)
    const ToggleSignupForm = () => {
        setSignInForm(!isSignInForm);
        
    }

    return (
        <div>
       <Header/>
              <div className="absolute">   
                 <img src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='homepage'
                />  
            </div>
            <form className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-90">
                <h1 className="font-bold text-3xl py-4 px-4 ">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                <input type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                {!isSignInForm && (
                    <input type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700"
                    />
            )}
                <input type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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