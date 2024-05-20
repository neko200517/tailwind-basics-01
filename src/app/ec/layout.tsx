import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'TOTALLY',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='font-ec text-[#333] text-xs'>{children}</body>
    </html>
  );
}
