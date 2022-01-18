import React from 'react';
import Header from './Header';
import "./topics.scss";
import Sidebar from '../../components/Sidebar/Sidebar';
import Posts from '../../components/Posts/Posts';
import Single from '../../components/Single/Single';

const Topics = () => {
  return (
    <>
      {/* <Header />
      <div className="topics">
        <Posts />
        <Sidebar />
      </div> */}
      <Single />
    </>
  )
};

export default Topics;
