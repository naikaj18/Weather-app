import React from 'react'
import '../../App.css';
export default function Search({ search, setSearch, handleSearch }) {
    return (
        <div className="search-engine">
            <input
                type="text"
                placeholder="Search for a city"
                name="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button
                onClick={handleSearch}>Search</button>
        </div>
    )
}
