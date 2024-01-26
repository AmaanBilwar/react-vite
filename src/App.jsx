import React, { useState } from 'react'

function App() {
  var [a,b] = useState(a=0)
  return (
    <>
    <div className='w-full h-screen bg-slate-700'>
      <h1 className='font-sans text-5xl text-center pb-20 underline text-emerald-50 pt-10'>welcome to number increment counter</h1>
      <h1 className='font-sans text-5xl text-center text-zinc-50 p-12'>{a}</h1>
    <div className="align-middle justify-center text-center">
      <button onClick={()=>b(a+1)} className='rounded-md font-bold bg-white text-xl text-black font-mono text-xs p-8 align-middle mt-10'>make me go up👆</button>
      <button onClick={()=>b(a-1)} className='rounded-md font-bold bg-white text-xl text-black font-mono text-xs p-8 align-middle mt-10'>make me go down👇</button>
    </div>
    </div>
    </>
  )
}

export default App
