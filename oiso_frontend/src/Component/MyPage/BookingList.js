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
      <div id="main">
        <div id="section">
          <button>최근 일주일</button>
          <button>최근 1개월</button>
          <button>최근 3개월</button>
          <button>최근 6개월</button>
          <button>최근 1년</button>
        </div>

        {itemList.map((item)=>{
        return <Item item={item} key={item.id} />
      })} 
      </div>

    </>
  );
}

export default BookingList;
