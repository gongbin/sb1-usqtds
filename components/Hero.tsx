import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to NextStore</h1>
        <p className="text-xl mb-8">Discover our curated collection of unique and trendy products.</p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Shop Now
        </Button>
      </div>
    </div>
  );
}