// app/categories/losiny/page.tsx
import Link from 'next/link';

const LosinyPage = () => {
  const subcategories = [
    { name: 'Класичні Лосини', link: '/categories/losiny/classic' },
    { name: 'Спортивні Лосини', link: '/categories/losiny/sport' },
    { name: 'Теплі Лосини', link: '/categories/losiny/warm' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Лосини</h2>
      <ul className="space-y-4">
        {subcategories.map((subcategory) => (
          <li key={subcategory.name}>
            <Link href={subcategory.link} className="text-xl text-blue-500 hover:underline">
              {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LosinyPage;
