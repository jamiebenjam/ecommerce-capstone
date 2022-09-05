import React from "react";

function Filter({ selectedCategory, handleCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Saree">Saree</option>
        <option value="Lehenga">Lehenga</option>
        <option value="Jewelry">Jewelry</option>
      </select>
    </div>
  );
}

export default Filter;
