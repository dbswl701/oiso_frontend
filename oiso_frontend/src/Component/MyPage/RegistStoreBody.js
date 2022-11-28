import './Item.css';
import { Link } from 'react-router-dom';

function RegistStoreBody({item, whichList}) {
  return (
    <>
        <div>
          <h3 id='store_title'>가게 정보를 입력해주세요.</h3>
        </div>
        <div className='Signup'>
          {/* 아이디 */}
          <div>
            <input type='text' maxLength='20' name='signup_id' placeholder='가게명'/>
          </div>
          <div>
            <input type='text' maxLength='20' name='signup_id' placeholder='가게 주소'/>
          </div>
          <div>
            <input type='text' maxLength='20' name='signup_id' placeholder='가게 상세 주소'/>
          </div>
          <div>
            <input type='text' maxLength='20' name='signup_id' placeholder='업종 선택'/>
          </div>

          {/* 휴대폰 번호 */}
          <div class = "signup_phone">
            <input type='tel' maxLength='11' name='signup_phone_first' placeholder='01012345678'/>
          </div>
          <Link to='../'>
            <input type='submit' value='작성완료' name='sigunup_submit'/>
          </Link>
          {/* </div> */}
        </div>
    </>
  );
}

export default RegistStoreBody;
