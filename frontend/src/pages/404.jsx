import React from 'react'
import Page404Svg from '/Page404Svg.svg'
import { Link } from 'react-router-dom'
function Page404() {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center w-10/12 m-auto">
        <div className="hidden md:flex md:w-1/2 p-8">
           <img src={Page404Svg} alt="" />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404 Not Found</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Oops! The page you are looking for could not be found.</p>
            <Link to={'/'}>
            <div className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out">Go to Home</div>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Page404