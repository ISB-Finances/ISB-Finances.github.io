import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { HomeItems } from './HomeItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';



function Dropdown() {
    const [click, setClick] = useState (false);

    const handleClick = () => setClick(!click);



 return ( 
 <>
    <ul 
    onCLick= {handleClick}
    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
        {MenuItems.map((item, index) => {
            return (
                <li key={index}>
                    <Link 
                     className={item.cName}
                     to={item.path} 
                     onClick={() => setClick(false)}
                 >
                    {item.title}
                    </Link>
                </li>
            );
        })}
    </ul>
    <ul 
    onCLick= {handleClick}
    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
        {HomeItems.map((item, index) => {
            return (
                <li key={index}>
                    <Link 
                     className={item.cName}
                     to={item.path} 
                     onClick={() => setClick(false)}
                 >
                    {item.title}
                    </Link>
                </li>
            );
        })}
    </ul>
 </> 
 );
}

export default Dropdown;
