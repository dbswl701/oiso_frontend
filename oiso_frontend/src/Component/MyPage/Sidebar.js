import './MyPage.css';
import { Link } from 'react-router-dom';

function BookingList() {

  return (
    <>
      <div id="side-navbar">
        <ul>
          <Link to ='./bookingList'><li>예약 목록</li></Link>
          <Link to ='./wishList'><li>찜 목록</li></Link>
          <Link to ='./inquiry'><li>문의내역 확인</li></Link>
          <Link to ='./regitStore'><li>가게 등록</li></Link>
          <Link to ='./modifySalesText'><li>판매글 수정</li></Link>
          <Link to ='./modifyUser'><li>개인 정보 수정</li></Link>
        </ul>
      </div>
    </>
  );
}

export default BookingList;
