import React from 'react';
import "./single.scss";
import Sidebar from '../Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';

const Single = () => {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
};

export default Single;