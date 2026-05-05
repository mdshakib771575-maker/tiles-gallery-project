import Link from 'next/link';
import React from 'react';

const Catagori = async () => {
    const res = await fetch('https://tiles-gallery-project-esiy.vercel.app/catagori.json')
    const catagoris = await res.json()
    console.log(catagoris)

    return (
        <div className='space-x-3 mt-5 text-center'>
            {catagoris.map(catagori => <Link key={catagori.id}  href={`?catagori=${catagori.name.toLowerCase()}`}> <button className='btn btn-outline rounded-full my-2' > {catagori.name}</button> </Link>)}
        </div>
    );
};

export default Catagori;