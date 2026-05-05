import React from 'react';


const SignInPage = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3.5 py-15'>

            <h2 className='text-3xl font-bold'>Login Your Account</h2>

            <form className=''>
                <fieldset className="fieldset bg-base-200 border-gray-300 border rounded-md w-xs p-4">
                    <label className="text-[14px] font-semibold">Email</label>
                    <input type="email" className="input" placeholder="Enter Your Email" />

                    <label className="text-[14px] font-semibold">Password</label>
                    <input type="password" className="input" placeholder="Enter Your Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
           </form>
        </div>
    );
};

export default SignInPage;