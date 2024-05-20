import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'Profile',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className=''>{children}</body>
    </html>
  );
}
