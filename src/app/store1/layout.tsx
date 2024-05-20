import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'Mag88',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='font-store1 text-[#2a2a2a] text-sm'>{children}</body>
    </html>
  );
}
