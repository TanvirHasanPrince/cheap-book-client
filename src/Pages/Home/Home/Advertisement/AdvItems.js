import React from 'react';

const AdvItems = ({ t }) => {
  const {image, bookName} = t
  return (
    <div className="m-auto">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src= {image} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title m-auto">{bookName}</h2>
          <p className="m-auto">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions m-auto">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvItems;