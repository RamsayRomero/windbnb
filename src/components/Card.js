import React from 'react';

const Card = ({ superHost, beds, type, title, rating, photo }) => {
  return (
    // eslint-disable-next-line
    <a
      href='#'
      className='block rounded-2xl focus:outline-none focus:ring-2 ring-gray-700 ring-offset-1'
    >
      <div className='relative pb-2/3'>
        <img
          src={photo}
          alt=''
          className='absolute h-full w-full object-cover rounded-2xl'
        />
      </div>
      <div className='mt-2 flex items-center justify-between'>
        <div className='space-x-2'>
          {superHost && (
            <span className='py-1 px-2 text-xs text-gray-800 font-semibold uppercase tracking-wide border rounded-xl border-gray-800'>
              Super Host
            </span>
          )}
          <span className='text-sm text-gray-700'>{type}</span>
          {beds && (
            <span className='text-sm text-gray-700'>{beds + ' beds'}</span>
          )}
        </div>
        <div className='flex items-center space-x-1'>
          <span>
            <svg
              className='w-3 h-3 text-red-600'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
          </span>
          <span>{rating}</span>
        </div>
      </div>
      <div className='mt-1 font-semibold text-sm'>{title}</div>
    </a>
  );
};

export default Card;
