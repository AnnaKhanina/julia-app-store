//app/categories/losiny/classic/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const ClassicLosinyPage = () => {
  const products = [
    { id: '1', name: 'Класичні Лосини 1', price: '500 грн', imageUrl: '/images/losiny.jpg' },
    { id: '2', name: 'Класичні Лосини 2', price: '600 грн', imageUrl: '/images/komplekt-sportyvnyi.jpg' },
    { id: '3', name: 'Класичні Лосини 3', price: '700 грн', imageUrl: '/images/sportyvni-losyny.jpg' },
  ];

  return (
   <div>
      <h2 className="text-3xl font-bold mb-6">Класичні Лосини</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-medium text-gray-700 mb-4">{product.price}</p>
              <Link href={`/categories/losiny/classic/${product.id}`} className="text-blue-500 hover:underline">
                 Переглянути
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicLosinyPage;







