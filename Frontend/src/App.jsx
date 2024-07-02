import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";


import Nav from "./components/Nav";
import Register from "./Pages/Register";


import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Home from "./Pages/Home.jsx";
import SendOTP from "./Pages/forgotPassword/SendOTP.jsx";
import VerifyOTP from "./Pages/forgotPassword/VerifyOTP.jsx";
import UpdatePassword from "./Pages/forgotPassword/UpdatePassword.jsx";
import AIengine from "./Pages/AIengine.jsx";
import About from "./Pages/About.jsx";

function App() {
  const Layout = () => {
    return (
      <div className="webContainer">
        < Nav/>
        <Outlet />
        <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path:"/aiengine",
          element:<AIengine/>
        },
        {
          path:"/about",
          element:<About/>
        },
       
       
        {
          path: "/forgotPassword",
          element: <SendOTP />,
        },
        {
          path: "/verifyotp/:id",
          element: <VerifyOTP />,
        },
        {
          path: "/updatepassword/:id",
          element: <UpdatePassword />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;