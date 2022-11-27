import Navbar from '../Navbar';
import { useState } from 'react';
import './MyPage.css';
import ItemList from './BookingList'
import BookingList from './BookingList'
import WishList from './WishList'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import { Routes, Route } from 'react-router-dom';

function MyPage({match}) {
  // 날짜, 수령완료/예약 완료, 상품 명, 가격, 수량
  // const [itemInfo, setItemInfo] = useState({
  //   date: '',
  //   isAccept: '',
  //   itemName: '',
  //   price: '',
  //   quantity: '',
  // })
  const [itemList, setItemList] = useState([{
    id: 1,
    wish: true,
    date: '2022/11/26',
    isAccept: false,
    itemName: '플래너',
    price: '10,000',
    quantity: '2',
    img: 'https://motemote.kr/web/product/big/201908/656b363e1c8edec65afc77af20017eb9.jpg',
  },{
    id: 2,
    wish: false,
    date: '2022/11/26',
    isAccept: true,
    itemName: '사과',
    price: '5,000',
    quantity: '5',
    img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwFpaQ5iT01rIf5rHav_BL12ncSHYTYs-xdM8z9w9wVFz1Fq6P8MJNeUgJ6y-hKkR7BU&usqp=CAU`,
  }])
  console.log(match);

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <div id="side-navbar">
        <ul>
          <Link to ='./bookingList'><li>예약 목록</li></Link>
          <Link to ='./wishList'><li>찜 목록</li></Link>
          <Link to ='./inquiry'><li>문의내역 확인</li></Link>
          <Link to ='./regitStore'><li>가게 등록</li></Link>
          <Link to ='./modifySalesText'><li>판매글 수정</li></Link>
          <Link to ='./modifyUser'><li>개인 정보 수정</li></Link>
        </ul>
      </div> */}
      <div id="main">
        <div id="section">
          <button>최근 일주일</button>
          <button>최근 1개월</button>
          <button>최근 3개월</button>
          <button>최근 6개월</button>
          <button>최근 1년</button>
        </div>

        {/* <article>
          <BookingList itemList={itemList} whichList='booking'/>
          <WishList itemList={itemList} whichList='wish'/>
        </article> */}
      </div>
      
      {/* 여기서 DB 정보 들고와서 넘겨줌 */}
    </>

  );
}

export default MyPage;
