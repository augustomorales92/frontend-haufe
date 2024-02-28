import React from 'react'
import { SearchProps } from 'types/characters'
import './index.css'

const SearchSortComponent = ({
  handleSearch,
  handleSortOrderChange,
  searchTerm,
  sortOrder
}: SearchProps): JSX.Element => {
  return (
    <div className="search-sort-container">
      <input
        type="text"
        placeholder="Search.."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <select
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="sort-select"
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  )
}

export default SearchSortComponent
