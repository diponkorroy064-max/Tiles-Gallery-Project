'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
    const pathname = usePathname();
    // console.log("current pathname", pathname);
    const isActive = href === pathname;

    return (
        <Link href={href} className={`${isActive?"text-red-500 font-bold border-b-2 border-red-500":"text-gray-500"}`}>
            {children}
        </Link>
    );
};

export default Navlink;