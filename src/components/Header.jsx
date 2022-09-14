import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

function Menu() {
  return (
    <div className='menu'>
      <header className="relative w-full z-10">
        <div className="relative max-w-7xl mx-auto px-4 md:py-2 py-4">
          <div className="flex items-center justify-between md:justify-start md:space-x-10">
              {/* <!-- Left section with Logo -->
              <!-- to make nav center lg:w-0 lg:flex-1 are given --> */}
              <Link to="/" className="lg:w-0 lg:flex-1">
                {/* <!-- for screen readers --> */}
                <span className="sr-only">divagro</span>
                <img src={logo} alt="logo" className='w-24 m-auto' />
              </Link>
              {/* <!-- Center section with nav menus --> */}
              <div className="relative">
                {/* <!-- nav bar --> */}
                <nav className="hidden md:block px-2 ">
                  <ul className="flex py-4 space-x-8">
                    <li className="relative">
                      <button className="text-gray-500 group rounded-md inline-flex items-center text-base hover:text-gray-900" type="button">
                        <span className="text-base font-medium text-gray-500 hover:text-gray-900 group-hover:text-gray-900">Savings</span>
                      </button>
                    </li>
                    <li className="relative">
                      <button className="text-gray-500 group rounded-md inline-flex items-center text-base hover:text-gray-900" type="button">
                        <span className="text-base font-medium text-gray-500 hover:text-gray-900 group-hover:text-gray-900">Credit</span>
                      </button>
                    </li>
                    <li className="relative ">
                      <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        About
                      </a>
                    </li>
                    <li className="relative ">
                      <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!-- Right section -->
              <!-- to make nav center lg:w-0 md:flex-1 are given --> */}
              <div className="hidden md:flex items-center justify-end lg:w-0 md:flex-1"> 
                  {/* <!-- Action Buttons --> */}
                  <Link to='/signin'>
                    <button className="hidden md:inline-flex items-center px-4 py-2  whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 select-none">
                      Log in
                    </button>
                  </Link>
                  <Link to='/signup'>
                    <button className="hidden md:inline-flex relative ml-4 px-4 py-2 items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md select-none transition-colors duration-700 whitespace-nowrap text-base font-medium">
                      Join for Free
                    </button>
                  </Link>
              </div>	
    
              {/* <!-- mobile menu button --> */}
              <div className="-mr-2 -my-2 block md:hidden">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100" aria-expanded="false">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Menu