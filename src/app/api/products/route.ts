// import { NextResponse } from 'next/server';

// export async function GET() {
//   // Реалізуйте тут ваш спосіб отримання даних
//   const products = [
//     { id: '1', name: 'Легінси', image: '/images/leginsy.jpg', price: '200', category: 'leginsy' },
//     { id: '2', name: 'Лосини', image: '/images/losiny.jpg', price: '300', category: 'losiny' },
//     { id: '3', name: 'Легінси', image: '/images/leginsy.jpg', price: '100', category: 'leginsy' },
//   ];

//   console.log('Products:', products);
  
//   return NextResponse.json(products);
// }

import { NextResponse } from 'next/server';
import { leginsyProducts } from '../../../data/leginsy-products';
import { losinyProducts } from '../../../data/losiny-products';
import { shkarpetkyProducts } from '../../../data/shkarpetky-products';

export async function GET() {
  const products = [...leginsyProducts, ...losinyProducts, ...shkarpetkyProducts];
  console.log('Products:', products);
  
  return NextResponse.json(products);
}


