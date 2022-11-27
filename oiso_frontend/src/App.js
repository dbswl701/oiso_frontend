import './App.css';
// import Navbar from './Component/Navber';
import Main from './Component/Main';
import Login from './Component/Login';
import RegistItem from './Component/RegistItem'
import MyPage from './Component/MyPage/MyPage'
import BookingList from './Component/MyPage/BookingList'
import WishList from './Component/MyPage/WishList'
import { useState } from 'react';


import { Routes, Route } from 'react-router-dom';
function App() {
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
  console.log(itemList);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registItem' element={<RegistItem />} />
        <Route path='/myPage' element={<MyPage />} />
        <Route path='/myPage/bookingList' element={<BookingList itemList={itemList} whichList='booking'/>} />
        <Route path='/myPage/wishList' element={<WishList itemList={itemList} whichList='wish'/>} />
        <Route path='/myPage/inquiry' element={<BookingList />} />
        <Route path='/myPage/regitStore' element={<BookingList />} />
        <Route path='/myPage/modifySalesText' element={<BookingList />} />
        <Route path='/myPage/modifyUser' element={<BookingList />} />
      </Routes>
    </div>
  )
}

export default App;
