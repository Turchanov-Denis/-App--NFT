import React from 'react'


export const Logo: React.FC = () => {
    return (
        <div className='logo'>
            <img src="./Logo.png" alt="Logo" />
            <div className='logo__text'>Play NFT</div>
        </div>
    )
}