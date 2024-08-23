// app/categories/losiny/classic/[id]/page.tsx

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const { id } = params;

  // Дані товару можна буде замінити на отримання з API або статичних файлів
  const product = {
    id: id,
    name: `Класичні Лосини ${id}`,
    description: 'Це чудові класичні лосини, які підходять для будь-якої погоди.',
    price: '500 грн',
    sizes: ['S', 'M', 'L'],
    colors: ['Чорний', 'Сірий', 'Синій'],
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="mb-4">{product.description}</p>
      <p className="mb-4 text-lg">Ціна: {product.price}</p>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Вибір Розміра:</label>
        <select className="border p-2">
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Вибір Кольору:</label>
        <select className="border p-2">
          {product.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">Додати в кошик</button>
    </div>
  );
};

export default ProductDetailPage;


