import React from 'react';
import TailsCard from '../TailsCard';

const TopTiles = async () => {
    const res  = await fetch("https://tiles-gallery-project.vercel.app/data.json")
    const tails  = await res.json();
    const toptiles = tails.slice(0,4) 
    console.log(toptiles)
    return (
      <>
      <h1 className='font-bold text-xl mt-2 w-11/12 mx-auto '>Top Tiles </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto'>
            {toptiles.map(tile => <TailsCard key={tile.id} tile={tile}></TailsCard> )}
        </div>
      </>
    );
};

export default TopTiles;