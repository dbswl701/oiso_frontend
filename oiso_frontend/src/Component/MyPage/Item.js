import { useState } from 'react';
import './Item.css';

function Item({item}) {
  const [id, setId] = useState('');
  console.log('in item,');
  console.log(item);
  return (
    <>
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
    </>
  );
}

export default Item;
