import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'Web Entertainment Design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className='font-corporate2 text-black'>{children}</body>
    </html>
  );
}
