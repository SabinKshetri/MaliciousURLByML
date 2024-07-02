import React from 'react'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Detecting Malicious URLs: A Comprehensive Guide</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Web Addresses Intentionally Crafted to deceive users into visiting Harmful Websites</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">These URLs may closely resemble legitimate ones, such as popular social media platforms, banking sites, or reputable online services. Once accessed, malicious URLs can initiate various malicious activities, including:</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Malware</h2>
        <p className="leading-relaxed text-base mb-4">Some malicious URLs serve as gateways to malware-infected websites, where unsuspecting visitors may unwittingly download and install malicious software onto their devices.

</p>
        <a className="text-gray-900 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Phising</h2>
        <p className="leading-relaxed text-base mb-4">Malicious URLs often lead users to fake login pages, where sensitive information like usernames, passwords, and credit card details are harvested by attackers.</p>
        <a className="text-gray-900 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Scams and Fraud</h2>
        <p className="leading-relaxed text-base mb-4">Malicious URLs can redirect users to fraudulent schemes, such as fake online stores or investment platforms, aiming to deceive victims into providing personal or financial information.</p>
        <a className="text-gray-900 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Defacement URLs</h2>
        <p className="leading-relaxed text-base mb-4">Defacement URLs refer to web addresses that lead to web pages that have been maliciously altered without authorization. </p>
        <a className="text-gray-900 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  <Link to="/aiengine">  <button className="flex mx-auto mt-16 text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">Check URL</button></Link>
  </div>
</section>
    
    
    
    </>
  )
}

export default Detail