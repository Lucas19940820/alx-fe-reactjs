import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>Category: {recipe.category}</p>
      <p>Dietary: {recipe.dietaryRestrictions.join(', ')}</p>
    </div>
  );
};

export default RecipeItem;
