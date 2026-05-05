'use client'
import React from 'react';
import { useForm } from 'react-hook-form';


const SignUpPage = () => {
    const { register, formState: { errors } } = useForm();


    return (
        <div className='container mx-auto flex flex-col justify-center items-center space-y-3.5 py-15'>

            <h2 className='text-3xl font-bold'>Register Your Account</h2>

            <form className=''>
                <fieldset className="fieldset bg-base-200 border-gray-300 border rounded-md w-99 px-4 py-6">
                    <label className="text-[14px] font-semibold">Name</label>
                    <input type="name" className="input w-full" placeholder="Enter Your Name" {...register("name", { required: true })} />
                    {errors.name && <span>Name is required</span>}

                    <label className="text-[14px] font-semibold">Email</label>
                    <input type="email" className="input w-full" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    {errors.email && <span>Email is required</span>}

                    <label className="text-[14px] font-semibold">Photo URL</label>
                    <input type="text" className="input w-full" placeholder="Enter Your Photo Url" {...register("text", { required: true })} />
                    {errors.email && <span>Email is required</span>}

                    <label className="text-[14px] font-semibold">Password</label>
                    <input type="password" className="input w-full" placeholder="Enter Your Password" {...register("password", { required: true})}/>

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
           </form>
        </div>
    );
};

export default SignUpPage;

