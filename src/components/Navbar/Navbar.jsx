import React, { useState } from 'react';
import { MenuItems } from "./menuitems"
import { Button } from '../button';

import CreateSignUp from '../SignUp/CreateSignUp';

const Navbar = () => {

   const [clicked, setClicked] = useState(false) 

    const handleClick = () => {
        setClicked(!clicked)
    }
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> Green Leave <i className="fas fa-leaf"></i> </h1>
                <div className="menu-icon" onClick={handleClick}> 
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}>             </i> 
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu' }> 
                    {MenuItems.map((item, index) => {
                        return (
                              <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                     {item.title}   
                                   </a>
                             </li>
                        )
                    })}
                  <CreateSignUp> Sign up </CreateSignUp> 
                </ul>
                
                
                 </nav>
        )
    }

export default Navbar