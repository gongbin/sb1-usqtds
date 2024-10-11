"use client"

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

// Temporary product data
const tempProducts = [
  { id: 1, name: 'Classic T-Shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab' },
  { id: 2, name: 'Denim Jeans', price: 59.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d' },
  { id: 3, name: 'Leather Jacket', price: 199.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5' },
  { id: 4, name: 'Sneakers', price: 89.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772' },
];

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch products from an API here
    setProducts(tempProducts);
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}