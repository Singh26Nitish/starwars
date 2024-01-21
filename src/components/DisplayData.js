// DisplayData.js
import React from 'react';

function DisplayData({ selectedCategory, selectedData }) {
  return (
    <div className="mt-8 flex justify-center">
      {selectedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {selectedData.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg bg-opacity-40 backdrop-blur-md hover:border-white hover:bg-opacity-70 transition duration-300 ease-in-out max-w-md">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.name || item.title}
              </h3>
              {selectedCategory === 'people' && (
                <>
                  <p>Birth Year: {item.birth_year}</p>
                  <p>Height: {item.height}</p>
                  <p>Gender: {item.gender}</p>
                  <p>Mass: {item.mass}</p>
                  <p>Skin Color: {item.skin_color}</p>
                </>
              )}
              {selectedCategory === 'planets' && (
                <>
                  <p>Climate: {item.climate}</p>
                  <p>Population: {item.population}</p>
                  <p>Rotation_period: {item.rotation_period}</p>
                  <p>Diameter: {item.diameter}</p>
                  <p>Terrain: {item.terrain}</p>
                </>
              )}
              {selectedCategory === 'films' && (
                <>
                  <p>Director: {item.director}</p>
                  <p>Producer: {item.producer}</p>
                  <p>Release Date: {item.release_date}</p>
                </>
              )}
              {selectedCategory === 'species' && (
                <>
                  <p>Classification: {item.classification}</p>
                  <p>Language: {item.language}</p>
                  <p>Designation: {item.designation}</p>
                  <p>Average Height: {item.average_height}</p>
                  <p>Average Lifespan: {item.average_lifespan}</p>
                </>
              )}
              {selectedCategory === 'vehicles' && (
                <>
                  <p>Model: {item.model}</p>
                  <p>Manufacturer: {item.manufacturer}</p>
                  <p>Cost: {item.cost_in_credits}</p>
                  <p>Length: {item.length}</p>
                  <p>Atmosphering Speed: {item.max_atmosphering_speed}</p>
                </>
              )}
              {selectedCategory === 'starships' && (
                <>
                  <p className='text-white'>Model: {item.model}</p>
                  <p className='text-white'>Manufacturer: {item.manufacturer}</p>
                  <p className='text-white'>Cost: {item.cost_in_credits}</p>
                  <p className='text-white'>Length: {item.length}</p>
                  <p className='text-white'>Atmosphering Speed: {item.max_atmosphering_speed}</p>
                  <p className='text-white'>Hyperdrive Rating: {item.hyperdrive_rating}</p>
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
