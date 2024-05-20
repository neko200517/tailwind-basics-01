import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'My Works',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='text-[#24292e]'>{children}</body>
    </html>
  );
}
