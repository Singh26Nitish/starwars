import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const handleButtonClick = async (key) => {
    try {
      const response = await fetch(data[key]);
      const jsonData = await response.json();
      setSelectedCategory(key);

      // Extract relevant information based on the selected category
      const itemsToShow = jsonData.results.slice(0, 5);
      switch (key) {
        case 'people':
          setSelectedData(itemsToShow.map(item => ({ name: item.name, birth_year: item.birth_year, height: item.height, gender: item.gender, mass: item.mass })));
          break;
        case 'planets':
          setSelectedData(itemsToShow.map(item => ({ name: item.name, climate: item.climate, population: item.population })));
          break;
        case 'films':
          setSelectedData(itemsToShow.map(item => ({ title: item.title, director: item.director, release_date: item.release_date })));
          break;
        case 'species':
          setSelectedData(itemsToShow.map(item => ({ name: item.name, classification: item.classification, language: item.language })));
          break;
        case 'vehicles':
          setSelectedData(itemsToShow.map(item => ({ name: item.name, model: item.model, manufacturer: item.manufacturer })));
          break;
        case 'starships':
          setSelectedData(itemsToShow.map(item => ({ name: item.name, model: item.model, manufacturer: item.manufacturer })));
          break;
        default:
          setSelectedData(itemsToShow);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(selectedData);

  return (
    <div className="App">
      <h1>Welcome to Starwars encyclopedia</h1>
      <h2>Categories</h2>
      {data && Object.keys(data).map((key, index) => (
        <button key={index} onClick={() => handleButtonClick(key)}>
          {key}
        </button>
      ))}
      <h2>Selected Category: {selectedCategory}</h2>
      {selectedData.length > 0 ? (
        selectedData.map((item, index) => (
          <div key={index}>
            <h3>{item.name || item.title}</h3>
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
        ))
      ) : (
        'Select a category to view data'
      )}
    </div>
  );
}

export default App;

