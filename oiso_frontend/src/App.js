import './App.css';
// import Navbar from './Component/Navber';
import Main from './Component/Main';
import Login from './Component/Login';
import RegistItem from './Component/RegistItem'
import MyPage from './Component/MyPage/MyPage'
import BookingList from './Component/MyPage/BookingList'
import WishList from './Component/MyPage/WishList'
import InquiryList from './Component/MyPage/InquiryList'
import RegitStore from './Component/MyPage/RegitStore';
import SignUp from './Component/SignUp'
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
    time: '7',
  },{
    id: 2,
    wish: false,
    date: '2022/11/26',
    isAccept: true,
    itemName: '사과',
    price: '5,000',
    quantity: '5',
    img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwFpaQ5iT01rIf5rHav_BL12ncSHYTYs-xdM8z9w9wVFz1Fq6P8MJNeUgJ6y-hKkR7BU&usqp=CAU`,
    time: '3',
  }])
  console.log(itemList);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/registItem' element={<RegistItem />} />
        {/* <Route path='/myPage' element={<MyPage />} /> */}
        <Route path='/bookingList' element={<BookingList itemList={itemList} whichList='booking'/>} />
        <Route path='/wishList' element={<WishList itemList={itemList} whichList='wish'/>} />
        <Route path='/inquiry' element={<InquiryList itemList={itemList} whichList='inquiry'/>} />
        <Route path='/regitStore' element={<RegitStore />} />
        <Route path='/modifySalesText' element={<BookingList />} />
        <Route path='/modifyUser' element={<BookingList />} />
      </Routes>
    </div>
  )
}

export default App;
