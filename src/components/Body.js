import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import Broswe from './Broswe'
import { useDispatch } from 'react-redux'
import { addUser } from "../utils/userSlice"
import{removeUser} from '../utils/userSlice'


const Body = () => {
    const dispatch = useDispatch();
   
    const Approuter = createBrowserRouter([ 
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/Broswe",
           element:<Broswe/>}
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName,photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL: photoURL }));
               
            } else {
                dispatch(removeUser());
            }
        });
        
    }, [ ]);

  return (
      <div>
          <div>
              <RouterProvider   router={Approuter}/>
          </div>
      
    </div>
  )
}

export default Body
