import React, { useState } from 'react';
import logo from '../logo.svg';
import SearchBar from './SearchBar';
import SearchDropdown from './SearchDropdown';

const Header = ({ locations }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [locationIsOpen, setLocationIsOpen] = useState(false);
  const [guestsIsOpen, setGuestsIsOpen] = useState(false);

  return (
    <header>
      <div className='px-4 py-6'>
        <img className='h-8' src={logo} alt='Windbnb' />
      </div>
      <SearchBar
        dropdownIsOpen={dropdownIsOpen}
        setDropdownIsOpen={setDropdownIsOpen}
        setLocationIsOpen={setLocationIsOpen}
        setGuestsIsOpen={setGuestsIsOpen}
      />
      <SearchDropdown
        isOpen={dropdownIsOpen}
        setIsOpen={setDropdownIsOpen}
        locations={locations}
        locationIsOpen={locationIsOpen}
        setLocationIsOpen={setLocationIsOpen}
        guestsIsOpen={guestsIsOpen}
        setGuestsIsOpen={setGuestsIsOpen}
      />
    </header>
  );
};

export default Header;
