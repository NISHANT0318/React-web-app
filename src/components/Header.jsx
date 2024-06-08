import React from "react";

const Header =({searchTerm,setSearchTerm,sortOption,setSortOption}) => {
    return (
        <header>
            <h1>Product List</h1>
            <input
            type="test" value={searchTerm}  onChange={(e)=> setSearchTerm(e.target.value)}
            placeholder="Search products here..."
            />
            <select value={sortOption} onChange={(e)=> setSortOption(e.target.value) }  >
                <option value="price">Sort by price</option>
                <option value="rating">Sort by rating </option>
                <option value="name">Sort by name</option>
            </select>
        </header>

    );

};

export default Header;