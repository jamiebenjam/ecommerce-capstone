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
        <option value="Lehenga">Lehenga</option>
        <option value="Chaniya Choli">Chaniya Choli</option>
        <option value="Dress">Dress</option>
        <option value="Gown">Gown</option>
        <option value="Saree">Saree</option>
        <option value="Blouse">Blouse</option>
        <option value="Duster">Duster</option>
        <option value="Dupatta">Dupatta</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Bag">Bag</option>
      </select>
    </div>
  );
}

export default Filter;
