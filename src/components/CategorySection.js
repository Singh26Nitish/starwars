// CategorySection.js
import React, { useState, useEffect } from 'react';
import CategoryButtons from './CategoryButtons';
import DisplayData from './DisplayData';
import films from '../media/films.jpg';
import people from '../media/people.jpg';
import planets from '../media/planets.jpg';
import species from '../media/species.jpg';
import starships from '../media/starships.jpg';
import vehicles from '../media/vehicles.jpg';

function CategorySection({ updateBackground }) {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://swapi.dev/api/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const handleButtonClick = async (key) => {
    try {
      setLoading(true);
      const response = await fetch(data[key]);
      const jsonData = await response.json();
      setSelectedCategory(key);
      const itemsToShow = jsonData.results.slice(0, 9);
      setSelectedData(itemsToShow);

      // Assuming you have a mapping of categories to background images
      const backgroundImages = {
        people: people,
        planets: planets,
        films: films,
        species: species,
        vehicles: vehicles,
        starships: starships,
        // Add more mappings as needed
      };

      // Update the background image based on the selected category
      if (backgroundImages[key]) {
        updateBackground(backgroundImages[key]);
      } else {
        // Fallback to a default background image if needed
        updateBackground(backgroundImages);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (direction) => {
    try {
      setLoading(true);
      const response = await fetch(selectedCategory === null ? 'https://swapi.dev/api/' : data[selectedCategory] + `?page=${currentPage + direction}`);
      const jsonData = await response.json();
      const itemsToShow = jsonData.results.slice(0, 9);
      setSelectedData(itemsToShow);
      setCurrentPage(currentPage + direction);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <div className="category-section" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <CategoryButtons data={data} handleButtonClick={handleButtonClick} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <DisplayData selectedCategory={selectedCategory} selectedData={selectedData} />
            {selectedData.length > 0 && (
              <div className="flex justify-center mt-4">
                <button
                  className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2'
                  onClick={() => handlePageChange(-1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2'
                  onClick={() => handlePageChange(1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CategorySection;
