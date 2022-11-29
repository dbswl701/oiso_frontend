import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar(){

  return (
    <div id="navbar">
      <Link id="logo" to ='/'>
        <img src='logo.png'></img>
      </Link>
      <form id="search-box">
        <input id="search-txt" type="text" placeholder="검색어를 입력해주세요" />
        <button id="search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <ul id="menu">
        <Link to ='/areaSearch'><li>지역별 검색</li></Link>
        <Link to ='/categorySearch'><li>카테고리별 검색</li></Link>
        <Link to ='/login'><li>로그인</li></Link>
        <Link to ='/signUp'><li>회원가입</li></Link>
      </ul> 
    </div>
  )
}


export default Navbar;