import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AdvItems from './AdvItems';


const Adv = () => {
const [advBooks, setAdvBooks] = useState([]);

useEffect(() => {
  fetch(`http://localhost:5000/books/unsold`)
  .then(res => res.json())
  .then(data => setAdvBooks(data))
}, [])

  return (
    <div>
      <h3 className="text-3xl text-center text-primary font-bold py-3">
        Advertisement
      </h3>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {advBooks.map((t, i) => (
          <AdvItems key ={i} t={t}></AdvItems>
        ))}
      </div>
    </div>
  );
};

export default Adv;