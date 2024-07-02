import React from "react";
import { Link } from "react-router-dom";
import Detail from "../components/Detail";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <>
      <div className=" h-[900px] relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="  min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-5xl text-2xl font-bold mb-6">
            Away From the SPAM !!
          </h2>
          <p className="sm:text-2xl text-base text-center text-gray-200">
            Malicious URL detection is a vital cybersecurity measure that
            involves analyzing URLs to identify and block those linked to
            malicious activities, such as phishing, malware distribution, or
            scams.
          </p>
          <Link to="/aiengine">
          <button
            type="button"
            className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Check Now
          </button>
          </Link>
        </div>
      </div>
      <Detail/>
      <OurTeam/>
    </>
  );
};

export default Home;
