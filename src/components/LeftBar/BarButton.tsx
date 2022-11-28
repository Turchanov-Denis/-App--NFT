import React from 'react'

type BarBattonProps = {
    icon: string,
    children: React.ReactElement | React.ReactNode
}

export const BarButton: React.FC<BarBattonProps> = ({ icon, children }) => {
    return (
        <button className='left-bar__button'><img src={icon} alt="" /> {children}</button>
    )
}