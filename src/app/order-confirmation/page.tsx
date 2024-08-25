'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

const OrderConfirmationPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('+38');
  const [phoneError, setPhoneError] = useState<string>('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
    calculateTotalPrice(storedCart);
  }, []);

  const calculateTotalPrice = (items: CartItem[]) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleConfirmOrder = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Неправильний номер телефону. Будь ласка, введіть правильний номер.');
      toast.error('Неправильний номер телефону.');
      return;
    }

    setPhoneError('');
    setIsModalOpen(true);
    localStorage.removeItem('cart');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push('/'); // Перенаправлення на головну сторінку
  };

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\+?\d{12}$/; // Приклад: +380123456789
    return phoneRegex.test(number);
  };

  return (
    <div className="flex">
      {/* Ліва колонка */}
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Оформлення замовлення</h2>
        <label htmlFor="phone" className="font-bold mb-2 block">
          Телефон
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Номер телефона"
          className="border p-2 w-full mb-4"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {phoneError && <p className="text-red-500 mb-4">{phoneError}</p>}
      </div>

      {/* Права колонка */}
      <div className="w-1/2 p-8 bg-gray-100">
        <h3 className="text-2xl font-bold mb-4">Разом:</h3>
        <p className="mb-2">Товар на суму: {totalPrice} грн</p>
        <p className="mb-2">Вартість доставки за тарифами перевізника</p>
        <p className="mb-4">До сплати: {totalPrice} грн</p>
        <button
          onClick={handleConfirmOrder}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Підтверджую замовлення
        </button>
      </div>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/2 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Замовлення успішно відправлено!</h2>
            <p className="mb-4">Чекайте на дзвінок від менеджера. Дякуємо за замовлення!</p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;



