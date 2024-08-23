// app/categories/losiny/classic/page.tsx
import Link from 'next/link';

const ClassicLosinyPage = () => {
  const products = [
    { id: '1', name: 'Класичні Лосини 1', price: '500 грн' },
    { id: '2', name: 'Класичні Лосини 2', price: '600 грн' },
    { id: '3', name: 'Класичні Лосини 3', price: '700 грн' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Класичні Лосини</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center">
            <span className="text-xl">{product.name}</span>
            <span className="text-lg">{product.price}</span>
            <Link href={`/categories/losiny/classic/${product.id}`} className="text-blue-500 hover:underline">
              Переглянути
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassicLosinyPage;
