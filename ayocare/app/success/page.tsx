import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Success = () => {
  return (
    <div className='flex h-screen max-h-screen px-[5%]'>
        <div className='success-img'>
            <Link href={'./'}>
                <Image src={'/logo-full.svg'} alt='logo' width={1000} height={1000} className='h-10 w-fit' />
            </Link>
            <section className='flex flex-col items-center'>
                <Image src={'/success.gif'} alt='gif' width={300} height={300}/>
            <h2 className='header mb-6 maax-w-[600px] text-center'>Your <span className='text-green-500'>Appointment request</span> has been successfully submitted!</h2>
            <p className='font-bold text-green-900'>We will be in touch with you shortly</p>
            </section>
        </div>
    </div>
  )
}

export default Success