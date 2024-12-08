import React from 'react'
import Image from 'next/image';

import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
// Navbar
<header className="wrapper h-[100px] mx-auto bg-[#ffff] flex flex-col">
  <div className="flex justify-between items-center px-4 py-4">
  
    <div className="flex items-center space-x-2">
      <Image width={50} height={32} src="/images/logo.png" alt="Logo" />
       <Image width={130} height={41} src="/images/name.png" alt="Name" />
    </div>

    <nav className="hidden md:flex space-x-8 items-center">
      <a href="/" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
        Home
      </a>
      <a href="#" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
        Shop
      </a>
      <a href="#" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
        About
      </a>
      <a href="#" className="text-[#000000] text-[16px] font-medium hover:text-gray-400">
        Contact
      </a>
    </nav>

  
    <div className="flex items-center space-x-12">
      <div className="hidden lg:flex items-center space-x-12">
        <Image width={30} height={32} src="/images/logo2.png" alt=" Logo" />
      
          <Image width={30} height={32} src="/images/serch.png" alt="serch" />
      </div>
        <Image width={30} height={32} src="/images/heart.png" alt="heart" />
      <MdOutlineShoppingCart  className="text-xl w-[30px] h-[30px]"  />
    </div>
  </div>

</header>



  )
};


export default Navbar
