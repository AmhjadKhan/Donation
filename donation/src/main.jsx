import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,
} from "react-router-dom";
import './index.css'
import myCretedRoute from './Router/Route';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={myCretedRoute} />
  </React.StrictMode>,
)
