import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/store3/logo.svg';
import Products1 from '@/../public/store3/products1.jpg';
import Products2 from '@/../public/store3/products2.jpg';

export default function Home() {
  return (
    <div className='bg-stone-200'>
      {/* header */}
      <header className='bg-store3-sp lg:bg-store3-pc w-full h-screen bg-cover relative pt-20 px-20 mb-[150px]'>
        {/* nav */}
        <nav className='flex flex-row-reverse gap-14'>
          <div className='w-[45px]'>
            <Image src={Logo} alt='logo' />
          </div>
          <ul className='vertical-rl text-white flex flex-col gap-4'>
            <li>
              <Link href='#news'>お知らせ</Link>
            </li>
            <li>
              <Link href='#products'>商品のご紹介</Link>
            </li>
            <li>
              <Link href='#map'>店舗のご案内</Link>
            </li>
          </ul>
        </nav>

        <div className='bg-stone-700 p-2 vertical-rl absolute left-14 bottom-10'>
          <p className='border border-white px-4 py-8 text-white'>
            オンラインストアを見る
          </p>
        </div>
      </header>

      <main className=''>
        {/* news */}
        <section id='news' className='flex flex-row-reverse mb-[150px] wrapper'>
          <div className='vertical-lr ml-20'>
            <h1 className='text-4xl'>お知らせ</h1>
            <p>News</p>
          </div>

          <ul className='flex flex-row-reverse mt-20'>
            <li className='border-l border-r border-black vertical-rl py-4 px-8'>
              <p>2021.01.01</p>
              <p>タイトルタイトルタイトルタイトル</p>
            </li>
            <li className='border-l border-black vertical-rl py-4 px-8'>
              <p>2021.01.02</p>
              <p>タイトルタイトルタイトルタイトル</p>
            </li>
            <li className='border-l border-black vertical-rl py-4 px-8'>
              <p>2021.01.03</p>
              <p>タイトルタイトルタイトルタイトル</p>
            </li>
            <li className='border-l border-black vertical-rl py-4 px-8'>
              <p>2021.01.04</p>
              <p>タイトルタイトルタイトルタイトル</p>
            </li>
            <li className='border-l border-black vertical-rl py-4 px-8'>
              <p>2021.01.05</p>
              <p>タイトルタイトルタイトルタイトル</p>
            </li>
          </ul>
        </section>

        {/* CreateNewValues */}
        <section id='products' className='wrapper mb-[150px]'>
          <div className='flex flex-row-reverse mb-40'>
            <div className='flex flex-col items-center ml-10'>
              <h1 className='vertical-rl mb-6 text-4xl'>新しい価値の創造</h1>
              <p className='vertical-rl'>Create New Values</p>
            </div>

            <div className='w-[650px] mt-[120px] relative'>
              <Image src={Products1} alt='products1' />

              <div className='absolute bg-[rgba(255,255,0,0.7)] text-white -left-5 -bottom-5 px-[100px] py-10'>
                <p>テキストテキスト</p>
                <p>テキストテキスト</p>
              </div>
            </div>
          </div>

          {/* science&Tecnology */}
          <div className='flex flex-row'>
            <div className='flex flex-col items-center mr-10'>
              <h1 className='vertical-rl mb-6 text-4xl'>科学と技術の調和</h1>
              <p className='vertical-rl'>Science & Technology</p>
            </div>

            <div className='w-[650px] mt-[120px] relative'>
              <Image src={Products2} alt='products2' />

              <div className='absolute bg-[rgba(150,50,0,0.7)] text-white -right-5 -bottom-5 px-[100px] py-10'>
                <p>テキストテキスト</p>
                <p>テキストテキスト</p>
              </div>
            </div>
          </div>
        </section>

        {/* map */}
        <section id='map' className='bg-blue-500 h-[450px] w-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12966.288834568328!2d139.72335112012576!3d35.66291009509196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9d3c1c9187%3A0x48f9c248e9169cfe!2z44CSMTA2LTAwMzIg5p2x5Lqs6YO95riv5Yy65YWt5pys5pyo!5e0!3m2!1sja!2sjp!4v1716120757053!5m2!1sja!2sjp'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-full'
          ></iframe>
        </section>
      </main>

      {/* footer */}
      <footer className='w-full bg-black text-white pt-20 px-20 relative'>
        <div className='flex flex-row-reverse gap-16'>
          <div className='w-[45px]'>
            <Image src={Logo} alt='logo' />
          </div>
          <p className='vertical-rl'>
            〒１０６-００３２　東京都港区六本木５丁目×××××
            <br />
            電話：０３-ＸＸＸＸ-ＸＸＸＸ
          </p>
          <nav>
            <ul className='vertical-rl flex flex-col gap-4'>
              <li>
                <Link href='#news'>お知らせ</Link>
              </li>
              <li>
                <Link href='#products'>商品のご紹介</Link>
              </li>
              <li>
                <Link href='#map'>店舗のご案内</Link>
              </li>
            </ul>
          </nav>
        </div>

        <ul className='absolute left-10 top-20'>
          <li className='vertical-rl border-b border-white pb-2'>
            <Link href='/'>オンラインストアを見る</Link>
          </li>
          <li className='vertical-rl pt-2'>
            <Link href='/'>お問い合わせ</Link>
          </li>
        </ul>

        <p className='text-center text-xs py-10'>© SOUSAKU</p>
      </footer>
    </div>
  );
}
