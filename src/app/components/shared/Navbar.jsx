'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatarImg from '@/assets/User_Avatar.png';


const links = <>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/allTiles'}>All Tiles</Link></li>
    <li><Link href={'/myProfile'}>My Profile</Link></li>
</>


const Navbar = () => {
    const { data, isPending } = authClient.useSession();
    // console.log("data", data);

    const user = data?.user;
    console.log(user);


    return (
        <div className="container mx-auto navbar bg-base-100 shadow-sm px-3 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h1 className="text-2xl text-blue-700 font-extrabold text-shadow-gray-500 text-shadow-2xs">Tiles Gallery</h1>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                { isPending? "loading..." :
                    user ? (
                        <>
                            <p className='text-green-600 font-bold'>{user?.name || "User"}</p>
                            <Image className='border border-gray-400 rounded-full' src={user?.image || avatarImg} width={40} height={40} alt='User Avater'></Image>
                            <button className='btn btn-primary' onClick={async()=> await authClient.signOut()}>Sign Out</button>
                        </>) :
                        (<button className='btn btn-primary'><Link href={'/signIn'}>Sign in</Link></button>)
                }
            </div>
        </div>
    );
};

export default Navbar;
