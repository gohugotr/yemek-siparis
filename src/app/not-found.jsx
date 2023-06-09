import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-4xl tracking-wider font-dancing font-weight-bold'>
        404 │ Sayfa bulunamadı
      </h2>
      <p className='mt-10 text-2xl font-semibold tracking-wide text-amber-400 hover:text-amber-600'>
        <Link href='/'>Anasayfa</Link>
      </p>
    </div>
  )
}

export default NotFound