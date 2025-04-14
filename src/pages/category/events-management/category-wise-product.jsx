import React from 'react';

const CategoryWiseProduct = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border p-4 rounded shadow">
            <h3 className="font-medium text-md mb-2">Product {item}</h3>
            <p className="text-sm text-gray-600">This is a dummy description for product {item}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
