import React, { useState } from 'react'


export const NavBar: React.FC = () => {

    const [menuList, setMenuList] = useState(['Explore', 'My name', 'Following', 'Activity', ' works'])

    return (
        <div className='header'>

            <input type="text" placeholder='Search by creator' />
            <ul>{menuList.map(item => <li> {item} </li>)}</ul>
            <button>Create</button>

        </div>
    )
}