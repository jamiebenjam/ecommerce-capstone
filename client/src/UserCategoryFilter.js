import React from 'react';

function Filter({ selectedSort, setSelectedSort }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={selectedSort}
        onChange={e => setSelectedSort(e.target.value)}
      >
        <option>Sort by</option>
        <option value="low">Price, low to high</option>
        <option value="high">Price, high to low</option>
      </select>
    </div>
  );
}

export default Filter;
