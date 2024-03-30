import React from 'react';

function ThemeSelector({ onThemeSelection }) {
  const themes = ['light', 'dark'];

  const handleThemeChange = (event) => {
    onThemeSelection(event.target.value);
  };

  return (
    <div className="theme-selector">
      <label htmlFor="theme">Choose a theme:</label>
      <select id="theme" onChange={handleThemeChange}>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ThemeSelector;
