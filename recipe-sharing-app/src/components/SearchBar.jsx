import React from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((store) => StaticRange.setSearchTerm);

    return (
        <input type="text" placeholder="Search recipes..." onChange={(e) => setSearchTerm(e.target.value)} />
    );
};
export default SearchBar;