'use client';

import { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
    calculateTotalPrice(storedCart);
  }, []);

  const calculateTotalPrice = (items: CartItem[]) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateQuantity = (index: number, quantity: number) => {
    const updatedCart = [...cartItems];
    // Перевіряємо, щоб кількість не зменшувалася нижче 1
    if (updatedCart[index].quantity + quantity >= 1) {
      updatedCart[index].quantity += quantity;
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      calculateTotalPrice(updatedCart);
    }
  };

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);

    if (updatedCart.length === 0) {
      toast.info('Кошик порожній');
    } else {
      toast.success('Товар видалено з кошика');
    }
  };

  const clearCart = () => {
    const confirmClear = window.confirm('Ви впевнені, що хочете очистити кошик?');
    if (confirmClear) {
      setCartItems([]);
      localStorage.removeItem('cart');
      setTotalPrice(0);
      toast.info('Кошик очищено');
    }
  };

  const handleCheckout = () => {
    router.push('/order-confirmation');
  };

  const handleContinueShopping = () => {
    router.push('/'); // Повернення на головну сторінку
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Ваш кошик</h1>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4 p-4 border rounded-lg"
            >
              <div className="flex items-center">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={80} // Встановлено невеликий розмір
                  height={80}
                  className="rounded"
                />
                <div className="ml-4">
                  <h2 className="font-bold text-xl">{item.name}</h2>
                  <p className="text-gray-500">
                    Розмір: {item.size}, Колір: {item.color}
                  </p>
                  <p className="text-gray-500">Ціна: {item.price} грн</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-200 p-2 rounded"
                  onClick={() => updateQuantity(index, -1)}
                  disabled={cartItems[index].quantity === 1} // Деактивація, якщо кількість = 1
                >
                  <AiOutlineMinus />
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button
                  className="bg-gray-200 p-2 rounded"
                  onClick={() => updateQuantity(index, 1)}
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <button
                className="bg-red-500 text-white p-2 rounded ml-4"
                onClick={() => removeItem(index)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <div className="mt-8 flex justify-between">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded"
              onClick={handleContinueShopping}
            >
              Продовжити покупки
            </button>
            <div>
              <p className="text-xl font-bold mb-4">Загальна сума: {totalPrice} грн</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-4"
                onClick={clearCart}
              >
                Очистити кошик
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleCheckout}
              >
                Оформити замовлення
              </button>
            </div>
          </div>           
        </>
      )}
    </div>
  );
};

export default CartPage;





