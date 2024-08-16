// 'use client'

// import Image from 'next/image';

// const fetchProduct = async (id: string) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch product');
//   }
//   const products = await res.json();
//   return products.find((product: any) => product.id === id);
// };

// const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
//   const product = await fetchProduct(params.id);
  
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={500}
//         height={300}
//         className="w-full h-96 object-cover rounded-lg"
//         priority={true}
//       />
//       <p className="text-lg font-bold">{product.price} грн</p>
//       <div className="mt-4">
//         {/* Додайте вибір кольору і розміру тут */}
//         <button className="bg-blue-500 text-white px-4 py-2 mt-4">Купити</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

import Image from 'next/image';

const fetchProduct = async (category: string, id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  const products = await res.json();
  return products.find((product: any) => product.id === id && product.category === category);
};

const ProductDetailPage = async ({ params }: { params: { category: string, id: string } }) => {
  const product = await fetchProduct(params.category, params.id);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        className="w-full h-96 object-cover rounded-lg"
        priority={true}
      />
      <p className="text-lg font-bold">{product.price} грн</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4">Купити</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;







