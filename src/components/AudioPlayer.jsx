import React, { useRef } from 'react';

function AudioPlayer({ surah, qari, onBookmark }) {
  const audioRef = useRef(null);

  const handleBookmark = () => {
    onBookmark({ surah, qari });
  };

  return (
    <div className="audio-player">
      <h2>{qari.name} - Surah {surah}</h2>
      <audio ref={audioRef} controls>
        <source src={`https://verses.quran.com/${qari.id}/${surah}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handleBookmark}>Bookmark</button>
    </div>
  );
}

export default AudioPlayer;
