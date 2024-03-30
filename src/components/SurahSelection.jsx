import React, { useState } from 'react';
function SurahSelection({ onSelectSurah }) {
  const [selectedSurah, setSelectedSurah] = useState('');

  const handleChange = (e) => {
    setSelectedSurah(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectSurah(selectedSurah);
  };

  return (
    <div className="surah-selection">
      <h2>Surah Selection</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" min="1" max="114" value={selectedSurah} onChange={handleChange} />
        <button type="submit">Select Surah</button>
      </form>
    </div>
  );
}

export default SurahSelection;
