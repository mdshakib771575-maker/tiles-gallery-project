"use client"

import { authClient } from '@/lib/auth-client';

import Link from 'next/link';
import NavLink from './HomePage/NavLink';
import Image from 'next/image';
import { GiDominoTiles } from 'react-icons/gi';

 
const Navbar = () => {
 
  const userData = authClient.useSession();
const user = userData.data?.user
console.log(user)

const handalSignOut = async ()=>{
      await authClient.signOut();
}

  const links = <>
    <li><NavLink href={"/"}>Home</NavLink></li>
    <li><NavLink href={"/all-tiles"}>All Tiles</NavLink></li>
    <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
              {links}
            </ul>
          </div>
   
          <Link href={"/"} className="btn btn-ghost text-xl"><GiDominoTiles/>Tiles gallery</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
         { !user && <ul className='flex gap-2'>
      <li><Link href={"/signup"}><button className='btn btn-accent rounded-full '>Regester</button></Link></li>
     <li> <Link href={"/signin"}><button className='btn btn-accent rounded-full'>LogIn</button></Link></li>
      </ul>} 
      {
        user&&   <div className="avatar flex gap-3 items-center">
    <div className="w-12 rounded-full">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"referrerPolicy="no-referrer"/>

    </div>
    <button onClick={handalSignOut} className='btn bg-black text-white'>LogOut</button>
  </div>
      }
        </div>
      </div>
    </div>
  );
};

export default Navbar;