import React from 'react';
function QariList({ qaris, onSelectQari }) {
  return (
    <div className="qari-list">
      <h2>Qari List</h2>
      <ul>
        {qaris.map((qari) => (
          <li key={qari.id} onClick={() => onSelectQari(qari)}>
            {qari.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QariList;
