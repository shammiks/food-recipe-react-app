import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md" required></textarea>
        </div>
        <button type="submit" className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
}