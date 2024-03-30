import React, { useState, useEffect } from 'react';
import QariList from './components/QariList';
import SurahSelection from './components/SurahSelection';
import AudioPlayer from './components/AudioPlayer';
import BookmarkList from './components/BookmarkList';
import ThemeSelector from './components/ThemeSelector';
import './App.css';

function App() {
  const [qaris, setQaris] = useState([]);
  const [selectedQari, setSelectedQari] = useState(null);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [theme, setTheme] = useState('light');
  const bookmarksKey = 'quran_bookmarks';

  useEffect(() => {
    fetchQariList();
    loadBookmarks();
  }, []);

  const fetchQariList = async () => {
    try {
      const response = await fetch('https://api.quran.com/qaris');
      const data = await response.json();
      setQaris(data);
    } catch (error) {
      console.error('Error fetching qari list:', error);
    }
  };

  const loadBookmarks = () => {
    const storedBookmarks = localStorage.getItem(bookmarksKey);
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  };

  const saveBookmarks = (updatedBookmarks) => {
    localStorage.setItem(bookmarksKey, JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  const handleQariSelection = (qari) => {
    setSelectedQari(qari);
  };

  const handleSurahSelection = (surah) => {
    setSelectedSurah(surah);
  };

  const handleBookmarkAddition = (bookmark) => {
    const updatedBookmarks = [...bookmarks, bookmark];
    saveBookmarks(updatedBookmarks);
  };

  const handleBookmarkRemoval = (index) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks.splice(index, 1);
    saveBookmarks(updatedBookmarks);
  };

  const handleThemeSelection = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <QariList qaris={qaris} onQariSelection={handleQariSelection} />
      <SurahSelection
        onSurahSelection={handleSurahSelection}
        onBookmarkAddition={handleBookmarkAddition}
      />
      {selectedQari && selectedSurah && (
        <AudioPlayer surah={selectedSurah} qari={selectedQari} />
      )}
      <BookmarkList bookmarks={bookmarks} onBookmarkRemoval={handleBookmarkRemoval} />
      <ThemeSelector onThemeSelection={handleThemeSelection} />
    </div>
  );
}

export default App;
