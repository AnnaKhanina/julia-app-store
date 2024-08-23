'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Іконка кошика

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  size: string[];
  color: string[];
}

const ProductDetailPage = () => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const product: Product = {
    id: '1',
    name: 'Класичні Лосини',
    price: 500,
    description: 'Опис товару...',
    size: ['S', 'M', 'L'],
    color: ['Чорний', 'Сірий', 'Синій'],
  };

  const addToCart = (newItem: CartItem) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingItemIndex = storedCart.findIndex(
      (item: CartItem) =>
        item.id === newItem.id &&
        item.size === newItem.size &&
        item.color === newItem.color
    );

    if (existingItemIndex >= 0) {
      // Якщо товар вже є, збільшуємо його кількість
      storedCart[existingItemIndex].quantity += newItem.quantity;
    } else {
      // Якщо товару немає, додаємо його до кошика
      storedCart.push(newItem);
    }

    // Оновлюємо кошик у LocalStorage
    localStorage.setItem('cart', JSON.stringify(storedCart));
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize || product.size[0],
      color: selectedColor || product.color[0],
      quantity: 1,
    };

    // Додаємо товар до кошика
    addToCart(cartItem);

    // Перехід на сторінку кошика після додавання товару
    router.push('/cart');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <div className="mb-4">
        <h2 className="font-bold">Розмір:</h2>
        <select onChange={(e) => setSelectedSize(e.target.value)}>
          {product.size.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Колір:</h2>
        <select onChange={(e) => setSelectedColor(e.target.value)}>
          {product.color.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          onClick={handleAddToCart}
        >
          <AiOutlineShoppingCart className="mr-2" /> Додати до кошика
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;




