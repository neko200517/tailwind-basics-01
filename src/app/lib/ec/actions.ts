'use server';

export default async function addCart(price: number, formData: FormData) {
  let sum = 0;

  // @ts-ignore
  for (let [_, value] of formData.entries()) {
    sum += value * price;
  }
  console.log(sum);

  // 商品追加処理
}
