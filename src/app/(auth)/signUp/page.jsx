'use client'
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';


const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const signUpFun = async (data) => {
        const { name, email, photo, password } = data;
        // console.log(name, email, photo, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log("signup response", res, error);

        if (error) {
            toast.error('Registration Filed' + error.message);
        }
        else if (res) {
            toast.success('Registration is Successfull! Verify your Email');
        }
    }



    return (
        <div className='container mx-auto flex flex-col justify-center items-center space-y-3.5 py-15'>

            <h2 className='text-3xl font-bold'>Register Your Account</h2>

            <form onSubmit={handleSubmit(signUpFun)}>
                <fieldset className="fieldset bg-base-200 border-gray-300 border rounded-md w-99 px-4 py-6">

                    <label className="text-[14px] font-semibold">Name</label>
                    <input name='name' type="name" className="input w-full" placeholder="Enter Your Name" {...register("name", { required: true })} />
                    {errors.name && <span className='text-red-500'>Name is required</span>}

                    <label className="text-[14px] font-semibold">Email</label>
                    <input name='email' type="email" className="input w-full" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    {errors.email && <span className='text-red-500'>Email is required</span>}

                    <label className="text-[14px] font-semibold">Photo URL</label>
                    <input name='photo' type="text" className="input w-full" placeholder="Enter Your Photo URL" {...register("photo", { required: true })} />
                    {errors.photo && <span className='text-red-500'>Photo URL is required</span>}

                    <fieldset className='relative'>
                        <label className="text-[14px] font-semibold">Password</label>
                        <input name='password'
                            type={isShowPassword ? "password" : "text"}
                            className="input w-full"
                            placeholder="Enter Your Password" {...register("password", { required: true })} />
                        <p className="absolute top-8 right-4 text-xl cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</p>
                        {errors.password && <span className='text-red-500'>Password is required</span>}
                    </fieldset>

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;

