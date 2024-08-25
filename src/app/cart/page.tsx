// // app/cart/page.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   color: string;
//   quantity: number;
// }

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCartItems(storedCart);
//   }, []);

//   const handleRemoveItem = (id: string, size: string, color: string) => {
//     const updatedCart = cartItems.filter(item =>
//       !(item.id === id && item.size === size && item.color === color)
//     );

//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handlePlaceOrder = () => {
//     router.push('/order-confirmation');
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Ваш кошик</h1>
//       {cartItems.length === 0 ? (
//         <p>Кошик порожній</p>
//       ) : (
//         <div>
//           {cartItems.map(item => (
//             <div key={`${item.id}-${item.size}-${item.color}`} className="border p-4 mb-4 flex items-center">
//               <div className="flex-grow">
//                 <h2 className="text-xl font-bold">{item.name}</h2>
//                 <p>Розмір: {item.size}</p>
//                 <p>Колір: {item.color}</p>
//                 <p>Ціна: {item.price} грн</p>
//                 <p>Кількість: {item.quantity}</p>
//               </div>
//               <button onClick={() => handleRemoveItem(item.id, item.size, item.color)} className="bg-red-500 text-white px-2 py-1 rounded">
//                 Видалити
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <h2 className="text-xl font-bold">Разом: {calculateTotal()} грн</h2>
//             <button onClick={handlePlaceOrder} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//               Оформити замовлення
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// 'use client';

// import { useState, useEffect } from 'react';
// import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';
// import Image from 'next/image';
// import { toast } from 'react-toastify';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   color: string;
//   quantity: number;
//   imageUrl: string; // Додано для зображення товару
// }

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCartItems(storedCart);
//   }, []);

//   const updateQuantity = (index: number, quantity: number) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity + quantity > 0) {
//       updatedCart[index].quantity += quantity;
//       setCartItems(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//       toast.warning('Кількість не може бути меншою за 1');
//     }
//   };

//   const removeItem = (index: number) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     toast.success('Товар видалено з кошика');
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-8">Ваш кошик</h1>
//       {cartItems.length === 0 ? (
//         <p>Кошик порожній</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between mb-4 p-4 border rounded-lg"
//           >
//             <div className="flex items-center">
//               <Image
//                 src={item.imageUrl}
//                 alt={item.name}
//                 width={80} // Встановлено невеликий розмір
//                 height={80}
//                 className="rounded"
//               />
//               <div className="ml-4">
//                 <h2 className="font-bold text-xl">{item.name}</h2>
//                 <p className="text-gray-500">
//                   Розмір: {item.size}, Колір: {item.color}
//                 </p>
//                 <p className="text-gray-500">Ціна: {item.price} грн</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button
//                 className="bg-gray-200 p-2 rounded"
//                 onClick={() => updateQuantity(index, -1)}
//               >
//                 <AiOutlineMinus />
//               </button>
//               <span className="mx-4">{item.quantity}</span>
//               <button
//                 className="bg-gray-200 p-2 rounded"
//                 onClick={() => updateQuantity(index, 1)}
//               >
//                 <AiOutlinePlus />
//               </button>
//             </div>
//             <button
//               className="bg-red-500 text-white p-2 rounded ml-4"
//               onClick={() => removeItem(index)}
//             >
//               <AiOutlineDelete />
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartPage;

// 'use client';

// import { useState, useEffect } from 'react';
// import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';
// import Image from 'next/image';
// import { toast } from 'react-toastify';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   color: string;
//   quantity: number;
//   imageUrl: string; // Додано для зображення товару
// }

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCartItems(storedCart);
//   }, []);

//   const updateQuantity = (index: number, quantity: number) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity + quantity > 0) {
//       updatedCart[index].quantity += quantity;
//       setCartItems(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//       // Якщо кількість досягає 0, видаляємо товар з кошика
//       removeItem(index);
//       toast.info('Товар видалено з кошика');
//     }
//   };

//   const removeItem = (index: number) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     if (updatedCart.length === 0) {
//       toast.info('Кошик порожній');
//     } else {
//       toast.success('Товар видалено з кошика');
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-8">Ваш кошик</h1>
//       {cartItems.length === 0 ? (
//         <p>Кошик порожній</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between mb-4 p-4 border rounded-lg"
//           >
//             <div className="flex items-center">
//               <Image
//                 src={item.imageUrl}
//                 alt={item.name}
//                 width={80} // Встановлено невеликий розмір
//                 height={80}
//                 className="rounded"
//               />
//               <div className="ml-4">
//                 <h2 className="font-bold text-xl">{item.name}</h2>
//                 <p className="text-gray-500">
//                   Розмір: {item.size}, Колір: {item.color}
//                 </p>
//                 <p className="text-gray-500">Ціна: {item.price} грн</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button
//                 className="bg-gray-200 p-2 rounded"
//                 onClick={() => updateQuantity(index, -1)}
//               >
//                 <AiOutlineMinus />
//               </button>
//               <span className="mx-4">{item.quantity}</span>
//               <button
//                 className="bg-gray-200 p-2 rounded"
//                 onClick={() => updateQuantity(index, 1)}
//               >
//                 <AiOutlinePlus />
//               </button>
//             </div>
//             <button
//               className="bg-red-500 text-white p-2 rounded ml-4"
//               onClick={() => removeItem(index)}
//             >
//               <AiOutlineDelete />
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartPage;

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
  imageUrl: string; // Додано для зображення товару
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (index: number, quantity: number) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity + quantity > 0) {
      updatedCart[index].quantity += quantity;
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // Якщо кількість досягає 0, видаляємо товар з кошика
      removeItem(index);
      toast.info('Товар видалено з кошика');
    }
  };

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    if (updatedCart.length === 0) {
      toast.info('Кошик порожній');
    } else {
      toast.success('Товар видалено з кошика');
    }
  };

  const handleCheckout = () => {
    router.push('/order-confirmation');
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
          <div className="mt-8 flex justify-end">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleCheckout}
            >
              Оформити замовлення
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;



