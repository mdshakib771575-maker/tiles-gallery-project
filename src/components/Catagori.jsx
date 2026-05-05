import React from 'react';

const Catagori = async () => {
    const res = await fetch('https://tiles-gallery-project-esiy.vercel.app/catagori.json')
    const catagoris = await res.json()
    console.log(catagoris)

    return (
        <div className='space-x-3 mt-5 text-center'>
            {catagoris.map(catagori => <button className='btn btn-outline rounded-full my-2' key={catagori.id}> {catagori.name}</button>)}
        </div>
    );
};

export default Catagori;