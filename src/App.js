import React from 'react'
import Navbar from "./components/Navbar";
import CarProject from './components/CarCard/CarProject';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <CarProject />
      </header>
    </div>
  );
}

export default App;
