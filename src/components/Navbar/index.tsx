import React, { useState } from 'react'


export const NavBar: React.FC = () => {

    const [menuList, setMenuList] = useState(['Explore', 'My name', 'Following', 'Activity', ' works'])

    return (
        <div className='header'>

            <input type="text" placeholder='Search by creator' />
            <ul>{menuList.map((item,index) => <li key={index}> <a href="#">{item}</a> </li>)}</ul>
            <button>Create</button>

        </div>
    )
}