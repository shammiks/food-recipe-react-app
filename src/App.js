import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CategoryList from './components/CategoryList';
import RecipeGrid from './components/RecipeGrid';
import Pagination from './components/Pagination';
import RecipeModal from './components/RecipeModal';
import Home from './components/Home';
import Review from './components/Review';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import './styles.css';

const API_KEY = '2e94b891877f4e5b9246383fb9f98c64'; // Replace with your actual API key
const BASE_URL = 'https://api.spoonacular.com/recipes';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 8;

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, currentCategory, searchTerm]);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const query = currentCategory === 'All' ? searchTerm : `${searchTerm} ${currentCategory}`;
      const response = await fetch(
        `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&offset=${
          (currentPage - 1) * itemsPerPage
        }&number=${itemsPerPage}&addRecipeInformation=true`
      );
      const data = await response.json();
      setRecipes(data.results);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    setLoading(false);
  };

  const fetchRecipeDetails = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
      const data = await response.json();
      setSelectedRecipe(data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const handleRecipeClick = (id) => {
    fetchRecipeDetails(id);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header onSearch={handleSearch} />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <section id="recipes" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-8">Our Recipes</h2>
          <div className="flex flex-col md:flex-row">
            <CategoryList currentCategory={currentCategory} onCategoryChange={handleCategoryChange} />
            <div className="flex-grow">
              <RecipeGrid recipes={recipes} onRecipeClick={handleRecipeClick} loading={loading} />
              <Pagination
                currentPage={currentPage}
                totalResults={totalResults}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </section>
        <Review />
        <AboutUs />
        <Contact />
      </main>
      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />}
    </div>
  );
}