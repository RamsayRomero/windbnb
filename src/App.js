import React from 'react';
import Header from './components/Header';
import stays from './stays.json';

const App = () => {
  let locations = [];
  stays.stays.forEach((stay) => {
    if (!locations.includes(stay.city)) {
      locations.push(stay.city);
    }
  });

  return (
    <div className='text-gray-900 font-body bg-gray-50 min-h-screen'>
      <div className='md:container md:mx-auto'>
        <Header locations={locations} />
        <main></main>
      </div>
    </div>
  );
};

export default App;
