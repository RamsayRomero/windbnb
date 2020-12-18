import React from 'react';
import Card from './components/Card';
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
        <main>
          <div className='flex justify-between px-4'>
            <span className='font-bold text-lg'>Stays in Finland</span>
            <span className='font-medium  text-gray-600'>12+ stays</span>
          </div>
          <div className='mt-4 px-4 space-y-6 md:grid md:grid-cols-2 md:space-y-0 gap-4 lg:grid-cols-3'>
            {stays.stays.map((stay) => (
              <Card
                key={stay.photo}
                superHost={stay.superHost}
                beds={stay.beds}
                type={stay.type}
                title={stay.title}
                rating={stay.rating}
                photo={stay.photo}
              />
            ))}
          </div>
        </main>
        <footer className='w-auto mt-20 py-6 md:w-96 mx-auto text-sm text-center text-gray-600 border-t'>
          Ramsay Romero @ DevChallenges.io
        </footer>
      </div>
    </div>
  );
};

export default App;
