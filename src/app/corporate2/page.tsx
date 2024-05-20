import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/corporate2/logo.svg';
import About from '@/../public/corporate2/about.jpg';
import Business1 from '@/../public/corporate2/business1.jpg';
import Business2 from '@/../public/corporate2/business2.jpg';
import Business3 from '@/../public/corporate2/business3.jpg';
import Business4 from '@/../public/corporate2/business4.jpg';
import Company from '@/../public/corporate2/company.jpg';

const Header = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <>
      <h1 className='text-4xl mb-1 tracking-[0.4rem]'>{title}</h1>
      <h2 className='mb-6'>{subTitle}</h2>
      <div className='w-[40px] border-b border-body'></div>
    </>
  );
};

const BusinessItem = ({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) => {
  return (
    <div>
      <h3 className='font-bold mb-4'>- {title}</h3>
      <div className='flex justify-center'>
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className='bg-[#f0f0f0]'>
      {/* header */}
      <header className='mb-20 md3:mb-24'>
        {/* nav */}
        <div className='h-[80px] relative'>
          <div className='h-full flex px-8 md3:items-center flex-col md3:flex-row pt-4 md3:pt-2'>
            <div className='w-[100px] mr-10 mb-2'>
              <Image src={Logo} alt='logo' className='w-full' />
            </div>

            <nav>
              <ul className='flex gap-4 items-center'>
                <li>
                  <Link href='#news'>NEWS</Link>
                </li>
                <li>
                  <Link href='#about'>ABOUT</Link>
                </li>
                <li>
                  <Link href='#business'>BUSINESS</Link>
                </li>
                <li>
                  <Link href='#company'>COMPANY</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='bg-black text-white px-12 absolute right-0 top-0 hidden md3:block h-full'>
            <div className='flex justify-center items-center h-full w-full'>
              <Link href='#'>お問い合わせ</Link>
            </div>
          </div>
        </div>

        {/* smainvisual */}
        <div className='h-screen w-full bg-corporate2 bg-cover'></div>
      </header>

      <main>
        {/* news */}
        <section id='news' className='wrapper mb-20 md3:mb-24'>
          <div className='mb-10'>
            <Header title='NEWS' subTitle='ニュース' />
          </div>

          <div className='flex gap-8 flex-col md3:flex-row'>
            <div className='md3:border-r border-black w-1/3'>
              <div className='flex gap-4 mb-4'>
                <p>2021.01.01</p>
                <div className='bg-black text-white px-2'>NEWS</div>
              </div>
              <p>タイトルタイトルタイトルタイトル</p>
            </div>
            <div className='md3:border-r border-black w-1/3'>
              <div className='flex gap-4 mb-4'>
                <p>2021.01.01</p>
                <div className='bg-black text-white px-2'>NEWS</div>
              </div>
              <p>タイトルタイトルタイトルタイトル</p>
            </div>
            <div className='w-1/3'>
              <div className='flex gap-4 mb-4'>
                <p>2021.01.01</p>
                <div className='bg-black text-white px-2'>NEWS</div>
              </div>
              <p>タイトルタイトルタイトルタイトル</p>
            </div>
          </div>
        </section>

        {/* about */}
        <section
          id='about'
          className='flex mb-20 md3:mb-24 flex-col md3:flex-row'
        >
          <div className='h-[400px] w-full md3:w-[55%] mb-8 md3:mb-0'>
            <Image
              src={About}
              alt='about'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='md3:mt-[180px] w-full md3:w-[45%] px-4 md3:px-16'>
            <div className='mb-10'>
              <Header title='ABOUT' subTitle='私たちについて' />
            </div>

            <div className='leading-6'>
              <p>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
              </p>
              <p>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
              </p>
              <p>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        {/* business */}
        <section id='business' className='wrapper mb-20 md3:mb-24'>
          <div className='mb-10'>
            <Header title='BUSINESS' subTitle='事業内容' />
          </div>

          <div className='flex gap-14 max-w-[800px] mx-auto flex-col md3:flex-row'>
            <div className='md3:w-1/2 flex flex-col gap-12 mt-0 md3:mt-20'>
              <BusinessItem title='Web制作・マーケティング' image={Business1} />
              <BusinessItem
                title='インターネットメディア事業'
                image={Business2}
              />
            </div>

            <div className='md3:w-1/2 flex flex-col gap-12'>
              <BusinessItem
                title='プロモーション企画・制作'
                image={Business3}
              />
              <BusinessItem title='ソーシャル企画・運営' image={Business4} />
            </div>
          </div>
        </section>

        {/* company */}
        <section
          id='company'
          className='w-full relative mb-0 md3:mb-36 px-4 md3:px-0'
        >
          <div className='wrapper-no-padding'>
            <div className='md3:w-[55%] w-full bg-white px-12 py-20'>
              <div className='mb-10'>
                <Header title='COMPANY' subTitle='会社情報' />
              </div>
              <div className='leading-7'>
                <dl className='flex'>
                  <dt className='w-[5rem]'>会社名</dt>
                  <dd>ウェブエンターテイメントデザイン株式会社</dd>
                </dl>
                <dl className='flex'>
                  <dt className='w-[5rem]'>所在地</dt>
                  <dd>東京都渋谷区桜丘町99-9 West Building 3F</dd>
                </dl>
                <dl className='flex'>
                  <dt className='w-[5rem]'>代表</dt>
                  <dd>ＸＸＸＸＸＸ</dd>
                </dl>
                <dl className='flex'>
                  <dt className='w-[5rem]'>設立</dt>
                  <dd>2021年1月1日</dd>
                </dl>
                <dl className='flex'>
                  <dt className='w-[5rem]'>資本金</dt>
                  <dd>3,000,000円</dd>
                </dl>
                <dl className='flex'>
                  <dt className='w-[5rem]'>事業内容</dt>
                  <dd>
                    <ul>
                      <li>Web制作・マーケティング</li>
                      <li>インターネットメディア事業</li>
                      <li>プロモーション企画・制作</li>
                      <li>ソーシャル企画・運営</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className='w-full md3:w-1/2 md3:absolute md3:top-[15%] md3:left-1/2 mt-4'>
            <Image
              src={Company}
              alt='company'
              className='object-cover md3:w-[541px] md3:h-[400px] w-full h-full'
            />
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className='bg-white'>
        <div className='wrapper'>
          <div className='flex justify-between md3:items-center py-10 flex-col md3:flex-row'>
            <div className='w-[100px] mb-2'>
              <Image src={Logo} alt='logo' />
            </div>
            <div>
              <ul>
                <li>Web Entertainment Design Inc.</li>
                <li>West Building 3F</li>
                <li>9-99 Sakuragaokacho Shibuya-ku</li>
                <li>Tokyo, Japan 150-0031</li>
                <li>T/99-9999-9999</li>
              </ul>
            </div>
          </div>
          <p className='pb-3'>© Web Entertainment Design Inc.</p>
        </div>
      </footer>
    </div>
  );
}
