import { authClient } from '@/lib/auth-client';
import React from 'react';

const UpdataeUserModal = () => {
    const onsubmit = async (e)=>{
       e.preventDefault();
       const name =  e.target.name.value;
       const image =  e.target.image.value;
       await authClient.updateUser({name,image})

       console.log({name,image});
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Update Profile</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={onsubmit}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="enter your name" />
          <label className="label">Image URL</label>
          <input name='image' type="text" className="input" placeholder="enter your img url" />
        
          <button className="btn btn-neutral mt-4">save</button>
        </fieldset>
        </form>
      </div>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </div>
    );
};

export default UpdataeUserModal;