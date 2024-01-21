// App.js
import React, { useState } from 'react';
import backgroundImage from './media/starwars.jpg';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';

function App() {
  const [currentBackground, setCurrentBackground] = useState(backgroundImage);

  const updateBackground = (newBackground) => {
    setCurrentBackground(newBackground);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${currentBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Navbar />
      <CategorySection updateBackground={updateBackground} />
    </div>
  );
}

export default App;
