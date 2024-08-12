import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Admin = () => {
  return (
    <div className='max-w-7xl flex flex-col y-14 mx-auto'>
        <header className='sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-dark-200 px-[5%] py-5 shadow-lg xl:px-12'>
            <Link href={'./'} className='cursor-pointer'>
                <Image src={'/logo-full.svg'} alt='logo' height={32} width={163} className='h-8 w-fit'/>
            </Link>
            <p className='text-16-semibold'>Admin Dashboard</p>
        </header>
        <main className='admin-main'>
            <section className='w-full space-y-4'>
                <h1 className='header'> Welcome there</h1>
                <p className='text-dark-700'>Start the day with managing new appointments</p>
            </section>
        </main>
    </div>
  )
}

export default Admin