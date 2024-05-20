import addCart from '@/app/lib/ec/actions';

const lineups = [
  { color: 'White', size: 'S', amounts: [1, 2, 3] },
  { color: 'White', size: 'M', amounts: [1, 2, 3] },
  { color: 'White', size: 'L', amounts: [1, 2, 3] },
];

export default function ShopingForm({
  product,
}: {
  product: {
    name: string;
    description: string;
    price: number;
  };
}) {
  const addCartWithPrice = addCart.bind(null, product.price);

  return (
    <>
      <p className='mb-[30px] leading-[1.9]'>
        ￥{product.price.toLocaleString()} +tax
      </p>

      <form action={addCartWithPrice} method='post'>
        <table className='mb-5 text-center w-full border-collapse font-normal'>
          <thead>
            <tr>
              <th className='w-[20%] font-normal p-[10px] border-r'>Color</th>
              <th className='w-[20%] font-normal p-[10px] border-r'>Size</th>
              <th className='w-[60%] font-normal p-[10px]'>Color</th>
            </tr>
          </thead>
          <tbody>
            {lineups.map((lineup, i) => (
              <tr
                key={lineup.size}
                className={`border-t ${i !== lineups.length - 1 && 'border-b'}`}
              >
                <td className='p-[10px] border-r'>{lineup.color}</td>
                <td className='p-[10px] border-r'>{lineup.size}</td>
                <td className='p-[10px]'>
                  <select
                    name={`lineup-${i}`}
                    id={`lineup-${i}`}
                    className='border border-[#c3c3c3] w-full px-[10px]'
                  >
                    {lineup.amounts.map((amount, i) => (
                      <option key={amount} value={`${amount}`}>
                        {amount}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <input
          type='submit'
          value='ADD TO CART'
          className='w-full bg-[#4B4B4B] text-white py-[18px] text-center hover:bg-[#5B5B5B] cursor-pointer'
        />
      </form>
    </>
  );
}
