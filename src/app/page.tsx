import Image from 'next/image';
import Link from 'next/link';
import Corporate2 from '@/../public/corporate2.webp';
import ECMenu from '@/../public/ec.webp';
import Store1 from '@/../public/store1.webp';
import Portfolio1 from '@/../public/portfolio1.webp';
import Profile from '@/../public/profile.webp';
import Photo from '@/../public/photo.webp';
import Photo2 from '@/../public/photo2.webp';
import Recipe from '@/../public/recipe.webp';
import Recipe2 from '@/../public/recipe2.webp';
import Brand from '@/../public/brand.webp';
import Store3 from '@/../public/store3.webp';

import Logo from '@/../public/portfolio1/logo.svg';
import GitHubMark from '@/../public/github-mark.svg';
import Obsidian from '@/../public/obsidian.svg';

const works = [
  { href: '/profile', label: 'Go to profile', image: Profile },
  { href: '/photo', label: 'Go to photo', image: Photo },
  { href: '/photo2', label: 'Go to photo2', image: Photo2 },
  { href: '/recipe', label: 'Go to recipe', image: Recipe },
  { href: '/recipe2', label: 'Go to recipe2', image: Recipe2 },
  { href: '/brand', label: 'Go to brand', image: Brand },
  { href: '/portfolio1', label: 'Go to portfolio1', image: Portfolio1 },
  { href: '/ec', label: 'Go to ec', image: ECMenu },
  { href: '/store1', label: 'Go to store1', image: Store1 },
  { href: '/corporate2', label: 'Go to Corporate2', image: Corporate2 },
  { href: '/store3', label: 'Go to store3', image: Store3 },
];

export default function Home() {
  return (
    <>
      {/* header */}
      <header className='max-w-[960px] mx-auto my-6 md:my-[120px] px-8'>
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
          {/* img */}
          <div className='w-[120px] mb-2 md:mb-0'>
            <Image src={Logo} alt='logo' className='w-full align-bottom' />
          </div>

          {/* menu */}
          <ul className='flex gap-8'>
            <li>
              <Link href='#works'>Study</Link>
            </li>
            <li className='w-5 self-center'>
              <Link href='https://github.com/neko200517'>
                <Image src={GitHubMark} alt='github'></Image>
              </Link>
            </li>
            <li className='w-5 self-center'>
              <Link href='https://github.com/neko200517/obsidian/tree/main/Notes/develop'>
                <Image src={Obsidian} alt='obsidian'></Image>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* mainvisual */}
      <div className='h-[420px]'>
        <div className='h-full bg-center bg-cover bg-main-sp md:bg-main-pc' />
      </div>

      {/* container */}
      <div className='max-w-[960px] mx-auto mt-20 px-6 mb-24'>
        <main>
          {/* works */}
          <section id='works' className='mb-36'>
            <div className='text-center mb-20'>
              <h1 className='text-2xl font-bold text-center mb-2'>Study</h1>
              <p className='text-center'>tailwindの習作</p>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {works.map((work) => (
                <li key={work.label}>
                  <Link href={work.href}>
                    <Image src={work.image} alt={work.label}></Image>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      {/* footer */}
      <footer className='bg-gray-800 text-center p-2'>
        <p className='text-white text-xs'>
          © {new Date().getFullYear()} My Works
        </p>
      </footer>
    </>
  );
}
