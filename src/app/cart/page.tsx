// app/cart/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (id: string, size: string, color: string) => {
    const updatedCart = cartItems.filter(item =>
      !(item.id === id && item.size === size && item.color === color)
    );

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    router.push('/order-confirmation');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Ваш кошик</h1>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="border p-4 mb-4 flex items-center">
              <div className="flex-grow">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>Розмір: {item.size}</p>
                <p>Колір: {item.color}</p>
                <p>Ціна: {item.price} грн</p>
                <p>Кількість: {item.quantity}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id, item.size, item.color)} className="bg-red-500 text-white px-2 py-1 rounded">
                Видалити
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-xl font-bold">Разом: {calculateTotal()} грн</h2>
            <button onClick={handlePlaceOrder} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Оформити замовлення
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
