import { NextResponse } from 'next/server';

export async function GET() {
  // Реалізуйте тут ваш спосіб отримання даних
  const products = [
    { id: '1', name: 'Легінси', image: '/images/leginsy.jpg', price: '200' },
    { id: '2', name: 'Лосини', image: '/images/losiny.jpg', price: '300' },
    { id: '3', name: 'Шкарпетки', image: '/images/shkarpetky.jpg', price: '100' },
  ];
  
  return NextResponse.json(products);
}
