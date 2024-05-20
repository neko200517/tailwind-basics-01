import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/brand/logo.svg';
import MainVisual from '@/../public/brand/mainvisual.jpg';
import Concept from '@/../public/brand/concept.jpg';
import Work from '@/../public/brand/work.jpg';

export default function Home() {
  return (
    // container
    <>
      {/* main */}
      <main className='mb-20'>
        {/* mainvisual */}
        <div id='mainvisual' className='pt-0 md:pt-12 md:px-12'>
          <Image
            src={MainVisual}
            alt='mainvisual'
            className='object-cover h-[425px] md:h-full'
          />
        </div>

        {/* hader */}
        <header className='flex gap-[50px] px-4 pt-5 md:px-12 md:pt-8 pb-14 w-full text-sm'>
          <div className='self-center'>
            <Image src={Logo} alt='logo' className='w-[110px]' />
          </div>
          <div className='flex gap-6'>
            <Link href='#concept'>Concept</Link>
            <Link href='#work'>Work</Link>
            <Link href='mailto:xxxx@gmail.com'>Contact</Link>
          </div>
        </header>

        {/* concept */}
        <div
          id='concept'
          className='flex justify-center px-4 mb-16 flex-col md:flex-row'
        >
          <div className='w-full md:w-[480px]'>
            <Image src={Concept} alt='concept' />
          </div>
          <div className='w-full md:w-[480px] self-center px-0 md:px-16'>
            <h2 className='text-2xl leading-10 pb-1 pt-2 md:pt-0'>
              私たちの考えるジュエリーとは
            </h2>
            <p className='pb-8'>Concept</p>
            <p className='leading-6'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>

        {/* work */}
        <div
          id='work'
          className='flex justify-center px-4 mb-16 flex-col md:flex-row-reverse'
        >
          <div className='w-full md:w-[480px]'>
            <Image src={Work} alt='work' />
          </div>
          <div className='w-full md:w-[480px] self-center px-0 md:px-16'>
            <h2 className='text-2xl leading-10 pb-1 pt-2 md:pt-0'>
              ハンドメイドにこだわる理由
            </h2>
            <p className='pb-8'>Work</p>
            <p className='leading-6'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              <br />
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className='flex justify-center px-4 py-5 text-sm'>
        <div className='flex justify-between w-full md:w-[960px]'>
          <Image src={Logo} alt='logo' className='w-[110px]' />
          <p>© {new Date().getFullYear()} Wooden Jewelry</p>
        </div>
      </footer>
    </>
  );
}
