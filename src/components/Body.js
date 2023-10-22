import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Broswe from './Broswe'


const Body = () => {
    const Approuter = createBrowserRouter([ 
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/Broswe",
           element:<Broswe/>}
    ])
  return (
      <div>
          <div>
              <RouterProvider   router={Approuter}/>
          </div>
      
    </div>
  )
}

export default Body
