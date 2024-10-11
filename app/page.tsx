import ProductGrid from '@/components/ProductGrid';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <ProductGrid />
    </div>
  );
}