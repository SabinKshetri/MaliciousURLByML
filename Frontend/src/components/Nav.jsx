import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate();
  let token;
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [token]);


  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/")
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4 sticky top-0 z-50 ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-white text-xl font-bold">
              URL DETECTOR
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="space-x-4 md:flex md:justify-between gap-2">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/aiengine" className="text-white">
                  AI Engine
                </Link>
              </li>
              {isLoggedIn ? (
               
                  <li className="text-white cursor-pointer" onClick={handleLogout} >Logout</li>
                
              ) : (
                <li >
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white hover:text-white"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M3 18a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="bg-gray-800 py-2 px-4 md:hidden">
            <ul>
              <li>
                <Link to="/" className="block text-white py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-white py-2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/aiengine" className="block text-white py-2">
                  AI Engine
                </Link>
              </li>
              <li>
                <Link to="/login" className="block text-white py-2">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
