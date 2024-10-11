import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-64">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">${product.price.toFixed(2)}</p>
        <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}