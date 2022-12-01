import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
 return (
   <div>
     <div
       className="hero h-[600px]"
       style={{
         backgroundImage: `url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
       }}
     >
       <div className="hero-overlay bg-opacity-60"></div>
       <div className="hero-content text-center text-neutral-content">
         <div className="max-w-md">
           <h1 className="mb-5 text-5xl font-bold">Cheap Books</h1>
           <p className="mb-5">
             Buy your books at a reasonable price. Thousands of sellers are selling their books. Join now and enjoy the benefits. 
           </p>
           <Link to='/signup' className="btn btn-primary">Register Now</Link>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Banner;