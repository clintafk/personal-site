import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'

import Blog from './routes/Blog.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: 'Error 404 not found!',
  },
  {
    path: '/blog',
    element: <Blog />,
    errorElement: 'Error 404 not found!',
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
