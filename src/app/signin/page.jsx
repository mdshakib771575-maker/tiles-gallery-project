"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const SignInPage = () => {
     const onsubmit = async (e) => {
        e.preventDefault()
       
        const email = e.target.email.value;
        const password = e.target.password.value;
         const { data, error } = await authClient.signIn.email({
                email,
                password,
                 callbackURL:"/"
         })
    
         console.log({data,error})
      
    }
    return (
        <div>
            
  <div className=' w-[40%] p-10 mx-auto my-8 rounded-2xl shadow-2xl'>
    <form onSubmit={onsubmit}>
    
      <label className="label  mb-2">Email</label> <br />
      <input type="email" name='email' className="input w-full" placeholder="Enter Your Email" required />
      <br />
      <br />

      <label className="label  mb-2">Password</label> <br />
      <input type="password" name='password' className="input w-full" placeholder="Enter Your Password" required />
      <br />

      <div className='flex gap-3'>

        <button type='submit' className="btn btn-accent mt-4 px-5 rounded-full">summit</button>
        <button type='reset' className='btn btn-outline text-blue-400 mt-4 px-5 rounded-full'>Reset</button>
      </div>
    </form>
  </div>
        </div>
    );
};

export default SignInPage;