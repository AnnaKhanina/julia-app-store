'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  imageUrl: string;
}

const ProductDetailPage = () => {
  const { id } = useParams(); // Отримання ID з параметрів URL
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const products: Product[] = [
    { id: '1', name: 'Класичні Лосини 1', price: 500, description: 'Опис товару 1...', size: ['S', 'M', 'L'], color: ['Чорний', 'Сірий', 'Синій'], imageUrl: '/images/losiny.jpg' },
    { id: '2', name: 'Класичні Лосини 2', price: 600, description: 'Опис товару 2...', size: ['S', 'M', 'L'], color: ['Чорний', 'Сірий', 'Синій'], imageUrl: '/images/komplekt-sportyvnyi.jpg' },
    { id: '3', name: 'Класичні Лосини 3', price: 700, description: 'Опис товару 3...', size: ['S', 'M', 'L'], color: ['Чорний', 'Сірий', 'Синій'], imageUrl: '/images/sportyvni-losyny.jpg' },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Товар не знайдено!</p>;
  }

  const addToCart = (newItem: CartItem) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingItemIndex = storedCart.findIndex(
      (item: CartItem) =>
        item.id === newItem.id &&
        item.size === newItem.size &&
        item.color === newItem.color
    );

    if (existingItemIndex >= 0) {
      storedCart[existingItemIndex].quantity += newItem.quantity;
    } else {
      storedCart.push(newItem);
    }

    localStorage.setItem('cart', JSON.stringify(storedCart));
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.warn('Будь ласка, оберіть розмір та колір перед додаванням до кошика');
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      imageUrl: product.imageUrl,
    };

    addToCart(cartItem);
    router.push('/cart');
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="mb-4">{product.description}</p>
        <div className="mb-4">
          <h2 className="font-bold">Розмір:</h2>
          <div className="flex space-x-2">
            {product.size.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`p-2 border ${selectedSize === size ? 'border-black bg-gray-200' : 'border-gray-300'}`}
              >
                {size}
              </button>
            ))}
          </div>
          {selectedSize && <p className="text-sm text-gray-500 mt-2">Вибраний розмір: {selectedSize}</p>}
        </div>
        <div className="mb-4">
          <h2 className="font-bold">Колір:</h2>
          <div className="flex space-x-2">
            {product.color.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`p-2 border ${selectedColor === color ? 'border-black bg-gray-200' : 'border-gray-300'}`}
              >
                {color}
              </button>
            ))}
          </div>
          {selectedColor && <p className="text-sm text-gray-500 mt-2">Вибраний колір: {selectedColor}</p>}
        </div>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold mr-4">{product.price} грн</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            onClick={handleAddToCart}
          >
            <AiOutlineShoppingCart className="mr-2" /> Купити
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetailPage;










