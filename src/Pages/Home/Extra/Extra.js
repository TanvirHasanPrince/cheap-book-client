import React from 'react';
import { Link } from 'react-router-dom';

const Extra = () => {
 return (
   <div>
     <div className="hero h-[500px] bg-base-200">
       <div className="hero-content flex-col lg:flex-row">
         <img
           src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           className="w-1/2 rounded-lg shadow-2xl" alt=""/>
         
         <div>
           <h1 className="text-5xl font-bold">Why Us?</h1>
           <p className="py-6">
           We ensure smoothe transactions. Faster delivery. You will not get any book at a cheaper price than this. Join us today.
           </p>
           <Link to='/signup' className="btn btn-primary">Register Now</Link>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Extra;