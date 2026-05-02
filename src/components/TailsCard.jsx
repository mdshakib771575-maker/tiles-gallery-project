import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TailsCard = ({ tile }) => {
  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-sm mb-5">
          <div className='relative w-full aspect-square rounded-xl'>

            <Image src={tile.image} fill alt={tile.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='mx-auto object-cover  rounded-xl'></Image>
          </div>

          <div className="card-body">
            <h2 className="card-title">{tile.title}</h2>
            <p>{tile.description}</p>
            <div className="card-actions justify-end">
             <Link href={`/all-tiles/${tile.id}`}><button className="btn btn-accent">Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailsCard;