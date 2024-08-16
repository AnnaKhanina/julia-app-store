// import ProductCard from '../../../components/ProductCard';

// const fetchProducts = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     const products = await res.json();
//      console.log('Products fetched:', products);
//     return products.filter((product: any) => product.name === 'Шкарпетки');
//   } catch (error) {
//     console.error('Failed to fetch products:', error);
//     return [];
//   }
// };

// const ShkarpetkyPage = async () => {
//   const products = await fetchProducts();
  
//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-6">Шкарпетки</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {products.map((product: any) => (
//           <ProductCard
//             key={product.id}
//             id={product.id}
//             name={product.name}
//             image={product.image}
//             price={product.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShkarpetkyPage;

import ProductCard from '../../../components/ProductCard';

const fetchProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const products = await res.json();
    console.log('Products fetched:', products);
    return products.filter((product: any) => product.category === 'shkarpetky'); // Фільтруємо за категорією
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

const ShkarpetkyPage = async () => {
  const products = await fetchProducts();
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Шкарпетки</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
           category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ShkarpetkyPage;
