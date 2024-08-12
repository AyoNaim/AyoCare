import React from 'react'

type AdminCardProps = {
    type: 'appointments'  | 'pending'  | 'cancelled',
    count: number,
    label: 'string',
    icon: 'string'
}

const AdminCard = ({type, count=0, label, icon}: AdminCardProps) => {
  return (
    <div className={`stat-card ${type == 'appointments' ? 'bg-appointments' : ''}`}>AdminCard</div>
  )
}

export default AdminCard