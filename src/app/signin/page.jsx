"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

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
            if(error){
                toast.error('LogIn Faild')
          
               }
    }

    const handalsignIn = async()=>{
           await authClient.signIn.social({
    provider: "google",
  });
    }
    return (
        <div>
            
  <div className=' w-[40%] p-10 mx-auto my-8 rounded-2xl shadow-2xl'>
    <h2 className='text-center font-bold mb-5'>LogIn</h2>
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
   <p className='text-center my-2'>or</p>
   <button onClick={handalsignIn} className='w-full btn btn-outline rounded-full'> <FcGoogle/>LogIn with Google</button>
  </div>
        </div>
    );
};

export default SignInPage;