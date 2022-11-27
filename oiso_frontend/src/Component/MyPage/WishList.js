import { useState } from 'react';
import './MyPage.css';
import Item from './Item'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'

function WishList({itemList, whichList}) {

  return (
    <>
      <Navbar />
      <Sidebar />
      {itemList.map((item)=>{
        if(!item.wish) return;
        return <Item item={item} whichList={whichList} key={item.id} />
      })} 
    </>
  );
}

export default WishList;
