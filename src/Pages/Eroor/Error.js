import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
 return (
   <div>
     <div
       className="hero min-h-screen"
       style={{
         backgroundImage: `url("https://media.istockphoto.com/id/642741626/photo/oops-404-error-page-not-found-futuristic-robot-concept-with-electrical-wire-hairstyle-circuits.jpg?b=1&s=170667a&w=0&k=20&c=MNt5JKWXn4UlFdOWOj-m1AiNDlA3LpWo-ORU_ZTjMOQ=")`,
       }}
     >
       <div className="hero-overlay bg-opacity-60"></div>
       <div className="hero-content text-center text-neutral-content">
         <div className="max-w-md">
           <h1 className="mb-5 text-5xl font-bold">404 Error</h1>
           <p className="mb-5">The page you are looking for is not Available</p>
           <Link to="/" className="btn btn-primary">
             Go back to Home
           </Link>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Error;