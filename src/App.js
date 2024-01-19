import React, { useState, useEffect } from 'react';
import CategoryButtons from './components/CategoryButtons';
import DisplayData from './components/DisplayData';

function App() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

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

      // Extract all items from the results array
      const itemsToShow = jsonData.results.slice(0, 9);
      setSelectedData(itemsToShow);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-semibold mb-4">Star Wars Data Explorer</h1>
      <CategoryButtons data={data} handleButtonClick={handleButtonClick} />
      <h2 className="text-xl font-semibold mt-4">
        Selected Category: {selectedCategory}
      </h2>
      {loading ? (
        <p className="mt-8">Loading...</p>
      ) : (
        <DisplayData
          selectedCategory={selectedCategory}
          selectedData={selectedData}
        />
      )}
    </div>
  );
}

export default App;
