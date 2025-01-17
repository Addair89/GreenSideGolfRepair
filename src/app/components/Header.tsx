"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white text-[#2b7239] p-4 border-b border-[#2b7239]">
      <div className="flex items-center justify-between lg:justify-center relative">
        {/* Desktop Menu */}
        <nav className="flex space-x-6 absolute right-4">
          <a href="/" className="hover:text-gray-400">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="/services" className="hover:text-gray-400">
            <FaFacebook className="text-2xl" />
          </a>
        </nav>

        {/* Logo */}
        <div className="flex justify-center">
          <a href="/">
            <Image
              src="/logopng.png"
              width={225}
              height={100}
              alt="Logo"
            ></Image>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
