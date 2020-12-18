import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchDropdown from './SearchDropdown';

const SearchBar = ({ location, locations, adultGuests, childGuests }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [locationIsOpen, setLocationIsOpen] = useState(false);
  const [guestsIsOpen, setGuestsIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setDropdownIsOpen(false);
      // unfocus SearchBar button
      document.activeElement.blur();
    }
  };

  return (
    <>
      <div className='mt-6 flex justify-center text-sm border rounded-xl shadow md:w-80 md:mt-0'>
        <div className='flex-1 border-r'>
          <button
            tabIndex={dropdownIsOpen ? -1 : undefined}
            onClick={() => {
              setDropdownIsOpen(!dropdownIsOpen);
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
              setDropdownIsOpen(!dropdownIsOpen);
              setGuestsIsOpen(true);
              setLocationIsOpen(false);
            }}
            tabIndex={dropdownIsOpen ? -1 : undefined}
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
            tabIndex={dropdownIsOpen ? -1 : undefined}
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
      {
        // close search dropdown
        dropdownIsOpen && (
          <button
            onClick={() => setDropdownIsOpen(false)}
            className='z-10 fixed inset-0 w-full h-full bg-black opacity-40 cursor-default'
          ></button>
        )
      }
      <SearchDropdown
        isOpen={dropdownIsOpen}
        setIsOpen={setDropdownIsOpen}
        locations={locations}
        locationIsOpen={locationIsOpen}
        setLocationIsOpen={setLocationIsOpen}
        guestsIsOpen={guestsIsOpen}
        setGuestsIsOpen={setGuestsIsOpen}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    childGuests: state.guests.children,
    adultGuests: state.guests.adults,
  };
};

export default connect(mapStateToProps)(SearchBar);
