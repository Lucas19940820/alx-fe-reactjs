import React, { useState, useMemo } from "react";
import useRecipeStore from "../stores/recipeStore";
import EditRecipeForm from "./EditRecipeForm";

const HomePage = () => {
  const recipes = useRecipeStore((state) => state.recipes); // Access the raw recipes
  const filterCriteria = useRecipeStore((state) => state.filterCriteria);
  const searchQuery = useRecipeStore((state) => state.searchQuery);
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
  const setFilterCriteria = useRecipeStore((state) => state.setFilterCriteria);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // Memoize the filtered recipes
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCategory =
        !filterCriteria || recipe.category === filterCriteria;
      const matchesSearch =
        !searchQuery ||
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [recipes, filterCriteria, searchQuery]);

  return (
    <div>
      {/* Modal for editing */}
      {editingRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <EditRecipeForm
            recipe={editingRecipe}
            onClose={() => setEditingRecipe(null)}
          />
        </div>
      )}

      {/* Search and filter */}
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <select
          onChange={(e) => setFilterCriteria(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Categories</option>
          <option value="dessert">Dessert</option>
          <option value="main">Main Course</option>
          <option value="appetizer">Appetizer</option>
        </select>
      </div>

      {/* Recipes grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
           <div className="p-4">
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.summary}</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setEditingRecipe(recipe)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={() => deleteRecipe(recipe.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
