import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/dist/client/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [shadow, setShadow] = useState('')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setShadow('shadow-md')
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setShadow('')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${shadow}`}
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link rel="preload" href='/'>
          <Image quality="90" loading="lazy" className='cursor-pointer' src='/regalia-logo.png' width="97" height="87" alt="navbarLogo" />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/'><h6 className='cursor-pointer'>Home</h6></Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/services'><h6 className='cursor-pointer'>Services</h6></Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/about'><h6 className='cursor-pointer'>About</h6></Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/reviews'><h6 className='cursor-pointer'>Reviews</h6></Link>
          </li>
          <li className='p-4 text-lg'>
            <Link rel="preload" href='/contact'><h6 className='cursor-pointer'>Contact</h6></Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "#ffffff" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-2/3 right-0 bottom-0 flex justify-center items-center w-1/3 h-screen bg-black text-center ease-out duration-300'
              : 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/'><h6 className='cursor-pointer'>Home</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/services'><h6 className='cursor-pointer'>Services</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
            <Link rel="preload" href='/about'><h6 className='cursor-pointer'>About</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/reviews'><h6 className='cursor-pointer'>Reviews</h6></Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl'>
              <Link rel="preload" href='/contact'><h6 className='cursor-pointer'>Contact</h6></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;