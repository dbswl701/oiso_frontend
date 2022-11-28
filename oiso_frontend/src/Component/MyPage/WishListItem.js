import './Item.css';

function WishListItem({item, whichList}) {

  // 찜 목록 -> 이름, 가격, 수량, 사진
  const wishItem = (
    <div id = "item-wish-content">
      <div id="item-img">
        <img src = {item.img}></img>
      </div>
      <div id="item-txt">
        <p>{item.itemName}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </div>
      <div id="item-btn">
        <button>예약하기</button>
        <button>삭제</button>
      </div>
    </div>
  );

  return (
    <>
      { wishItem }      
    </>
  );
}

export default WishListItem;
