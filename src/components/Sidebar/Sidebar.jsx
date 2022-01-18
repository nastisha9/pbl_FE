import React from 'react';
import "./sidebar.scss";
import image from "./AVATAR.jpg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img className="sidebarImg" src={image} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Events</li>
                <li className="sidebarListItem">News</li>
                <li className="sidebarListItem">Recycling</li>
                <li className="sidebarListItem">Environment</li>
            </ul>
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
            </div>
        </div>
    )
};

export default Sidebar;