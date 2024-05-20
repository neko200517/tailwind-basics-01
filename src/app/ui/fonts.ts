import { Inter, Roboto, Crimson_Text } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const crimsonText = Crimson_Text({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
});
