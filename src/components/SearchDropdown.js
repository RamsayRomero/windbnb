import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  changeAdultGuests,
  changeChildGuests,
  changeLocation,
} from '../actions';

const SearchDropdown = ({
  isOpen,
  setIsOpen,
  location,
  locations,
  locationIsOpen,
  setLocationIsOpen,
  guestsIsOpen,
  setGuestsIsOpen,
  childGuests,
  adultGuests,
  changeAdultGuests,
  changeChildGuests,
  changeLocation,
}) => {
  const [searchLocation, setSearchLocation] = useState(location);
  const [currentChildGuests, setCurrentChildGuests] = useState(childGuests);
  const [currentAdultGuests, setCurrentAdultGuests] = useState(adultGuests);

  return (
    <div
      className={
        isOpen
          ? 'z-20 py-6 fixed inset-0 block w-full bg-white font-display transition duration-500 ease-out transform md:inset-x-0 md:top-0 md:bottom-auto md:h-112'
          : 'py-6 fixed inset-0 block w-full bg-white font-display transition duration-500 ease-out transform -translate-y-full'
      }
    >
      <div className='flex px-4 items-center justify-between md:hidden'>
        <div className='font-bold text-sm'>Edit your search</div>
        <div>
          <button
            className='rounded focus:outline-none focus:ring-1 ring-gray-700'
            tabIndex={!isOpen ? -1 : undefined}
            onClick={() => {
              setSearchLocation(location);
              setIsOpen(false);
            }}
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

      <div className='mt-4 mx-4 rounded-lg border shadow md:flex md:justify-between'>
        <div className='border-b md:border-none md:w-1/3'>
          <button
            onClick={() => {
              setLocationIsOpen(true);
              setGuestsIsOpen(false);
            }}
            tabIndex={!isOpen ? -1 : undefined}
            className='block py-2 px-6 w-full text-left  rounded-lg focus:outline-none focus:ring-1 ring-inset ring-gray-700'
          >
            <div className='font-bold text-xs uppercase tracking-wide'>
              Location
            </div>
            <div className='text-gray-800'>{searchLocation}, Finland</div>
          </button>
        </div>
        <div className='relative md:w-1/3 md:border-l'>
          <button
            onClick={() => {
              setGuestsIsOpen(true);
              setLocationIsOpen(false);
            }}
            tabIndex={!isOpen ? -1 : undefined}
            className='block py-2 px-6 w-full text-left rounded-lg focus:outline-none focus:ring-1 ring-inset ring-gray-700'
          >
            <div className='font-bold text-xs uppercase tracking-wide'>
              Guests
            </div>
            <div
              className={
                currentAdultGuests + currentChildGuests === 0
                  ? 'text-gray-400'
                  : 'font-bold text-gray-900'
              }
            >
              {currentAdultGuests + currentChildGuests === 0
                ? 'Add guests'
                : currentAdultGuests + currentChildGuests === 1
                ? currentAdultGuests + currentChildGuests + ' guest'
                : currentAdultGuests + currentChildGuests + ' guests'}
            </div>
          </button>

          {guestsIsOpen && (
            <div className='mt-8 absolute'>
              <div className='px-10'>
                <div className='font-bold'>Adults</div>
                <div className='text-gray-500'>Ages 13 or above</div>
                <div className='flex items-center mt-4'>
                  <button
                    onClick={() => {
                      currentAdultGuests > 0 &&
                        setCurrentAdultGuests(currentAdultGuests - 1);
                    }}
                    tabIndex={!isOpen ? -1 : undefined}
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
                  <div className='px-2 font-bold'>{currentAdultGuests}</div>
                  <button
                    onClick={() =>
                      setCurrentAdultGuests(currentAdultGuests + 1)
                    }
                    tabIndex={!isOpen ? -1 : undefined}
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
                      currentChildGuests > 0 &&
                        setCurrentChildGuests(currentChildGuests - 1);
                    }}
                    tabIndex={!isOpen ? -1 : undefined}
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
                  <div className='px-2 font-bold'>{currentChildGuests}</div>
                  <button
                    onClick={() =>
                      setCurrentChildGuests(currentChildGuests + 1)
                    }
                    tabIndex={!isOpen ? -1 : undefined}
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
        </div>
        <div className='hidden justify-center md:flex md:w-1/3 md:border-l'>
          <button
            tabIndex={!isOpen ? -1 : undefined}
            onClick={() => {
              setIsOpen(false);
              if (locationIsOpen) {
                changeLocation(searchLocation);
              } else if (guestsIsOpen) {
                changeChildGuests(currentChildGuests);
                changeAdultGuests(currentAdultGuests);
              }
            }}
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

      {locationIsOpen && (
        <div className='mt-8'>
          <ul>
            {locations.map((city) => (
              <li
                key={city}
                onClick={() => setSearchLocation(city)}
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

      <div className='flex justify-center w-full absolute bottom-0 mb-7 md:hidden'>
        <button
          tabIndex={!isOpen ? -1 : undefined}
          onClick={() => {
            setIsOpen(false);
            if (locationIsOpen) {
              changeLocation(searchLocation);
            } else if (guestsIsOpen) {
              changeChildGuests(currentChildGuests);
              changeAdultGuests(currentAdultGuests);
            }
          }}
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
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    childGuests: state.guests.children,
    adultGuests: state.guests.adults,
  };
};

export default connect(mapStateToProps, {
  changeAdultGuests,
  changeChildGuests,
  changeLocation,
})(SearchDropdown);
