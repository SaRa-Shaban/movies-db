import React from 'react'
import { useContext } from 'react'
import { MediaContext } from './../../Context/MediaStore';

export default function Network() {
  let { counter, decrement } = useContext(MediaContext)

  return (
    <>
      {/* <div className='py-3 my-4'>
        <h1>Data come using context</h1>
        <h2 className='my-3'>count : {counter}</h2>
        <button className='btn btn-info my-3' onClick={decrement}> decrement</button>
      </div> */}

      <div className='py-3 my-4'>
        <h1>Data come using redux</h1>
        <h2 className='my-3'>count : {counter}</h2>
        <button className='btn btn-info my-3' onClick={decrement}> decrement</button>
      </div>

    </>
  )
}
