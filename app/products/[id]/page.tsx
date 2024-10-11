"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

// Temporary product data (replace with API call in production)
const tempProducts = [
  { id: '1', name: 'Classic T-Shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', description: 'A comfortable and stylish classic t-shirt.' },
  { id: '2', name: 'Denim Jeans', price: 59.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d', description: 'High-quality denim jeans for everyday wear.' },
  { id: '3', name: 'Leather Jacket', price: 199.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5', description: 'A sleek leather jacket to elevate your style.' },
  { id: '4', name: 'Sneakers', price: 89.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772', description: 'Comfortable and trendy sneakers for all occasions.' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // In a real application, fetch product data from an API
    const foundProduct = tempProducts.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <Button className="w-full md:w-auto">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}