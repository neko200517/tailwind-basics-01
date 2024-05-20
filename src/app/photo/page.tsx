import Image from 'next/image';
import Link from 'next/link';
import MainVisual from '@/../public/photo/mainvisual.jpg';
import Detail from '@/../public/photo/detail.jpg';

export default function Home() {
  return (
    <div className='bg-blue-50 text-gray-800'>
      {/* header */}
      <header className='pt-16 pb-2 mx-2'>
        <div className='max-w-[1000px] mx-auto'>
          <h1 className='text-2xl'>PHOTO BOOK</h1>
        </div>
      </header>

      <main className='flex justify-center'>
        <div className='flex flex-col gap-16'>
          {/* 画像 */}
          <div id='mainvisual' className='px-2 lg:px-0'>
            <Image
              className='max-h-[400px]'
              src={MainVisual}
              alt='mainvisual'
            />
          </div>

          {/* index */}
          <section id='index' className='bg-white p-8'>
            <div className='flex flex-col gap-4 max-w-[580px] mx-auto'>
              <h2 className='text-xl font-bold'>INDEX</h2>
              <ol className='list-decimal flex flex-col gap-6 text-sm pl-4'>
                <li>
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li>
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li>
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li>
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
                <li>
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
                </li>
              </ol>
            </div>
          </section>

          {/* detail */}
          <section id='detail' className='mx-8 lg:mx-0'>
            <div className='flex flex-col gap-4 max-w-[580px] mx-auto'>
              <h2 className='text-xl font-bold'>DETAIL</h2>
              <div className='flex gap-8 lg:gap-14 flex-wrap lg:flex-nowrap'>
                <div className='lg:w-[50%]'>
                  <Image
                    src={Detail}
                    alt='detail'
                    className='lg:max-h-[270px]'
                  />
                </div>
                <div className='lg:w-[50%]'>
                  <div className='flex flex-col gap-5 text-sm'>
                    <h2 className='font-bold text-[1.125rem]'>
                      タイトルタイトルタイトル
                    </h2>
                    <div className='border-t border-b py-4'>
                      <dl className='flex'>
                        <dt className='w-[20%] lg:w-[30%]'>著者</dt>
                        <dd>タイトルタイトルタイトル</dd>
                      </dl>
                      <dl className='flex'>
                        <dt className='w-[20%] lg:w-[30%]'>出版社</dt>
                        <dd>タイトルタイトルタイトル</dd>
                      </dl>
                      <dl className='flex'>
                        <dt className='w-[20%] lg:w-[30%]'>発行年</dt>
                        <dd>タイトルタイトルタイトル</dd>
                      </dl>
                    </div>
                    <p>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                    <Link href='#' className='underline'>
                      オンラインストアで見る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* footer */}
      <footer className='pb-3 mt-28 mx-8 lg:mx-0'>
        <div className='max-w-[580px] mx-auto'>
          <p className='text-xs'>© {new Date().getFullYear()} PHOTO BOOK</p>
        </div>
      </footer>
    </div>
  );
}
