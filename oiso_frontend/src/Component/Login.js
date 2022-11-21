import Navbar from './Navbar';
import { useState } from 'react';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const realId=""; //DB에서 들고옴
  const realPw="";

  return (
    <div>
      <Navbar />

      <input
        placeholder="아이디"
        id="id"
        className="login"
        onChange={e => {
          setId(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        id="password"
        className="login"
        onChange={e => {
          setPw(e.target.value);
        }}
      />
      <button
        type="dbswl701@ajou.ac.kr"
        className="1234"
        onClick={e => {
          if (realId == id) {
            if (realPw == pw) {
              e.stopPropagation();
              alert('로그인');
              // goToMain(); 메인 페이지로 이동
            }
          } else {
            alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
          }
        }}
      >로그인</button>
      <button
        type="dbswl701@ajou.ac.kr"
        className="1234"
        onClick={e => {
          // 회원가입 페이지로 이동
        }}
      >회원가입</button>

    </div>
  );
}

export default Login;
