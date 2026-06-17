"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

export default function SignUpPage() {
  const router =useRouter()
  const onsubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
     const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password
     })

     console.log({data,error})
     if(!error){
      toast.success('Regestation success')
       router.push('/')

     }
}

  
    const handalsignUp = async () => {
   await authClient.signIn.social({
    provider: "google",
  });
};
return (

  <div className=' w-[40%] p-10 mx-auto my-8 rounded-2xl shadow-2xl'>
    <h2 className='text-center font-bold mb-5'>Regester</h2>
    <form onSubmit={onsubmit}>
      <label className="label mb-2">Name</label> <br />
      <input type="text" name='name' className="input w-full" placeholder="Enter Your Name" required />
      <br />
      <br />
      <label className="label mb-2">Image URL</label> <br />
      <input type="text" name='image' className="input w-full" placeholder="Enter Your Image URL" />
      <br />
      <br />
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
   <button onClick={handalsignUp} className='w-full btn btn-outline rounded-full'> <FcGoogle/>SignUp with Google</button>

  </div>
);

}