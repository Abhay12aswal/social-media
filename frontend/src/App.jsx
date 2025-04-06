import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './components/Home'

const BrowserRouter = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      }
    ]
  }
  ,{
    path: "/login",
    element: <Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])

const App = () => {
  return (
    <RouterProvider router={BrowserRouter}/>
  )
}

export default App
