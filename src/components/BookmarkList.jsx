import React from 'react';
function BookmarkList({ bookmarks }) {
  return (
    <div className="bookmark-list">
      <h2>Bookmarks</h2>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            {bookmark.qari.name} - Surah {bookmark.surah}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkList;
