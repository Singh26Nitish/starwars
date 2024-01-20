// App.js
import React from 'react';
import CategorySection from './components/CategorySection';
import backgroundImage from './media/starwars.jpg';
import Navbar from './components/Navbar';

function App() {
  const appStyle = {

    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
  };

  return (
    <div className="App" style={appStyle}>
      <Navbar />
      <CategorySection />
    </div>
  );
}

export default App;
