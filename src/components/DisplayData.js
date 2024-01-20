// DisplayData.js

import React from 'react';

function DisplayData({ selectedCategory, selectedData }) {
  return (
    <div className="mt-8 mx-auto" style={{ maxWidth: '80%' }}>
      {selectedData.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {selectedData.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg bg-opacity-40 backdrop-blur-md hover:border-white hover:bg-opacity-70 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.name || item.title}
              </h3>
              {selectedCategory === 'people' && (
                <>
                  <p className="text-white">Birth Year: {item.birth_year}</p>
                  <p className="text-white">Height: {item.height}</p>
                  <p className="text-white">Gender: {item.gender}</p>
                  <p className="text-white">Mass: {item.mass}</p>
                </>
              )}
              {selectedCategory === 'planets' && (
                <>
                  <p className="text-white">Climate: {item.climate}</p>
                  <p className="text-white">Population: {item.population}</p>
                </>
              )}
              {selectedCategory === 'films' && (
                <>
                  <p className="text-white">Director: {item.director}</p>
                  <p className="text-white">Release Date: {item.release_date}</p>
                </>
              )}
              {selectedCategory === 'species' && (
                <>
                  <p className="text-white">Classification: {item.classification}</p>
                  <p className="text-white">Language: {item.language}</p>
                </>
              )}
              {selectedCategory === 'vehicles' && (
                <>
                  <p className="text-white">Model: {item.model}</p>
                  <p className="text-white">Manufacturer: {item.manufacturer}</p>
                </>
              )}
              {selectedCategory === 'starships' && (
                <>
                  <p className="text-white">Model: {item.model}</p>
                  <p className="text-white">Manufacturer: {item.manufacturer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DisplayData;
