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
import SingleToy from './Compo/SingleToy/SingleToy';
import MyToys from './Compo/MyToys/MyToys';
import ToysLoader from './Compo/MyToys/ToysLoader';
import Update from './Compo/MyToys/Update';
import './assets/custom.css';
import PrivateRoute from './Routes/PrivateRoute';

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
        loader: () => fetch('http://localhost:5000/addtoys')
      },
      {
        path: "/addtoys",
        element: <PrivateRoute>
          <AddToy></AddToy>
        </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/singletoy/:toyId",
        loader: ({ params }) => fetch(`http://localhost:5000/addtoys/${params.toyId}`),
        element: <SingleToy></SingleToy>
      },
      {
        path: "/mytoys",
        element: <PrivateRoute>
          <ToysLoader></ToysLoader>
        </PrivateRoute>
      },
      {
        path: "/update/:toyId",
        loader: ({ params }) => fetch(`http://localhost:5000/update/${params.toyId}`),
        element: <Update></Update>
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
