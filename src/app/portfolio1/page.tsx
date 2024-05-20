import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/portfolio1/logo.svg';
import IconInstagram from '@/../public/portfolio1/icon-instagram.png';
import Works1 from '@/../public/portfolio1/works1.jpg';
import Works2 from '@/../public/portfolio1/works2.jpg';
import Works3 from '@/../public/portfolio1/works3.jpg';
import Works4 from '@/../public/portfolio1/works4.jpg';
import Works5 from '@/../public/portfolio1/works5.jpg';
import Works6 from '@/../public/portfolio1/works6.jpg';

const news = [
  {
    date: '2020.XX.XX',
    title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。',
  },
  {
    date: '2020.XX.XX',
    title: 'ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。',
  },
  {
    date: '2020.XX.XX',
    title:
      '【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    date: '2020.XX.XX',
    title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。',
  },
  {
    date: '2020.XX.XX',
    title:
      '【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト',
  },
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
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link href='#works'>Works</Link>
            </li>
            <li>
              <Link href='#news'>News</Link>
            </li>
            <li>
              <Link href='#contact'>Contact</Link>
            </li>
            <li className='w-5 self-center'>
              <Link href='https://instagram.com'>
                <Image src={IconInstagram} alt='instagram'></Image>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* mainvisual */}
      <div className='h-[420px]'>
        <div className='h-full bg-center bg-cover bg-portfolio1-sp md:bg-portfolio1-pc' />
      </div>

      {/* container */}
      <div className='max-w-[960px] mx-auto mt-20 px-6 mb-24'>
        <main>
          {/* about */}
          <section id='about' className='mb-36'>
            <h1 className='text-2xl font-bold text-center mb-20'>About</h1>

            <div className='flex flex-col gap-8'>
              <div>
                <p>Xxxxx Ashley</p>
              </div>
              <div>
                <p>
                  2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo
                  106-0031 Japan
                </p>
                <p>tel: 000-0000-0000</p>
                <p>url: www.xxxxxx.jp</p>
                <p>mail: xxx@xxxxxx.jp</p>
              </div>
              <div>
                <p>
                  プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
          </section>

          {/* works */}
          <section id='works' className='mb-36'>
            <h1 className='text-2xl font-bold text-center mb-20'>Works</h1>

            <ul className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <li>
                <Image src={Works1} alt='work1'></Image>
              </li>
              <li>
                <Image src={Works2} alt='work2'></Image>
              </li>
              <li>
                <Image src={Works3} alt='work3'></Image>
              </li>
              <li>
                <Image src={Works4} alt='work4'></Image>
              </li>
              <li>
                <Image src={Works5} alt='work5'></Image>
              </li>
              <li>
                <Image src={Works6} alt='work6'></Image>
              </li>
            </ul>
          </section>

          {/* news */}
          <section id='news' className='mb-36'>
            <h1 className='text-2xl font-bold text-center mb-20'>News</h1>

            <ul className='border-t'>
              {news.map((item, i) => (
                <li key={i} className='flex border-b p-4 flex-col md:flex-row'>
                  <span className='w-[150px]'>{item.date}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* contact */}
          <section id='contact'>
            <h1 className='text-2xl font-bold text-center mb-20'>Contact</h1>

            <form>
              <div className='flex flex-col gap-2 mb-8'>
                {/* form_name */}
                <div className='flex flex-col md:flex-row'>
                  <label htmlFor='name' className='w-[150px]'>
                    NAME
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='border border-gray-400 flex-grow p-2'
                  />
                </div>

                {/* form_email */}
                <div className='flex flex-col md:flex-row'>
                  <label htmlFor='email' className='w-[150px]'>
                    E-mail
                  </label>
                  <input
                    type='text'
                    id='email'
                    className='border border-gray-400 flex-grow p-2'
                  />
                </div>

                {/* form_message */}
                <div className='flex flex-col md:flex-row'>
                  <label htmlFor='message' className='w-[150px]'>
                    MESSAGE
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    rows={5}
                    className='border border-gray-400 flex-grow p-2'
                  ></textarea>
                </div>
              </div>

              {/* form_button */}
              <div className='text-center'>
                <button className='bg-gray-800 text-white px-20 py-4'>
                  送信
                </button>
              </div>
            </form>
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
