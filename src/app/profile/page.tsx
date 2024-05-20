import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import MainVisual from '@/../public/profile/mainvisual.jpg';
import About from '@/../public/profile/about.jpg';
import Bicycle1 from '@/../public/profile/bicycle1.jpg';
import Bicycle2 from '@/../public/profile/bicycle2.jpg';
import Bicycle3 from '@/../public/profile/bicycle3.jpg';

type Post = {
  src: StaticImageData;
  title: string;
  text: string;
};

const posts: Post[] = [
  {
    src: Bicycle1,
    title: 'タイトル1',
    text: 'これはタイトル1の記事です',
  },
  {
    src: Bicycle2,
    title: 'タイトル2',
    text: 'これはタイトル2の記事です',
  },
  {
    src: Bicycle3,
    title: 'タイトル3',
    text: 'これはタイトル3の記事です',
  },
];

const PostItem = ({ post }: { post: Post }) => {
  return (
    <li className='flex flex-col justify-center items-center gap-3 mb-4'>
      <Image src={post.src} alt='bicycle' className='px-4 md:px-0' />
      <h3 className='font-bold'>{post.title}</h3>
      <p className='text-sm'>{post.text}</p>
    </li>
  );
};

export default function Home() {
  return (
    <div className='text-gray-800'>
      {/* header */}
      <header className='flex justify-center'>
        <nav className='flex justify-between w-full md:w-[800px] py-3 px-4'>
          <h1 className='text-2xl bg-gray-700 text-white font-bold px-6 py-1'>
            Profile
          </h1>
          <ul className='flex gap-6 items-center'>
            <li>
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link href='#bicycle'>Bicycle</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='mb-24 flex flex-col gap-24'>
        {/* ヒーロー画像 */}
        <div id='mainvisual'>
          <Image
            className='h-[607px] w-full object-cover'
            src={MainVisual}
            alt='mainvisual'
          />
        </div>

        {/* About */}
        <section id='about' className='flex justify-center'>
          <div>
            <div className='flex justify-center mb-16'>
              <h2 className='text-4xl font-semibold border-b-[1px] border-gray-600 pb-2'>
                About
              </h2>
            </div>
            <div className='flex px-4 flex-wrap md:flex-nowrap justify-center'>
              <div className='flex justify-center items-center mb-3 md:mb-0 w-full md:w-[100px] md:mr-8'>
                <Image
                  src={About}
                  alt='About'
                  className='rounded-full w-[100px]'
                />
              </div>
              <div className='flex flex-col max-w-[400px]'>
                <h2 className='font-bold mb-4'>FUGAHOGE FUGAHOGE</h2>
                <div className='text-sm'>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキスト
                  </p>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキスト
                  </p>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキスト
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bicycle */}
        <section id='bicycle' className='flex justify-center'>
          <div className='flex flex-col'>
            <div className='flex justify-center mb-16'>
              <h2 className='text-4xl font-semibold border-b-[1px] border-gray-600 pb-2'>
                Bicycle
              </h2>
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-3 md:w-[700px] lg:w-[800px] gap-3'>
              {posts &&
                posts.map((post, i) => <PostItem key={i} post={post} />)}
            </ul>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className='text-center py-2'>
        <p className='text-gray-500 text-[10px]'>@ 20xx Profile</p>
      </footer>
    </div>
  );
}
