import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Main from './Component/Layout/Main.jsx'
import OrderReview from './Component/OrderReview/OrderReview.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('tshirts.json')
      },
      {
        path : 'review',
        element : <OrderReview></OrderReview>
      },
      {
        path : 'about',
        element : <About></About>
      },
      {
        path : 'contact',
        element : <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
