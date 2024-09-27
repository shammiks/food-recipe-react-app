import React, { useState } from 'react';
import { User } from 'lucide-react';
import SignupPage from './SignupPage';

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="logo text-2xl font-bold text-pink-500">FoodiFy</div>
        <form onSubmit={handleSubmit} className="search-bar flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              id="search-input"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              id="search-button"
              className="absolute right-0 top-0 mt-2 mr-4 text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </form>
        <button
          onClick={() => setIsSignupOpen(true)}
          className="text-white hover:text-pink-500 transition-colors duration-300"
        >
          <User className="h-6 w-6" />
        </button>
      </nav>
      {isSignupOpen && <SignupPage onClose={() => setIsSignupOpen(false)} />}
    </header>
  );
}