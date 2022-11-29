import React from 'react'

export const Advertisement: React.FC = () => {
    return (
        <div className='advertisement'>
            <div className='content'>
                <div className="title">Create Your Own NFT</div>

                <button> Strat sale </button>
            </div>
            <img src="./advertisement.png" alt="" />
        </div>
    )
}