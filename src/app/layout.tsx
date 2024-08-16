import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Магазин одягу',
  description: 'Легінси та шкарпетки, продаж одягу',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Магазин одягу</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>     
      </body>
    </html>
  );
}

