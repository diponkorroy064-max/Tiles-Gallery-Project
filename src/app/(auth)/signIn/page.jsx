'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';


const SignInPage = () => {
    const { register, formState: { errors } } = useForm();


    return (
        <div className='flex flex-col justify-center items-center space-y-3.5 py-15'>

            <h2 className='text-3xl font-bold'>Login Your Account</h2>

            <form className=''>
                <fieldset className="fieldset bg-base-200 border-gray-300 border rounded-md w-96 px-4 py-8">
                    <label className="text-[14px] font-semibold">Email</label>
                    <input type="email" className="input w-full" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    {errors.email && <span>Email is required</span>}

                    <label className="text-[14px] font-semibold">Password</label>
                    <input type="password" className="input w-full" placeholder="Enter Your Password" {...register("email", { required: true})}/>

                    <button className="btn btn-neutral mt-4">Login</button>

                    <p className='text-sm text-center mt-4'>
                        Don`t Have an Account? <Link href='/signUp' className='text-red-500 hover:underline'>Sign Up</Link>
                    </p>
                </fieldset>
           </form>
        </div>
    );
};

export default SignInPage;

