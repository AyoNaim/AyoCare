import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

// type AdminCardProps = {
//     type: 'appointments'  | 'pending'  | 'cancelled',
//     count: number,
//     label: 'string',
//     icon: 'string'
// }
interface props {
  type: 'appointments'  | 'pending'  | 'cancelled'
  count: number
  label: string
  icon: string
}

const AdminCard = ({type, count=0, label, icon}: props) => {
  return (
    <div className={clsx("stat-card", {
      "bg-appointments": type === 'appointments',
      "bg-pending": type === 'pending',
      "bg-cancelled": type === 'cancelled'
    })}>
      <div className='flex items-center gap-4'>
        <Image src={icon} alt='appointments' width={32} height={32} className='size-8 w-fit' />
        <h2 className='text-32-bold text-white'>{count}</h2>
      </div>
      <p className='text-14'>{label}</p>
    </div>
  )
}

export default AdminCard