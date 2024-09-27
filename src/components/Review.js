import React from 'react';

export default function Review() {
  return (
    <section id="review" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "FoodiFy has transformed my cooking experience. The recipes are easy to follow and always delicious!"
            </p>
            <p className="font-bold">- Happy User {i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}