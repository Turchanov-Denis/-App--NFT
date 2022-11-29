import React from 'react'
import { Card } from '../Card'
import { NavBar } from '../Navbar'


export const Home: React.FC = () => {
    const cardList = ["nftImage1", "nftImage2", "nftImage3"]
    return (
        <div className='main-content'>
            <NavBar></NavBar>
            <div className='content'>
                {cardList.map(item => <Card imageUrl={item}></Card>)}
            </div>
        </div>
    )
}