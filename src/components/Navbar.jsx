import React from 'react';
import logo from '../assets/AFLOGO.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";  // Changed to FaTwitter from FaSquareXTwitter
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className='h-20 w-20 mx-4' />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
          <a href="https://www.linkedin.com/in/anuj-gupta-8baa73291/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Anuj3671" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/anuj9103" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/anuj_0212/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
