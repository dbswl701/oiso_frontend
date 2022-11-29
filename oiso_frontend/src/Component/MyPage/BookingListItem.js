import { useState } from 'react';
import './Item.css';

function BookingListItem({item, whichList}) {

  // 예약 목록 -> 날짜, 수령여부, 이름, 가격, 수량, 사진
  const bookingItem = (
    <div id='item-content'>

      <div id="item-header">
        {item.isAccept ? <span>수령 완료</span> : <span>예약 완료</span>}
        <span>{item.date}</span>
      </div>
      <div id='item-body'>
        <div id='item-img'>
          <img src = {item.img}></img>
        </div>
        <div id='item-txt'>
          <p>{item.itemName}</p>
          <p>{item.price}원</p>
          <p>{item.quantity}개</p>
          <p>{item.quantity}시 예약</p>

        </div>
        <div id='item-btn'>
          <button>예약 시간 변경</button>
          {/* <input type="number"></input> */}
          <button>리뷰 작성</button>
          {/* <textarea></textarea><br /> */}
        </div>
      </div>
      
    </div>
  );
  
  return (
    <>
      { bookingItem }      
    </>
  );
}

export default BookingListItem;
