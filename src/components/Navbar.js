import React from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Recipes', href: '#recipes' },
  { name: 'Review', href: '#review' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 sticky top-16 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}