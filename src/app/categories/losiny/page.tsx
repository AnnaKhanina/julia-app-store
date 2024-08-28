// app/categories/losiny/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const LosinyPage = () => {
  const subcategories = [
    {
      name: 'Класичні Лосини',
      link: '/categories/losiny/classic',
      imageUrl: '/images/classik-losiny.jpg',
    },
    {
      name: 'Спортивні Лосини',
      link: '/categories/losiny/sport',
      imageUrl: '/images/sport-losiny.jpg',
    },
    {
      name: 'Теплі Лосини',
      link: '/categories/losiny/warm',
      imageUrl: '/images/warm-losiny.jpg',
    },
  ];

  return (   
     <div>
      <h2 className="text-3xl font-bold mb-6">Лосини</h2>
      <div className="flex flex-wrap -mx-4">
        {subcategories.map((subcategory) => (
          <div key={subcategory.name} className="w-full md:w-1/3 px-4 mb-8">
            <Link href={subcategory.link} className="block">
              <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={subcategory.imageUrl}
                  alt={subcategory.name}
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{subcategory.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LosinyPage;

