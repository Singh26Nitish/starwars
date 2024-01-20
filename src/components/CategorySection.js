
// CategorySection.js

import React, { useState, useEffect } from 'react';
import CategoryButtons from './CategoryButtons';
import DisplayData from './DisplayData';

function CategorySection() {
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
      // Your existing logic for fetching and setting data
      try {
          setLoading(true);
          const response = await fetch(data[key]);
          const jsonData = await response.json();
          setSelectedCategory(key);
    
          // Extract all items from the results array
          const itemsToShow = jsonData.results.slice(0, 9);
          setSelectedData(itemsToShow);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
    };
  
    const handlePageChange = async (direction) => {
      // Your existing logic for fetching and setting data based on page change
      try {
          setLoading(true);
          const response = await fetch(selectedCategory === null ? 'https://swapi.dev/api/' : data[selectedCategory] + `?page=${currentPage + direction}`);
          const jsonData = await response.json();
          const itemsToShow = jsonData.results;
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
            <div className="category-section ">
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