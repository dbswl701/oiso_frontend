import { useState } from 'react';
import './MyPage.css';
import Item from './Item'

function WishList({itemList, whichList}) {

  return (
    <>
      {itemList.map((item)=>{
        if(!item.wish) return;
        return <Item item={item} whichList={whichList} key={item.id} />
      })} 
    </>
  );
}

export default WishList;
