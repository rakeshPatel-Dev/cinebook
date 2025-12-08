import { Clapperboard } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <header className="dark:bg-[#121212] flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-6 py-4">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3 text-white">
                    <Clapperboard size={35} className='text-[#ec1337]'/>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                      CineBook
                    </h2>
                  </div>
                  <nav className="hidden md:flex items-center gap-9">
                    {/* <a
                      className="text-white text-sm font-medium leading-normal hover:text-[#ec1337] transition-colors"
                      href="#"
                    >
                      Home
                    </a> */}
                    <Link to="/"
                      className="text-[#ec1337] text-sm font-bold leading-normal"
                    >
                      Movies
                    </Link>
                    <a
                      className="text-white text-sm font-medium leading-normal hover:text-[#ec1337] transition-colors"
                      href="#"
                    >
                      My Bookings
                    </a>
                  </nav>
                </div>
                <button className='text-white px-4 py-1 font-bold cursor-pointer hover:bg-[#ec1337]/80 transition-all rounded-full bg-[#ec1337]'>Sign In</button>
              </header>
    </div>
  )
}

export default Header
