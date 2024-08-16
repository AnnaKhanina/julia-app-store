import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price }) => {
  return (
    <Link href={`/product/leginsy/${id}`} className="group relative block">
      <Image
        src={image}
        alt={name}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-lg font-bold">{price} грн</p>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <button className="bg-blue-500 text-white p-2 rounded-full">🛒</button>
      </div>
      </Link>
      
  );
};

export default ProductCard;










