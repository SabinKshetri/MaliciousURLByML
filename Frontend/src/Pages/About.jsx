import React from 'react'
import Detail from '../components/Detail'

const About = () => {
  return (
    <div>

<div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Project</span>
            </h2>
            <p class="text-gray-700">
            Malicious URL Detection is a pioneering initiative aimed at enhancing cybersecurity through advanced detection and mitigation of malicious URLs. Leveraging state-of-the-art algorithms and machine learning techniques, our project is dedicated to identifying and neutralizing threats posed by malicious URLs in real-time. With a focus on proactive defense measures, we're empowering users and organizations to safeguard their online presence against phishing attacks, malware distribution, and other cyber threats. Join us in our mission to create a safer digital environment for all.


            </p>
        </div>
    </div>
</div>
<Detail/>
    </div>
  )
}

export default About