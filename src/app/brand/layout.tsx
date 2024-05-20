import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'Wooden Jewelry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='font-brand text-[#2d2d2d]'>{children}</body>
    </html>
  );
}
