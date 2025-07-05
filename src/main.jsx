import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { App } from './App'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />
    },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
