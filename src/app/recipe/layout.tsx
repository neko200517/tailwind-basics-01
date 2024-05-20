import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'Recipe Diary',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='font-recipe text-[#24292e]'>{children}</body>
    </html>
  );
}
