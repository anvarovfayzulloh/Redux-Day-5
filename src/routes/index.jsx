import React from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import Home from './Home'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const RouterController = () => {
  const location = useLocation();
  const token = useSelector((state) => state?.auth?.token);
  const path = location.pathname !== "/login";

  return (
    <>
      {path && <Navbar />}
      {useRoutes([
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/profile",
          element: <Profile/>
        }
      ])}
    </>
  );
}

export default RouterController;
