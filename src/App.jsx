import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from "./components/Layout/AppLayout";
import './App.css'

import { ErrorPage } from './components/UI/ErrorPage';


import React from 'react';
import { Home } from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Country} from './pages/Country';
import { CountryDetailes } from './components/Layout/CountryDetailes';



const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"about",
          element:<About/>,
        },
        {
          path:"country",
          element:<Country/>,
        },
        {
          path:"country/:id",
          element:<CountryDetailes/>,
        },
        {
          path:"contact",
          element:<Contact/>,
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App