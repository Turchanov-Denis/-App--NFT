import React from 'react'
import { BarButton } from './BarButton'
import { Logo } from './Logo'
import home from './icon/home.png'
import collections from './icon/collections.png'
import wallet from './icon/wallet.png'
import setting from './icon/setting.png'
export default function LeftBar() {

    return (

        <div className='left-bar'>
            <Logo></Logo>
            <BarButton icon={home} >home</BarButton>
            <BarButton icon={collections} >collections</BarButton>
            <BarButton icon={wallet} >wallet</BarButton>
            <BarButton icon={setting} >setting</BarButton>
        </div>

    )
}