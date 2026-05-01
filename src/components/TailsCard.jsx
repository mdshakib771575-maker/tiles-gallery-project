import Image from 'next/image';
import React from 'react';

const TailsCard = ({ tile }) => {
  return (
    <>
    <div>
      <div className="card bg-base-100 shadow-sm mb-5">
           <div className=''>

        <Image src={tile.image} alt={tile.title} width={310} height={200} className='mx-auto '></Image>
           </div>

        <div className="card-body">
          <h2 className="card-title">{tile.title}</h2>
        <p>{tile.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TailsCard;