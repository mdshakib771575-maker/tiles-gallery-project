"use client"
import UpdataeUserModal from '@/components/UpdataeUserModal';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const MyProfilePage = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user
  console.log(user)
  return (
    <div>
      
      <div className='card w-96 mx-auto shadow-2xl p-10 my-5'>
        <div className="avatar  ">
          <div className="w-12 rounded-full mx-auto">
            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
          </div>
        </div>
        
            <p className='mx-auto font-bold'>{user?.name}</p>
            <p className='mx-auto text-muted mb-8'>{user?.email}</p>
          <div className='mx-auto'>
            <UpdataeUserModal></UpdataeUserModal>
          </div>
      </div>
    </div>
  );
};

export default MyProfilePage;