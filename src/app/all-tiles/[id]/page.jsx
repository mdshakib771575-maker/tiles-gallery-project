import Image from 'next/image';
import React from 'react';

const TielDetailsPage =async ({params}) => {
    const {id} = await params;
  const res = await fetch(`https://tiles-gallery-project.vercel.app/data.json`)
    const tiles = await res.json();
    const tile = tiles.find(t => t.id == id)
    console.log(tile);

  
    return (
        <div className=' w-[350px] lg:w-[700px] mx-auto mt-5'>
          <div className="card bg-base-100 shadow-sm mb-5 ">
          <div className=''>

            <Image src={tile.image} width={200} height={100} alt={tile.title} className='w-full rounded-lg'></Image>
          </div>

          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{tile.title}</h2>
            <p className='font-bold text-xl'> Price : {tile.price}</p>
            <p> Description : {tile.description}</p>
            <p>category : {tile.category}</p>
            <p>currency : {tile.currency}</p>
            <p>material : {tile.material}</p>
            <p>dimensions : {tile.dimensions}</p>
          </div>
        </div>
        </div>
    );
};

export default TielDetailsPage;