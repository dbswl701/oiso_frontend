import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar(){

  return (
    <div id="navbar">
      <input type="text"></input>
      <button>ok</button>
      <ul id="menu">
        <Link to ='./areaSearch'><li>지역별 검색</li></Link>
        <Link to ='./categorySearch'><li>카테고리별 검색</li></Link>
        <Link to ='./login'><li>로그인</li></Link>
        <Link to ='./signUp'><li>회원가입</li></Link>
      </ul>
    </div>
  )
}


export default Navbar;