import { useState } from 'react';
import './Item.css';

function Item({item, whichList}) {
  const [id, setId] = useState('');

  // 예약 목록 -> 날짜, 수령여부, 이름, 가격, 수량, 사진
  const bookingItem = (
    <div id = "itemInfo">
      <div id="img">
        <img src = {item.img}></img>
      </div>
      <div id="content">
        <p>{item.date}</p>
        <p>{item.isAccept}</p>
        <p>{item.itemName}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </div>
    </div>
  );
  // 찜 목록 -> 이름, 가격, 수량, 사진
  const wishItem = (
    <div id = "itemInfo">
      <div id="img">
        <img src = {item.img}></img>
      </div>
      <div id="content">
        <p>{item.itemName}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </div>
      <div>
      <button>예약하기</button>
      <button>삭제</button>
      </div>
    </div>
  );
  return (
    <>
      {whichList==='wish' ? wishItem : bookingItem }      
    </>
  );
}

export default Item;
