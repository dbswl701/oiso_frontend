import './Navbar.css';


function Navbar(){

  return (
    <div id="navbar">
      <a id="logo" href="#">logo</a>
      <input type="text"></input>
      <button>ok</button>
      <ul id="menu">
        <li><a href="#">지역별 검색</a></li>
        <li><a href="#">카테고리별 검색</a></li>
        <li><a href="#">로그인</a></li>
        <li><a href="#">회원가입</a></li>
      </ul>
    </div>
  )
}


export default Navbar;