import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import Login from './Compo/Login/Login';
import SignUp from './Compo/SignUp/SignUp';
import Home from './Compo/Home/Home';
import AllToys from './Compo/AllToys/AllToys';
import AddToy from './Compo/AddToy/AddToy';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [ 
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: ()=>fetch('http://localhost:5000/addtoys')
      },
      {
        path: "/addtoys",
        element: <AddToy></AddToy>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    
  </StrictMode>,
)
