import React from 'react';
import logo from '../logo.svg';
import SearchBar from './SearchBar';

const Header = ({ locations }) => {
  return (
    <header className='px-4 py-6 md:flex md:justify-between md:items-center'>
      <img className='h-8' src={logo} alt='Windbnb' />
      <SearchBar locations={locations} />
    </header>
  );
};

export default Header;
