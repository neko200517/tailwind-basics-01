import Image from 'next/image';
import Link from 'next/link';
import Recipe from '@/../public/recipe2/recipe.jpg';

const RecipeItem = (props: { text: string; amount: number }) => {
  const { text, amount } = props;
  return (
    <li className='flex justify-between border-b pt-2 pb-1'>
      <span>{text}</span>
      <span>{amount}個</span>
    </li>
  );
};

const HowtoItem = (props: { text: string }) => {
  const { text } = props;
  return <li className='border-b pt-2 pb-1'>{text}</li>;
};

const recipieItems = [
  { text: 'テキストテキスト', amount: 1 },
  { text: 'テキストテキスト', amount: 1 },
  { text: 'テキストテキスト', amount: 1 },
  { text: 'テキストテキスト', amount: 1 },
  { text: 'テキストテキスト', amount: 1 },
];

const howtoItems = [
  { text: 'テキストテキストテキストテキスト' },
  { text: 'テキストテキストテキストテキスト' },
  { text: 'テキストテキストテキストテキスト' },
  { text: 'テキストテキストテキストテキスト' },
  { text: 'テキストテキストテキストテキスト' },
];

export default function Home() {
  return (
    <div className='flex flex-col gap-20 text-gray-800'>
      <main className='flex flex-col gap-8'>
        <div className='flex w-full flex-col md1:flex-row'>
          {/* 画像 */}
          <div id='mainvisual' className='w-full md1:w-[50%]'>
            <Image
              className='object-cover w-full h-[700px] m-h-[700px]'
              src={Recipe}
              alt='recipe'
            />
          </div>

          {/* recipe */}
          <section
            id='recipe'
            className='flex flex-col gap-8 p-12 w-full md1:w-[50%]'
          >
            <div className='flex flex-col gap-6'>
              <h1 className='text-3xl font-bold'>ひよこ豆とアボガドのタコス</h1>
              <p>
                たっぷりのひよこ豆とレンズ豆にアボガドとトマトを添えて、少しライムを絞ったらおいしいタコスのできあがりです。
              </p>
            </div>
            <div className='flex flex-col'>
              <h2 className='border-b text-xl font-bold pb-2'>材料（2人分）</h2>
              <ul className='pt-3'>
                {recipieItems.map((item, i) => (
                  <RecipeItem key={i} text={item.text} amount={item.amount} />
                ))}
              </ul>
            </div>
            <div className='flex flex-col'>
              <h2 className='border-b text-xl font-bold pb-2'>作り方</h2>
              <ol className='pt-3 ml-5 list-decimal'>
                {howtoItems.map((item, i) => (
                  <HowtoItem key={i} text={item.text} />
                ))}
              </ol>
            </div>
          </section>
        </div>

        {/* Button */}
        <div id='button' className='flex justify-center'>
          <button className='border border-black py-4 px-12 text-sm'>
            <Link href='#'>レシピ一覧を見る</Link>
          </button>
        </div>
      </main>

      {/* footer */}
      <footer className='flex flex-col gap-4 text-center py-4 text-xs'>
        <ul className='flex justify-center gap-4'>
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
