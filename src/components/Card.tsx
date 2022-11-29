import React from 'react'

type CardProps = {
    imageUrl: string
}

export const Card: React.FC<CardProps> = ({ imageUrl }) => {
    return (

        <div className='card'>
            <div className='card__image' style={{ 'backgroundImage': `url(../src/assets/nft/${imageUrl}.png)` }}></div>
            <div className='card__title'>Fragments</div>
            <div className='card__count'> 0.080 ETH <div className='card__place'>1 of 56</div></div>
            <div className='card__higjest'>Higjest bid:  <div className='card__count'><span>0.080 ETH</span> </div></div>
            <hr />
            <div className='card__time'> <div><img src="./time.png" alt="" /> 6 hours  ago</div>  <div className='card__like'><img src="./favorite.png" alt="" /> 674</div></div>

        </div>
    )
}