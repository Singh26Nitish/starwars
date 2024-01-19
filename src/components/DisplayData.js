import React from 'react';

function DisplayData({ selectedCategory, selectedData }) {
  return (
    <>
      {selectedData.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {selectedData.map((item, index) => (
            <div key={index} className="p-4 border rounded">
              <h3 className="text-xl font-semibold mb-2">
                {item.name || item.title}
              </h3>
              {selectedCategory === 'people' && (
                <>
                  <p>Birth Year: {item.birth_year}</p>
                  <p>Height: {item.height}</p>
                  <p>Gender: {item.gender}</p>
                  <p>Mass: {item.mass}</p>
                </>
              )}
              {selectedCategory === 'planets' && (
                <>
                  <p>Climate: {item.climate}</p>
                  <p>Population: {item.population}</p>
                </>
              )}
              {selectedCategory === 'films' && (
                <>
                  <p>Director: {item.director}</p>
                  <p>Release Date: {item.release_date}</p>
                </>
              )}
              {selectedCategory === 'species' && (
                <>
                  <p>Classification: {item.classification}</p>
                  <p>Language: {item.language}</p>
                </>
              )}
              {selectedCategory === 'vehicles' && (
                <>
                  <p>Model: {item.model}</p>
                  <p>Manufacturer: {item.manufacturer}</p>
                </>
              )}
              {selectedCategory === 'starships' && (
                <>
                  <p>Model: {item.model}</p>
                  <p>Manufacturer: {item.manufacturer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-8">Select a category to view data</p>
      )}
    </>
  );
}

export default DisplayData;
