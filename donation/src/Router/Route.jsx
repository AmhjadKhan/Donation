import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import Donation from "../Pages/Donation/Donation"
import Statistics from "../Pages/Statistics/Statistics"
import Error from "../Pages/error/Error"
import Datainfo from "../Pages/datainformation/Datainfo"

const myCretedRoute = createBrowserRouter([
    {
     path:'/',
     element:<MainLayout />,
     errorElement:<Error />,
     children:[
        {
         path:"/",
         element:<Home />,  
         loader:() => fetch('/data.json') 
        },
        {
        path:"/donation",
        element:<Donation />   
        },
        {
        path:"/statistics",
        element:<Statistics />  
        },
        {
        path:"/data/:id",
        element:<Datainfo />,
        loader: ()=> fetch('/data.json')
        },
        
     ]  
    }
])

export default myCretedRoute
