import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/../public/ec/logo.svg';
import Item from '@/../public/ec/item.jpg';
import ShopingForm from '@/app/ui/ec/shoping-form';
import TemplateTable from '@/app/ui/ec/template-table';

const product = {
  name: 'TOTALLY Short Sleeve Shirt',
  description:
    'テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキスト',
  price: 1000,
};

export default function Home() {
  return (
    <>
      {/* header */}
      <header className='wrapper my-10 mx-4 border-b pb-5 md2:mx-auto overflow-auto'>
        {/* logo */}
        <div className='w-[150px] mx-auto mb-8'>
          <Image src={Logo} alt='logo' />
        </div>

        {/* menu */}
        <nav className='flex justify-between'>
          <ul className='flex gap-4'>
            <li>
              <Link href='/'>ALL</Link>
            </li>
            <li>
              <Link href='/'>NEW</Link>
            </li>
            <li>
              <Link href='/'>VINTAGE</Link>
            </li>
            <li>
              <Link href='/'>CATEGORY</Link>
            </li>
            <li>
              <Link href='/'>LOOKBOOK</Link>
            </li>
            <li>
              <Link href='/'>BLOG</Link>
            </li>
          </ul>

          <ul className='flex gap-4'>
            <li>
              <Link href='/'>LOGIN</Link>
            </li>
            <li>
              <Link href='/'>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* main */}
      <main className='mb-24'>
        <div className='flex wrapper gap-12 flex-col md2:flex-row'>
          {/* item */}
          <div className='w-full md2:w-1/2'>
            <Image src={Item} alt='item' />
          </div>

          {/* iteminfo */}
          <div className='w-full md2:w-1/2 px-4 md2:px-0'>
            {/* info1 */}
            <section className='mb-8'>
              <h2 className='text-xl font-bold border-t border-b py-4 mb-4'>
                {product.name}
              </h2>
              <p>{product.description}</p>
            </section>

            {/* form */}
            <section className='mb-8'>
              <ShopingForm product={product} />
            </section>

            {/* info3 */}
            <section>
              <TemplateTable />
            </section>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className='text-center py-2'>
        <p>© TOTALLY</p>
      </footer>
    </>
  );
}
