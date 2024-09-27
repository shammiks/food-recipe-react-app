import React from 'react';

export default function RecipeGrid({ recipes, onRecipeClick, loading }) {
  if (loading) {
    return <div className="text-center text-2xl text-gray-300">Loading...</div>;
  }

  if (recipes.length === 0) {
    return <div className="text-center text-2xl text-gray-300">No recipes found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => onRecipeClick(recipe.id)}
        >
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">{recipe.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{recipe.summary.split('. ')[0]}.</p>
            <span className="inline-block bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
              {recipe.dishTypes[0] || 'Uncategorized'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}