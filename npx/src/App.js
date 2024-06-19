import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './componentes/navbar';
import CharacterCreation from './componentes/CharacterCreation';
import Game from './componentes/Game';

function App() {
  const [characters, setCharacters] = useState([]);

  const handleCreateCharacter = (character) => {
    if (characters.length < 5) {
      setCharacters([...characters, character]);
    } else {
      alert('Máximo 5 personajes permitidos. Borra uno antes de crear otro.');
    }
  };

  const handleDeleteCharacter = (index) => {
    const updatedCharacters = characters.filter((_, i) => i !== index);
    setCharacters(updatedCharacters);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/characters" element={<CharacterCreation onCreateCharacter={handleCreateCharacter} characters={characters} onDeleteCharacter={handleDeleteCharacter} />} />
          <Route path="/game" element={<Game characters={characters} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
