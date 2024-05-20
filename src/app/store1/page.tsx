import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/store1/logo.svg';
import MainVisual from '@/../public/store1/mainvisual.jpg';
import MagazineArchive from '@/../public/store1/magazine-archive.jpg';
import MagazineNew from '@/../public/store1/magazine-new.jpg';
import Fashion from '@/../public/store1/fashion.jpg';
import Antique from '@/../public/store1/antique.jpg';
import Catalog from '@/../public/store1/catalog.jpg';

const Overlay = () => {
  return (
    <div className='absolute w-full h-full hover:bg-white hover:bg-opacity-30 z-10' />
  );
};

const LinkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='hover:opacity-70'>
      <Link href='/' className='border border-black px-8 py-3 text-sm'>
        {children}
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* header */}
      <header>
        {/* logo */}
        <Link href='/' className='absolute right-8 top-8'>
          <Image src={Logo} alt='logo' />
        </Link>

        {/* mainvisual */}
        <div className='h-screen mb-16'>
          <Image
            src={MainVisual}
            alt='mainviaual'
            className='object-cover h-full w-full'
          />
        </div>
      </header>

      <main>
        {/* magagin */}
        <section>
          {/* magazine-title */}
          <div className='text-center max-w-[600px] mx-auto mb-10 px-6'>
            <h1 className='text-2xl font-bold mb-4'>
              A special, long article in a newspaper or magazine
            </h1>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>

          {/* magazine-list */}
          <div className='flex gap-6 max-w-[1100px] mx-auto px-6 md2:px-12 mb-20 flex-col md2:flex-row'>
            {/* archive */}
            <Link
              href='/'
              className='flex justify-center items-center relative'
            >
              <div className='absolute bg-black/60 w-[260px] max-w-full py-3 px-8 text-white text-center'>
                <h2 className='font-bold'>Archive</h2>
                <p>テキストテキストテキストテキストテキストテキスト</p>
              </div>
              <Image src={MagazineArchive} alt='magazine-arhive' />
              <Overlay />
            </Link>

            {/* new */}
            <Link
              href='/'
              className='flex justify-center items-center relative'
            >
              <div className='absolute bg-black/60 w-[260px] max-w-full py-3 px-8 text-white text-center'>
                <h2 className='font-bold'>New</h2>
                <p>テキストテキストテキストテキストテキストテキスト</p>
              </div>
              <Image src={MagazineNew} alt='magazine-new' />
              <Overlay />
            </Link>
          </div>
        </section>

        {/* fashion & style */}
        <section className='flex justify-center h-[500px] mb-20'>
          <div className='absolute max-w-[600px] text-center pt-10 px-8'>
            <h1 className='text-2xl font-bold mb-4'>Fashion & Style</h1>
            <p className='mb-10'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <LinkButton>Read More</LinkButton>
          </div>
          <Image
            src={Fashion}
            alt='fashion'
            className='h-full w-full object-cover'
          />
        </section>

        {/* catalog & antique */}
        <section className='bg-gray-50 px-6 py-8 md2:px-12 md2:py-16'>
          {/* wrapper */}
          <div className='max-w-[1100px] mx-auto'>
            {/* catalog */}
            <div className='flex flex-col gap-10 mb-12 md2:flex-row md2:mb-24'>
              <div className='w-full md2:w-1/2'>
                <Image src={Catalog} alt='catalog' />
              </div>
              <div className='w-full md2:w-1/2 self-center'>
                <h2 className='text-center text-2xl font-bold mb-10'>
                  Catalog
                </h2>
                <ul className='flex flex-col gap-8'>
                  <li>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </li>
                  <li>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </li>
                  <li>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </li>
                </ul>
              </div>
            </div>

            {/* antique */}
            <div className='flex flex-col-reverse gap-20 md2:gap-10 md2:flex-row-reverse'>
              <div className='w-full md2:w-1/2'>
                <Image src={Antique} alt='antique' />
              </div>
              <div className='w-full md2:w-1/2 self-center'>
                <h2 className='text-center text-2xl font-bold mb-10'>
                  Antique
                </h2>
                <ul className='flex flex-col gap-8 mb-16'>
                  <li>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </li>
                  <li>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </li>
                </ul>
                <div className='text-center'>
                  <LinkButton>Read More</LinkButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer>
        {/* footer1 */}
        <div className='bg-[#333] pt-10 pb-16 md2:py-24 px-12 text-white'>
          <div className='max-w-[1100px] mx-auto grid grid-cols-1 gap-8 md2:gap-0 md2:grid-cols-3'>
            <Link href='/' className='self-center mx-auto md2:mx-0'>
              <Image src={Logo} alt='logo' />
            </Link>

            <div>
              <h2 className='text-xl font-bold mb-4'>タイトル</h2>
              <ul className='list-dash text-sm'>
                <li>テキストテキストテキスト</li>
                <li>テキストテキストテキスト</li>
                <li>テキストテキストテキスト</li>
                <li>テキストテキストテキスト</li>
                <li>テキストテキストテキスト</li>
              </ul>
            </div>

            <div>
              <h2 className='text-xl font-bold mb-4'>
                タイトルタイトルタイトル
              </h2>
              <p className='text-sm'>
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>

        {/* footer2 */}
        <div className='text-center text-sm py-6'>
          <p>© Mag88</p>
        </div>
      </footer>
    </>
  );
}
