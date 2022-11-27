import { useState } from 'react';
import './MyPage.css';
import Item from './Item'

function BookingList({itemList}) {

  return (
    <>
      {itemList.map((item)=>{
        return <Item item={item} key={item.id} />
      })} 
    </>
  );
}

export default BookingList;
