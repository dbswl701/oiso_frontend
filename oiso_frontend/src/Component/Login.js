import Navbar from './Navbar';
import { useState } from 'react';
import './Login.css';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const realId=""; //DB에서 들고옴
  const realPw="";

  return (
    <div>
      <Navbar />
      <form id="loginForm">
        <input type="text" placeholder="아이디" id="id" className="text-Field" onChange={e => { setId(e.target.value); }} />
        <input type="password" placeholder="비밀번호" id="password" className="text-Field" onChange={e => { setPw(e.target.value); }} /><br />
        <button type="dbswl701@ajou.ac.kr" className="button" 
          onClick={e => { 
            // 검증 후 
            // 메인 페이지로 이동
          }}
        >로그인</button>
        <button type="dbswl701@ajou.ac.kr" className="button"
          onClick={e => {
            // 회원가입 페이지로 이동
          }}
        >회원가입</button>
      </form>
    </div>
  );
}

export default Login;
