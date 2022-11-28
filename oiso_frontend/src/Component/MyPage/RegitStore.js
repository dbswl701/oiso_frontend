import { useState } from 'react';
import './MyPage.css';
import Item from './Item'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'
import RegistStoreBody from './RegistStoreBody';
function WishList({itemList, whichList}) {

  return (
    <>
      <Navbar />
      <Sidebar />
      <div id="main">
      <RegistStoreBody />

      </div>
    </>
  );
}

export default WishList;
