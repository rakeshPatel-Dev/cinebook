import { Clapperboard } from 'lucide-react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observeUser } from "../firebase/firebase.config";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

const Header = () => {


  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = observeUser((currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  }, []);

  // LOGOUT
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <header className="dark:bg-[#121212] flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-6 py-4">
        <div className="flex items-center gap-8">
          <div onClick={() => {
            navigate("/")
          }} className="flex items-center gap-3 text-white">
            <Clapperboard size={35} className='text-[#ec1337]' />
            <h2 className="text-white text-xl cursor-pointer font-bold leading-tight tracking-[-0.015em]">
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
            <Link to="/my-bookings"
              className="text-white text-sm font-medium leading-normal hover:text-[#ec1337] transition-colors"
            >
              My Bookings
            </Link>
          </nav>
        </div>
        {user ? (
          <button
            onClick={handleLogout}
            className="text-white px-4 py-1 font-bold cursor-pointer hover:bg-red-600 transition-all rounded-full bg-[#ec1337]"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/signin"
            className="text-white px-4 py-1 font-bold cursor-pointer hover:bg-[#ec1337]/80 transition-all rounded-full bg-[#ec1337]"
          >
            Sign In
          </Link>
        )}
      </header>
    </div>
  )
}

export default Header
