import React from 'react';

const categories = ['All', 'Main Course', 'Side Dish', 'Dessert', 'Appetizer', 'Salad', 'Bread', 'Breakfast', 'Soup', 'Beverage', 'Sauce', 'Drink'];

export default function CategoryList({ currentCategory, onCategoryChange }) {
  return (
    <aside className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
      <h3 className="text-xl font-semibold mb-4 text-pink-500">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer p-2 rounded transition-colors ${
              currentCategory === category
                ? 'bg-pink-500 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}