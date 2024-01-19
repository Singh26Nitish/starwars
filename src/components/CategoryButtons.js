import React from 'react';

function CategoryButtons({ data, handleButtonClick }) {
  return (
    <>
      {data && Object.keys(data).map((key, index) => (
        <button
          className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2'
          key={index}
          onClick={() => handleButtonClick(key)}
        >
          {key}
        </button>
      ))}
    </>
  );
}

export default CategoryButtons;
