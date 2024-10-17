import React from "react"
import Navbar from "./components/Navbar"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import HomePage from "./Pages/HomePage"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
      <Route index path="/" element={<HomePage/>} />
    </Route>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
