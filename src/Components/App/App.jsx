import React, { useState, useEffect } from 'react'
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import MasterLayout from '../MasterLayout/MasterLayout'
import Home from './../Home/Home'
import Details from './../Details/Details'
import Login from './../Login/Login'
import Movies from './../Movies/Movies'
import People from './../People/People'
import Tvshow from './../Tvshow/Tvshow'
import Register from './../Register/Register'
import Network from './../Network/Network'
import NotFound from './../NotFound/NotFound'
import { useContext } from 'react'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Profile from '../Profile/Profile'
import { Offline, Online } from "react-detect-offline";
import { AuthContext } from './../../Context/AuthStore';


export default function App() {

  let { userData, saveUserData, logout } = useContext(AuthContext)


  let routes = createHashRouter([
    {
      path: '/', element: <MasterLayout userData={userData} logout={logout} />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <ProtectedRoute userData={userData} > <Home /> </ProtectedRoute> },
        { path: 'movies', element: <ProtectedRoute userData={userData} ><Movies /> </ProtectedRoute> },
        { path: 'people', element: <ProtectedRoute userData={userData} ><People /> </ProtectedRoute> },
        { path: 'tvshow', element: <ProtectedRoute userData={userData} ><Tvshow /> </ProtectedRoute> },
        { path: 'details/:id/:mediaType', element: <ProtectedRoute userData={userData} ><Details /></ProtectedRoute> },
        { path: 'network', element: <ProtectedRoute> <Network /> </ProtectedRoute> },
        { path: 'profile', element: <ProtectedRoute><Profile userData={userData} /></ProtectedRoute> },
        { path: 'login', element: <Login saveUserData={saveUserData} /> },
        { path: 'register', element: <Register /> },

      ]
    }
  ])

  return (
    <>
      <div>
        <Online><RouterProvider router={routes} /></Online>
        <Offline>
          <h1 className='text-center my-5 py-5'>u r offline</h1>
        </Offline>

        {/* <RouterProvider router={routes} /> */}



      </div>

    </>
  )
}
