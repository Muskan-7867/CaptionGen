// src/App.tsx
import React from 'react';
import ContentGenerator from './components/ContentGen';
import Navbar from './components/Navbar';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <ContentGenerator />
    </div>
  );
};

export default App;
