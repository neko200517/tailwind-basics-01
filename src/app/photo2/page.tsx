import Image from 'next/image';
import Link from 'next/link';
import MainVisual from '@/../public/photo2/mainvisual.jpg';
import Photo1 from '@/../public/photo2/photo1.jpg';
import Photo2 from '@/../public/photo2/photo2.jpg';
import Photo3 from '@/../public/photo2/photo3.jpg';
import Photo4 from '@/../public/photo2/photo4.jpg';

export default function Home() {
  return (
    <div className='text-gray-800 max-w-[1000px] mx-auto mt-14'>
      {/* header */}
      <header className='mb-2 ml-2 lg:ml-0'>
        <h1 className='text-2xl'>PHOTO BOOK 2</h1>
      </header>

      <main className='flex flex-col gap-16 mb-16'>
        {/* ヒーロー画像 */}
        <div id='mainvisual' className=''>
          <Image className='' src={MainVisual} alt='mainvisual' />
        </div>

        {/* Index */}
        <section id='index' className='flex justify-center'>
          <div className='bg-gray-100 py-10 px-6 mx-5 lg:mx-0 lg:py-16 lg:px-14 w-[800px]'>
            <h2 className='text-xl font-bold text-center mb-8'>INDEX</h2>
            <div className='border border-black p-8 flex justify-center'>
              <ol className='flex flex-col gap-4 list-decimal text-sm'>
                <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
                <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
                <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
                <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
                <li>タイトルタイトルタイトルタイトルタイトルタイトル</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section id='photos' className='flex justify-center'>
          <div className='w-[800px] flex justify-center mx-5 lg:mx-0'>
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <li>
                <Image src={Photo1} alt='photo1' />
              </li>
              <li>
                <Image src={Photo2} alt='photo2' />
              </li>
              <li>
                <Image src={Photo3} alt='photo3' />
              </li>
              <li>
                <Image src={Photo4} alt='photo4' />
              </li>
            </ul>
          </div>
        </section>

        {/* Detail */}
        <section id='detail' className='flex justify-center'>
          <div className='flex flex-col mx-5 lg:mx-0 p-8 lg:p-16 bg-gray-100 w-[800px] gap-8'>
            <h3 className='text-center text-xl font-bold'>DETAIL</h3>
            <div className='flex lg:justify-center text-sm flex-wrap lg:flex-nowrap'>
              <div className='flex flex-col gap-2 w-full border-b-[1px] border-black pb-8 lg:pb-0 mb-8 lg:mb-0 lg:w-[40%] lg:border-r-[1px] lg:border-b-0'>
                <div>
                  <h3 className='font-bold'>著者：</h3>
                  <p className=''>タイトルタイトルタイトル</p>
                </div>
                <div>
                  <h3 className='font-bold'>出版社：</h3>
                  <p className=''>タイトルタイトルタイトル</p>
                </div>
                <div>
                  <h3 className='font-bold'>発行年：</h3>
                  <p className=''>2021年1月1日</p>
                </div>
              </div>
              <div className='flex flex-col gap-4 lg:pl-10'>
                <p>テキストテキストテキストテキストテキストテキストテキスト</p>
                <p>テキストテキストテキストテキストテキストテキストテキスト</p>
                <Link href='#' className='underline cursor-pointer'>
                  オンラインストアで見る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className='text-center py-2'>
        <p className='text-gray-500 text-xs'>
          © {new Date().getFullYear()} PHOTO BOOK 2
        </p>
      </footer>
    </div>
  );
}
