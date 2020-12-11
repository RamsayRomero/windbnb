import React, { useState } from 'react';
import logo from '../logo.svg';

const Header = ({ locations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationIsOpen, setLocationIsOpen] = useState(false);
  const [guestsIsOpen, setGuestsIsOpen] = useState(false);
  const [location, setLocation] = useState('Helsinki');
  const [adultGuests, setAdultGuests] = useState(0);
  const [childGuests, setChildGuests] = useState(0);

  return (
    <header>
      <div className='px-4 py-6'>
        <img className='h-8' src={logo} alt='Windbnb' />
      </div>

      <div className='mx-10 flex justify-center text-sm border rounded-xl shadow'>
        <div className='flex-1 border-r'>
          <button
            tabIndex={isOpen && -1}
            onClick={() => {
              setIsOpen(!isOpen);
              setLocationIsOpen(true);
              setGuestsIsOpen(false);
            }}
            className='block py-3 w-full rounded-xl  focus:outline-none focus:ring-1 ring-inset ring-gray-700'
          >
            {location}, Finland
          </button>
        </div>
        <div className='flex-1 border-r'>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setGuestsIsOpen(true);
              setLocationIsOpen(false);
            }}
            tabIndex={isOpen && -1}
            className={`block py-3 w-full rounded-xl  focus:outline-none focus:ring-1 ring-inset ring-gray-700 ${
              adultGuests + childGuests === 0
                ? 'text-gray-400'
                : 'text-gray-900'
            }`}
          >
            {adultGuests + childGuests === 0
              ? 'Add guests'
              : adultGuests + childGuests === 1
              ? adultGuests + childGuests + ' guest'
              : adultGuests + childGuests + ' guests'}
          </button>
        </div>
        <div className='flex-initial'>
          <button
            tabIndex={isOpen && -1}
            className='block p-3 w-full h-full rounded-xl  focus:outline-none focus:ring-1 ring-inset ring-gray-700'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5 text-red-500'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          isOpen
            ? 'fixed inset-0 block w-full bg-white font-display transition duration-500 ease-out transform'
            : 'fixed inset-0 block w-full bg-white font-display transition duration-500 ease-out transform -translate-y-full'
        }
      >
        <div className='flex px-4 py-6 items-center justify-between'>
          <div className='font-bold text-sm'>Edit your search</div>
          <div>
            <button
              className='rounded focus:outline-none focus:ring-1 ring-gray-700'
              tabIndex={!isOpen && -1}
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-6 w-6'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>

        <div className='mx-4 rounded-lg border shadow'>
          <div className='border-b'>
            <button
              onClick={() => {
                setLocationIsOpen(true);
                setGuestsIsOpen(false);
              }}
              tabIndex={!isOpen && -1}
              className='block py-2 px-6 w-full text-left  rounded-lg focus:outline-none focus:ring-1 ring-inset ring-gray-700'
            >
              <div className='font-bold text-xs uppercase tracking-wide'>
                Location
              </div>
              <div className='text-gray-800'>{location}, Finland</div>
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setGuestsIsOpen(true);
                setLocationIsOpen(false);
              }}
              tabIndex={!isOpen && -1}
              className='block py-2 px-6 w-full text-left rounded-lg focus:outline-none focus:ring-1 ring-inset ring-gray-700'
            >
              <div className='font-bold text-xs uppercase tracking-wide'>
                Guests
              </div>
              <div
                className={
                  adultGuests + childGuests === 0
                    ? 'text-gray-400'
                    : 'font-bold text-gray-900'
                }
              >
                {adultGuests + childGuests === 0
                  ? 'Add guests'
                  : adultGuests + childGuests === 1
                  ? adultGuests + childGuests + ' guest'
                  : adultGuests + childGuests + ' guests'}
              </div>
            </button>
          </div>
        </div>

        {locationIsOpen && (
          <div className='mt-8'>
            <ul>
              {locations.map((city) => (
                <li
                  onClick={() => setLocation(city)}
                  className='flex items-center px-10 py-3 cursor-pointer hover:bg-gray-100'
                >
                  <div className='p-3 mr-3 border border-gray-300 rounded bg-gray-200'>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>{city}, Finland</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {guestsIsOpen && (
          <div className='mt-8'>
            <div className='px-10'>
              <div className='font-bold'>Adults</div>
              <div className='text-gray-500'>Ages 13 or above</div>
              <div className='flex items-center mt-4'>
                <button
                  onClick={() => {
                    adultGuests > 0 && setAdultGuests(adultGuests - 1);
                  }}
                  className='p-2 block border border-gray-700 text-gray-700 rounded focus:outline-none focus:ring-1 ring-inset ring-gray-700'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <div className='px-2 font-bold'>{adultGuests}</div>
                <button
                  onClick={() => setAdultGuests(adultGuests + 1)}
                  className='p-2 block border border-gray-700 text-gray-700 rounded focus:outline-none focus:ring-1 ring-inset ring-gray-700'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='px-10 mt-8'>
              <div className='font-bold'>Children</div>
              <div className='text-gray-500'>Ages 2 through 12</div>
              <div className='flex items-center mt-4'>
                <button
                  onClick={() => {
                    childGuests > 0 && setChildGuests(childGuests - 1);
                  }}
                  className='p-2 block border border-gray-700 text-gray-700 rounded focus:outline-none focus:ring-1 ring-inset ring-gray-700'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <div className='px-2 font-bold'>{childGuests}</div>
                <button
                  onClick={() => setChildGuests(childGuests + 1)}
                  className='p-2 block border border-gray-700 text-gray-700 rounded focus:outline-none focus:ring-1 ring-inset ring-gray-700'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className='flex justify-center w-full absolute bottom-0 mb-7'>
          <button
            tabIndex={!isOpen && -1}
            onClick={() => setIsOpen(false)}
            className='flex items-center justify-center py-3 px-7 text-white bg-red-400 rounded-2xl focus:outline-none focus:ring-1 ring-gray-700'
          >
            <div className='pr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div>Search</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
