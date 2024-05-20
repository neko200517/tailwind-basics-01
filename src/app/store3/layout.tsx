import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: '創作',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='font-store3'>{children}</body>
    </html>
  );
}
