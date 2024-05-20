const templates = [
  { size: 'S', chest: '99 ～ 99', weist: '99 ～ 99', height: '99 ～ 99' },
  { size: 'M', chest: '99 ～ 99', weist: '99 ～ 99', height: '99 ～ 99' },
  { size: 'L', chest: '99 ～ 99', weist: '99 ～ 99', height: '99 ～ 99' },
];

export default function TemplateTable() {
  return (
    <table className='text-center w-full'>
      <thead className='bg-[#ecebeb]'>
        <tr>
          <th className='border p-[10px] font-normal w-[16%]'>Size</th>
          <th className='border p-[10px] font-normal w-[28%]'>Chest</th>
          <th className='border p-[10px] font-normal w-[28%]'>Weist</th>
          <th className='border p-[10px] font-normal w-[28%]'>Height</th>
        </tr>
      </thead>
      <tbody>
        {templates.map((template) => (
          <tr key={template.size}>
            <td className='border p-[10px] bg-[#ecebeb]'>{template.size}</td>
            <td className='border'>{template.chest}</td>
            <td className='border'>{template.weist}</td>
            <td className='border'>{template.height}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
