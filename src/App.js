import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import stays from './stays.json';
import { connect } from 'react-redux';

const App = ({ location }) => {
  let locations = [];
  stays.stays.forEach((stay) => {
    if (!locations.includes(stay.city)) {
      locations.push(stay.city);
    }
    if (!locations.includes(stay.country)) {
      locations.push(stay.country);
    }
  });

  const filteredStays = stays.stays.filter(
    (stay) => stay.city === location || location === stay.country
  );

  return (
    <div className='text-gray-900 font-body bg-gray-50 min-h-screen'>
      <div className='md:container md:mx-auto'>
        <Header locations={locations} />
        <main>
          <div className='flex justify-between px-4'>
            <span className='font-bold text-lg'>Stays in {location}</span>
            <span className='font-medium  text-gray-600'>
              {filteredStays.length} stays
            </span>
          </div>
          <div className='mt-6 px-4 space-y-8 md:grid md:grid-cols-2 md:space-y-0 gap-6 lg:grid-cols-3'>
            {filteredStays.map((stay) => (
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

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default connect(mapStateToProps)(App);
