import './Item.css';

function InquiryListItem({item, whichList}) {
  const inquiry = (
    <div id = "item-wish-content">
      <div id="item-img">
        <img src = {item.img}></img>
      </div>
      <div id="item-txt">
        <p>{item.date}</p>
        <p>{item.itemName}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </div>
      <div>
        <p>문의 내용</p>
      </div>
    </div>
  );
  return (
    <>
      { inquiry }      
    </>
  );
}

export default InquiryListItem;
