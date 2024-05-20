import Image from 'next/image';
import Link from 'next/link';
import MainVisual from '@/../public/recipe/mainvisual.jpg';
import Recipe1 from '@/../public/recipe/recipe1.jpg';
import Recipe2 from '@/../public/recipe/recipe2.jpg';
import Recipe3 from '@/../public/recipe/recipe3.jpg';

export default function Home() {
  return (
    // container
    <div className=''>
      {/* main */}
      <main className=''>
        {/* hero */}
        <div>
          <Image
            src={MainVisual}
            alt='mainvisual'
            className='h-screen w-screen object-cover'
          />
        </div>

        {/* text */}
        <div className='text-center my-20 mx-4 md1:mx-0'>
          <h2 className='text-3xl font-bold mb-4'>Recipe Diary</h2>
          <p>日々の料理レシピをまとめています。</p>
          <p>
            和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、
          </p>
          <p>みなさんの献立にお役立てくださいね！</p>
        </div>

        {/* recipes */}
        <div className='mb-14 grid grid-cols-1 md1:grid-cols-3'>
          <Image
            src={Recipe1}
            alt='recipe1'
            className='w-full max-h-[500px] object-cover'
          />
          <Image
            src={Recipe2}
            alt='recipe2'
            className='w-full max-h-[500px] object-cover'
          />
          <Image
            src={Recipe3}
            alt='recipe3'
            className='w-full max-h-[500px] object-cover'
          />
        </div>

        {/* button */}
        <div className='flex justify-center mb-24 mx-4 md1:mx-0'>
          <button className='border border-black px-14 py-4 text-sm'>
            レシピ一覧を見る
          </button>
        </div>
      </main>

      {/* footer */}
      <footer className='mb-5 text-center text-xs'>
        <ul className='flex justify-center gap-4 mb-4'>
          <li>
            <Link href='#' className='underline'>
              Instagram
            </Link>
          </li>
          <li>
            <Link href='#' className='underline'>
              Twitter
            </Link>
          </li>
          <li>
            <Link href='#' className='underline'>
              Facebook
            </Link>
          </li>
        </ul>
        <p>© {new Date().getFullYear()} Recipe Diary</p>
      </footer>
    </div>
  );
}
