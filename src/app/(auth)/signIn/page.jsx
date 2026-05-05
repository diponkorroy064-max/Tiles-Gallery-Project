'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';


const SignInPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const signInFun = async (data) => {
        const { email, password } = data;
        // console.log(email, password);

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log("signin response", res, error);

        if (error) {
            toast.error('Sign in Filed: ' + error.message);
        }
        else if (res) {
            toast.success('SignIn is Successfull!');
        }
    }


    return (
        <div className='container mx-auto flex flex-col justify-center items-center space-y-3.5 py-15'>

            <h2 className='text-3xl font-bold'>Login Your Account</h2>

            <form onSubmit={handleSubmit(signInFun)}>
                <fieldset className="fieldset bg-base-200 border-gray-300 border rounded-md w-96 px-4 py-8">
                    <label className="text-[14px] font-semibold">Email</label>
                    <input name='email' type="email" className="input w-full" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    {errors.email && <span>Email is required</span>}

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

                    <p className='text-sm text-center mt-4'>
                        Don`t Have an Account? <Link href='/signUp' className='text-red-500 hover:underline'>Sign Up</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;

