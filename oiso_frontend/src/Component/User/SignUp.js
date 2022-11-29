import Navbar from '../Navbar';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h3 id='signup_title'> 회원가입</h3>
          <h4>회원정보를 입력해주세요.</h4>
        </div>
        <div className='Signup'>
          {/* 아이디 */}
          <div>
            <input type='text' maxLength='20' name='signup_id' placeholder='아이디'/>
          </div>

          {/* 비밀번호 */}
          <div>
            <input type='password' maxLength='15' name='signup_password' placeholder='비밀번호'/>
          </div>

          {/* 비밀번호 */}
          <div>
            <input type='password' maxLength='15' name='signup_pswCheck' placeholder='비밀번호 확인'/>
          </div>

          {/* 이름 */}
          <div>
            <input type='text' maxLength='10' name='signup_name' placeholder='이름'/>
          </div>

          {/* 휴대폰 번호 */}
          <div class = "signup_phone">
            <input type='tel' maxLength='11' name='signup_phone_first' placeholder='01012345678'/>
          </div>
          {/* <div> */}
          <Link to='../'>
          <input type='submit' value='가입하기' name='sigunup_submit'/>

          </Link>
          {/* </div> */}
        </div>


      </div>
    </div>
  );
}

export default SignUp;
