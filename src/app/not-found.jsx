import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='p-20'>
           <p className='text-2xl text-center '>Not Found Page </p>
           <div className='flex justify-center mt-5'>
          <Link href='/'> <button className='btn btn-accent text-center'>Go Home</button></Link>
           </div>
        </div>
    );
};

export default NotFoundPage;