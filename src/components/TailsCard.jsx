import Image from 'next/image';
import React from 'react';

const TailsCard = ({tile}) => {
    return (
        <div>
      
         <div className="card bg-base-100 shadow-sm">

  <Image src={tile.image} alt={tile.title} width={200} height={200}></Image>
  
  <div className="card-body">
    <h2 className="card-title">{tile.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TailsCard;