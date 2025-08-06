
import React from 'react';
import { GoPeople } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { MdPermMedia } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <nav className="flex justify-between items-center">

        {/* Left: logo and text */}
        <div className="flex items-center space-x-3">
          <div className="bg-green-600 text-white font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">
            INLD
          </div>
          <div>
            <h1 className="text-lg font-semibold">
              Indian National Lok Dal
            </h1>
            <p className="text-sm text-gray-500">
              Serving the Nation
            </p>
          </div>
        </div>

        {/* Right: Navigation Links */}
        <ul className='flex items-center gap-x-3'>
          <li>
            <Link to="/" className='font-semibold tracking-wider text-green-500 flex items-center gap-1'>
              <IoMdHome />Home
            </Link>
          </li>
          <li>
            <Link to="/about" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-all flex items-center gap-1'>
              <HiInformationCircle />About INLD
            </Link>
          </li>
          <li>
            <Link to="/leadership" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-all flex items-center gap-1'>
              <GoPeople />Leadership
            </Link>
          </li>
          <li>
            <Link to="/news" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-all flex items-center gap-1'>
              <IoNewspaperOutline />News & Events
            </Link>
          </li>
          <li>
            <Link to="/manifesto" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-all flex items-center gap-1'>
              <CgFileDocument />Manifesto
            </Link>
          </li>
          <li>
            <Link to="/media" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-all flex items-center gap-1'>
              <MdPermMedia />Media Gallery
            </Link>
          </li>
          <li>
            <Link to="/join" className='font-semibold tracking-wider text-green-500 hover:text-green-500 px-3 py-3 hover:bg-gray-200 transition-all flex items-center gap-1'>
              <IoIosPeople />Join Movement
            </Link>
          </li>
          <li>
            <Link to="/contact" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500 px-3 py-1 rounded-md hover:bg-gray-200 transition-all flex items-center gap-1'>
              <MdContactPhone />Contact
            </Link>
          </li>
          <li>
            <Link to="/admin" className='font-semibold tracking-wider hover:text-white hover:bg-green-700 px-4 py-2 bg-green-800 text-white rounded-full relative overflow-hidden group border border-white hover:bg-gray-200 transition-all flex items-center gap-1'>
              <RiAdminFill />Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;