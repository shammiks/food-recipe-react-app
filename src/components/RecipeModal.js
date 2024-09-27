import React, { useEffect, useState } from 'react';

export default function RecipeModal({ recipe, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for the fade-out animation to complete
  };

  return (
    <div id="recipe-modal" className={`modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="modal-content bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <div id="recipe-details" className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-pink-500">{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-300">
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Instructions</h3>
            <ol className="list-decimal list-inside text-gray-300">
              {recipe.analyzedInstructions[0]?.steps.map((step) => (
                <li key={step.number} className="mb-2">
                  {step.step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="close absolute top-4 right-4 text-white hover:text-pink-500 transition-colors duration-300"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}