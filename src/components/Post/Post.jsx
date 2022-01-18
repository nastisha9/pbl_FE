import React from 'react';
import "./post.scss";
import image from "./environment.jpg";

const Post = () => {
    return (
        <div className="post">
            <img className="postImg"
                src={image}
                alt=""
            />
            <div className="postInfo">
                <div className="postCategs">
                    <span className="postCategs">Events</span>
                    <span className="postCategs">Environment</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescr">
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Enim id, dolore tenetur est, magni cumque ex c
                ommodi unde deleniti laborum qui soluta itaque porro
                provident facilis totam omnis non quod! 
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Enim id, dolore tenetur est, magni cumque ex c
                ommodi unde deleniti laborum qui soluta itaque porro
                provident facilis totam omnis non quod!</p>
        </div>
    )
};

export default Post;