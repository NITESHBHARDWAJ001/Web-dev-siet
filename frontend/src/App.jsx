import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Admission from './pages/Admission'
import Placements from './pages/Placements'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import Academic from './pages/Academic'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admission',
    element: <Admission/>
  },
  
  {
    path: '/placements',
    element: <Placements/>
  },
  {
    path: '/academics',
    element: <Academic/>
  },
  {
    path: '/contact',
    element: <Contact/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App