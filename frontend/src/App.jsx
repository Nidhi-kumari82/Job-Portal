import Home from "./components/Home";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/ui/shared/Navbar";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Jobs from "./components/Jobs";
import Profile from "./components/Profile";
import Browse from "./components/Browse";
import JobsDescription from "./components/JobsDescription";
const appRouter=createBrowserRouter([

  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobsDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  


])
function App() {
  return (
    <>
<RouterProvider router={appRouter}/>


    </>
  );
}

export default App;
