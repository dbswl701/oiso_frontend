import { useState } from 'react';
import './MyPage.css';
import Item from './Item'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'

function BookingList({itemList}) {

  return (
    <>
      <Navbar />
      <Sidebar />
      {itemList.map((item)=>{
        return <Item item={item} key={item.id} />
      })} 
    </>
  );
}

export default BookingList;
