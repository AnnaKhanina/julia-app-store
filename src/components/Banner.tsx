import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  const categories = [
    // { name: 'Лосини', image: '/images/losiny.jpg', link: '/product/losiny' },
    { name: 'Легінси', image: '/images/leginsy.jpg', link: '/product/leginsy' },
    // { name: 'Шкарпетки', image: '/images/shkarpetky.jpg', link: '/product/shkarpetky' },
  ];

  return (  
    <div className="banner">
      <h2 className="text-3xl font-bold mb-6">Наші товари</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.link} className="group relative block">         
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">{category.name}</span>
            </div>              
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Banner;
