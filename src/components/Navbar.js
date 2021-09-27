import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    return (
        <header className="flex mx-auto  p-3 bg-gray-100 mb-2 sticky top-0 z-50">
            <Link to="/" className="sm:text-xl text-base font-medium hidden sm:flex">News Worldwide</Link>
            <Link to="/" className="sm:text-xl text-base font-medium flex sm:hidden tracking-wide">NW</Link>
            <ul className="flex sm:mx-8 ml-10 mr-0 items-center sm:space-x-4 text-sm  flex-wrap sm:flex-nowrap  sm:tracking-wide text-gray-600 ">
                <Link className={`mr-4 sm:mr-0 ${location.pathname === "/business" ? "text-black font-semibold" : ""}`} to="/business">Business</Link>
                <Link className={`mr-4 sm:mr-0 ${location.pathname === "/entertainment" ? "text-black font-semibold" : ""}`} to="/entertainment">Entertainment</Link>
                <Link className={`mr-4 sm:mr-0 ${location.pathname === "/technology" ? "text-black font-semibold" : ""}`} to="/technology">Technology</Link>
                <Link className={`mr-4 sm:mr-0 ${location.pathname === "/science" ? "text-black font-semibold" : ""}`} to="/science">Science</Link>
                <Link className={`mr-4 sm:mr-0 ${location.pathname === "/sports" ? "text-black font-semibold" : ""}`} to="/sports">Sports</Link>
                <Link className={`mr-4 sm:mr-0 ${location.pathname === "/health" ? "text-black font-semibold" : ""}`} to="/health">Health</Link>
            </ul>
        </header>
    )
}

export default Navbar
