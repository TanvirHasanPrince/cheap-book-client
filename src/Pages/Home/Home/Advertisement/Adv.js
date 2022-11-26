import React from 'react';
import AdvItems from './AdvItems';

const testArray = [1, 2, 3]
const Adv = () => {
 return (
   <div>
     <h3 className="text-3xl text-center text-primary font-bold py-3">
     
       Advertisement
     </h3>
     <div className='grid gap-3 grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
      { testArray.map( (t, i) => <AdvItems></AdvItems>)}
     </div>
   </div>
 );
};

export default Adv;