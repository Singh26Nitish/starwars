// CategoryButtons.js

import React from 'react';

function CategoryButtons({ data, handleButtonClick }) {
  return (
    <div className='flex flex-wrap justify-center '>
      {data && Object.keys(data).map((key, index) => (
        <button
        className='bg-gray-500 text-white font-bold py-2 px-4 rounded border border-transparent transition duration-300 ease-in-out hover:border-white mr-2 mb-2'
          key={index}
          onClick={() => handleButtonClick(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
