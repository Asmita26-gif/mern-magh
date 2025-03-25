import React, { useState } from 'react'

export default function Home() {

  const [count, setCount] = useState(0)
  const handleIncrement = () => {


    setCount((c) => c + 1);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };
  // console.log('render');
  // console.log(count);
  return (
    <div className=' flex gap-5   p-4'>
      <h1 className='text-2xl'>
        {count}
      </h1>
      <button onClick={handleIncrement} className='bg-black text-white px-2 pyy-1 cursor-pointer'>Increment</button>

      <button onClick={handleDecrement} className='bg-black text-white px-2 pyy-1 cursor-pointer'>Decrement</button>

    </div>
  )
}
