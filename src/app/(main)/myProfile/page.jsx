'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import userImg from '@/assets/User_Avatar.png'
import Link from 'next/link';
import 'animate.css';


const MyProfilePage = () => {
    const { data } = authClient.useSession();
    console.log(data);
    const user = data?.user;
    // console.log("user response",user);


    return (
        <div className='flex justify-center items-center my-30 container mx-auto px-5'>
            <div className="card bg-base-100 shadow-sm border border-gray-300 w-100 pt-10">
                <figure className='animate__animated animate__zoomIn'>
                    <Image className='border border-gray-300 rounded-full w-40 shadow' src={user?.image || userImg} alt="user image" width={96} height={96}/>
                </figure>

                <div className="card-body space-y-5">
                    <h2 className="text-3xl font-bold text-center">{user?.name || "user name"}</h2>

                    <h2 className="font-bold text-center">{user?.email || "user email"}</h2>
                
                    <div className="card-actions justify-center animate__animated animate__bounce">
                        <button className="btn btn-outline btn-primary"><Link href={"/updateProfile"}>Profile Update</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;
