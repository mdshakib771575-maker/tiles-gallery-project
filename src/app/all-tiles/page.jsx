import Catagori from '@/components/Catagori';
import TailsCard from '@/components/TailsCard';
import React from 'react';

const AllTilesPage = async ({searchParams}) => {
    const {catagori} = await searchParams;
    console.log(catagori)
    const res = await fetch("https://tiles-gallery-project.vercel.app/data.json")
    const tails = await res.json();

     const FilterTiles = catagori ? tails.filter(tile => tile.category.toLowerCase() == catagori.toLowerCase()):tails
    return (
        <div className='w-11/12 mx-auto '>
            <h2 className='font-bold mt-5 ' >All Tiles</h2>
            <Catagori></Catagori>
         
            <input type="text" placeholder="Search" className="input w-11/12 mx-auto block mb-10 mt-5 shadow" />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto'>

                {FilterTiles.map(tile => <TailsCard key={tile.id} tile={tile}></TailsCard>)}
            </div>
        </div>
    );
};

export default AllTilesPage;