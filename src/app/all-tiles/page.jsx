import TailsCard from '@/components/TailsCard';
import React from 'react';

const AllTilesPage = async () => {
    const res = await fetch("https://tiles-gallery-project.vercel.app/data.json")
    const tails = await res.json();
    console.log(tails)
    return (
        <div>
            <input type="text" placeholder="Search" className="input w-11/12 mx-auto block mb-10 mt-5 shadow" />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto'>

                {tails.map(tile => <TailsCard key={tile.id} tile={tile}></TailsCard>)}
            </div>
        </div>
    );
};

export default AllTilesPage;