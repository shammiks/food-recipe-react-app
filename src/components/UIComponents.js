import React from 'react';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={`w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={`px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

export const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      className={`block text-sm font-medium text-gray-300 mb-1 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});